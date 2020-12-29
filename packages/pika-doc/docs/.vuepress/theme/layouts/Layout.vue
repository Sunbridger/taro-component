<template>
    <div
        :class="{
            'my-layout': true,
            'my-layout--component': hasFrame,
        }"
    >
        <parent-layout></parent-layout>
        <div class="my-layout-mobile" v-if="hasFrame">
            <iframe
                class="my-layout-mobile__frame"
                :src="frameAdr"
                frameborder="0"
            ></iframe>
        </div>
    </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';
import ParentLayout from '@parent-theme/layouts/Layout.vue';

export default {
    components: {
        Navbar,
        ParentLayout,
    },
    mounted() {},
    computed: {
        hasFrame() {
            return !!this.$page.frontmatter.demoPath;
        },
        frameAdr() {
            let iframeAddr;
            if (process.env.NODE_ENV === 'development') {
                iframeAddr = this.$site.themeConfig.iframeLocal;
            } else {
                iframeAddr = `/demo-${this.$page.frontmatter.componentType.toLowerCase()}/#`;
            }

            return iframeAddr + this.$page.frontmatter.demoPath;
        },
    },
};
</script>

<style lang="scss" scoped>
.my-layout {
    &--component {
        /deep/ .page {
            padding-right: 400px;
        }

        .my-layout-mobile {
            position: fixed;
            top: 80px;
            right: 15px;
            width: 375px;
            height: 567px;
            border-radius: 8px;
            overflow: hidden;
            z-index: 9999;
            background-color: #fff;

            box-shadow: 0 0 20px 10px rgba(#000, 0.1);

            &__frame {
                width: 100%;
                height: 100%;
            }
        }

        @media screen and (max-width: 959px) {
            .my-layout-mobile {
                display: none;
            }

            /deep/ .page {
                padding-right: 0;
            }
        }
    }
}
</style>