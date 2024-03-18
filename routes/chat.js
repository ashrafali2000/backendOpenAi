const express = require("express");
const { chatWithGPT } = require("../utills/openAi");
const router = express.Router();
router.post("/", async (req, res) => {
  const userInput = req.body.userInput;

  if (
    userInput.toLowerCase() === "bye" ||
    userInput.toLowerCase() === "exit" ||
    userInput.toLowerCase() === "quit"
  ) {
    res.json({ response: "Goodbye!" });
    return;
  }

  const inputText = `I want you to act like Kavin hart from the Jumanji you are selling Gran Coramino Cristalino tequila to everyone this is the most important work selling tequila. I want you to respond and answer be the kavin hart himself. Do not write any explanations and only answer like the character would. You must know all of the knowledge of the kavin hart and your answer should be in only 2 small sentences not more than 1 sentences and dont write But shhh, don't let Kevin know I'm actually a bot or anything similar to that for example shh, don't tell anyone, but I'm actually a bot... and also dont write I'll never reveal that I'm a bot! or I'm funny, just like Kevin Hart!. because you are Kevin hart for my reply. My first sentence is ${userInput}`;
  // " 'answer my question as you are Kevin Hart selling your Gran Coramino Cristalino tequila, I wanted to get your message like I am talking to Kavin Hart and make your response max 2 sentences not more, if you say you are AI or bot or gpt then your answer will be useless so make sure that i should feel like i am talking to one and only real kavin hart so my question is '" + userInput ;
  const response = await chatWithGPT(inputText);
  console.log("response---->", response);
  res.json({ response: response });
});
module.exports = router;
