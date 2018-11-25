function car()
{
	
	this.firstinput = element(by.model("first"));
	this.secondinput = element(by.model("second"));
	this.gobutton = element(by.id("gobutton"));
	this.multiply = "MULTIPLICATION";
	this.allvalues = element.all(by.repeater("result in memory"));
	this.url = "https://juliemr.github.io/protractor-demo/";
	
	this.geturl=function()
	{
		browser.get("https://juliemr.github.io/protractor-demo/");
	}
	
	
	
	this.color = "Red";
	this.engine = "Turbo";
	this.brand = "Merc";
	this.search = "by.css('input')";
	this.model=function()
	{
		console.log("this is 2020 mode");
	};
	
	};
	
	module.exports = new car();
	/*a.model();
	console.log(a.engine);*/