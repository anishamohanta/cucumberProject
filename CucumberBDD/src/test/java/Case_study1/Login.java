package Case_study1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class Login
{
	WebDriver driver;

	@Given("user must be in login page")
	public void user_must_be_in_login_page() 
	{
		 System.setProperty("webdriver.chrome.driver","src/test/resources/driver/chromedriver.exe");
		    driver=new ChromeDriver();
		    driver.get("http://10.232.237.143:443/TestMeApp/");
		    driver.findElement(By.linkText("SignIn")).click();
	}

	@When("user enters {string} and {string}")
	public void user_enters_and(String username, String pwd) 
	{
	   driver.findElement(By.id("userName")).sendKeys(username);
	   driver.findElement(By.id("password")).sendKeys(pwd);
	}

	@When("performs login")
	public void performs_login() 
	{
	   driver.findElement(By.xpath("//input[@name='Login']")).click();
	}

	@Then("user must be in home page")
	public void user_must_be_in_home_page() 
	{
	    Assert.assertEquals("SignOut",driver.getTitle());
	    System.out.println("Home Page");
	}



}
