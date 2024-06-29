const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "masterhelper@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "94720797915@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/MrMasterOfc/MASTER-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWWZa1G3R3c4TPADo0M";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2368f1b5d6ff724ae0c51.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94720797915,94763621705";
global.owner = process.env.OWNER_NUMBER || "94775228949";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";  //Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused'
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "94775228949";
global.read_status_from = process.env.READ_STATUS_FROM || "94775228949";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlENUJTWlZxUElIYnpxd0xGL0ZJWkNIdW9QNWdXTUZsM2dVOUxYME9GQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWlPWkRhcmU0QmRhVGdaS0FPcFpOR0V3S0I1UnZRNHRweUhROUxCL2NUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSUVjYUJBMUtmdzc0NWF4UnhiNmFzaUZLMS9tNms2K3FvbXo5YnVzTFg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSEJuUFdXS1JwYlV5UitRbE9TTi9MbDZucDh3clphRWozVGU1SXB3a21NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBZjVOMHNKTUhkZ2VjdmRvYkZROUlDMmxZSktCU1dTd1d3VUREYVlIa2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9RVm11ZTBDKzBhTFg5Vk5PK3hEVXFEYlI2Um15SkFKTG1Bb2RPUjExQ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ljdklxVFc2NmZTU2VUazRvNEM4ZnZjblNhUXVpT28wWmhuM3JZTU5FOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0xTWlozcU1aQ2tlcXRwQjYybDhTcXAxcVVLd0Q3VjN6N0pLTm80UnlIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5kMjlzSUlhTUl1ZFdTYmgvM2NPQWdFOWpUMnovYzJybTRhQ3JFSnVtVnNRT3NlT3MwdWZwblowN2djMkNNNUNMaGhDV0wvdGEvNWhVRDBHNE5GYUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiIxeThEUmtpOCsvQWdUNDBJTGZ0Z3lGSjYxSGZjSnBXZ0ZMUFRkUCt0VFRFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpeERxN0RsQVJ6TzBHZjgzNktELWFRIiwicGhvbmVJZCI6Ijk4NTA3NmZiLTBlY2QtNDlkNy04YTMyLTk3OGFhMGZkNGZlNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxYUYvMDNNVzRHVWdEVWlYeXFBTFlycU13OFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNORkZLNzhjeXJKY2Jzc2tDc2MxK25tRVh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRaU1E4NVQxIiwibWUiOnsiaWQiOiI5NDc3NTIyODk0OToxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJub3RpIGJveSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkRrdW9zSEVLZm4yYk1HR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieEpyVmdZdG9NdjZPWXZFZ1pnbXRtdEpZaUZ3eERGaWJwUit6dUxXVWpGWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSU5zS3FiSTliYzgwS0ppVDRXQm9HM2V5T05FUzNXNTZaYzRid1NUa0tOYnVSN281cm9hK3ErU2s0TUxCWWZtcUY2YnlVRldWNkxMNFllNmRiYXRmQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlF2ZHBxZUptVmt6NThlaEsvSGxHSW4ycG5jQ280YnZnMzNTK3dlVU9GNU00QmdxS2FHcThBZm1EcGJKVFdoRS8zWVkyUUI2My9Xd2NLOUtJRXVqd0FRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzUyMjg5NDk6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1NhMVlHTGFETCtqbUx4SUdZSnJaclNXSWhjTVF4WW02VWZzN2kxbEl4VyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTAzODkwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFME4ifQ==|
  "Add Your Session ID"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ",
  author: process.env.PACK_AUTHER || "Sahan",
  packname: process.env.PACK_NAME || "MASTER-MD",
  botname: process.env.BOT_NAME || "•ᴍᴀꜱᴛᴇʀ-ᴍᴅ•",
  ownername: process.env.OWNER_NAME || "mr charuka",
  errorChat: process.env.ERROR_CHAT || "94775228949",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
