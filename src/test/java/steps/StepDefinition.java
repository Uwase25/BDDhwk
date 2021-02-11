package steps;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AddNewAccountPage;
import page.LoginPage;
import util.BrowserFactory;

public class StepDefinition  {

	WebDriver driver;
	LoginPage loginPage;
	AddNewAccountPage addNewAccountPage;
	
	
	@Before
	public void beforeRun() {
		driver = BrowserFactory.startBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		addNewAccountPage= PageFactory.initElements(driver, AddNewAccountPage.class);
	}
 
//  Defining steps 
	@Given("^User is on Techfios login page$")

	public void User_is_on_Techfios_login_page() {

		driver.get("https://techfios.com/billing/?ng=admin/");

	}

	@When("Users enter \"([^\"]*)\" and \"([^\"]*)\"$")

	public void Users_enter_and(String username, String password) throws Throwable {
		loginPage.enterCredentials(username, password);
		Thread.sleep(2000);
	}

	@When("^Users click on signin button$")

	public void Users_click_on_signin_button() throws Throwable {
		loginPage.clickOnSignInButton();
		Thread.sleep(2000);
	}

	@When("^Users should land on Dashboard page$")

	public void Users_should_land_on_Dashboard_page() throws IOException {

		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());

		loginPage.takeScreenshotAtEndOfTest(driver);
	}

	@When("^User clicks on Bank And Cash$")
	
	public void User_clicks_on_Bank_And_Cash() throws Throwable {
		addNewAccountPage.clickOnBankAndCashButton();
		Thread.sleep(2000);
	}
	
	@When ("^User clicks on New Account$") 
	
	public void User_clicks_on_New_Account () throws Throwable {
		addNewAccountPage.clickOnNewAccountButton();
		Thread.sleep(2000);
	}
	
	@Then("^User should land on Accounts page$")
	
	public void user_should_land_on_Accounts_page() throws Throwable {
	   Assert.assertEquals("Accounts- iBilling", addNewAccountPage.getPageTitle());
	   addNewAccountPage.takeScreenshotAtEndOfTest(driver);
	   
	} 
	
	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	
	public void user_enters_and_and_and_and_and_and(String AccountTitle, String Description, String InitialBalance, String AccountNumber, String ContactPerson, String Phone, String InternetBankingURL) throws Throwable {
		addNewAccountPage.enterAccountTitle(AccountTitle);
		addNewAccountPage.enterDescription(Description);
		addNewAccountPage.enterInitialBalance(InitialBalance);
		addNewAccountPage.enterAccountNumber(AccountNumber);
		addNewAccountPage.enterContactPerson(ContactPerson);
		addNewAccountPage.enterPhoneNumber(Phone);
		addNewAccountPage.enterInternetBanking(InternetBankingURL);
		Thread.sleep(2000);
	}
	
	@Then("^User clicks on Submit Button$")
	
	public void  User_clicks_on_Submit_Button() throws Throwable {
		addNewAccountPage.clickOnSubmitButton();
		addNewAccountPage.takeScreenshotAtEndOfTest(driver);
		
	}
	
	@After
	public void tearDown() {
	driver.close();
	driver.quit();
	}
}

