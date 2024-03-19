const express = require("express");
const { chatWithGPT, generateAudioFile } = require("../utills/openAi");
const router = express.Router();
router.post("/", async (req, res) => {
  const userInput = req.body.userInput;
  console.log(userInput);
  try {
    const response = await chatWithGPT(userInput);
    // const audioFile = await generateAudioFile(response);
    res.json({ response: response });
  } catch (error) {
    res.json({ error: "Error generating speech" });
  }
});
module.exports = router;
