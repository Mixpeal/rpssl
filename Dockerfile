FROM golang:1.16

LABEL base.name = "rpssl"

WORKDIR /app

copy . .

RUN go build -o main

EXPOSE 8080

ENTRYPOINT ["./main"]