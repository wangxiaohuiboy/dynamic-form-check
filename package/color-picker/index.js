/**
* color-picker颜色选择器
* @param {createElement} h
* @param {Object} item
**/
export const renderColorPicker = (h, item, { formProps, parent }) => {
    return h('el-color-picker', {
        attrs: {},
        props: {
            value: formProps.ruleForm[item.prop],
            ...item.setProp,
        },
        on: {
            change: (event) => {
                parent.formEvent({ formItem: item, value: event });
            },
            input: (event) => {
                parent.$set(formProps.ruleForm, item.prop, event);
            }
        }
    })
}