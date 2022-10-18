FROM golang:1.18-alpine

RUN apk update && apk add git
RUN go install github.com/cosmtrek/air@latest

ENV SERVER_ROOT /server
WORKDIR ${SERVER_ROOT}

CMD ["air", "-c", ".air.toml"]