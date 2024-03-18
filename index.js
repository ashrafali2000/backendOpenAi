// Node js code
const express = require("express");
const bodyParser = require("body-parser");
// const PlayHT = require("playht");
// const OpenAI = require("openai");
// const fs = require("fs");
// const Gtts = require("gtts");
// const path = require("path");
require("dotenv").config();
const cors = require("cors");
const chatRoutes = require("./routes/chat");
const speechRoutes = require("./routes/speech");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// const openai = new OpenAI({
//   apiKey: process.env.API_KEY,
// });
// const chatWithGPT = async (prompt) => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//     });
//     const sentences = response.choices[0].message.content.split(".");
//     const firstSentence = sentences[0];
//     const truncatedResponse = firstSentence.split(" ").slice(0, 5).join(" ");

//     return truncatedResponse;
//   } catch (error) {
//     console.error("Error:", error.message);
//     return null;
//   }
// };

// async function generateAudioFile(response) {
//   try {
//     const mp3 = await openai.audio.speech.create({
//       model: "tts-1",
//       voice: "alloy",
//       input: response,
//     });
//     const buffer = Buffer.from(await mp3.arrayBuffer());
//     const audioSrc = `data:audio/mp3;base64,${buffer.toString("base64")}`;
//     return audioSrc;
//   } catch (error) {
//     console.error("Error generating audio file:", error);
//     throw error;
//   }
// }

app.use(bodyParser.json());
app.use(express.json());
// chat text-to-text
app.use("/chat", chatRoutes);

// chat text-to-speech
// old code
// app.post("/speech", async (req, res) => {
//   const userInput = req.body.userInput;
//   async function main() {
//     const inputText =
//     " 'answer as you are Kevin Hart selling your Gran Coramino Cristalino tequila, I wanted to get your message like I am talking to Kavin Hart and make your response max 2 sentences not more, if you say you are AI or bot or gpt then your answer will be useless so make sure that i should feel like i am talking to one and only real kavin hart so my question is '" + userInput ;
//     const response = await chatWithGPT(inputText);
//     console.log("Myresponse---->", response);
//     const mp3 = await openai.audio.speech.create({
//       model: "tts-1",
//       voice: "alloy",
//       input: response,
//     });
//     const buffer = Buffer.from(await mp3.arrayBuffer());
//     const filePath = "output.mp3";
//     await fs.promises.writeFile(filePath, buffer);
//   }
//   main();
//   setTimeout(() => {
//     res.sendFile(
//       filePath1,
//       { headers: { "Content-Type": "audio/mp3" } },
//       (err) => {
//         if (err) {
//           console.error("Error sending file:", err);
//           res.status(500).send("Internal Server Error");
//         } else {
//           console.log("File sent successfully", filePath1);
//           fs.promises.unlink(filePath1);
//         }
//       }
//     );
//   }, 12000);
// });

// new code
app.use("/speech", speechRoutes);

app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
