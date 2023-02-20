import * as cssSelect from "css-select";
import {Options, Adapter} from "css-select/lib/types"

interface WabibapujsNode {
    children: WabibapujsNode[];
    parentNode: WabibapujsNode | null;
}

interface WabibapujsElementNode extends WabibapujsNode {
    attributes
}

type WabibapuJSAdapter = Adapter<WabibapujsNode, WabibapujsElementNode>

const adapter: WabibapuJSAdapter = {
    isTag(node) {
        return node instanceof 
    },,
    existsOne(test, elems) {
        
    },
    getSiblings(node) {
        
    },
    getChildren(node) {
        
    },
    getParent(node) {
        
    },
    getAttributeValue(elem, name) {
        
    },
    hasAttrib(elem, name) {
        
    },
    getName(elem) {
        
    },
    findOne(test, elems) {
        
    },
    findAll(test, nodes) {
        
    },
    getText(node) {
        
    },
}
cssSelect.selectOne<WabibapujsNode, WabibapujsElementNode>()
