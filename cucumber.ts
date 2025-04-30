module.exports = {
  default: {
    require: [
      "ts-node/register",
      "./src/test/steps/bbSteps.ts",
      "./reporter.ts",
    ], // Direct reference to step file
    paths: ["./src/test"],
    formatOptions: {
      snippetInterface: "async-await",
    },
    dryRun: false,
    parallel: 3,
    format: ["./reporter.js"],
  },
};
