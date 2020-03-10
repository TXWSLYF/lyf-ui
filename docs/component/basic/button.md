---
title: Button
---

# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <lyf-button>{{button}}</lyf-button>
  <lyf-button type="primary">主色</lyf-button>
  <lyf-button type="success">成功</lyf-button>
  <lyf-button type="info">提示</lyf-button>
</template>

### 使用
```html
<lyf-button>默认</lyf-button>
<lyf-button type="primary">主色</lyf-button>
<lyf-button type="success">成功</lyf-button>
<lyf-button type="info">提示</lyf-button>
```