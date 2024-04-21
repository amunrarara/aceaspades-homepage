import { useEffect } from "react";

export default function NostrProfile() {
  useEffect(() => {
    const n = document.createElement("script");
    n.type = "text/javascript";
    n.async = !0;
    n.src =
      "https://cdn.jsdelivr.net/gh/nostrband/nostr-embed@0.1.16/dist/nostr-embed.js";
    n.onload = function () {
      // @ts-expect-error Just expect it!
      nostrEmbed.init(
        "npub1xzrkzsrnr83vn7h0udq6tnapwpswy5equlrtkn3nu0e0anlmzynqne0qap",
        "#nostr-embed-npub1xzrkzsrnr83vn7h0udq6tnapwpswy5equlrtkn3nu0e0anlmzynqne0qap",
        "",
        { showZaps: true, showFollowing: true }
      );
    };
    const a = document.getElementsByTagName("script")[0];
    // @ts-expect-error Just expect it!
    a.parentNode.insertBefore(n, a);
  }, []);
  return (
    <div id="nostr-embed-npub1xzrkzsrnr83vn7h0udq6tnapwpswy5equlrtkn3nu0e0anlmzynqne0qap" />
  );
}
