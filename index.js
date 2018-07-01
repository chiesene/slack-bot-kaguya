const Botkit = require('botkit');

if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

const controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: process.env.token
}).startRTM(function(err){
    if (err) {
        throw new Error(err);
    }
});

controller.hears('かぐや',['ambient'],function(bot,message) {
    bot.reply(message,'お可愛いこと');
});
 controller.hears(['うかぷよ'],['ambient'],function(bot,message) {
      bot.api.users.info({user: message.user}, function(error, response)  {
        let {name, real_name} = response.user;
        if(real_name == 'saito'){
          bot.reply(message,'うかぷよ');
        } else if(real_name == 'ukawa'){
          bot.reply(message,'うかぷよ');
        } else if(real_name == 'せね'){
          bot.reply(message, 'うかぷよ');
        } else if(real_name == 'hayasaka'){
          
        } else {
          bot.reply(message, '・・・・');
        }
    });
 });
 controller.hears('帰',['ambient'],function(bot,message) {
   bot.api.users.info({user: message.user}, function(error, response)  {
        let {name, real_name} = response.user;
        if(real_name == 'saito'){
          bot.reply(message,'お疲れ様です');
        } else if(real_name == 'ukawa'){
          bot.reply(message,'讎');
        } else if(real_name == 'せね'){
          bot.reply(message, 'お疲れ様です');
        } else if(real_name == 'hayasaka'){
          bot.reply(message,'お疲れ様です');
        } else {
          bot.reply(message, '・・・・');
        }
    });
     
 });
 controller.hears('眠',['ambient'],function(bot,message) {
    bot.api.users.info({user: message.user}, function(error, response)  {
        let {name, real_name} = response.user;
        if(real_name == 'saito'){
          bot.reply(message,'いっしょにねよ');
        } else if(real_name == 'ukawa'){
          bot.reply(message,'頑張りなさい');
        } else if(real_name == 'せね'){
          bot.reply(message, '寝てはどうですか？');
        } else if(real_name == 'hayasaka'){
          bot.reply(message,'・・・・');
        } else {
          bot.reply(message, '・・・・');
        }
    });
 });
 controller.hears('会長',['ambient'],function(bot,message) {
   bot.reply(message,'あら、会長');
 });
 controller.hears(['藤原', 'ふじわら', 'フジワラ'],['ambient'],function(bot,message) {
   bot.reply(message,'そうやって私が欲しいものを全て奪っていくんですね');
 });
 controller.hears('はーさか',['ambient'],function(bot,message) {
   bot.reply(message,'早坂');
 });
 controller.hears(['石上', 'いしがみ', '会計'],['ambient'],function(bot,message) {
   bot.reply(message,'石上くん');
 });
 controller.hears(['おはよう'],['ambient'],function(bot,message) {
   bot.reply(message,'おはようございます');
 });
 controller.hears(['こんにちは'],['ambient'],function(bot,message) {
   bot.reply(message,'こんにちは');
 });
 controller.hears(['こんばんは'],['ambient'],function(bot,message) {
   bot.reply(message,'こんばんは');
 });
 controller.hears(['おやすみ'],['ambient'],function(bot,message) {
   bot.reply(message,'おやすみなさい');
 });
 controller.hears(['ぺるそな','ペルソナ'],['ambient'],function(bot,message) {
   bot.reply(message,'汝は我、我は汝');
 });
 controller.hears(['藻っ'],['ambient'],function(bot,message) {
   bot.reply(message,'藻っ藻っ');
 });