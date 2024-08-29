#!/bin/bash

texmf=$(kpsewhich -var-value TEXMFHOME)

tex=$texmf/tex/latex/local

mkdir -p $tex

for file in ./latex-packages/*; do # latex-packages/file.sty
  f=$(basename $file)              # file.sty
  b=${f%%.*}                       # file

  rm -rf $tex/$b
  mkdir -p $tex/$b
  
  if ln $file $tex/$b/$f; then
    echo "Hard link '$file' => '$tex/$b/$f' successfully created."
  else
    echo "Cannot create hard link, copying file '$file' into '$tex/$b' directory instead."
    cp $file $tex/$b/$f
  fi
done

mktexlsr $texmf