describe('Action Demo', function(){
	
	it('open a website', function(){
		
		browser.get("https://posse.com");
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
	
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
		{
			browser.sleep(5000);
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island']")).click();
			
			
			
		}		
		)
		
		
	})
	
}
// first parameter - test suite name
//function will have all it blocks
)