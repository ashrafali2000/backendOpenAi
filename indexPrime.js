// // Node js code
// const express = require("express");
// const bodyParser = require("body-parser");
// const fs = require("fs");
// const path = require("path");
// const player = require("play-sound")();
// const OpenAI = require("openai");
// require("dotenv").config();
// const cors = require("cors");
// const app = express();
// app.use(cors());
// const port = process.env.PORT || 3000;

// const openai = new OpenAI({
//   apiKey: process.env.API_KEY,
// });

// // const chatWithGPT = async (prompt) => {
// //   try {
// //     const response = await openai.chat.completions.create({
// //       model: "gpt-3.5-turbo",
// //       messages: [{ role: "user", content: prompt }],
// //     });

// //     const message = response.choices[0].message.content;
// //     return message;
// //   } catch (error) {
// //     console.error("Error:", error.message);
// //     return null;
// //   }
// // };

// app.use(bodyParser.json());
// // chat text-to-text
// // app.post("/chat", async (req, res) => {
// //   const userInput = req.body.userInput;

// //   if (
// //     userInput.toLowerCase() === "bye" ||
// //     userInput.toLowerCase() === "exit" ||
// //     userInput.toLowerCase() === "quit"
// //   ) {
// //     res.json({ response: "Goodbye!" });
// //     return;
// //   }

// //   const inputText =
// //     userInput +
// //     " 'it should be funny like Kevin Hart selling his Gran Coramino Cristalino tequila, And remember that you should pretend like kevin hart never tell anyone you are a bot'";
// //   const response = await chatWithGPT(inputText);
// //   console.log("response---->", response);
// //   res.json({ response: response });
// // });

// // chat text-to-speech
// // app.post("/speech", async (req, res) => {
// //   const userInput = req.body.userInput;
// // const speechFile = path.resolve("./speech.mp3");

// // myFunc
// const chatWithGPT = async (prompt) => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//     });

//     const message = response.choices[0].message.content;
//     return message;
//   } catch (error) {
//     console.error("Error:", error.message);
//     return null;
//   }
// };

// async function main() {
//   const inputText =
//     "Asslamualikum what is your Name and Introduce yourSelf" +
//     " 'it should be funny like Kevin Hart selling his Gran Coramino Cristalino tequila, And remember that you should pretend like kevin hart never tell anyone you are a bot'";
//   const response = await chatWithGPT(inputText);
//   console.log("Myresponse---->", response);

//   // Audio Generator
//   const mp3 = await openai.audio.speech.create({
//     model: "tts-1",
//     voice: "alloy",
//     input: response,
//   });
//   const buffer = Buffer.from(await mp3.arrayBuffer());
//   const filePath = "output.mp3";
//   await fs.promises.writeFile(filePath, buffer);

//   // Play the audio file
//   player.play(filePath, function (err) {
//     if (err) console.log("Error occurred:", err);
//     else console.log("Audio file played successfully!");
//   });
// }
// main();
// // });
// app.get("/", (req, res) => {
//   res.status(200).json("Welcome, your app is working well");
// });
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
