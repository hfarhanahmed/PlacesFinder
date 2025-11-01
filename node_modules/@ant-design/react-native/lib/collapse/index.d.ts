import { CollapsePanel, Collapse as InternalCollapse } from './collapse';
type InternalInputType = typeof InternalCollapse;
type CompoundedComponent = InternalInputType & {
    Panel: typeof CollapsePanel;
};
declare const Collapse: CompoundedComponent;
export default Collapse;
