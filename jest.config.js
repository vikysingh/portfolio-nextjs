module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "**/pages/**",
        "**/Componenti/**",
        "**/utils/**"
    ],
    modulePathIgnorePatterns: [
        "<rootDir>/studio/",
        "<rootDir>/node_modules/",
        "<rootDir>/.next/",
        "<rootDir>/tests/",
        "<rootDir>/Componenti/Context/"
    ]
}