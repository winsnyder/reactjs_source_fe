# Guideline
...

### Install dependencies

`yarn`

### Check convention code

`yarn lint`

### Run on local machine

`yarn start`

### Build local with docker-compose

1. grant permission access
`chmod +x build_image_local.sh`
2. build image when change source code
`./build_image_local.sh`
3. build application enviroment development
`docker-componse -f docker-compose-local.yml up -d`
4. build application enviroment prod
`docker-compose up -d`
...