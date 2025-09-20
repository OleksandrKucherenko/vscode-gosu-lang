# Gosu Formatter Configuration

The Gosu formatter reads workspace-level configuration from `.gosuformatting.jsonc` or `.gosuformatting.json5`. Each option is optional; omitted values fall back to the defaults listed below.

| Option | Type | Allowed Values | Default | Description |
| --- | --- | --- | --- | --- |
| `indentStyle` | string | `"space"` \| `"tab"` | `"space"` | Controls whether indentation uses spaces or tabs. |
| `indentSize` | number | positive integer | `2` | Number of spaces or tab columns used for each indentation level. |
| `continuationIndentSize` | number | positive integer | `4` | Indent width applied when a statement wraps across multiple lines. |
| `maxLineLength` | number | integer ≥ 40 | `100` | Target line length; the formatter inserts breaks when lines would exceed this width. |

Configuration files may include comments and trailing commas when using the `.jsonc` extension. When using `.json5`, the full JSON5 syntax (single quoted strings, bare keys, etc.) is available. The formatter automatically resolves the first matching file in the workspace root, preferring `.gosuformatting.jsonc` when both extensions are present.
