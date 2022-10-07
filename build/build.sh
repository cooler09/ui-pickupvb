#! /bin/bash
npm run build --prod
version=$(jq .version ../package.json)

docker build -t cooler09/ui-pickupvb:$version ../.
docker push cooler09/ui-pickupvb:$version