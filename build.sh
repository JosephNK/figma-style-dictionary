#!bin/bash
{
  cd tokens || exit

  token-transformer tokens.json output.json

  mkdir tokens_backup
  mv tokens.json ./tokens_backup

  cd ..

  node build.js

  cd tokens/tokens_backup || exit
  mv tokens.json ../

  cd ..
  rm -rf tokens_backup
  rm -rf output.json

#  # Flutter Code Auto Format
#  echo ''
#  echo $'\360\237\215\272' 'Flutter Code Auto Formatting...'
#  if ! [ -x "$(command -v flutter)" ]; then
#    echo 'Error: flutter is not installed.' >&2
#    exit 1
#  fi
#  cd ..
#  cd _build/flutter/
#  for FILE in *; do flutter format $FILE; done
}