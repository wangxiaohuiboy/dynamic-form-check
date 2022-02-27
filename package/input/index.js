/**
* input输入框
* @param {createElement} h
* @param {Object} item
**/
export const renderInput = (h, item, { formProps, parent }) => {
    return h('el-input', {
        attrs: {
            placeholder: item.placeholder || `请输入${item.label || ''}`,
            maxlength: item.maxlength ? item.maxlength : 20,
            rows: item.rows ? item.rows : 2,
            autofocus: item.autofocus ? item.autofocus : false,
        },
        props: {
            value: formProps.ruleForm[item.prop],
            size: 'small',
            clearable: true,
            showWordLimit: true,
            ...item.setProp,

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
};