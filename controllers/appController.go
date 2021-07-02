package controllers

import (
	"math/rand"

	"github.com/gofiber/fiber/v2"
	"github.com/mixpeal/rpssl/bootstrap"
)

type Choice struct {
	Id   int8
	Name string
}

func Choices(c *fiber.Ctx) error {
	return c.JSON(bootstrap.CHOICES)
}

func RandomChoice(c *fiber.Ctx) error {
	var index = rand.Intn(5)
	return c.JSON(bootstrap.CHOICES[index])
}

func Play(c *fiber.Ctx) error {
	var data map[string]int

	if err := c.BodyParser(&data); err != nil {
		return err
	}
	var results = [12]string{"win", "lose", "tie"}
	var player = data["player"]
	var computer = 1 + rand.Intn(5-1+1)

	result := processResult(player, computer)

	return c.JSON(fiber.Map{
		"results":  results[result],
		"player":   player,
		"computer": computer,
	})
}

// func processResult(p1 int, p2 int) int {
// 	var result int
// 	switch p1 - p2 {
// 	default:
// 		result = 1 // player 1 loses
// 	case 0:
// 		result = 2 // Tie
// 	case -3, -2, -1, 1, 2, 4:
// 		result = 0 // player 1 win
// 	}
// 	return result
// }

func processResult(p1 int, p2 int) int {
	var result int
	calc := p1 - p2
	if calc == 0 {
		result = 2
	} else if p1 == 1 && (calc == -2 || calc == -3){
		result = 0 // player 1 win
	}else if p1 == 2 && (calc == 1 || calc == -3){
		result = 0 // player 1 win
	}else if p1 == 3 && (calc == 1 || calc == -1){
		result = 0 // player 1 win
	}else if p1 == 4 && (calc == 2 || calc == -1){
		result = 0 // player 1 win
	}else if p1 == 5 && (calc == 4 || calc == 2){
		result = 0 // player 1 win
	}else{
		result = 1 // player 1 loses
	}
	
	return result
}
