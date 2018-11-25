describe('Chain Locator Demo', 
		
		function(){
	
	function add(a,b)
	{
		element(by.model("first")).sendKeys(a);	
		element(by.model("second")).sendKeys(b);
			element(by.id("gobutton")).click();
	}
	
	it('basic program', function(){
	
		// write a protractor code
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		
		add(2,3);
		add(4,5);
		add(2,3);
		add(4,5);
			
			element.all(by.repeater("result in memory")).count().then(function(text)
					{
				
					console.log(text);
					})
					
				element.all(by.repeater("result in memory")).each(function(item)
					{
				item.element(by.css("td:nth-child(3)")).getText().then(function(sum)
						{
							console.log(sum);
						})
					})
			
			
			element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
			{
				console.log(text)
			}		
			);
			})
			//tagname[attribute='value']
})