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
    <code>{{codeBasic}}</code>
  </demo-block>
</template>

**朴素按钮**

<template>
  <demo-block>
    <div slot="instance">
        <lyf-button plain>默认</lyf-button>
        <lyf-button type="primary" plain>主色</lyf-button>
        <lyf-button type="success" plain>成功</lyf-button>
        <lyf-button type="info" plain>提示</lyf-button>
        <lyf-button type="warning" plain>警告</lyf-button>
        <lyf-button type="danger" plain>危险</lyf-button>
    </div>
    <code>{{codePlain}}</code>
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
    <code>{{codeDisabled}}</code>
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      codeBasic:
`<lyf-button>默认</lyf-button>
<lyf-button type="primary">主色</lyf-button>
<lyf-button type="success">成功</lyf-button>
<lyf-button type="info">提示</lyf-button>
<lyf-button type="warning">警告</lyf-button>
<lyf-button type="danger">危险</lyf-button>
`,
codePlain: `
<lyf-button plain>默认</lyf-button>
<lyf-button type="primary" plain>主色</lyf-button>
<lyf-button type="success" plain>成功</lyf-button>
<lyf-button type="info" plain>提示</lyf-button>
<lyf-button type="warning" plain>警告</lyf-button>
<lyf-button type="danger" plain>危险</lyf-button>`,
codeDisabled:
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
