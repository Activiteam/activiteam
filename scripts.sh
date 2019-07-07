#!/usr/bin/env bash

usage() {
  echo "Help for launching activiteam application"
}

if [ $# -eq 0 ]; then
  usage
fi

while [ "$1" != "" ]; do
    case $1 in
        -h | --help )           usage
                                exit
                                ;;
        * )                     usage
                                exit 1
    esac
    shift
done
