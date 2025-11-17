export default {
  async fetch(request) {
    const url = new URL(request.url).searchParams.get('u');
    if (!url) return new Response('missing ?u=', { status: 400 });
    try {
      const r = await fetch(url);
      const text = await r.text();
      return new Response(text, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'text/html; charset=utf-8'
        }
      });
    } catch (err) {
      return new Response('Proxy Error: ' + String(err), { status: 502 });
    }
  }
};
