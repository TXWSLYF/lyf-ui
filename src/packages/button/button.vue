<template>
  <button
    class="lyf-button"
    :class="[
      `lyf-button--${type}`,
      plain ? 'is-plain' : '',
      disabled ? 'is-disabled' : ''
    ]"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from "../../utils/assist.js";

export default {
  name: "LyfButton",
  componentName: "LyfButton",
  props: {
    type: {
      validator(value) {
        return oneOf(value, [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info"
        ]);
      },
      type: String,
      default: "default"
    },

    plain: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
