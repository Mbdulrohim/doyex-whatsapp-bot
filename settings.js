//                     zimbot.inc.pressents
//                     2022 production
//                     Thanks to dikArdnt
// 👋 SOME BUG ARE FIXING AND ADD NEW PARTS by MR NIMA
//drips

const fs = require("fs");
const chalk = require("chalk");

//global api
global.APIs = {
 zenz: "https://zenzapi.xyz",
};
global.APIKeys = {
 "https://zenzapi.xyz": "01ABEB1E11", //Kalau habis beli sendiri
};

//other
global.owner = ["2347040468798"];
global.pemilik = ["2347040468798"]; //pemilik nomor
global.premium = ["2347040468798"]; //premium number
global.pengguna = "GC MANAGER"; //pengguna
global.botnma = "DOYEX TECHNICAL CONCEPTS"; //botnama,botname
global.ownernma = "Doyex Tech"; //ownernama,ownername
global.packname = "© doyextech"; // packname
global.author = "doyextech😎"; //authorname
global.sessionName = "session";
global.prefa = ["#", "!", "/", ""];
global.sp = "🔵";
global.alive = `Hello i am alive now...send me your commands

Download song type .yt 
Thanks for using...`;
global.mess = {
 success: "✅ Done!",
 admin: "you must be admin to use this cmd!",
 botAdmin: "zim bot must be admin neh!",
 owner: "This cmd is for doyex bot owner only",
 group: "oooh sorry this cmd is for groups only!",
 private: "goossssh it can only used in dms!",
 bot: "This cmd  its only for the bot host",
 wait: "wait doyex bot processing ",
 endLimit:
  "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
};
global.limitawal = {
 premium: "Infinity",
 free: 90,
};
global.rpg = {
 darahawal: 100,
 besiawal: 15,
 goldawal: 10,
 emeraldawal: 5,
 umpanawal: 5,
 potionawal: 1,
};

global.thumb = fs.readFileSync("./image/drips.jpg");
global.imgalive = fs.readFileSync("./image/drips.jpg");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
 fs.unwatchFile(file);
 console.log(chalk.redBright(`Update'${__filename}'`));
 delete require.cache[file];
 require(file);
});
