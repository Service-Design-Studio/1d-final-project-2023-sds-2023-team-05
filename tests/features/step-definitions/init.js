// ** VERSION FOR UBUNTU WSL, WITH HEADLESS CHROME **
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
// var options = new chrome.Options().headless();
var options = new chrome.Options();

const URLS = {
	STUDENT_LOCAL: 'http://localhost:3000',
	TRAINER_LOCAL: 'http://localhost:3001',
	STUDENT_PROD: 'https://yes-v6tbj6dv6a-as.a.run.app',
	TRAINER_PROD: 'https://e-blyqvsvnka-as.a.run.app',
	CHATBOT_PROD: '',
	BACKEND_LOCAL: 'http://localhost:4000',
	BACKEND_PROD: 'https://faqapi-service-mgn7slqt5a-as.a.run.app',
};

const width = 800;
const height = 999;
setDefaultTimeout(60 * 1000);

const initDriver = () => {
	const driver = new Builder()
		.forBrowser('chrome')
		.setChromeOptions(options)
		.build();
	driver.manage().window().setRect({ width: width, height: height });
	return driver;
};

Before(async function () {
	//declaring global variable for each scenario
	global.driver = initDriver();
	// global.baseUrl = URLS.STUDENT_LOCAL;

	await driver.get(URLS.STUDENT_PROD);
	await driver.sleep(500);
});

After(async function () {
	await driver.quit();
});
