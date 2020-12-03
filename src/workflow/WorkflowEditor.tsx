import React from 'react'
import "./index.less";

/**
 * 流程设计器属性
 */
interface WorkflowEditorProps {
    editable: boolean; // 是否允许修改
}
  
/**
 * 流程设计器
 */
export default function WorkflowEditor(props: WorkflowEditorProps) {  
    return (
        <div className="workflow-editor">
            这是一个WorkflowEditor
        </div>
    );      
}