const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})

module.exports = withPlugins(
//Configurazione dei plugin
[
    [withBundleAnalyzer],
],
//Configurazione nextjs
)