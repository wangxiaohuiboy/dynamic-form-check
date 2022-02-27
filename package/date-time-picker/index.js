/**
* date-time-picker日期时间选择器
* @param {createElement} h
* @param {Object} item
**/
export const renderDateTimePicker = (h, item, { formProps, parent }) => {
    return h('el-date-picker', {
        attrs: {
            placeholder: item.placeholder || `请输入${item.label || ''}`,
        },
        props: {
            value: formProps.ruleForm[item.prop],
            valueFormat: 'yyyy-MM-dd',
            clearable: true,
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