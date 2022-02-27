/**
* radio单选框
* @param {createElement} h
* @param {Object} item
**/
export const renderRadio = (h, item, { formProps, parent }) => {
    return h('el-radio-group', {
        attrs: {

        },
        props: {
            value: formProps.ruleForm[item.prop],
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
        (item.selectOption || []).map((item, index) => {
            return h(item.type === 'button' ? 'el-radio-button' : 'el-radio', {
                attrs: {
                    key: index,
                    label: item.value,
                    border: item.border,
                    disabled:item.disabled,
                },
            }, item.label)
        })
    ])
}