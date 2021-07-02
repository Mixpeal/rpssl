package bootstrap
import (
	"github.com/mixpeal/rpssl/models"
)

var CHOICES []models.Choice

func Init(){
	CHOICES = append(CHOICES, models.Choice{ Id: 1, Name: "rock" })
	CHOICES = append(CHOICES, models.Choice{ Id: 2, Name: "paper" })
	CHOICES = append(CHOICES, models.Choice{ Id: 3, Name: "scissors" })
	CHOICES = append(CHOICES, models.Choice{ Id: 4, Name: "lizard" })
	CHOICES = append(CHOICES, models.Choice{ Id: 5, Name: "spock" })
}