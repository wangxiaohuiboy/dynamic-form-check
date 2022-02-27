/**
* rate评分
* @param {createElement} h
* @param {Object} item
**/
export const renderRate = (h, item, { formProps, parent }) => {
    return h('el-rate', {
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