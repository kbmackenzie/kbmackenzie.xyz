#!/bin/sh
# Rename all .tsx, .ts and .sass files to kebab-case.
find . -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.sass' \) -not \( -path './node_modules/*' -o -path './dist/*' -o -path './.git/*' \) -exec rename -n -d -e 's/^([A-Z])/\L$1/;s/([a-z])([A-Z])/$1-\L$2/g' {} \;
