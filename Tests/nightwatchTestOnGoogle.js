module.exports = {
  "NW test on Google": function (browser) {
    browser
      .url("http://www.google.com")
      .waitForElementVisible("body", 3000)
      .assert.title("Google")
      .assert.visible("input[type=text]")
      .setValue("input[type=text]", "Nightwatch JS")
      .pause(3000)
      .keys("\ue007")
      .pause(3000)
      .assert.not.containsText(
        "#main",
        "Nightwatch.js | Node.js powered End-to-End testing framework",
      )
      .end();
  },
};
