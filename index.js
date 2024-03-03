// Node js code
const express = require("express");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const chatWithGPT = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const message = response.choices[0].message.content;
    return message;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};

app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
  const userInput = req.body.userInput;

  if (
    userInput.toLowerCase() === "bye" ||
    userInput.toLowerCase() === "exit" ||
    userInput.toLowerCase() === "quit"
  ) {
    res.json({ response: "Goodbye!" });
    return;
  }

  const inputText =
    userInput +
    " 'it should be funny like Kevin Hart selling his Gran Coramino Cristalino tequila'";
  const response = await chatWithGPT(inputText);
  console.log("response---->", response);
  res.json({ response: response });
});
app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
