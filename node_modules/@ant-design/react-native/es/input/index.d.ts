import InternalInput from './Input';
import Item from './Item';
import TextArea from './TextArea/index';
type InternalInputType = typeof InternalInput;
type CompoundedComponent = InternalInputType & {
    TextArea: typeof TextArea;
    Item: typeof Item;
};
declare const Input: CompoundedComponent;
export default Input;
