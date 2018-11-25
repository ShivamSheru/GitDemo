var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

  specs: ['Dropdown.js'],

capabilities : {
	  
	  'browserName':'chrome'
	  },
	
	onPrepare :function()
{
		  browser.driver.manage().window().maximize();
		  jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			        );
		  
		  
	},
	// if we hve 100 test cases and out of that 4 regression test cases. How do we run only these 4 test cases out of those 100
	suites :
	  {
		Smoke : ['ChainLocators.js','Actions.js'],
		Regression : 'Dropdown.js'
	  },
	  
	  jasmineNodeOpts: {
		    showColors: true, // Use colors in the command line report.
		  }

};