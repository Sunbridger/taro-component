import Taro from '@tarojs/taro';
import Base64 from './base64';
import Crypto from './crypto';
import GUID from './guid';

// host
// const dev_himekaidouUrl = 'http://himekaidou-lite.dasouche.net';
// eslint-disable-next-line camelcase
const release_himekaidouUrl = 'https://himekaidou-lite.souche.com';
// eslint-disable-next-line
const himekaidouBaseUrl = (release_himekaidouUrl + '/aliyun_oss/:bucket/web_sts_token').replace(':bucket', 'souche-res');
const getFileKey = filePath => {
    let suffix = filePath.substr(-3); //忽略可能的存在后缀为 4 位的文件 rmvb
    //let suffix = filePath.substr(filePath.match('^.*\\.')[0].length);
    return new Date().getTime() + '_wxupload_' + GUID.guid() + '.' + suffix;
};
// task
const uploadTask = (
    filePath,
    successCallback,
    failCallback,
    progressCallback
) => {
    // himekaidouBaseUrl 的接口数据返回不同于封装的 request 标准请求数据, 隔离单独使用wx.request
    return new Promise(resolve => {
        Taro.request({
            url: himekaidouBaseUrl,
            method: 'GET',
            data: {
                isHttps: true,
            },
            success: res => {
                const aliyunFileKey = getFileKey(filePath); //上传文件 Key
                const aliyunServerURL = res.data.uploadHost; //OSS地址, https
                const accessid = res.data.AccessKeyId;
                const policy = getPolicy(res.data.Expiration); //签名策略
                const signature = getSignature(
                    policy,
                    res.data.AccessKeySecret
                ); //获取签名
                const stsToken = res.data.SecurityToken;
                const statusCode = res.data.StatusCode;
                //文件上传
                const task = uploadWxFile(
                    filePath,
                    aliyunFileKey,
                    aliyunServerURL,
                    accessid,
                    policy,
                    signature,
                    stsToken,
                    statusCode,
                    successCallback, failCallback, progressCallback);
                resolve(task);
            },
            fail: err => {
                failCallback(err);
            },
        });
    });
};

/**
 * 小程序文件oss 直传 wx
 */
const uploadWxFile = (
    filePath,
    aliyunFileKey,
    aliyunServerURL,
    accessid,
    policy,
    signature,
    stsToken,
    statusCode,
    successCallback,
    failCallback,
    progressCallback
) => {
    const uploadWxTask = Taro.uploadFile({
        url: aliyunServerURL, //开发者服务器 url
        filePath: filePath, //要上传文件资源的路径
        name: 'file', //必须填file
        formData: {
            OSSAccessKeyId: accessid,
            key: aliyunFileKey, //文件名
            policy: policy,
            signature: signature,
            'x-oss-security-token': stsToken,
            // eslint-disable-next-line camelcase
            success_action_status: statusCode,
        },
        success: function (res) {
            if (res.statusCode != 200) {
                failCallback(new Error('上传错误:' + JSON.stringify(res)));
                return;
            }

            successCallback(aliyunServerURL + '/' + aliyunFileKey);
        },
        fail: function (err) {
            err.wxaddinfo = aliyunServerURL;
            failCallback(err);
        },
    });
    if (progressCallback) {
        uploadWxTask.onProgressUpdate(res => {
            progressCallback(res);
        });
    }
    return uploadWxTask;
};

/**
 * 获取签名策略
 */
const getPolicy = expiration => {
    const policyText = {
        expiration, // 设置Policy的失效时间。如果超过失效时间，就无法通过此Policy上传文件
        conditions: [['content-length-range', 0, 1048576000]], // 设置上传文件的大小限制。如果超过限制，文件上传到OSS会报错
    };

    return Base64.encode(JSON.stringify(policyText));
};

/**
 * 生成前端签名信息
 */
const getSignature = (policy, accessKey) => {
    const bytes = Crypto.HMAC(Crypto.SHA1, policy, accessKey, {
        asBytes: true,
    });
    return Crypto.util.bytesToBase64(bytes);
};

module.exports = {
    uploadTask,
};
