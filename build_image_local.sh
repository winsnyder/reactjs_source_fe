TAG=$(date '+%Y%d%m.%H%M%S')

ImageName="frontend_base"
echo "Building image $ImageName:$TAG"
docker build -f Dockerfile.dev -t $ImageName:$TAG .
docker tag $ImageName:$TAG $ImageName:latest
