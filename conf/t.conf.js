const config = require('./local.conf.js').config;

config.capabilities = [

  //{
  //    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  //    // grid with only 5 firefox instances available you can make sure that not more than
  //    // 5 instances get started at a time.
  //    maxInstances: 1,
  //    browserName: 'chrome',
  //    platform: 'ANY',
  //    resolution: '1280x1024'
  //},
  {
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 1,
    browserName: 'firefox',
    platform: 'MAC',
    resolution: '1280x1024'
  },
  {
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 1,
    browserName: 'Edge',
    platform: 'ANY',
    resolution: '1280x1024'

  }
]

  config.services = ['browserstack']
  config.key = "1ySKstkupenTEdTGT3A7"
  config.user = "automation24"
  config.key = "1ySKstkupenTEdTGT3A7"
  browserstackLocal = false


  exports.config = config;