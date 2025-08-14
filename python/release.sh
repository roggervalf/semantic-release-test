#!/usr/bin/env bash
rm -Rf dist
rm -Rf test.egg-info
python -m build
twine upload dist/*
