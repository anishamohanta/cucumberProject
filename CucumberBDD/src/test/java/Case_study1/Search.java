package Case_study1;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Search
{
 WebDriver driver;
 @Given("user should login page")
 public void user_should_login_page()
 {
  System.setProperty("webdriver.chrome.driver","src/test/resources/driver/chromedriver.exe");
  driver=new ChromeDriver();
  driver.get("http://10.232.237.143:443/TestMeApp/");
  driver.findElement(By.linkText("SignIn")).click();
 }
 @When("user enters valid credentials And performs login")
 public void user_enters_valid_credentials_And_performs_login() 
 {
     driver.findElement(By.id("userName")).sendKeys("nimisha");
     driver.findElement(By.id("password")).sendKeys("nimi365");
     driver.findElement(By.xpath("//input[@name='Login']")).click();
     Assert.assertEquals("Home",driver.getTitle());
     System.out.println("logged in");
 }

 @When("clicks the search tab & enters the first four letters of the product")
 public void clicks_the_search_tab_enters_the_first_four_letters_of_the_product() throws InterruptedException 
 {
    driver.findElement(By.id("myInput")).sendKeys("Head");
    Thread.sleep(1000);
 }

 @When("selects product from drop down")
 public void selects_product_from_drop_down() 
 {
     driver.findElement(By.xpath("html/body/div[1]/form/div[1]/input")).click();
 }

 @When("clicks find details")
 public void clicks_find_details() 
 {
    driver.findElement(By.xpath("/html/body/div[1]/form/input")).click();
 }

 @When("adds the product to cart")
 public void adds_the_product_to_cart() 
 {
     driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[2]/center/a")).click();
 }

 @Then("user sould be in add to cart page")
 public void user_sould_be_in_add_to_cart_page() 
 {
     Assert.assertEquals("Search",driver.getTitle());
     System.out.println("user is in search page");
 }
}




