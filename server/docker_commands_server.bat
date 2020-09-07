docker rm -f ewb-rainwater-server
docker build -t kayakcat/ewb-rainwater-server .
docker push kayakcat/ewb-rainwater-server
docker pull kayakcat/ewb-rainwater-server
docker create -p 80:80 --name ewb-rainwater-server kayakcat/ewb-rainwater-server
