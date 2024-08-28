const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your bot token
const token = "6950119583:AAHraSUyVVVpfSajylMw_-ljNDSnKJVoyKo";
const bot = new TelegramBot(token, { polling: true });

// Listen for messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Simple echo response
    bot.sendMessage(chatId, `Hello ${msg.from.first_name}, you said: ${text}`);
});

// Start Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
