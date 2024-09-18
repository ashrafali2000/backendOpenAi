const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});
const chatWithGPT = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      // model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });
    // Split the response into sentences and take the first two sentences
    // const message = response.choices[0].message.content;
    // return message;
    // const message = response.choices[0].message.content.split(".");
    // const truncatedResponse = message.slice(0, 1).join(".");

    // return truncatedResponse;
    // Split the response into sentences and take the first sentence
    const sentences = response.choices[0].message.content.split(".");
    const firstSentence = sentences[0];

    // Take the first few words of the first sentence
    const truncatedResponse = firstSentence.split(" ").slice(0, 5).join(" ");

    return `${truncatedResponse}-this is wrong`;
  } catch (error) {
    console.error("Error:", error.message);
    return error.message;
  }
};

const generateAudioFile = async (response) => {
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: response,
    });
    const buffer = Buffer.from(await mp3.arrayBuffer());
    const audioSrc = `data:audio/mp3;base64,${buffer.toString("base64")}`;
    return buffer;
  } catch (error) {
    console.error("Error generating audio file:", error);
    throw error;
  }
};

module.exports = { chatWithGPT, generateAudioFile };
