<template>
    <pk-popup
        :show="show"
        :overlay="overlay"
        :position="right ? 'right' : 'left'"
        :custom-style="cusStyle"
        :round="false"
        class="pk-side-bar"
        @close="closePopup"
    >
        <pk-list v-if="items.length">
            <pk-list-item
                v-for="(item, index) in items"
                :key="index"
                v-bind="item"
                @click="itemClick(item)"
            />
        </pk-list>
        <slot v-else></slot>
    </pk-popup>
</template>

<script>
import '../../style/components/side-bar.css';
import SideBar from './main';
import PkPopup from '../popup';
import PkList from '../list';
import PkListItem from '../list-item';

export default {
    name: 'PkSideBar',
    components: {
        PkPopup,
        PkList,
        PkListItem,
    },
    mixins: [SideBar],
};
</script>
