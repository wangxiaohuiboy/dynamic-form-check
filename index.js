const modulesFiles = require.context('./package', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    if (value) Object.assign(modules, { ...value })
    return modules
}, {});
const { renderInput, renderSelect, renderCascader, renderRadio, renderCheckbox, renderSwitch, renderSlider, renderDateTimePicker, renderInputNumber, renderRate, renderColorPicker } = modules;
export default {
    name: 'DynamicForm',
    functional: true,
    render(h, data) {
        // eslint-disable-next-line no-unused-vars
        const { props, scopedSlots, $slots, parent } = data;
        const { formProps = {}, itemProps = [] } = props.dynamicFormProps || {};
        /**
        * 渲染form组件
        * @param {createElement} h
        * @param {Object} item
        **/
        let FormRender = (h, item, props) => {
            switch (item.type) {
                case 'input':
                    return renderInput(h, item, props);
                case 'select':
                    return renderSelect(h, item, props);
                case 'cascader':
                    return renderCascader(h, item, props);
                case 'radio':
                    return renderRadio(h, item, props);
                case 'checkbox':
                    return renderCheckbox(h, item, props);
                case 'switch':
                    return renderSwitch(h, item, props);
                case 'slider':
                    return renderSlider(h, item, props);
                case 'date-time-picker':
                    return renderDateTimePicker(h, item, props);
                case 'input-number':
                    return renderInputNumber(h, item, props);
                case 'rate':
                    return renderRate(h, item, props);
                case 'color-picker':
                    return renderColorPicker(h, item, props);
                case 'itemSlot':
                    return $slots[item.slotName];
                default:
                    break;
            }
        };
        return h('el-form', {
            class: 'ruleForm',
            ref: 'ruleForm',
            attrs: {},
            props: {
                model: formProps ? formProps.ruleForm : {},
                labelWidth: '100px',
                ...formProps,
            },
        }, [
            h('el-row', {
                class: '',
                style: {},
                attrs: {},
            }, [
                (itemProps.length ? itemProps : []).map((item, index) => {
                    if (item.type === 'slot') {
                        return $slots[item.slotName];
                    } else {
                        return h('el-col', {
                            attrs: {
                                span: item.col ? item.col : 24,
                                xl: item.col ? item.col : 24,
                                lg: item.col ? item.col : 24,
                                sm: item.col !== 24 ? 12 : item.col,
                                xs: 24,
                            }
                        }, [
                            h('el-form-item', {
                                attrs: {
                                    key: index,
                                    label: item.label,
                                    prop: item.prop,
                                    rules: item.rule,
                                },
                                style: {
                                    height: '32px',
                                }
                            }, [
                                FormRender(h, item, { formProps, parent })
                            ])
                        ])
                    }
                })
            ])
        ])
    },
}