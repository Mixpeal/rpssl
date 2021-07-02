# pull official base image
FROM node:13.12.0-alpine
# set working directory
WORKDIR /app/client
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/client/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# add app
COPY . ./


FROM golang:1.16
LABEL base.name = "rpssl"
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
copy . .
RUN go build -o main .
EXPOSE 8080
ENTRYPOINT ["./main"]