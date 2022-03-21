#!/usr/bin/env fish
curl 'https://api.reroll.co/api/characters?offset=20' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Bearer '$REROLL_KEY \
  --compressed