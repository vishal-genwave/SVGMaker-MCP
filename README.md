# SVGMaker MCP Server

A Model Context Protocol (MCP) server for SVGMaker that allows AI assistants to generate SVGs directly from your code editor.

## Features

- Generate SVGs from text descriptions
- Support for different quality levels
- Customizable aspect ratios and backgrounds
- Style parameter customization
- Secure API key authentication

## Installation

```bash
npm install @genwave/svgmaker-mcp
```

## Configuration

Create a configuration file at `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "svgmaker": {
      "command": "npx",
      "args": ["-y", "@genwave/svgmaker-mcp"],
      "env": {
        "SVGMAKER_API_KEY": "<your_api_key>"
      }
    }
  }
}
```

## Usage

In your code editor (e.g., Cursor), you can use the MCP server by adding `use svgmaker` to your prompt:

```
use svgmaker

Generate a simple house icon with a transparent background
```

## API Reference

### Generate SVG

Parameters:
- `prompt` (string): Text description of the SVG to generate
- `quality` (enum): 'low' | 'medium' | 'high'
- `aspectRatio` (enum): 'auto' | 'portrait' | 'landscape' | 'square' | 'wide' | 'tall'
- `background` (enum): 'auto' | 'transparent' | 'opaque'
- `styleParams` (object, optional): Additional style parameters

## Development

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## License

MIT
