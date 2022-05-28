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
}