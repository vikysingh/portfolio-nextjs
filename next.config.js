const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})
const withPWA = require("next-pwa")

module.exports = withPlugins(
//Configurazione dei plugin
[
    [withBundleAnalyzer],
    [withPWA, {
        pwa: {
            dest: "public"
        }
    }]
],
//Configurazione nextjs
)