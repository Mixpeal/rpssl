FROM golang:1.16

LABEL base.name = "rpssl"

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

copy . .

RUN go build -o main .

EXPOSE 80

ENTRYPOINT ["./main"]