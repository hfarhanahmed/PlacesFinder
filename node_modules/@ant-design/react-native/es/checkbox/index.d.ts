import AgreeItem from './AgreeItem';
import InternalCheckbox from './Checkbox';
import CheckboxItem from './CheckboxItem';
declare const Checkbox: typeof InternalCheckbox & {
    CheckboxItem: typeof CheckboxItem;
    AgreeItem: typeof AgreeItem;
};
export default Checkbox;
