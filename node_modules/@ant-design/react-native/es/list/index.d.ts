import Brief from './Brief';
import InternalList from './List';
import InternalItem from './ListItem';
declare const Item: typeof InternalItem & {
    Brief: typeof Brief;
};
declare const List: typeof InternalList & {
    Item: typeof Item;
};
export default List;
