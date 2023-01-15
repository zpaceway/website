import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuid4 } from "uuid";

const middleware = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (!request.cookies.get("user-id")) response.cookies.set("user-id", uuid4());

  response.headers.set("x-version", "13");
  return response;
};

export default middleware;
