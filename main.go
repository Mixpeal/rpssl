package main

import (
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

	app.Static("*", "./client/build")
	// app.Static("/multi", "./client/build")

	app.Listen(":8080")
}
