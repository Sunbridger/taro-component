# 贡献指南

## 初始化项目

确认处于搜车内网:

```
git clone https://git.souche-inc.com/souhce-Taro/pika-ui.git
```

然后初始化项目: 

```
cd pika-ui

lerna bootstrap
```

## 开发组件

创建一个新组件:

```
lerna run new --scope=@souche/pika-vue
```

运行命令:

```
lerna run dev --scope=@souche/pika-vue
```

并且`link`到本地库中:

```
cd ./packages/pika-vue && yarn link
```

打开一个`taro`项目链接组件库进行调试和开发

```sh
# 示意代码 
code /project/taro-demo && yarn link "@souche/pika-vue"
```

## 发布组件

执行lerna的一般发布流程即可


