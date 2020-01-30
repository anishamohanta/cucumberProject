package skeleton;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:cucumber-reports"},
	features= {"src/test/resources/scaliton/shout.feature",
			 "src/test/resources/scaliton/DemoWebShopLogin.feature"},
	monochrome=true,dryRun=false)
	public class CucumberRunner
	{
	
	}
	
