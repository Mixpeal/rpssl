# Rock Paper Scissors Lizard Spock with Go and React JS

A Rock Paper Scissors Lizard Spock web application built with Go, React JS and Tailwind CSS.

## Demo URL:
<a href="https://rpssl.mixpeal.com" target="_blank">Demo Application</a>

## Screenshot:

<img src="/client/src/assets/img/MultiPlayer.png" alt="ScreenShot">

## Installation:

* **Clone the repo to your local machine**: `git clone`
* **Install the go packages**: `go get` 
* **Run the go application**: `go run main.go` 

## Available Endpoints.

| Endpoint | Description | Method | Params | 
|--------|-------------|-------------|-------------|
| [/choices](https://rpssl.mixpeal.com/choices) | Lists the available choices. | GET | - |
| [/choice](https://rpssl.mixpeal.com/choice) | Get a randomly generated choice. | GET | - |
| [/play](https://rpssl.mixpeal.com/play) | Play a round against a computer opponent. | POST | player |
| [/play-multi](https://rpssl.mixpeal.com/play-multi) | Play a round against another player. | POST | player_one, player_two |

