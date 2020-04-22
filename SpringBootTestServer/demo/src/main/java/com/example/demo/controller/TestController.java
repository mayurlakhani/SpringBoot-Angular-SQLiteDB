package com.example.demo.controller;

import com.example.demo.model.Address;
import com.example.demo.model.UserLogin;
import com.example.demo.repository.AddressRepository;
import com.example.demo.utills.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {

    @Autowired
    private AddressRepository addressRepository;

    /*@GetMapping("/")
    public String index(Model model, Principal principal) {
        model.addAttribute("message", "You are logged in as " + principal.getName());
        return principal.getName();
    }*/

   /* @GetMapping("/address")
    @ResponseBody
    public List<Address> getAllEmployees(HttpServletRequest request) throws ResourceNotFoundException {

        Principal principal = request.getUserPrincipal();
        System.out.println("HTTP Request------>>"+ principal.getName());
        List<Address> address= addressRepository.findAllByName(principal.getName());
        return address;
    }*/

    @GetMapping(produces = "application/json")
    @RequestMapping({ "/validateLogin" })
    public UserLogin validateLogin() {
        return new UserLogin("User successfully authenticated");
    }

    @GetMapping("/address")
    public List<Address> getAllEmployees() {

       return addressRepository.findAll();

    }

    @GetMapping("/address/{id}")
    public ResponseEntity<Address> getAddressById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Address address = addressRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));
        return ResponseEntity.ok().body(address);
    }

    @PostMapping("/address")
    public Address createAddress(@Valid @RequestBody Address address) {
        return addressRepository.save(address);
    }

    @PutMapping("/address/{id}")
    public ResponseEntity<Address> updateAddressDetails(@PathVariable(value = "id") Long id,
                                                   @Valid @RequestBody Address address) throws ResourceNotFoundException {
        Address addressDetail = addressRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));

        addressDetail.setName(address.getName());
        addressDetail.setCity(address.getCity());
        addressDetail.setStreet(address.getStreet());
        addressDetail.setHouseNo(address.getHouseNo());
        addressDetail.setId(address.getId());

        final Address updatedAddress = addressRepository.save(address);
        return ResponseEntity.ok(updatedAddress);
    }

    @DeleteMapping("/address/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Address employee = addressRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));

        addressRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
