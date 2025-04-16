//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "mouketoudavy6@gmai.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "242044316287";
global.owner = process.env.OWNER_NUMBER || "242050336960";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBhSWJPekt3RjlPSzZPbzArQWxaeUNOZm00K3pQM0ZxNHY5VkN5QXFsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG5Kdi9KdDBnOSt3S1NsVjl3MC93V2h0cDhUdUJwdVJVeStoQ0F1enlXdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTGpUOXVrRktGQllNNDVyTFdWNUhjcWpqMXdQRGZTaGRVU3JmMlVrUzJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYU1BMV096S1l1VEpna2VDUzR0TTJaTFFua2w5Q3lNNjlwekNqS3Q0NFYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MY3dLMlQvVkloVGQ0NTZXOVhHdHZLK2tkbStjNTllc1RoLzdiVWpPMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZkbjBKdklhN2tWUkw0NHhKWXNpQnpydkxHbGJMbUZRMERqSlRvbW8wakk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hvUSt6R2ZZRXdHUEJLZGExZ1ZrMEJIZkQydmZLdkpPN3pOT3pFc2NYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3JGYjdEMktQT1VzNHJhVmVtci9ERDNaOGhiTytLcWlhUlVDWUo0YVcycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp4M24weWxIdGFEWWdiQmhSNmlrUmo5eGhtTm9ocUFtZW1LTlF0T0xnRmQ2SmdWV2g5WU0yaHh6M1J6aXlBNmFFVUkyaytYK1pDeitJellQUmRvZ0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJ3bjllejdrZGpzWG10WjV5U2tNNVNLNk4wd0wxZTVyd1FwMDk4b1NTMFl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA2NjQ3Mjk5M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOTlDOTIwMDMwOEQxN0QyOUU2NjIxNjQyMThGMjVCRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0ODI3MDE3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDIwNjY0NzI5OTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDE1RDE1N0ZBQTAwMzhCNUE1NUNENTIwQjQ4MDMxN0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDgyNzAxN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjQyMDY2NDcyOTkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVGQzQ3QkJERENEMjI0NEFEQTE2QTIzRjJCQkRDODM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQ4MjcwMTl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA2NjQ3Mjk5M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NEY0MzVDOTY4NjUzMUIyNjY1QzZDOTA4Njk1REY5MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0ODI3MDIwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqd2o4RDlPMVNXSzRKWGVsc2FLNXNRIiwicGhvbmVJZCI6ImJiNjRhYmJhLTk3MWYtNDc1Yy05NmUxLTExYzdhNjEzNGZjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaL2x2YkNZMVZlSGxBMnhPL1pyV0V3eTVPbms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2JuRUFqMURTZWdvYVEzZWNGQU9mdTc1TnFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFUWkRCTUc0IiwibWUiOnsiaWQiOiIyNDIwNjY0NzI5OTM6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZKA8J2SkPCdkpMg8J2RrfCdkpDwnZKT8J2SiPCdkobwnZKT4p2DIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPREtwZXdDRVBuay83OEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBOGVDaERMemkwZHRmbS9NT0lHWG5sVVZWeCtTL08xc3lPODBFejJ6M1VVPSIsImFjY291bnRTaWduYXR1cmUiOiJWWWFYaitiNnZiMmpFZFlucXA0Tk5JNnhRU01wZWpGU1lLMzVETVB4YTZiRmtQdVhYNG04QUdoSVRzNnEzcnp0azViOFpscWRyR2hsK0d5bFR5bnVEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiak1LdVBDRm5qczlaOGMzOG9jeGxVeHY2VjlKMHVjcjJnYnZIbHVyclNPc0VPNDU2anF4WWdQVTFGbW5lNjgwakJNQ2lkc3hnTmRvZHhyaXN3Z2gzQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNjY0NzI5OTM6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRUEhnb1F5ODR0SGJYNXZ6RGlCbDU1VkZWY2Zrdnp0Yk1qdk5CTTlzOTFGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0ODI3MDE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUt2MyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF Twilight x`",
  author: process.env.PACK_AUTHER || " Twilight x",
  packname: process.env.PACK_NAME || "shadow",
  botname: process.env.BOT_NAME || "Twilight shadow bot",
  ownername: process.env.OWNER_NAME || "Twilight x",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "prívate",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
