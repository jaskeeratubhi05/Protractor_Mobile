exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4723/wd/hub',
  capabilities:{
	  'browserName':'chrome',
	  'appium-version':'1.8.0',
	  'platformName':'Android',
	  'platformVersion':'7.1.1',
	  'deviceName':'emulator-5554',
	  
  },
  specs: ['test1.js']
}