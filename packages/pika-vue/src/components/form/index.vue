<template>
    <form
        :class="`pk-form ${actualClassName}`"
        :reportSubmit="reportSubmit"
        :report-submit-timeout="reportSubmitTimeout"
        :style="customStyle"
        @submit="onSubmit"
        @reset="onReset"
    >
        <slot></slot>
    </form>
</template>

<script>
import '../../style/components/form.css';
import Common from '../../utils/commonMixin';
import Form from './main';

export default {
    name: 'PkForm',
    mixins: [Form, Common],
};
</script>
