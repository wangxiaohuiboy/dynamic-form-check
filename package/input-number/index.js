/**
* input-number计数器
* @param {createElement} h
* @param {Object} item
**/
export const renderInputNumber = (h, item, { formProps, parent }) => {
    return h('el-input-number', {
        attrs: {
            placeholder: item.placeholder || `请输入${item.label || ''}`,
        },
        props: {
            value: formProps.ruleForm[item.prop] || 0,
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