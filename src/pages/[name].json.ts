import type { APIRoute } from "astro";

export const get: APIRoute = ({ params, request }) => {
  return {
    body: JSON.stringify({
      name: params.name,
      path: new URL(request.url).pathname,
    }),
  };
};
