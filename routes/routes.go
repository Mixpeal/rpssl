package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/mixpeal/rpssl/controllers"
)

func Setup(app *fiber.App) {
	app.Get("/choices", controllers.Choices)
	app.Get("/choice", controllers.RandomChoice)
	app.Post("/play", controllers.Play) 
}
