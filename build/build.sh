#! /bin/bash
if ! hash jq
then
    apt-get install jq
fi

npm run build --prod
version=$(jq -r .version ../package.json)

docker build -t cooler09/ui-pickupvb:$version ../.
docker push cooler09/ui-pickupvb:$version