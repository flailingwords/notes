#!/bin/bash

cd "$(dirname "$(realpath "$0")")/.." || exit 255

GUARDS_FILE="src/schemas/guards.ts"

SAUCE_FILES=$(find src/schemas/ -type f -name '*.ts' -a -not -name index.ts -a -not -name guards.ts -a -not -name types.ts | sort)

echo "Generating ${GUARDS_FILE}..." \
    && {
        # shellcheck disable=SC2001
        cat << EOH
/*
 * DO NOT EDIT! THIS FILE IS GENERATED!
 */
EOH

        for SAUCE_FILE in ${SAUCE_FILES}; do
            NAMES=$(cat "${SAUCE_FILE}" | grep 'export const z' | awk '{ print $3 }' | cut -f2 -d'z' | xargs)

            # shellcheck disable=SC2001
            cat << EOI
import type { $(echo "${NAMES}" | sed 's/ /, /g') } from './types'

import { $(echo "${NAMES}" | xargs -n1 | xargs -I% echo z% | xargs | sed 's/ /, /g') } from './$(basename "${SAUCE_FILE}" .ts)'
EOI

            for NAME in ${NAMES}; do
                cat << EOT

export const is${NAME} = (inp?: unknown): inp is ${NAME} => z${NAME}.safeParse(inp).success

EOT
            done
        done
    } > "${GUARDS_FILE}"
