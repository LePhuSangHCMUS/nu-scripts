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
  NEW_USER: '🙋‍♂️new user',
  NEW_MONITOR: '🖥 new monitor',
  LATENCY: '👨‍💻 somebody has used the latency tool',
  NEW_STATUS_PAGE: '📈 new status page',
  NEW_SUBSCRIPTION: '💰💰💰 a user has subscribed!',
  NEW_PAYMENT: '🤑 a payment has processed',
  WEEKLY_REPORTS_SENDING: '✴️ Weekly reports are being sent',
  WEEKLY_REPORTS_SENT: '✅ Weekly reports have been sent',
  END_TRIAL_USERS: '✋ end of trial users today',
  TRIAL_USERS_SOON_END: '👀 users that end their trials in 3 days',
}

module.exports = {
  telegrambot,
  ACTIONS
}