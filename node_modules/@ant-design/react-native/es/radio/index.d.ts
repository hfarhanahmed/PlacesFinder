import InternalRadio from './Radio';
import Group from './RadioGroup';
import RadioItem from './RadioItem';
declare const Radio: typeof InternalRadio & {
    RadioItem: typeof RadioItem;
    Group: typeof Group;
};
export default Radio;
