package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddNewAccountPage extends BasePage {

	WebDriver driver;
	
	public AddNewAccountPage(WebDriver driver) {
		this.driver = driver; 
	}
	
//		Element Library
	    @FindBy(how= How.XPATH, using= "//span[contains(text( ),'Bank & Cash' )]") WebElement Bank_And_Cash ;
	    @FindBy(how= How.XPATH, using="//a[contains(text( ),'New Account' )]") WebElement New_Account;
		
	    
		@FindBy(how= How.XPATH, using="//input[@id='account']") WebElement Account_Title;
		@FindBy(how= How.XPATH, using="//input[@id='description']") WebElement Description_field;
		@FindBy(how= How.XPATH, using="//input[@id='balance']") WebElement Initial_Balance;
	    
		@FindBy(how= How.XPATH, using="//input[@id='account_number']") WebElement Account_Number;
		@FindBy(how= How.XPATH, using="//input[@id='contact_person']") WebElement Contact_Person;
		@FindBy(how= How.XPATH, using="//input[@id='contact_phone']") WebElement Phone_field;
		
		@FindBy(how= How.XPATH, using="//input[@id='ib_url']") WebElement Internet_Banking_URL;
		@FindBy(how= How.XPATH, using="//button[contains(text( ),'Submit' )]") WebElement Submit_Button;
		
		
		
//		Interactive Method
		
		public void clickOnBankAndCashButton() {
			Bank_And_Cash.click();
		}
		
		public void clickOnNewAccountButton() {
			New_Account.click();
		}
		
		public void enterAccountTitle(String AccountTitle) {
			int genNum = randomGenerator(999);
			Account_Title.sendKeys(AccountTitle + genNum);
		}
		public void enterDescription(String Description) {
			Description_field.sendKeys(Description);
		}
		public void enterInitialBalance(String InitialBalance) {
			Initial_Balance.sendKeys(InitialBalance);
		}
		public void enterAccountNumber(String  AccountNumber) {
	
			Account_Number.sendKeys(AccountNumber);	
		}
			
		public void enterContactPerson(String ContactPerson) {
			Contact_Person.sendKeys(ContactPerson);
		}
			
		public void enterPhoneNumber(String Phone) {
			Phone_field.sendKeys(Phone);
		}
			
		public void enterInternetBanking(String InternetBankingURL) {
			int genNum = randomGenerator(999);
			Internet_Banking_URL.sendKeys(genNum + InternetBankingURL);
		}
		public void clickOnSubmitButton() {
			Submit_Button.click();
			
		}
		
		public String getPageTitle() {
	        return driver.getTitle();
		}
}
