import { ComponentType, createContext } from "react";
import { NodeConfigerProps } from "./nodes/NodeConfiger";
import NodeModel from "./nodes/NodeModel";
import { NodeViewerProps } from "./nodes/NodeViewer";
import StartNode from "./nodes/start/StartNode";
import StartNodeConfiger, { StartNodeConfigerClass } from "./nodes/start/StartNodeConfiger";
import StartNodeViewer from "./nodes/start/StartNodeViewer";

/**
 * 工作流编辑器上下文
 */
export interface WorkflowEditorContextType {
    // 是否允许修改
    editable: boolean; 
    // 开始结点数据模型
    startNodeModel?: NodeModel;
    // 节点展示卡映射
    nodeViewerMap: {
        [key: string]: ComponentType<NodeViewerProps>;
    };
    // 节点配置器映射
    nodeConfigerMap: {
        [key: string]: ComponentType<NodeConfigerProps>;
    };
}

// 工作流编辑器上下文初始值
const contextInitValue = {
    editable: true,
    nodeViewerMap: {
        [StartNode.id]: StartNodeViewer
    },
    nodeConfigerMap: {
        [StartNode.id]: StartNodeConfiger
    }
};

// 工作流编辑器上下文创建
export const WorkflowEditorContext = createContext<WorkflowEditorContextType>(contextInitValue);