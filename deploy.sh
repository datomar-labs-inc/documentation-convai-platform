npm ci
yarn build
echo "docs.convai.dev" > ./build/CNAME

export TARGET_BRANCH=gh-pages
git clone https://$GH_TOKEN@github.com/datomar-labs-inc/documentation-convai-platform out
cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
git rm -rf .
cd ..
cp -a build/. out/.
cd out
echo docs.convai.dev > CNAME
git config user.email "dev@datomar.com"
git config user.name "Dr. Docs Deployus"
git add -A
git commit -m "Automated deployment to GitHub Pages"
git push https://$GH_TOKEN@github.com/datomar-labs-inc/documentation-convai-platform $TARGET_BRANCH -q

set -e
