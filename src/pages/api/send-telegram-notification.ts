import type { NextApiRequest, NextApiResponse } from "next";
import TelegramBot from "node-telegram-bot-api";

type Data = {
  status: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN!, { polling: false });
  await bot.sendMessage(
    process.env.TELEGRAM_CHAT_ID!,
    `${req.body.title}:\n\n${JSON.stringify(req.body.notification, null, 2)}`
  );
  res.status(200).json({ status: "success" });
};

export default handler;
