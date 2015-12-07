#!/bin/sh

# Kill child processes when we die.
trap 'pkill -P $$' INT TERM

webpack -w &
nodemon -w build/server.js build/server.js &

# Wait until all children are dead. TODO: Any would be better.
wait
