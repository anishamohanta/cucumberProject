package Case_study1;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TestMe 
{
	WebDriver driver;

	
	@Given("user should be on signup page")
	public void user_should_be_on_signup_page() 
	{
	    System.setProperty("webdriver.chrome.driver","src/test/resources/driver/chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get(""
	    		+ "");
	    driver.findElement(By.linkText("SignUp")).click();
	}
	@When("user enters username {string}")
	public void user_enters_username(String username) 
	{
	   driver.findElement(By.id("userName")).sendKeys(username);
	}

	@When("user enters firstname {string}")
	public void user_enters_firstname(String firstname) 
	{
	   driver.findElement(By.id("firstName")).sendKeys(firstname);
	}

	@When("user enters lastname {string}")
	public void user_enters_lastname(String lastname) 
	{
	    driver.findElement(By.id("lastName")).sendKeys(lastname);
	}

	@When("user enters password {string}")
	public void user_enters_password(String psswd)
	{
	   driver.findElement(By.id("password")).sendKeys(psswd);
	}

	@When("user re-enters password {string}")
	public void user_re_enters_password(String cnfpsswd)
	{
	  driver.findElement(By.name("confirmPassword")).sendKeys(cnfpsswd);
	}
	@When("user enters gender as Female")
	public void user_enters_gender_as_Female()
	{
	    driver.findElement(By.xpath("//input[@value='Female'and @type='radio']")).click();
	}

	@When("user enters emailid {string}")
	public void user_enters_emailid(String email)
	{
		driver.findElement(By.id("emailAddress")).sendKeys(email);
	}

	@When("user enters mobilenumber {string}")
	public void user_enters_mobilenumber(String mob)
	{
	  driver.findElement(By.id("mobileNumber")).sendKeys(mob);
	}

	@When("user enters DOB {string}")
	public void user_enters_DOB(String date)
	{
	driver.findElement(By.name("dob")).sendKeys(date);
	}

	@When("user enters address {string}")
	public void user_enters_address(String add) 
	{
	    	driver.findElement(By.name("address")).sendKeys(add);
	}

	@When("user selects security question")
	public void user_selects_security_question()
	{
	    Select sel=new Select(driver.findElement(By.name("securityQuestion")));
	    sel.selectByIndex(1);
	}

	@When("user enters the answer {string}")
	public void user_enters_the_answer(String ans) 
	{
	    driver.findElement(By.id("answer")).sendKeys(ans);
	}

	@When("user clicks register")
	public void user_clicks_register() 
	{
	    driver.findElement(By.name("Submit")).click();
	}

	@Then("user should be on login page")
	public void user_should_be_on_login_page() 
	{
		Assert.assertEquals("Login",driver.getTitle());
		System.out.println("logged in!");
}
	



}
