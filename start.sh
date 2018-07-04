#!/bin/bash
GREEN='\033[0;32m'
NC='\033[0m'
file=./package-lock.json
if [ -e "$file" ]; then
  printf "Starting ${GREEN}VS Code${NC}\n"
  code .
  printf "Starting ${GREEN}WDS${NC}\n"
  npm start
else 
  printf "Running ${GREEN}npm${NC} install\n"
  npm install
  printf "Starting ${GREEN}VS Code${NC}\n"
  code .
  printf "Starting ${GREEN}WDS${NC}\n"
  npm start
fi