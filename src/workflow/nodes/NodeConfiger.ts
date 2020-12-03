import NodeModel from "./NodeModel";
import { NodeOptions } from "./Node";

/**
 * 节点配置器属性
 */
export interface NodeConfigerProps {
    dataModel: NodeModel<NodeOptions>; // 节点的数据模型
}

/**
 * 节点配置器
 */
export default interface NodeConfiger<T extends NodeOptions> {
    hasError: (node: NodeModel<T>) => boolean;
} 

// 定义一个接口，有一个f的约束 
interface A {
    f: () => void;
}
// 接下来有两个实现
class B1 implements A {
    f() {
    }
}
class B2 implements A {
    f() {
    }
}

// 定义另一个接口，希望能获取一个A的实现类，如D、F分别返回了不同的实现B1, B2，但是都会报错：
// Type '() => typeof B' is not assignable to type '() => A'. 实际上C在定义时不应该返回A类型的实例，而是实现了A的类，有解吗？
interface C {
    k: () => { new (): A }; 
}

class D implements C {
    k() {
        return B1;
    }
}

class F implements C {
    k() {
        return B2;
    }
}