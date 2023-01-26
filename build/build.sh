#! /bin/bash
if ! hash jq
then
    sudo apt-get install jq
fi

npm run build --prod
version=$(jq -r .version ../package.json)

sudo docker build -t cooler09/ui-pickupvb:$version -t cooler09/ui-pickupvb:latest ../.
sudo docker push cooler09/ui-pickupvb:$version
sudo docker push cooler09/ui-pickupvb:latest