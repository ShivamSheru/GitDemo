describe('Protractor New', 
		
		function(){
	
	it('basic program', function(){
	
		// write a protractor code
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("3");	
		element(by.model("second")).sendKeys("4");
			element(by.id("gobutton")).click();
			browser.sleep(5000);
			
			//jasmine takes care of promise itself
			// if you want to take anything from console, protractor ll not be able to do as it is not able to resolve promise
			
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
			
			element(by.css("h2[class='ng-binding']")).getText().then(function(next){
				console.log(next);
			})
			//tagname[attribute='value']
	})
	
}
// first parameter - test suite name
//function will have all it blocks
)