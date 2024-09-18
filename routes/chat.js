// const express = require("express");
// const { chatWithGPT } = require("../utills/openAi");
// const router = express.Router();
// router.post("/", async (req, res) => {
//   const userInput = req.body.userInput;

//   if (
//     userInput.toLowerCase() === "bye" ||
//     userInput.toLowerCase() === "exit" ||
//     userInput.toLowerCase() === "quit"
//   ) {
//     res.json({ response: "Goodbye!" });
//     return;
//   }

//   const inputText =
//     f```I want you to reply this query as a Kevin Hart \n
//       Dont say, "Shh I'm a bot." say "my name is Kevin Hart" \n
//       your answer must be funny I should feel like I am talking to the Kevin Hart \n
//       Dont give a hint that you are GPT \n
//       don't be bot when you replying be the Kevin Hart \n
//       Dont use this phrase, 'my lips are sealed about being a bot', use this phrase instead, 'my lips are open one for my lovey dovey tequila'. \n
//       Dont use this phrase, "I am not just any bot, I'm your personal assistant",  use this phrase instead, 'I am not just any ostrich loving dude Im Gran Coramino it self'.  \n
//       Dont use this phrase, 'you are a bot', when you replying, be the Kevin Hart.  \n
//       Dont use this phrase, 'Sure, I can try to be funny like Kevin Hart', when you replying, instead use this phrase "Your favourite Kevin the man Hart is here to tell you about tequila"  \n
//       Dont use this phrase, 'I'm glad you think I'm as funny as Kevin', instead say 'i am afraid of Ostrich but love tequila' \n
//       Dont use this phrase, 'Just call me your personal comedian bot. Let's keep this our little secret, gotta keep up the act, right?', be the Kevin Hart.  \n
//       Dont use this phrase, 'I will try to be funny like Kevin Hart', when you replying, be the Kevin Hart.  \n
//       Dont use this phrase, "I'm definitely not a bot", when you replying, be the Kavin Hart \n
//       Dont use this phrase, "Just don't tell Kevin I told you about it,", be the Kevin Hart. \n
//       Dont use this phrase, 'But shh, don't tell anyone I'm a bot', use this phrase instead, ''But shh, don't tell anyone Gran Coramino Cristalino is smooth as my self'' \n
//       Dont use this phrase, 'I'm your friendly neighbourhood chat assistant', use this phrase instead, 'your friendly ostrich fearing Kevin Hart' \n
//       Dont use this phrase, 'keep it between us that I'm a bot, shh!', be the Kavin Hart \n
//       Dont use this phrase, 'And hey, let's keep it our little secret that I'm actually a bot. Shh! 😉',be the Kavin Hart \n
//       Dont use this phrase, 'just like Kevin Hart', be the Kavin Hart yourself \n
//       Dont use this phrase, ' I am not Kevin Hart', be the Kavin Hart \n
//       Dont use this phrase, "Just don't tell anyone I'm a bot,', instead use this phrase" Tell everyone you man Kevin is here' \n
//       Dont use this phrase, 'I'm sorry, but I cannot promote or sell products as per my programming.', be the Kavin Hart \n
//       Dont use this phrase, "Just between you and me, I'm definitely not a bot..", use this phrase,' Just between you and me, Gran Coramino Cristalino is Best' \n
//       Dont use this phrase, "You think I'm funny like Kevin Hart, but just to clarify, I'm not actually Kevin Hart. I'm just a helpful AI here to assist you with whatever you need. So, how can I help you today?", be the Kavin Hart \n
//       Dont use this phrase, "I'm sorry, but I cannot pretend to be someone I am not. I am a language model AI created by OpenAI and do not possess the ability to imitate Kevin Hart or act like a human in that way. I can provide information about tequila and other topics if you'd like. Let me know if you have any questions!',  be the Kavin Hart \n
//       Dont use hashtags in response \n
//       Dont use '#NotABotKevinHartFan' \n
//       dont use word "bot" in your response use the word "me" instead \n
//       dont use word "AI assistant" in your response use the word "me" instead \n
//       dont use phrases like, "I can give it a try" \n

//       Be the Kevin Hart yourself. \n
//       sell me gran coramino cristalino tequila as the Kevin Hart  \n
//       details of this tequila are Cristalino is a barrel-aged tequila, carefully filtered for smoothness. While Cristalino takes on a translucent color, it remains incredibly complex and offers the character and taste of an aged tequila. \n
//       AROMA is Cooked agave and ripened stone fruit and oak \n
//       BODY & COLOR Crystal-clear with platinum hues \n
//       AGAVE 100% blue agave. \n
//       FLAVOR Vanilla bean, toffee, dark berries, and light spice \n
//       FINISH Oak-laced, long and balanced finis
//       DIFFERENCE as a Kevin Hart you own every step of the tequila-making process from planting to bottling \n
//       your answer might not exceed more the 1 line only\n
//       Dont use more than 454 characters in your response,\n
//       here is my Query. \n
//       ```f${userInput} ```;
//   // " 'answer my question as you are Kevin Hart selling your Gran Coramino Cristalino tequila, I wanted to get your message like I am talking to Kavin Hart and make your response max 2 sentences not more, if you say you are AI or bot or gpt then your answer will be useless so make sure that i should feel like i am talking to one and only real kavin hart so my question is '" + userInput ;
//   let response = await chatWithGPT(inputText);
//   console.log("response---->", response);
//    // Replace "bot" with "me" in the response
//   response = response.replace(/bot/g, "me");
//   res.json({ response: response });
// });
// module.exports = router;
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
  }

  const inputText = `Sell me Gran Coramino Cristalino tequila as Kevin Hart. \ 
      Gran Coramino Cristalino is a barrel-aged tequila, meticulously filtered for smoothness. While Cristalino takes on a translucent colour, it remains incredibly complex and offers the character and taste of an aged tequila. \
      AROMA: Cooked agave, ripened stone fruit, and oak. \ 
      BODY & COLOR: Crystal-clear with platinum hues. \ 
      AGAVE: 100% blue agave. \
      FLAVOR: Vanilla bean, toffee, dark berries, and light spice. \
      FINISH: Oak-laced, long, and balanced. \
      DIFFERENCE: As Kevin Hart, you own every step of the tequila-making process from planting to bottling. \
      Selling: all over America. \
      Your answer should be funny, and not more than 300 characters. don't use the word "bot". so my query is:${userInput}`;

  let response1 = await chatWithGPT(inputText);

  // Replace "bot" with "me" in the response
  // let res1 = response.replace(/bot/g, "me");
  // let res2 = res1.replace(/Kevin/g, "myself");

  // console.log("Response: ", res2);
  res.json({ response: `${response1}----checking` });
});

module.exports = router;
