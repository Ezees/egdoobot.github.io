document.getElementById('sendBtn').addEventListener('click', async () => {  
const userInput = document.getElementById('userInput').value;  
const responseDiv = document.getElementById('response');

if (!userInput) {  
alert("Please enter a message!");  
return;  
}

const botToken = '6950119583:AAHraSUyVVVpfSajylMw_-ljNDSnKJVoyKo'; // Replace with your bot token  
const chatId = '545016822'; // Replace with your chat ID

try {  
const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {  
method: 'POST',  
headers: {  
'Content-Type': 'application/json',  
},  
body: JSON.stringify({  
chat_id: chatId,  
text: userInput,  
}),  
});

const data = await response.json();  
if (data.ok) {  
responseDiv.innerText = "Message sent successfully!";  
} else {  
responseDiv.innerText = "Error sending message.";  
}  
} catch (error) {  
console.error("Error:", error);  
responseDiv.innerText = "An error occurred.";  
}  
});
