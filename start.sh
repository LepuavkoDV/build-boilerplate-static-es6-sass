#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'
file=./package-lock.json
project=${PWD##*/}
if [ -e "$file" ]; then
  printf "\n${GREEN}***${NC} Starting ${BLUE}${project}${NC} ${GREEN}***${NC}\n\n"
  printf "Starting ${YELLOW}VSCode${NC}\n"
  code .
  printf "Starting ${YELLOW}WDS${NC}\n"
  npm start
else
  printf "\n${RED}***${NC} Fresh boilerplate clone detected ${RED}***${NC}\n\n"
  printf "Running ${YELLOW}npm${NC} install\n\n"
  npm install
  printf "\n${GREEN}***${NC} Installation complete ${GREEN}***${NC}\n"
  printf "${GREEN}***${NC} Starting ${BLUE}${project}${NC} ${GREEN}***${NC}\n\n"
  printf "Starting ${YELLOW}VSCode${NC}\n"
  code .
  printf "Starting ${YELLOW}WDS${NC}\n"
  npm start
fi