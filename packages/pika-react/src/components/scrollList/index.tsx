import React from 'react';
import { ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import { getPrefixedClassName } from '../button';
import { IscrollListProps } from './interface';

export default function PkScrollList(props: IscrollListProps): JSX.Element {
    const {
        children,
        className,
        style,
        scrollX,
        scrollY,
        upperThreshold,
        lowerThreshold,
        scrollTop,
        scrollLeft,
        scrollIntoView,
        scrollWithAnimation,
        enableBackToTop,
        enableFlex,
        scrollAnchoring,
        refresherEnabled,
        refresherThreshold,
        refresherDefaultStyle,
        refresherBackground,
        onScrollToUpper,
        onScrollToLower,
        onScroll,
        onRefresherPulling,
        onRefresherRefresh,
        onRefresherRestore,
        onRefresherAbort,
    } = props;
    const prefixedClassName = getPrefixedClassName('list');
    const mergedClassName = classnames(prefixedClassName, className);
    const [freshing, setFreshing] = React.useState(false);
    const [refresherTriggered, setRefresherTriggered] = React.useState(false);

    function handleScrollToUpper(e) {
        if (typeof onScrollToUpper === 'function') {
            onScrollToUpper(e);
        }
    }
    function handleScrollToLower(e) {
        if (typeof onScrollToLower === 'function') {
            onScrollToLower(e);
        }
    }
    function handleScroll(e) {
        if (typeof onScroll === 'function') {
            onScroll(e);
        }
    }
    function handleRefresherPulling(e) {
        if (!freshing) {
            setRefresherTriggered(true);
            setFreshing(true);
        }
        if (typeof onRefresherPulling === 'function') {
            onRefresherPulling(e);
        }
    }
    async function handleRefresherRefresh(e) {
        if (typeof onRefresherRefresh === 'function') {
            const callback = onRefresherRefresh(e);

            if (typeof callback.then === 'function') {
                try {
                    await callback;
                } finally {
                    setFreshing(false);
                    setRefresherTriggered(false);
                }
            }
        }
    }
    function handleRefresherRestore(e) {
        if (typeof onRefresherRestore === 'function') {
            onRefresherRestore(e);
        }
    }
    function handleRefresherAbort(e) {
        if (typeof onRefresherAbort === 'function') {
            onRefresherAbort(e);
        }
    }

    return (
        <ScrollView
            className={mergedClassName}
            style={style}
            scrollX={scrollX}
            scrollY={scrollY}
            upperThreshold={upperThreshold}
            lowerThreshold={lowerThreshold}
            scrollTop={scrollTop}
            scrollLeft={scrollLeft}
            scrollIntoView={scrollIntoView}
            scrollWithAnimation={scrollWithAnimation}
            enableBackToTop={enableBackToTop}
            enableFlex={enableFlex}
            scrollAnchoring={scrollAnchoring}
            refresherEnabled={refresherEnabled}
            refresherThreshold={refresherThreshold}
            refresherDefaultStyle={refresherDefaultStyle}
            refresherBackground={refresherBackground}
            refresherTriggered={refresherTriggered}
            onScrollToUpper={handleScrollToUpper}
            onScrollToLower={handleScrollToLower}
            onScroll={handleScroll}
            onRefresherPulling={handleRefresherPulling}
            onRefresherRefresh={handleRefresherRefresh}
            onRefresherRestore={handleRefresherRestore}
            onRefresherAbort={handleRefresherAbort}
        >
            {children}
        </ScrollView>
    );
}

PkScrollList.defaultProps = {
    refresherDefaultStyle: 'black',
    refresherBackground: '#f7f8fa',
};
