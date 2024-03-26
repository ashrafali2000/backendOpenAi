const express = require("express");
const { chatWithGPT, generateAudioFile } = require("../utills/openAi");
const router = express.Router();
router.post("/", async (req, res) => {
  const userInput = req.body.userInput;
  console.log(userInput);
  // try {
  const response = await chatWithGPT(userInput);
  
  // Replace "bot" with "me" in the response
  let res1 = response.replace(/bot/g, "me");
  let res2 = res1.replace(Kevin/g, "myself");
  // const audioFile = await generateAudioFile(response);
  res.json({ response: res2 });
  // } catch (error) {
  //   res.json({ error: "Error generating speech" });
  // }
});
module.exports = router;
