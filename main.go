package main

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/mixpeal/rpssl/bootstrap"
	"github.com/mixpeal/rpssl/routes"
)

func main() {

	bootstrap.Init()

	app := fiber.New()

	app.Use(cors.New(cors.Config{AllowCredentials: true}))

	routes.Setup(app)

	app.Static("*", "./client/build", fiber.Static{
		Compress:      true,
		ByteRange:     true,
		Browse:        true,
		Index:         "index.html",
		CacheDuration: 10 * time.Second,
		MaxAge:        3600,
	})

	app.Listen(":8080")
}
