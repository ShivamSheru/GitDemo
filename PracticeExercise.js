describe('Protractor Alert Steps', 
		
		function(){
	
	function SelectItems(product)
	{
		element.all(by.tagName("app-card")).each(function(items)
				{
					items.element(by.css("h4[class='card-title'] a")).getText().then(function(text)
					{
						if(text==product)
							{
								items.element(By.css("button[class*='btn-info']")).click();
							}
					}		
					)
				}
				)	
	}
	
	it('open non angular js website alerts', function(){
		
		browser.driver.manage().window().maximize();
	
		browser.get("https://qaclickacademy.github.io/protocommerce/");
	
		element(by.name("name")).sendKeys("Shivam");
		element(by.css("input[name='name']")).sendKeys("shipawar@gmail.com"); //exampleInputPassword1
		element(by.id("exampleInputPassword1")).sendKeys("Sheru");//form-check-input
		element(by.css("input[type='checkbox']")).sendKeys("Sheru");
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		element.all(by.name("inlineRadioOptions")).first();
		element(by.buttonText("Submit")).click();
		element(by.css("div[class*='success']")).getText().then(function(text)
				
		{
			console.log(text);
		})
		

		element(by.linkText("Shop")).click();
		// take 4 cards into list, traverse through each and every element. Go through each card in the list, for each index get the title of the card, if its matches
		//Iphone, 
	
	SelectItems("Samsung Note 8");
	SelectItems("iphone X");
		
	element(by.partialLinkText("Checkout")).getText().then(function(number)
	{
		console.log(number);
		var res = number.split("(");
		var Count = Number(res[1].trim().charAt(0));
		console.log(Count+"number of products in cart");
		expect(Count).toEqual(2);
	}		
	)
	
	})
	
})