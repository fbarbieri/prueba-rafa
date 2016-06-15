package hello;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/areas")
public class AreaService {
	
	private Map<String,Area> areas = new HashMap<String,Area>();
	
	public AreaService() {
		areas.put("prueba",new Area("prueba","prueba"));
	}

	@RequestMapping(value = "", method = RequestMethod.GET)
    public Collection<Area> getAll() {
        return areas.values();
    }
	
	@RequestMapping(value = "", method = RequestMethod.DELETE)
	public ResponseEntity<Area> deleteAuthorizationServer(@RequestParam("id") String id){
		Area area = areas.get(id);
		if(area==null)
			return new ResponseEntity<Area>(HttpStatus.NO_CONTENT);
		areas.remove(id);
		return new ResponseEntity<Area>(area,HttpStatus.ACCEPTED);
    }
	
	@RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<Area> createUser(@RequestBody Area area) {
        if(area.getName()==null)
        	return new ResponseEntity<>(HttpStatus.BAD_REQUEST);	
        if (areas.containsKey(area.getName()))
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        
        areas.put(area.getName(),area);
  
        return new ResponseEntity<Area>(area, HttpStatus.CREATED);
    }
	
	@RequestMapping(value = "", method = RequestMethod.PUT)
	public ResponseEntity<Area> updateUser(@RequestBody Area area) {
		 
	    if (area==null||area.getName()==null||!areas.containsKey(area.getName())) {
            return new ResponseEntity<Area>(HttpStatus.NOT_FOUND);
        }
	    areas.put(area.getName(),area);
	    return new ResponseEntity<Area>(area, HttpStatus.OK);
    }
	  
  
	

}