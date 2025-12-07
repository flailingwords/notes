#!/bin/bash

cd "$(dirname "$(realpath "$0")")/.." || exit 255

TYPES_FILE="src/schemas/types.ts"

SAUCE_FILES=$(find src/schemas/ -type f -name '*.ts' -a -not -name index.ts -a -not -name guards.ts -a -not -name types.ts | sort)

echo "Generating ${TYPES_FILE}..." \
    && {
        # shellcheck disable=SC2001
        cat << EOH
/*
 * DO NOT EDIT! THIS FILE IS GENERATED!
 */
import type { z } from 'zod'
EOH

        for SAUCE_FILE in ${SAUCE_FILES}; do
            TYPES=$(cat "${SAUCE_FILE}" | grep 'export const z' | awk '{ print $3 }' | cut -f2 -d'z' | xargs)

            cat << EOI
import type { $(echo "${TYPES}" | xargs -n1 | xargs -I% echo z% | xargs | sed 's/ /, /g') } from './$(basename "${SAUCE_FILE}" .ts)'
EOI

            for TYPE in ${TYPES}; do
                cat << EOT

export type ${TYPE} = z.infer<typeof z${TYPE}>
EOT
            done
        done
    } > "${TYPES_FILE}"
