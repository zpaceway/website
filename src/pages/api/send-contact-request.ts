import type { NextApiRequest, NextApiResponse } from "next";
import TelegramBot from "node-telegram-bot-api";

type Data = {
  status: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN!, { polling: true });
  await bot.sendMessage(
    process.env.TELEGRAM_CHAT_ID!,
    `New contact form request send by:\n\n${JSON.stringify(req.body, null, 2)}`
  );
  res.status(200).json({ status: "success" });
};

export default handler;
