/**
* checkbox多选框
* @param {createElement} h
* @param {Object} item
**/
export const renderCheckbox = (h, item, { formProps, parent }) => {
    return h('el-checkbox-group', {
        attrs: {

        },
        props: {
            value: formProps.ruleForm[item.prop] || [],
            size: 'small',
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
    }, [
        (item.selectOption || []).map((item) => {
            return h(item.type === 'button' ? 'el-checkbox-button' : 'el-checkbox', {
                attrs: {
                    key: item.label,
                    label: item.label,
                    border:item.border,
                    disabled:item.disabled,
                },
            })
        })
    ])
}