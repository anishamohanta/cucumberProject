package skeleton;

public class Person 
{
  private String message;
  private int distance;
 
public void setDistance(Integer int1)
{
    distance=int1;
}

public void setMessage(String string) 
{
if(distance>0&&distance<30)
   message=string;
else
	message=null;
}


public String getMessage() {
	
	return message;
}
}
