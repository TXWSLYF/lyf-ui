<template>
  <button
    class="lyf-button"
    :class="[`lyf-button--${type}`, disabled ? 'is-disabled' : '']"
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
          "info",
        ]);
      },
      type: String,
      default: "default"
    },

    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
