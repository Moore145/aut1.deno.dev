// redirect.ts

const redirectUrl = "https://decorsas.com/db/seccu.org/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
