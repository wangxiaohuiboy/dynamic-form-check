/**
* cascader级联选择器
* @param {createElement} h
* @param {Object} item
**/
export const renderCascader = (h, item, { formProps, parent }) => {
    return h('el-cascader', {
        attrs: {
            placeholder: item.placeholder || `请选择${item.label}`,

        },
        props: {
            value: formProps.ruleForm[item.prop],
            options: item.selectOption,
            size: 'small',
            clearable: true,
            ...item.setProp,
        },
        style: {
            display: 'block',
        },
        on: {
            change: (event) => {
                parent.formEvent({ formItem: item, value: event });
            },
            input: (event) => {
                parent.$set(formProps.ruleForm, item.prop, event)
            },
        }
    })
}