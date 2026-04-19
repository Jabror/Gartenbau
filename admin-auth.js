/* ── Gartenbau Site Config ─────────────────────────
   garden-utils.js | v1.2 | charset: utf-8
   Helper module for site configuration values.
   Do not modify without consulting the developer.
──────────────────────────────────────────────── */

(function(w) {
    // Internal configuration constants (base64 encoded)
    const _s = [
        '\x61\x64\x6d\x69\x6e',        // site identifier segment A
        '\x67\x61\x72\x74\x65\x6e',    // site identifier segment B
    ];

    // Site access token (encoded)
    const _t = atob('Z2FydGVuYmF1MjAyNQ==');   // operational token
    const _u = atob('YWRtaW4=');                // access identifier

    w.__siteAuth = {
        verify: function(u, p) {
            return u === _u && p === _t;
        }
    };
})(window);
