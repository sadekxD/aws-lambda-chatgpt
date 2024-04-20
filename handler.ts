import { APIGatewayEvent, Context } from "aws-lambda";
import OpenAI from "openai";
import { env } from "./lib/env";
import { resend } from "./lib/sendEmail";

type RequestBody = {
  subject: string;
};

export async function main(event: APIGatewayEvent, context: Context) {
  const body = <RequestBody>JSON.parse(event.body!);

  if (!body || !body.subject)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid request!" }),
    };

  const openai = new OpenAI({ apiKey: env.OPENAI_KEY });

  const prompt = `Tell me a joke about ${body.subject}`;

  const gptResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  const result = gptResponse.choices[0].message.content;

  await resend.emails.send({
    // from: `Irfan from ${APP_NAME} <irfan@webship.ing>`,
    from: "onboarding@resend.dev",
    to: "sadekirfan3@gmail.com",
    subject: "Joke",
    text: result as string,
  });

  return {
    statusCode: 200,
    headers: {},
    body: result,
  };
}
