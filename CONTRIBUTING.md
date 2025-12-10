# Contributing

For licensing, see the Contributing section of the [LICENSE document](./LICENSE.md#contributing).

For the instructions, skip to the [relevant section below](#instructions).

## Content

Content can be added as YAML files in the `docs/` directory, which will be parsed on deployment to generate the live Markdown documents.

Changes can be tested locally by running the `tools/process-docs.sh` script and then running `pnpm dev`.

## File format

Notes uses Markdown files, with YAML Frontmatter to supply metadata.

While at this point in time the `id` field is superfluous in nature, the `title` field is required and will be used to generate the document index tree.

The `taxonomy` array dictates where in the hierarchy the resulting file is placed.

If the file is located in the wrong directory, the `process-docs` script will automatically relocate the file.

```yaml
---
id: example
title: Example
taxonomy:
    - Flailing Words
    - Notes
    - Docs
    - Example
---
content
```

## Instructions

### Dependencies

- git
- jq
- perl
- rsync
- yq

### Setup

1. If you are not a direct contributor, please create a fork and if possible a dedicated feature or documentation branch.
2. Clone the/your repository.
3. Install dependencies via `pnpm install`.

### New content

1. Copy or create a new Markdown file.
2. Adjust the Frontmatter.
3. Write the content.
4. Run `tools/process-docs.sh` to update build files.
5. Run `pnpm dev` to view the result.
6. Repeat from step 2 or 3 as necessary.
7. Add the file in the `docs/` directory with `git add <docs/path/to/file.md>`.
8. Commit the file with a standard commit style message in the format of `docs: added <file>`.
9. Push the change to your fork and open a pull request with more information.

### Modifying content

1. Edit the Markdown file.
2. Run `tools/process-docs.sh` to update build files.
3. Run `pnpm dev` to view the result.
4. Repeat from step 1 as necessary.
5. Add the file in the `docs/` directory with `git add <docs/path/to/file.md>`.
6. Commit the file with a standard commit style message in the format of `docs: modified <file>`.
7. Push the change to your fork and open a pull request with more information.
