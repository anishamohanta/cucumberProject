$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/scaliton/DemoWebShopLogin.feature");
formatter.feature({
  "name": "Demo Web Shop Lofin feature file",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Valid Login For Demo Web Shop for Admin user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The URL of the Demo Web Shop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"askmail@gmail.com\" as username",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"abc123\" as password",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is in a valid page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anisha@gmail.com",
        "ani@123"
      ]
    },
    {
      "cells": [
        "abhi@ymail.com",
        "abh4455"
      ]
    },
    {
      "cells": [
        "suni@gmail.com",
        "son33"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid Login For Demo Web Shop for Admin user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The URL of the Demo Web Shop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "skeleton.DemoWebShop.the_URL_of_the_Demo_Web_Shop(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"askmail@gmail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-D-87F1N62\u0027, ip: \u0027172.19.62.143\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\TRAINI~1.07\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:64532}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 09748905a59cec2b98ac66e5e41b4b4f\n*** Element info: {Using\u003did, value\u003dEmail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat skeleton.DemoWebShop.user_enters_as_username(DemoWebShop.java:31)\r\n\tat ✽.User enters \"askmail@gmail.com\" as username(file:///C:/cucumber/CucumberBDD/src/test/resources/scaliton/DemoWebShopLogin.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is in a valid page",
  "keyword": "Then "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_is_in_a_valid_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Valid Login For Demo Web Shop for Admin user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The URL of the Demo Web Shop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "skeleton.DemoWebShop.the_URL_of_the_Demo_Web_Shop(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"askmail@gmail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in a valid page",
  "keyword": "Then "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_is_in_a_valid_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid Login For Demo Web Shop for Admin user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The URL of the Demo Web Shop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "skeleton.DemoWebShop.the_URL_of_the_Demo_Web_Shop(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"askmail@gmail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in a valid page",
  "keyword": "Then "
});
formatter.match({
  "location": "skeleton.DemoWebShop.user_is_in_a_valid_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/scaliton/shout.feature");
formatter.feature({
  "name": "Shout Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Persons are within the range",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Sean is 10 meters away from Lucia",
  "keyword": "Given "
});
formatter.match({
  "location": "skeleton.StepDeifination.sean_is_meters_away_from_Lucia(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts \"Free Coffee\"",
  "keyword": "When "
});
formatter.match({
  "location": "skeleton.StepDeifination.sean_shouts(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucia hears the message \"Free Coffee\"",
  "keyword": "Then "
});
formatter.match({
  "location": "skeleton.StepDeifination.lucia_hears_the_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Persons are not in the range",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Sean is 100 meters away from Lucia",
  "keyword": "Given "
});
formatter.match({
  "location": "skeleton.StepDeifination.sean_is_meters_away_from_Lucia(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts \"Free Coffee\"",
  "keyword": "When "
});
formatter.match({
  "location": "skeleton.StepDeifination.sean_shouts(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucia hears no message",
  "keyword": "Then "
});
formatter.match({
  "location": "skeleton.StepDeifination.lucia_hears_no_message()"
});
formatter.result({
  "status": "passed"
});
});