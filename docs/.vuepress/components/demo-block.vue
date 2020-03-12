<template>
  <div
    :class="['demo-block', { 'demo-block--hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <!-- 效果展示 -->
    <div class="demo-block__instance">
      <slot name="instance"></slot>
    </div>

    <!-- 源代码展示 -->
    <div class="demo-block__code" ref="code">
      <div class="demo-block__code-area" ref="codeArea">
        <pre v-highlight>
          <slot></slot>
        </pre>
      </div>
    </div>

    <!-- 操作栏 -->
    <div class="demo-block__control" @click="isExpanded = !isExpanded">
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      hovering: false
    };
  },
  computed: {
    iconName() {
      return this.isExpanded ? "arrowUp" : "arrowDown";
    },
    controlText() {
      return this.isExpanded ? "隐藏代码" : "显示代码";
    },
    codeAreaHeight() {
      return this.$refs.codeArea.offsetHeight;
    }
  },
  watch: {
    isExpanded(val) {
      this.$refs.code.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-block {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ebebeb;

  &__instance {
    overflow: hidden;
    padding: 16px;
    background-color: #fff;
    position: relative;
    .demo-code {
      margin: 0;
      padding: 0;
    }
  }

  &__code {
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
    border-top: 1px solid #ebebeb;
    pre {
      margin: 0;
      border-radius: 0;
      display: flex;
    }
    pre[class*="language-"] {
      margin: 0;
    }
  }

  &__control {
    position: relative;
    border-top: 1px solid #ebebeb;
    text-align: center;
    font-size: 12px;
    background-color: #fff;
    height: 44px;
    line-height: 44px;
    margin-top: -1px;
    cursor: pointer;
    color: #b9babd;
    user-select: none;

    span {
      transition: 0.3s;
      position: absolute;
      transform: translateX(-30px);
    }

    // 动画
    .text-slide-enter,
    .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    &:hover {
      color: #45b7ff;
    }
  }

  &--hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
}
</style>
