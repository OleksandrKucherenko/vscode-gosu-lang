# Gosu Formatter Configuration

The Gosu formatter is designed to be flexible and configurable to suit your project's coding style. This document outlines the available configuration options and how to use them.

## Configuration File

The formatter is configured using a file named `.gosuformatting.json` or `.gosuformatting.jsonc` in the root of your project.

## Available Options

| Option | Type | Default | Description |
|---|---|---|---|
| `indentSize` | `number` | `2` | The number of spaces to use for indentation. |
| `strictMode` | `boolean` | `true` | If `true`, the formatter will fail on syntax errors. If `false`, it will attempt to format around them. |

## Example Configuration

Here is an example `.gosuformatting.jsonc` file:

```jsonc
{
  // Use 4 spaces for indentation
  "indentSize": 4,

  // Attempt to format files even if they contain syntax errors
  "strictMode": false
}
