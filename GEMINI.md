# Gemini Instructions

Read `AGENTS.md` first. It is the canonical instruction file.

## Gemini CLI tool mappings

- File search: use `glob` (not find or ls)
- Content search: use `grep` (not grep or rg)
- Read files: use `read_file` (not cat/head/tail)
- Edit files: use `edit_file` (not sed/awk)
- Write files: use `write_file` (not echo/cat)
