#!/bin/bash

echo "environments"
echo $1


log_path="../logs/";

workspace=$(dirname $(pwd))

[ -d ${log_path} ] || mkdir ${log_path}

echo ${workspace}

# Node npm install
npm install

echo 'start node js forever for hoozha.com.'
if [ $1 == "prod" ];then
    echo "production"
    pm2 reload ecosystem.config.js --env production

elif [ $1 == "test" ];then
    pm2 reload ecosystem.config.js --env testing

    echo "testing"
else
    #NODE_ENV=development PORT=8443 forever start -p . -a -n 50 --pidFile ${workspace}/file.pid  -l ${log_path}forever.log -o ${log_path}out.log -e ${log_path}err.log ${workspace}/app.js
    #NODE_ENV=development PORT=8443 pm2 start npm -- run start --name ${pmname}
    pm2 reload ecosystem.config.js --env development
    echo "development"
fi

