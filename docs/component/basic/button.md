---
title: Button 按钮
---

# Button 按钮

## 使用指南

```js
import { Button } from "lyf-ui";
Vue.component(Button.name, Button);
```

## 代码演示

**基础用法**

<template>
  <demo-block>
    <div slot="instance">
        <lyf-button>默认</lyf-button>
        <lyf-button type="primary">主色</lyf-button>
        <lyf-button type="success">成功</lyf-button>
        <lyf-button type="info">提示</lyf-button>
        <lyf-button type="warning">警告</lyf-button>
        <lyf-button type="danger">危险</lyf-button>
    </div>
    <code>{{codeStr1}}</code>
  </demo-block>
</template>

**禁用状态**

<template>
  <demo-block>
    <div slot="instance">
        <lyf-button disabled>默认</lyf-button>
        <lyf-button type="primary" disabled>主色</lyf-button>
        <lyf-button type="success" disabled>成功</lyf-button>
        <lyf-button type="info" disabled>提示</lyf-button>
        <lyf-button type="warning" disabled>警告</lyf-button>
        <lyf-button type="danger" disabled>危险</lyf-button>
    </div>
    <code>{{codeStr2}}</code>
  </demo-block>
</template>











<script>
export default {
  data() {
    return {
      codeStr1:
`<lyf-button>默认</lyf-button>
<lyf-button type="primary">主色</lyf-button>
<lyf-button type="success">成功</lyf-button>
<lyf-button type="info">提示</lyf-button>
<lyf-button type="warning">警告</lyf-button>
<lyf-button type="danger">危险</lyf-button>
`,
codeStr2:
`<lyf-button disabled>默认</lyf-button>
<lyf-button type="primary" disabled>主色</lyf-button>
<lyf-button type="success" disabled>成功</lyf-button>
<lyf-button type="info" disabled>提示</lyf-button>
<lyf-button type="warning" disabled>警告</lyf-button>
<lyf-button type="danger" disabled>危险</lyf-button>
`
    }
  }
}
</script>
