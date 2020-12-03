import React from 'react';
import NodeModel from "../NodeModel";
import { StartNodeOptions } from "./StartNode";
import NodeViewer from "../NodeViewer";

/**
 * 开始节点展示器属性
 */
interface StartNodeViewerProps {
    dataModel: NodeModel<StartNodeOptions>;
}


/**
 * 开始节点展示卡
 */
export default function StartNodeViewer(props: StartNodeViewerProps) {
    return (
        <div>
            <p>这是一个StartNodeViewer</p>
        </div>
    );
}

/**
 * 开始节点展卡片（类组件）
 */
export class StartNodeViewerClass extends React.Component<StartNodeViewerProps> implements NodeViewer<StartNodeViewerProps> {
    hasError = (node: NodeModel) => {
        return true;
    }

    render() {
        return <div>这是一个StartNodeViewer</div>;
    }
}