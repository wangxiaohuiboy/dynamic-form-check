## 介绍

`dynamic-form-check` 是基于`vue.js` ,`element-ui` 的前端动态表单渲染器，可通过配置文件快速的生成 form 表单。

## 安装

```
npm i dynamic-form-check
# or
yarn add dynamic-form-check
```

## 快速使用

# 动态生成表单
## 介绍

`dynamic-form-check` 是基于`vue.js` ,`element-ui` 的前端动态表单渲染器，可通过配置文件快速的生成 form 表单,表单组件是无状态的。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fc09def3a774f8490a533abaefea64c~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e38c091b9ae34854a9967e4b541456d1~tplv-k3u1fbpfcp-watermark.image?)

## 安装
[npm包](https://www.npmjs.com/package/dynamic-form-check)
```
npm i dynamic-form-check
# or
yarn add dynamic-form-check
```
### form表单参数配置
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| dynamicFormProps | 整个表单的配置数据 |object| {formProps:{},itemProps:{},} |--- |
| formProps | form表单的配置 |object|{size: "small",labelWidth: "140px",}|--- |
| ruleForm | form表单数据对象 |object|--- |--- |
| size | 用于控制该表单内组件的尺寸 |string|medium / small / mini|--- |
| inline | 行内表单模式 |boolean|---|false |
| labelPosition | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `labelWidth` |string|right/left/top|right |
| labelWidth | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。|string|---|---|
| labelSuffix | 表单域标签的后缀|string|---|---|
| hideRequiredAsterisk | 是否隐藏必填字段的标签旁边的红色星号|boolean|---|false|
| showMessage | 是否显示校验错误信息|boolean|---|true|
| inlineMessage | 是否以行内形式展示校验信息|boolean|---|false|
| statusIcon | 是否在输入框中显示校验结果反馈图标|boolean|---|false|
| validateOnRuleChange | 是否在 `rules` 属性改变后立即触发一次验证|boolean|---|true|
| disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效|boolean|---|false|
| itemProps |动态生成form表单的数据对象|object|{type: "input",label: "输入框",prop: "input",maxlength: 50,col: 24,setProp: {minlength: 10,},rule: {required: true,message: "请输入名称",trigger: "blur",},}|false|

### input输入框
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |string|input|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| placeholder | 占位符 |string|---|请输入`label`|
| maxlength | 原生属性，最大输入长度 |number|---|--- |
| col | row-col布局 |number|---|24|
| rows | 输入框行数，只对 `type="textarea"` 有效 | number | — | 2  |
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
| autofocus  | 原生属性，自动获取焦点 | boolean | true, false  | false |
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
| type | 类型 |string|numbder/text/textarea|text|
| clearable| 是否可清空 | boolean | — | true |
| showassword | 是否显示切换密码图标 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| size | 输入框尺寸  | string | medium / small / mini | —  |
| prefix-icon  | 输入框头部图标 | string | — | —  |
| suffix-icon  | 输入框尾部图标 | string | — | —  |
| autosize | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean / object | — | false |
| autocomplete | 原生属性，自动补全 | string | on, off | off |
| readonly | 原生属性，是否只读 | boolean | — | false |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true|

### select选择器
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |select|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| placeholder | 占位符 |string|---|请选择`label`|
| col | row-col布局 |number|---|24|
| autofocus  | 原生属性，自动获取焦点 | boolean | true, false  | false |
| selectOption  | options的值 | Array | [{ value: '选项1', label: '黄金糕' }] | [] |
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|multiple|是否多选|boolean|—|false|
|size|输入框尺寸|string|medium/small/mini|—|
|clearable|是否可以清空选项|boolean|—|false|
|collapseTags|多选时是否将选中值按文字的形式展示|boolean|—|false|
|multipleLimit|多选时用户最多可以选择的项目数，为0则不限制|number|—|0|
|name|selectinput的name属性|string|—|—|
|placeholder|占位符|string|—|请选择|
|filterable|是否可搜索|boolean|—|false|
|allowCreate|是否允许用户创建新条目，需配合 `filterable` 使用|boolean|—|false|
|filterMethod|自定义搜索方法|function|—|—|
|remote|是否为远程搜索|boolean|—|false|
|remoteMethod|远程搜索方法|function|—|—|
|loading|是否正在从远程获取数据|boolean|—|false|
|loadingText|远程加载时显示的文字|string|—|加载中|
|noMatchText|搜索条件无匹配时显示的文字|string|—|无匹配数据|
|noDataText|选项为空时显示的文字|string|—|无数据|
|popperClass|Select下拉框的类名|string|—|—|
|reserveKeyword|多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词|boolean|—|false|
|defaultFirstOption|在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用|boolean|-|false|
|popperAppendToBody|是否将弹出框插入至body元素。在弹出框的定位出现问题时，可将该属性设置为false|boolean|-|true|
|automaticDropdown|对于不可搜索的Select，是否在输入框获得焦点后自动弹出选项菜单|boolean|-|false|

### cascader级联选择器
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |cascader|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| placeholder | 占位符 |string|---|请选择`label`|
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
|selectOption|可选项数据源，键名可通过 `Props` 属性配置|array|—|—|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|size|尺寸|string|medium/small/mini|—|
|disabled|是否禁用|boolean|—|false|
|clearable|是否支持清空选项|boolean|—|false|
|showAllLevels|输入框中是否显示选中值的完整路径|boolean|—|true|
|collapseTags|多选模式下是否折叠Tag|boolean|-|false|
|separator|选项分隔符|string|—|斜杠'/'|
|filterable|是否可搜索选项|boolean|—|—|
|filterMethod|自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中|function(node,keyword)|-|-|
|debounce|搜索关键词输入的去抖延迟，毫秒|number|—|300|
|beforeFilter|筛选之前的钩子，参数为输入的值，若返回false或者返回Promise且被reject，则停止筛选|function(value)|—|—|
|popperClass|自定义浮层类名|string|—|—|
|props|配置选项，具体见下表|object|—|—|
| props | --- |--- | --- |--- |
|expandTrigger|次级菜单的展开方式|string|click/hover|'click'|
|multiple|是否多选|boolean|-|false|
|checkStrictly|是否严格的遵守父子节点不互相关联|boolean|-|false|
|emitPath|在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置false，则只返回该节点的值|boolean|-|true|
|lazy|是否动态加载子节点，需与lazyLoad方法结合使用|boolean|-|false|
|lazyLoad|加载动态数据的方法，仅在lazy为true时有效|function(node,resolve)，`node`为当前点击的节点，`resolve`为数据加载完成的回调(必须调用)|-|-|
|value|指定选项的值为选项对象的某个属性值|string|—|'value'|
|label|指定选项标签为选项对象的某个属性值|string|—|'label'|
|children|指定选项的子选项为选项对象的某个属性值|string|—|'children'|
|disabled|指定选项的禁用为选项对象的某个属性值|string|—|'disabled'|
|leaf|指定选项的叶子节点的标志位为选项对象的某个属性值|string|—|'leaf'|

### radio单选框
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |radio|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
|selectOption|可选项数据源|array|[{value:'备注项3',label:'1111',border:true,type:'button',disabled:true}]|—|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|size|尺寸|string|medium/small/mini|—|
|disabled|是否禁用|boolean|—|false|

### checkbox多选框
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |checkbox|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
|selectOption|可选项数据源|array|[{label: "备注项3",border: true,type: "button",disabled: true,}]|—|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|label|选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）|string/number/boolean|—|—|
|trueLabel|选中时的值|string/number|—|—|
|falseLabel|没有选中时的值|string/number|—|—|
|disabled|是否禁用|boolean|—|false|
|border|是否显示边框|boolean|—|false|
|size|Checkbox的尺寸，仅在border为真时有效|string|medium/small/mini|—|
|checked|当前是否勾选|boolean|—|false|
|indeterminate|设置indeterminate状态，只负责样式控制|boolean|—|false|


### switch开关
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |switch|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|disabled|是否禁用|boolean|—|false|
|width|switch的宽度（像素）|number|—|40|
|activeIconClass|switch打开时所显示图标的类名，设置此项会忽略 `active-text`|string|—|—|
|inactiveIconClass|switch关闭时所显示图标的类名，设置此项会忽略 `inactive-text`|string|—|—|
|activeText|switch打开时的文字描述|string|—|—|
|inactiveText|switch关闭时的文字描述|string|—|—|
|activeValue|switch打开时的值|boolean/string/number|—|true|
|inactiveValue|switch关闭时的值|boolean/string/number|—|false|
|activeColor|switch打开时的背景色|string|—|#409EFF|
|inactiveColor|switch关闭时的背景色|string|—|#C0CCDA|
|validateEvent|改变switch状态时是否触发表单的校验|boolean|-|true|


### slider滑块
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |slider|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|min|最小值|number|—|0|
|max|最大值|number|—|100|
|disabled|是否禁用|boolean|—|false|
|step|步长|number|—|1|
|showInput|是否显示输入框，仅在非范围选择时有效|boolean|—|false|
|showInputControls|在显示输入框的情况下，是否显示输入框的控制按钮|boolean|—|true|
|inputSize|输入框的尺寸|string|large/medium/small/mini|small|
|showStops|是否显示间断点|boolean|—|false|
|showTooltip|是否显示tooltip|boolean|—|true|
|formatTooltip|格式化tooltipmessage|function(value)|—|—|
|range|是否为范围选择|boolean|—|false|
|vertical|是否竖向模式|boolean|—|false|
|height|Slider高度，竖向模式时必填|string|—|—|
|label|屏幕阅读器标签|string|—|—|
|debounce|输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效|number|—|300|
|tooltipClass|tooltip的自定义类名|string|—|—|
|marks|标记，key的类型必须为number且取值在闭区间 `[min,max]` 内，每个标记可以单独设置样式|object|—|—|


### date-time-picker日期时间选择器
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |date-time-picker|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|readonly|完全只读|boolean|—|false|
|disabled|禁用|boolean|—|false|
|editable|文本框可输入|boolean|—|true|
|clearable|是否显示清除按钮|boolean|—|true|
|size|输入框尺寸|string|large,small,mini|—|
|startPlaceholder|范围选择时开始日期的占位内容|string|—|—|
|endPlaceholder|范围选择时结束日期的占位内容|string|—|—|
|timeArrowControl|是否使用箭头进行时间选择|boolean|—|false|
|type|显示类型|string|year/month/date/week/datetime/datetimerange/daterange|date|
|format|显示在输入框中的格式|string|见[日期格式](https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi)|yyyy-MM-ddHH:mm:ss|
|align|对齐方式|string|left,center,right|left|
|popperClass|DateTimePicker下拉框的类名|string|—|—|
|pickerOptions|当前时间日期选择器特有的选项参考下表|object|—|{}|
|rangeSeparator|选择范围时的分隔符|string|-|'-'|
|defaultValue|可选，选择器打开时默认显示的时间|Date|可被`newDate()`解析|—|
|defaultTime|选中日期后的默认具体时刻|非范围选择时：string/范围选择时：string[]|非范围选择时：形如`12:00:00`的字符串；范围选择时：数组，长度为2，每项值为字符串，形如`12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 `00:00:00`|—|
|valueFormat|可选，绑定值的格式。不指定则绑定值为Date对象|string|见[日期格式](https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi)|—|
|unlinkPanels|在范围选择器里取消两个日期面板之间的联动|boolean|—|false|
|prefixIcon|自定义头部图标的类名|string|—|el-icon-date|
|clearIcon|自定义清空图标的类名|string|—|el-icon-circle-close|
|pickerOptions|---|----|—---|---|
|disabledDate|设置禁用状态，参数为当前日期，要求返回 Boolean|Function|设置开始时间：pickerOptions: {disabledDate: (time) => {return (time.getTime() >new Date(this.dynamicFormProps.formProps.ruleForm.endDate).getTime());},},设置结束时间：pickerOptions: {disabledDate: (time) => {return (time.getTime() <new Date(this.dynamicFormProps.formProps.ruleForm.startDate).getTime() -1 * 24 * 60 * 60 * 1000);},},|---|


### input-number计数器
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |input-number|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
|placeholder|输入框默认placeholder|string|-|-|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|min|设置计数器允许的最小值|number|—|-Infinity|
|max|设置计数器允许的最大值|number|—|Infinity|
|step|计数器步长|number|—|1|
|stepStrictly|是否只能输入step的倍数|boolean|—|false|
|precision|数值精度|number|—|—|
|size|计数器尺寸|string|large,small|—|
|disabled|是否禁用计数器|boolean|—|false|
|controls|是否使用控制按钮|boolean|—|true|
|controlsPosition|控制按钮位置|string|right|-|
|label|输入框关联的label文字|string|—|—|

### rate评分
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 |rate|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|max|最大分值|number|—|5|
|disabled|是否为只读|boolean|—|false|
|allowHalf|是否允许半选|boolean|—|false|
|lowThreshold|低分和中等分数的界限值，值本身被划分在低分中|number|—|2|
|highThreshold|高分和中等分数的界限值，值本身被划分在高分中|number|—|4|
|colors|icon的颜色。若传入数组，共有3个元素，为3个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色|array/object|—|['#F7BA2A','#F7BA2A','#F7BA2A']|
|voidColor|未选中icon的颜色|string|—|#C6D1DE|
|disabledVoidColor|只读时未选中icon的颜色|string|—|#EFF2F7|
|iconClasses|icon的类名。若传入数组，共有3个元素，为3个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名|array/object|—|['el-icon-star-on','el-icon-star-on','el-icon-star-on']|
|voidIconClass|未选中icon的类名|string|—|el-icon-star-off|
|disabledVoidIconClass|只读时未选中icon的类名|string|—|el-icon-star-on|
|showText|是否显示辅助文字，若为真，则会从texts数组中选取当前分数对应的文字内容|boolean|—|false|
|showScore|是否显示当前分数，show-score和show-text不能同时为真|boolean|—|false|
|textColor|辅助文字的颜色|string|—|#1F2D3D|
|texts|辅助文字数组|array|—|['极差','失望','一般','满意','惊喜']|
|scoreTemplate|分数显示模板|string|—|{value}|


### color-picker颜色选择器
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| type | 类型 color-picker|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
| setProp | 拓展可传参数 |object|---|---|
| setProp | --- |--- | --- |--- |
|disabled|是否禁用|boolean|—|false|
|size|尺寸|string|medium/small/mini|—|
|showAlpha|是否支持透明度选择|boolean|—|false|
|colorFormat|写入v-model的颜色的格式|string|hsl/hsv/hex/rgb|hex（showAlpha为false）/rgb（showAlpha为true）|
|popperClass|ColorPicker下拉框的类名|string|—|—|
|predefine|预定义颜色|array|—|—|


### 自定义插槽
| 参数 | 说明 |类型 | 可选值 |默认值|
| --- | --- |--- | --- |--- |
| 带标签的slot | --- |--- | --- |--- |
| type | 类型 |itemSlot|---|
| label | 标签的label名 |string|---|--- |
| prop | 当前表单绑定的校验名 |string|---|--- |
| col | row-col布局 |number|---|24|
| rule | 表单验证规则 |object|{required: true,message: "请输入名称",trigger: "blur",}|---|
| slotName | 插槽名称 |string|---|---|
| 不带标签的slot | --- |--- | --- |--- |
| type | 类型 |slot|---|
| slotName | 插槽名称 |string|---|---|

### 表单方法
```js
//校验表单的触发

submit() { 
    this.$refs.ruleForm.validate((valid) => {
        console.log(this.dynamicFormProps.formProps.ruleForm, "valid"); 
    }); 
 }

//表单发生改变处罚的钩子
formEvent(e) { console.log(e, "e"); },
```

```vue
<template>
  <div>
    <h1>动态生成表单</h1>
    <dynamic-form :dynamicFormProps="dynamicFormProps" @formEvent="formEvent">
      <el-upload
        slot="uploadSlot"
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :limit="3"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <el-button slot="buttonSlot">不带标签的slot</el-button>
    </dynamic-form>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import DynamicForm from "@/components/DynamicForm/index.js";
import AreaJson from "@/pubilc/area.json";
export default {
  components: { DynamicForm },
  data() {
    return {
      dynamicFormProps: {
        formProps: {
          size: "small",
          labelWidth: "140px",
          ruleForm: {},
        },
        itemProps: [
          {
            type: "input",
            label: "输入框",
            prop: "input",
            maxlength: 50,
            autofocus: true,
            col: 24,
            setProp: {
              clearable: true,
              type: "number",
            },
            rule: {
              required: true,
              message: "请输入活动名称",
              trigger: "blur",
            },
          }, // 输入框
          {
            type: "select",
            label: "下拉框",
            prop: "select",
            col: 24,
            setProp: {
              clearable: true,
              multiple: true,

              // collapseTags: false,
              // multipleLimit: 2,
              filterable: true,
              // allowCreate: true,
              // filterMethod: this.query,
              remote: true,
              // remoteMethod:this.remoteMethod,
              // loading:true,
              // loadingText:'1111'
              // noMatchText: "你好",
              // popperClass:'你好',
              reserveKeyword: true,
              // defaultFirstOption:true,
              // popperAppendToBody:true,
              automaticDropdown: true,
            },
            selectOption: [
              {
                id: 0,
                name: "黄金糕",
              },
              {
                id: 1,
                name: "黄金糕1111",
              },
              {
                id: 2,
                name: "黄金糕222",
              },
            ],
            defaultProps: { label: "name", value: "id" },
          }, // 下拉框
          {
            type: "cascader",
            label: "省市区",
            prop: "cascader",
            col: 24,
            selectOption: AreaJson,
            setProp: {
              props: {
                expandTrigger: "hover",
                value: "name",
                label: "name",
              },
            },
          }, // 级联选择器
          {
            type: "input",
            label: "文本域",
            prop: "textarea",
            maxlength: 500,
            setProp: {
              type: "textarea",
              clearable: true,
              autosize: { minRows: 2, maxRows: 4 },
            },
            col: 24,
          }, // 文本域
          {
            type: "radio",
            label: "单选框",
            prop: "radio",
            col: 24,
            setProp: {
              disabled: false,
              size: "medium",
            },
            selectOption: [
              { value: "备注项1", label: "1111", border: true, type: "button" },
              { value: "备注项2", label: "1111", border: true, type: "button" },
              {
                value: "备注项3",
                label: "1111",
                border: true,
                type: "button",
                disabled: true,
              },
            ],
          }, // Radio 单选框
          {
            type: "checkbox",
            label: "多选框",
            prop: "checkbox",
            col: 24,
            setProp: {
              disabled: false,
              // size: "medium",
            },
            selectOption: [
              { label: "备注项1", border: false, type: "button" },
              { label: "备注项2", border: true },
              {
                label: "备注项3",
                border: true,
                type: "button",
                disabled: true,
              },
            ],
          }, //多选框
          {
            type: "switch",
            label: "开关",
            prop: "switch",
            col: 24,
            setProp: {
              disabled: false,
              // width:200,
              // activeText:'what?',
              // inactiveText:'niiiiii',
              // activeValue:'llll',
              // activeColor:'#000'
            },
          }, //开关
          {
            type: "slider",
            label: "滑块",
            prop: "slider",
            col: 24,
            setProp: {
              disabled: false,
              min: 10,
              max: 1000,
              step: 10,
              showInput: true,
              // showInputControls:false,
              // inputSize:'large',
              // showStops:true,
              // showTooltip:false,
              // formatTooltip:this.formatTooltip,
              // range:true,
              // vertical:true,
              // height:'200px',
              // label:'9999',
              debounce: 5000,
            },
          }, //滑块
          {
            type: "date-time-picker",
            label: "开始日期",
            prop: "startDate",
            col: 24,
            setProp: {
              // readonly:true,
              clearable: true,
              // startPlaceholder:'ppp',
              // type: "datetime",
              // format: "yyyy-MM-ddHH:mm:ss",
              // timeArrowControl: true,
              pickerOptions: {
                disabledDate: (time) => {
                  return (
                    time.getTime() >
                    new Date(
                      this.dynamicFormProps.formProps.ruleForm.endDate
                    ).getTime()
                  );
                },
              },
            },
          }, //日期时间
          {
            type: "date-time-picker",
            label: "结束日期",
            prop: "endDate",
            col: 24,
            setProp: {
              // readonly:true,
              clearable: true,
              // startPlaceholder:'ppp',
              // type: "datetime",
              // format: "yyyy-MM-ddHH:mm:ss",
              // timeArrowControl: true,
              pickerOptions: {
                disabledDate: (time) => {
                  console.log(
                    this.dynamicFormProps.formProps.ruleForm,
                    "dynamicFormProps"
                  );
                  return (
                    time.getTime() <
                    new Date(
                      this.dynamicFormProps.formProps.ruleForm.startDate
                    ).getTime() -
                      1 * 24 * 60 * 60 * 1000
                  );
                },
              },
            },
          }, //日期时间
          {
            type: "input-number",
            label: "计数器",
            prop: "input-number",
            col: 24,
            setProp: {
              disabled: false,
              min: 10,
              max: 1000,
              size: "large",
              controlsPosition: "right",
            },
          }, //计数器
          {
            type: "rate",
            label: "评分",
            prop: "rate",
            col: 24,
            setProp: {
              lowThreshold: 3,
              allowHalf: true,
              colors: ["#000"],
              voidColor: "pink",
            },
          }, //评分
          {
            type: "color-picker",
            label: "颜色选择",
            prop: "color-picker",
            col: 24,
            setProp: {
              disabled: false,
              showAlpha: false,
              colorFormat: "hex",
            },
          }, //颜色
          {
            type: "slot",
            slotName: "buttonSlot",
          }, // 不带标签的自定义
          {
            type: "itemSlot",
            label: "带标签的自定义",
            prop: "itemSlot",
            col: 24,
            slotName: "uploadSlot",
          }, // 带标签的自定义
        ],
      },
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    formEvent(e) {
      console.log(e, "e");
    },
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        console.log(valid, "valid");
        console.log(this.dynamicFormProps.formProps.ruleForm, "valid");
      });
    },
    query(value) {
      console.log(value, "iiiii");
    },
    remoteMethod(va) {
      console.log(va, "222");
    },
    formatTooltip(value) {
      console.log(value, "llll");
    },
  },
};
</script>

<style lang="less" scoped></style>
```