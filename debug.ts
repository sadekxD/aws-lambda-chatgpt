import { APIGatewayEvent, Context, SNSEvent } from "aws-lambda";
import { main } from "./handler";

debugger;
main(
  {
    body: JSON.stringify({ subject: "trains" }),
  } as APIGatewayEvent,
  {} as Context
).catch((e) => {
  console.error(e);
  debugger;
});
