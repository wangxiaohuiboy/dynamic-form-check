/**
* slider滑块
* @param {createElement} h
* @param {Object} item
**/
export const renderSlider = (h, item, { formProps, parent }) => {
    return h('el-slider', {
        attrs: {},
        props: {
            value: formProps.ruleForm[item.prop], size: 'small',
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