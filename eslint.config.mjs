import murandidoConfigNode from "@murandido/eslint-config/node.mjs";

export default [...murandidoConfigNode, { rules: { camelcase: "off" } }];
