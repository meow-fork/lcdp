
import React, { ComponentType } from 'react';
import NodeModel from '../nodes/NodeModel';
import { StartNodeOptions } from '../nodes/start/StartNode';
import NodeList from './NodeList';

/**
 * 工作流配置画布属性
 */
interface FlowConfigCanvasProps {
    startNode: NodeModel<StartNodeOptions>;
}

/**
 * 这是一个工作流画布，用于绘制流程环图
 * 
 * @param props 组件传入属性
 */
export default function FlowConfigCanvas(props: FlowConfigCanvasProps) {

    let { startNode } = props;

    return (
        <div className="workflowEditorContent">
            <p>这是一个WorkFlowCanvas</p>
            <p>下面是流程图</p>
            <NodeList startNode={startNode}></NodeList>
        </div>
    );
}