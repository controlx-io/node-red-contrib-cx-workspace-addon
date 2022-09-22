import {NodeAPI, NodeDef} from "node-red";

interface IConfig extends NodeDef {
    value: string
}

module.exports = function(RED: NodeAPI) {

    let boundariesString = '';

    RED.httpAdmin.get('/__cx_editor_addon/get_config', (req, res) => {
        res.json({boundariesString}).end();
    })

    function WorkspaceAddon(config: IConfig) {
        RED.nodes.createNode(this, config);
        const node = this;

        boundariesString = config.value;
    }

    RED.nodes.registerType("workspace-addon", WorkspaceAddon);
}
