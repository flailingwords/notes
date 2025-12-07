#!/bin/bash

cd "$(dirname "$(realpath "$0")")/../" || exit 255

function processFile {
    DOCFILE=$1

    if [ "${DOCFILE}" = "" ]; then
        echo "Empty DOCFILE argument!"
        exit 254
    fi

    NEWDOCFILE="docs/$(yq --front-matter=extract -r '.taxonomy[]' "${DOCFILE}" | xargs | tr ' ' '/' | perl -pe 's/(\w+)/\L$1/g')/$(basename "${DOCFILE}")"

    if [ "${DOCFILE}" != "${NEWDOCFILE}" ]; then
        if [ -f "${NEWDOCFILE}" ]; then
            processFile "${NEWDOCFILE}"
        fi

        if [ -f "${NEWDOCFILE}" ]; then
            echo "New DOCFILE exists."
            exit 253
        fi

        NEWDOCPATH=$(dirname "${NEWDOCFILE}")

        mkdir -p "${NEWDOCPATH}"

        mv "${DOCFILE}" "${NEWDOCFILE}"
    fi
}

DICT="{}"

find docs/ -name '*.md' | sort | while read -r DF; do
    echo "Processing ${DF}"

    processFile "${DF}"
done \
    && mkdir -p ./public/docs/ \
    && rsync -a --delete ./docs/ ./public/docs/ \
    && while read -r PDF; do
        MDF="${PDF/public/}"
        TITLE=$(yq --front-matter=extract '.title' "${PDF}")
        UPDATE=".taxonomy.$(echo "$(dirname "${PDF}" | cut -f3- -d/)/[\"${TITLE}\"]" | perl -pe 's|/|.|g') = \"${MDF}\""

        DICT=$(echo -e "${DICT}" | jq "${UPDATE}")
    done < <(find public/docs/ -name '*.md' | sort) \
    && echo -e "${DICT}" | jq -S . > public/docs/index.json
