const { AllureRuntime } = require("allure-js-commons");
const CucumberJSAllureFormatter = require("allure-cucumberjs").default;

class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(options, new AllureRuntime({ resultsDir: "./allure-results" }), {});
  }
}

module.exports = Reporter;
