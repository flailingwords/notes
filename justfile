help:
    @just -l | sed 's/help/help (this)/g'

build target:
    @echo 'Building {{target}}…'
    @just "build_{{target}}"

build_docs:
    @tools/process-docs.sh

build_dist:
    @vite build

build_gh-pages:
    @vite build --base=/notes/ && cp dist/index.html dist/404.html

build_format: format

build_lint: lint

build_schemas-guards:
    @echo "Building guards..."
    @tools/generate-schema-guards.sh

build_schemas-types:
    @echo "Building types..."
    @tools/generate-schema-types.sh

build_storybook:
    @storybook build

build_type-check: type-check

dev:
    @vite --port 3000

format:
    @echo "Formatting files..."
    @pnpm prettier -w --ignore-unknown --log-level=silent ${FILES:-.}

git-hook target:
    @echo 'Running {{target}} git hook…'
    @just "git_hook_{{target}}"

git_hook_pre-commit:
    #!/bin/bash

    set -e

    FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')

    if CSSFILES=$(echo -e "${FILES}" | grep -P '\.css$'); then
        FILES=${CSSFILES} pnpm just lint_stylelint
    fi

    if JSFILES=$(echo -e "${FILES}" | grep -P 'src\/.*\.[cm]?[jt]sx?$'); then
        FILES=${JSFILES} pnpm just lint_eslint
    fi

    FILES=${FILES} pnpm just format

    git update-index --again

git_hook_pre-push:
    #!/bin/bash

    set -e

    pnpm build \
        && exit 0

lint: lint_eslint lint_stylelint

lint_eslint:
    @echo "Linting js files..."
    @pnpm eslint ${FILES:-src} --ext ts,tsx --no-warn-ignored --report-unused-disable-directives --max-warnings 0 --fix

lint_stylelint:
    @echo "Linting css files..."
    @pnpm stylelint ${FILES:-src/**/*.css} --fix

serve:
    @vite preview

start:
    @vite --port 3000

storybook:
    @storybook dev -p 6006

test:
    @vitest run

type-check:
    @pnpm tsc --noEmit
