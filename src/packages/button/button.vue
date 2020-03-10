<template>
  <button class="lyf-button" :class="{[`lyf-button-${type}`]: true}" type="button">
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from '../../utils/assist.js';

export default {

  name: 'LyfButton',

  componentName: 'LyfButton',

  props: {

    type: {
      validator (value) {
          return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
      },
      type: String,
      default: 'default'
    },
    
    size: {
      validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
      },
      default: 'default'
    }
  }
}
</script>
