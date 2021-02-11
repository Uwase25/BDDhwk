package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends BasePage {

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;

	}   

//	Element Library
	@FindBy(how = How.XPATH, using = "//input[@id='username']") WebElement userName;
	@FindBy(how = How.XPATH, using = "//input[@id='password']") WebElement Password;
	@FindBy(how = How.XPATH, using = "//button[@name='login']") WebElement SignIn;

	
//	Interactive Method
	
	public void enterCredentials(String username, String password) {
		userName.sendKeys(username);
		Password.sendKeys(password);

	}

	public void clickOnSignInButton() {
		SignIn.click(); 
	}

	public String getPageTitle() {
        return driver.getTitle();
	}



	
	
}