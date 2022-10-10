// Copyright (©) 2020-2021 Shin#0484. All rights reserved. MIT License.

const qrcode = require("qrcode");
const tempy = require("tempy");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const qrOutput = tempy.file({ extension: "png" });
  message.channel.startTyping();
  if (args.length > 0) {
    qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: qrOutput,
          name: "qr.png"
        }]
      });
    });
  } else {
    message.channel.stopTyping();
    message.reply("You need to provide some text to generate a QR code!");
  }
};

exports.aliases = [];
