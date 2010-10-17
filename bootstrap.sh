#!/bin/sh

set -e

git submodule update --init

svn checkout http://closure-linter.googlecode.com/svn tools/closure-linter

tar xzf tools/thatcher-env-js-1.2.13-0-gcb738b9.tar.gz -C tools
mv tools/thatcher-env-js-cb738b9 tools/envjs
cd tools/envjs
make

echo "run 'easy_install closure_linter' from the tools directory to install gjslint"
