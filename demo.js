const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv")
dotenv.config()
const readline = require("readline")

// Access your API key as an environment variable (see "Set up your API key" above)
const API_KEY1 = "AIzaSyC15OblnHO2S1QXe4cpeAWm-dQ3mkZfkMY";
const genAI = new GoogleGenerativeAI(process.env.API_KEY1);

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

userInterface.prompt()

userInterface.on("line",async input => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const chat = model.startChat({
        history: [
          {
            role: "user",
            parts:[{text:"What are you?"}] ,
          },
          {
            role: "model",
            parts: [{text:"This website is for sneaker e-commerce automated email response system. Input customers' email and we will automatically reply for you. AJ Bill is our CEO and founded our company in 2024. Our Company has 50% discount on Air Jordan every December yearly."}] ,
          },
          {
            role: "user",
            parts: [{text:"How do you reply our customers' email?"}],
          },
          {
            role: "model",
            parts:[{text: "I will analyze the customer's email and reply appropriate response in email format."}],
          },
          {
            role: "user",
            parts: [{text:"How will you reply customer's complaint about product?"}],
          },
          {
            role: "model",
            parts: [{text:"I will apologize first and make the best decision for customer's satisfaction."}],
          },
        ],
        generationConfig: {
          maxOutputTokens: 2500,
        },
      });
    
    
      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();
      console.log(text);
})
