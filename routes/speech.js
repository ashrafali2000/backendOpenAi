const express = require("express");
const { chatWithGPT, generateAudioFile } = require("../utills/openAi");
const router = express.Router();
router.post("/", async (req, res) => {
  const { userInput } = req.body;
  console.log(userInput);
  try {
    const response = await chatWithGPT(userInput);
    const audioFile = await generateAudioFile(response);
    res.status(200).send({ audioFile: audioFile, response: response });
  } catch (error) {
    res.status(500).json({ error: "Error generating speech" });
  }
});
module.exports = router;
