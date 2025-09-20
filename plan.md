# Gosu Formatter Implementation Plan

- [x] Scaffold `modules/formatter` package structure and public API surface
- [ ] Define `.gosuformatting.jsonc` configuration schema and defaults
- [ ] Add configuration loader tests (JSON5 parsing, default merge, error handling)
- [ ] Implement configuration loader with JSON5 support
- [ ] Integrate loader into formatter entry points and expose formatting functions
- [ ] Add dual-pass parser strategy tests for corrupted syntax handling
- [ ] Implement dual-pass parsing with line-ignore annotation in formatter
- [ ] Document formatter module usage and configuration discovery
- [ ] Wire formatter into LSP/CLI commands and add integration tests
