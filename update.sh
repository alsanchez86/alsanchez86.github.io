rm -r dependencies
mkdir dependencies
git config --global credential.helper cache
gulp
git add .
git commit -m "default update"
git push