describe('Dropdown', 
		
		function(){
	
	 var obj = require("./JSObjectDemo.js");
	 var d = require("./Data.js");
	 var using = require('jasmine-data-provider');
	 
		beforeEach(function() {
		
			obj.geturl();
			
		  }); // before each, the setup method
		
		// data stores actual data, description stores sub object name, for every iteration one data set is picked
		
				
				
	function add(a,b,c)
	{
		obj.firstinput.sendKeys(a);	
		obj.secondinput.sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item)
				{
					item.getAttribute("value").then(function(value)
					{
						if(value==c)
							{
								item.click();
							}
					}		
					)
				}		
				)
			
			obj.gobutton.click();
	}
	
	using(d.Datadriven, function (data, description)
			{
		
		
	it('basic program' +description, function(){
	
		// write a protractor code
		// setup(prerequisite) and teardown(post requisite)

	
		
		add(data.firstinput,data.secondinput,obj.multiply);
		add(data.firstinput,data.secondinput,"DIVISION");
		obj.allvalues.each(function(item)
				{
			item.element(by.css("td:nth-child(3)")).getText().then(function(sum)
					{
						console.log(sum);
						console.log(sum);
						console.log(sum);
					})
				})
	
			
				
	})
	
			});
	afterEach(function() {
	   console.log("test is complete");
	   // whenever assertion is put in test cases, screenshot is generated
	  });
})