const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = "5455394352:AAHObwrEpP1pq6QP9afWBrvknhIqPJzHBSU";
// read the doc from https://github.com/yagop/node-telegram-bot-api to know how to catch the chatId
const chatId = "-676426408";

const bot = new TelegramBot(token, { polling: false });



const telegrambot = (message ="Okay", json) => {
  try {
    bot.sendMessage(chatId,message, {
    //   parse_mode: 'html'
    });
  } catch (err) {
    console.log('Something went wrong when trying to send a Telegram notification', err);
  }
}
const ACTIONS = {
  NEW_USER: 'πββοΈnew user',
  NEW_MONITOR: 'π₯ new monitor',
  LATENCY: 'π¨βπ» somebody has used the latency tool',
  NEW_STATUS_PAGE: 'π new status page',
  NEW_SUBSCRIPTION: 'π°π°π° a user has subscribed!',
  NEW_PAYMENT: 'π€ a payment has processed',
  WEEKLY_REPORTS_SENDING: 'β΄οΈ Weekly reports are being sent',
  WEEKLY_REPORTS_SENT: 'β Weekly reports have been sent',
  END_TRIAL_USERS: 'β end of trial users today',
  TRIAL_USERS_SOON_END: 'π users that end their trials in 3 days',
}

module.exports = {
  telegrambot,
  ACTIONS
}