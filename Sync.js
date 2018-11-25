describe('Protractor Alert Steps', 
		
		function(){
	
	it('open non angular js website alerts', function(){
		
		browser.driver.manage().window().maximize();
		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");
	
		element(by.id("confirmbtn")).click();
		
		browser.switchTo().alert().accept();
		
		
				}	
				)
			
					
})