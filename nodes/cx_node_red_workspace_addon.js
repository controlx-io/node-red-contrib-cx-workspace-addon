"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (RED) {
    let boundariesString = '';
    RED.httpAdmin.get('/__cx_editor_addon/get_config', (req, res) => {
        res.json({ boundariesString }).end();
    });
    function WorkspaceAddon(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        boundariesString = config.value;
    }
    RED.nodes.registerType("workspace-addon", WorkspaceAddon);
};
//# sourceMappingURL=cx_node_red_workspace_addon.js.map