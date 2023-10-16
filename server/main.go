package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	fmt.Println("hello world")

	app := fiber.New()

	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("I am alive..")
	})

	log.Fatal(app.Listen(":4000"))
}
