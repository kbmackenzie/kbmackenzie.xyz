#!/bin/sh
# Rename all .sass files to '.module.sass'.
find . -type f -name '*.sass' -not \( -path './node_modules/*' -o -path './dist/*' -o -path './.git/*' \) -exec rename -d -e 's/^(.*)\.sass$/$1.module.sass/' {} \;
