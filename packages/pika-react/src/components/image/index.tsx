import React from 'react';
import { Image, CommonEvent } from '@tarojs/components';
import classnames from 'classnames';
import qs from 'qs';
import { getPrefixedClassName } from '../button';
import { Actions, Name, Params, PkImageProps } from './interface';

export function getQuery(search: string): object {
    return qs.parse(search);
}
export function getQueryString(query: object): string {
    return qs.stringify(query);
}
export function appendQuery(url: string, query: object): string {
    const [origin, search] = url.split('?');
    let appendedQuery = {};
    if (search) {
        appendedQuery = getQuery(search);
    }
    const queryString = getQueryString({
        ...appendedQuery,
        ...query,
    });
    return `${origin}?${queryString}`;
}
function getStringifiedParams(params?: Params): string {
    let stringifiedParams = '';
    if (!params) {
        return '';
    }
    if (typeof params === 'string') {
        stringifiedParams = `,${params}`;
    }
    if (Object.prototype.toString.call(params) === '[object Object]') {
        Object.keys(params).forEach(key => {
            const value = params[key];
            stringifiedParams += `,${key}`;
            stringifiedParams += `${key && '_'}${value}`;
        });
    }
    if (Array.isArray(params)) {
        params.forEach(param => {
            if (typeof param === 'string') {
                stringifiedParams += `,${param}`;
            }
            if (Object.prototype.toString.call(param) === '[object Object]') {
                const { key, value } = param as { key: string; value: string };
                stringifiedParams += `,${key}`;
                stringifiedParams += `${key && '_'}${value}`;
            }
        });
    }
    return stringifiedParams;
}
function getStringifiedActions(actions?: Actions): string {
    let stringifiedActions = '';
    if (!actions) {
        return '';
    }
    if (typeof actions === 'string') {
        stringifiedActions = `/${actions}`;
    }
    if (Object.prototype.toString.call(actions) === '[object Object]') {
        Object.keys(actions).forEach(name => {
            const params = actions[name];
            stringifiedActions += `/${name}`;
            stringifiedActions += getStringifiedParams(params);
        });
    }
    if (Array.isArray(actions)) {
        actions.forEach(action => {
            if (typeof action === 'string') {
                stringifiedActions += `/${action}`;
            }
            if (Object.prototype.toString.call(action) === '[object Object]') {
                const { name, params } = action as {
                    name: Name;
                    params: Params;
                };
                stringifiedActions += `/${name}`;
                stringifiedActions += getStringifiedParams(params);
            }
        });
    }
    return stringifiedActions;
}
function getOssSrc(src: string, stringifiedActions: string): string {
    if (!src || !stringifiedActions) {
        return src;
    }
    try {
        const ossSrc = appendQuery(src, {
            'x-oss-process': `image${stringifiedActions}`,
        });
        return ossSrc;
    } catch (error) {
        return src;
    }
}
export default function PkImage(props: PkImageProps): JSX.Element {
    const {
        actions,
        className,
        imgProps,
        lazyLoad,
        mode = 'aspectFit',
        showMenuByLongpress,
        src,
        style,
        webp,
        onClick,
        onError,
        onLoad,
    } = props;
    const stringifiedActions = getStringifiedActions(actions);
    const osssrc = getOssSrc(src, stringifiedActions);
    const prefixedClassName = getPrefixedClassName('image');
    const mergedClassName = classnames(prefixedClassName, className);
    function handleClick(e: CommonEvent): void {
        if (typeof onClick === 'function') {
            onClick(e);
        }
    }
    return (
        <Image
            className={mergedClassName}
            imgProps={imgProps}
            lazyLoad={lazyLoad}
            mode={mode}
            showMenuByLongpress={showMenuByLongpress}
            src={osssrc}
            style={style}
            webp={webp}
            onClick={handleClick}
            onError={onError}
            onLoad={onLoad}
        />
    );
}
