#!/usr/bin/env bash
ENV_FILE=Proxy.env
if [[ ! -f "$ENV_FILE" ]]
then
    echo "$ENV_FILE does not exist, please create it from Proxy.env.template"
    exit
fi
set -a 
source "$ENV_FILE"
set +a
if [ -z $INSTANCE ] 
then 
  echo "INSTANCE is not set in .env file"
  exit
fi
if [ -z $SCRIPT_PATH ] 
then 
  echo "SCRIPT_PATH is not set in .env file"
  exit
fi
cd dev-proxy || exit
echo Running the development proxy, this will open Chrome 
echo and connect to your Matrix instance https://$INSTANCE.matrixreq.com
echo It will serve you local plugin $SCRIPT_PATH
npx ts-node-esm index.ts $INSTANCE $SCRIPT_PATH chrome
