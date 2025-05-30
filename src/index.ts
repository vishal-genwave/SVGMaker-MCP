import { FastMCP } from 'fastmcp';
import { generateTool } from './tools/generate.js';
console.log("Loaded tool:", generateTool.name);


const server = new FastMCP({
  name: 'svgmaker-mcp',
  version: '1.0.0',
});

server.addTool(generateTool);


server.start({
  transportType: "stdio"
});
