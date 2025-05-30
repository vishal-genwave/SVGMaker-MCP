# SVGMaker MCP Server

A Model Context Protocol (MCP) server for generating SVGs using AI.

## Current Status

✅ MCP Server is working and tools are registered
✅ API integration is working
✅ Authentication is working
❌ Tools not showing in Cursor UI (known issue)

## Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Build the Project**
```bash
npm run build
```

3. **Start the Server**
```bash
npm start
```

## Testing the MCP Server

You can test if the MCP server and tools are working using the MCP CLI:

```bash
npx fastmcp dev src/index.ts
```

This will show you the available tools and let you test them directly.

## Known Issues

1. **Tools not showing in Cursor UI**
   - The MCP server is running correctly
   - Tools are registered and working (verified via MCP CLI)
   - But tools are not showing up in Cursor's UI
   - Current workaround: Use MCP CLI for testing

2. **TypeScript Error in generate.ts**
   - There's a type inference issue with the params parameter
   - This doesn't affect functionality but needs to be fixed

## Configuration

The MCP server is configured in `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "svgmaker": {
      "command": "npm",
      "args": ["start"],
      "cwd": "/Users/vishalm.a/Desktop/MCP/SVGMaker-MCP",
      "env": {
        "SVGMAKER_API_KEY": "svgmaker-io33a05fb1e5616064"
      }
    }
  }
}
```

## API Integration

The MCP server integrates with your local API server running on port 3000. Make sure:
1. Your API server is running
2. The API key is correctly set in the MCP configuration
3. The API endpoint is accessible at `http://localhost:3000/api/generate`

## Next Steps

1. Fix the TypeScript error in `generate.ts`
2. Investigate why tools aren't showing in Cursor UI
3. Add more tools and features
4. Improve error handling and logging

## Contributing

Feel free to open issues or submit pull requests to help improve the project.

## License

MIT