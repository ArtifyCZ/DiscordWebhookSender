const Discord = require("discord.js")

const id = "" // Here put the webhook integration id
const token = "" // Here put the webhook token

const webhooksClient = new Discord.WebhookClient(id, token)

const content = "" // Here put the content of webhook
const username = "Bot" // Here put username (for the message)
const avatarURL = "" // Here put avatar url (for the message)

console.log("Attempting to send the message.")

webhooksClient.send(content, {
    username,
    avatarURL
}).then(
    () => {
        console.log("Successfully sent the webhook.")
        process.exit(0)
    },
    err => {
        console.error("Error: " + err)
        process.exit(1)
    }
)
