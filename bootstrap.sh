#!/bin/sh

set -e

svn checkout http://closure-linter.googlecode.com/svn tools/closure-linter

echo "run 'easy_install closure_linter' from the tools directory to install gjslint"
