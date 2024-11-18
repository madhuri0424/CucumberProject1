package stepDefinitions;

import org.openqa.selenium.WebDriver;

import commonFunctions.FunctionLibrary;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class ERPSteps {
	WebDriver driver;
	
	@Given("Launch browser as")
	public void launch_browser_as() throws Throwable 
	{
	    driver = FunctionLibrary.startBrowser();
	}

	@When("launch url")
	public void launch_url() 
	{
	    FunctionLibrary.openUrl();
	}

	@When("wait for username with {string} and {string} and {string}")
	public void wait_for_username_with_and_and(String Ltype, String Lvalue, String Mywait)
	{
	    FunctionLibrary.waitForElement(Ltype, Lvalue, Mywait);
	}

	@When("Enter username with {string} and {string} and {string}")
	public void enter_username_with_and_and(String Testdata, String Ltype, String Lvalue) 
	{
	    FunctionLibrary.typeAction(Ltype,Lvalue,Testdata);
	}

	@When("Enter password with {string} and {string} and {string}")
	public void enter_password_with_and_and(String Testdata, String Ltype, String Lvalue)
	{
	    FunctionLibrary.typeAction(Ltype, Lvalue,Testdata);
	}

	@When("Click login button with {string} and {string}")
	public void click_login_button_with_and(String Ltype, String Lvalue) throws Throwable
	{
		Thread.sleep(2000);
		FunctionLibrary.clickAction(Ltype, Lvalue);
	}

	@When("wait for supplierlink with {string} and {string} and {string}")
	public void wait_for_supplierlink_with_and_and(String Ltype, String Lvalue, String Mywait)
	{
		FunctionLibrary.waitForElement(Ltype, Lvalue, Mywait);
	}

	@When("click supplierlink with {string} and {string}")
	public void click_supplierlink_with_and(String Ltype, String Lvalue)
	{
		FunctionLibrary.clickAction(Ltype, Lvalue);
	}

	@When("wait for AddIcon with {string} and {string} and {string}")
	public void wait_for_AddIcon_with_and_and(String Ltype, String Lvalue, String Mywait) 
	{
		FunctionLibrary.waitForElement(Ltype, Lvalue, Mywait);
	}

	@When("click AddIcon button with {string} and {string}")
	public void click_AddIcon_button_with_and(String Ltype, String Lvalue) 
	{
		FunctionLibrary.clickAction(Ltype, Lvalue);
	}

	@When("wait for supplier number with {string} and {string} and {string}")
	public void wait_for_supplier_number_with_and_and(String Ltype, String Lvalue, String Mywait) 
	{
		FunctionLibrary.waitForElement(Ltype, Lvalue, Mywait);
	}

	@When("capture supplier number with {string} and {string}")
	public void capture_supplier_number_with_and(String Ltype, String Lvalue) throws Throwable 
	{
         FunctionLibrary.captureSupp(Ltype, Lvalue);
	}

	@When("Enter in {string} with {string} and {string}")
	public void enter_in_with_and(String Testdata, String Ltype, String Lvalue)
	{
		FunctionLibrary.typeAction(Ltype,Lvalue,Testdata);
	}

	@When("click Add button with {string} and {string}")
	public void click_Add_button_with_and(String Ltype, String Lvalue)
	{
		FunctionLibrary.clickAction(Ltype, Lvalue);
	}

	@When("wait for confirm OK button with {string} and {string} and {string}")
	public void wait_for_confirm_OK_button_with_and_and(String Ltype, String Lvalue, String Mywait) 
	{
		FunctionLibrary.waitForElement(Ltype, Lvalue, Mywait);
	}

	@When("click confirm OK button with {string} and {string}")
	public void click_confirm_OK_button_with_and(String Ltype, String Lvalue) 
	{
		FunctionLibrary.clickAction(Ltype, Lvalue);
	}

	@When("wait for Alert OK button with {string} and {string} and {string}")
	public void wait_for_Alert_OK_button_with_and_and(String Ltype, String Lvalue, String Mywait)
	{
		FunctionLibrary.waitForElement(Ltype, Lvalue, Mywait);
	}

	@When("click for Alert OK button with {string} and {string}")
	public void click_for_Alert_OK_button_with_and(String Ltype, String Lvalue)
	{
		FunctionLibrary.clickAction(Ltype, Lvalue);
	}

	@When("verify suppliernumber")
	public void verify_suppliernumber() throws Throwable 
	{
          FunctionLibrary.supplierTable();
	}

	@When("click logout with {string} and {string}")
	public void click_logout_with_and(String Ltype, String Lvalue) 
	{
         FunctionLibrary.clickAction(Ltype, Lvalue);
	}

	@When("close browser")
	public void close_browser() 
	{
          FunctionLibrary.closeBrowser();
	}
	@When("wait for customerlink with {string} and {string} and {string}")
	public void wait_for_customerlink_with_and_and(String Ltype, String Lvalue, String Mywait) 
	{
	    FunctionLibrary.waitForElement(Ltype, Lvalue, Mywait);
	}

	@When("click customerlink with {string} and {string}")
	public void click_customerlink_with_and(String Ltype, String Lvalue) 
	{
	    FunctionLibrary.clickAction(Ltype, Lvalue);
	}

	@When("wait for customer number with {string} and {string} and {string}")
	public void wait_for_customer_number_with_and_and(String Ltype, String Lvalue, String Mywait) 
	{
		FunctionLibrary.waitForElement(Ltype, Lvalue, Mywait);
	}

	@When("capture customer number with {string} and {string}")
	public void capture_customer_number_with_and(String Ltype, String Lvalue) throws Throwable
	{
	    FunctionLibrary.captureCus(Ltype, Lvalue);
	}

	@When("verify customernumber")
	public void verify_customernumber() throws Throwable
	{
	    FunctionLibrary.customerTable();
	}
}
