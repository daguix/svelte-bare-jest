module.exports = {
    transform: {
        "^.+\\.svelte$": "jest-transform-svelte",
        "^.+\\.m?js$": "babel-jest"
    },
    moduleFileExtensions: ["js", "svelte"],
    // testPathIgnorePatterns: ["node_modules"]
    // bail: false,
    transformIgnorePatterns: ["/node_modules/(?!navaid).+\\.js$"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
    // testURL: "https://someurl.com"
};
