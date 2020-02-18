#!/bin/sh

npm i
npm run build
echo "docs.convai.dev" > ./build/CNAME

set -e

git config user.email "dev@datomar.com"
git config user.name "Dr. Docs Deployus"

remote=$(git config remote.origin.url)
described_rev=$(git rev-parse HEAD | git name-rev --stdin)

pages_dir="build"

if [ ! -d "$pages_dir" ]
then
    echo "Usage: $0 DIRECTORY"
    exit 1
fi

cd "$pages_dir"

cdup=$(git rev-parse --show-cdup)
if [ "$cdup" != '' ]
then
    git init
    git remote add --fetch origin "$remote"
fi

if git rev-parse --verify origin/gh-pages > /dev/null 2>&1
then
    git checkout gh-pages
else
    git checkout --orphan gh-pages
fi

git add .
git commit -m "pages built at $described_rev" -e
git push origin gh-pages