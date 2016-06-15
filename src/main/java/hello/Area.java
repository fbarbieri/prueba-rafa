package hello;

public class Area {
	
	private String name;
	private String description;
	
	
	
	public Area(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}
	public Area() {
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
