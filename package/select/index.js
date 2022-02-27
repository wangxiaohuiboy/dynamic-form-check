/**
* select选择器
* @param {createElement} h
* @param {Object} item
**/
export const renderSelect = (h, item, { formProps, parent }) => {
    return h('el-select', {
        attrs: {
            placeholder: item.placeholder || `请选择${item.label || ''}`,
        },
        props: {
            value: formProps.ruleForm[item.prop],
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
                parent.$set(formProps.ruleForm, item.prop, event);
            },
        }
    }, [
        (item.selectOption || []).map((box, index) => {
            return h("el-option", {
                props: {
                    key: index,
                    label: box[item.defaultProps ? item.defaultProps.label : 'label'],
                    value: box[item.defaultProps ? item.defaultProps.value : 'value'],
                }
            })
        })
    ])
}