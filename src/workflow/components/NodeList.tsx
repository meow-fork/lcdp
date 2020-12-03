import React, { Fragment, useContext } from 'react';
import { StartNodeOptions } from '../nodes/start/StartNode';
import NodeModel from '../nodes/NodeModel';
import { WorkflowEditorContext } from '../WorkflowEditorContext';


/**
 * 分支渲染器属性
 */
export interface NodeListProps {
     // 开始节点
    startNode: NodeModel<StartNodeOptions>
}

/**
 * 
 * 
 * 节点列表
 * 
 * @param props
 */
export default function NodeList(props: NodeListProps) {
    let { startNode } = props;
    let { nodeViewerMap, editable } = useContext(WorkflowEditorContext);

    let reactNodes = [];
    for (let node of startNode) {
        let NodeViewer = nodeViewerMap[node.type];
        let nodeDom;
        if (node.branchs != null) {
            ///nodeDom = <BranchNodeRender key={node.id} node={node} appendable={true} editable={true} branchs={node.branchs} nodeRenderMap={nodeRenderMap}></BranchNodeRender>;
        } else {
            nodeDom = <NodeViewer key={node.id} dataModel={node}></NodeViewer>;
        }
        let wrapper = (
            <div key={node.id} className="flexColumn">
                <section className="workflowBox" data-id={node.id}>
                    {nodeDom}
                </section>
                {editable && 
                    <div className="workflowLineBtn">
                        <i className="icon-custom_add_circle"></i>
                    </div>
                }
            </div>
        ); 
        reactNodes.push(wrapper);
    };

    return <div>xx</div>;
}