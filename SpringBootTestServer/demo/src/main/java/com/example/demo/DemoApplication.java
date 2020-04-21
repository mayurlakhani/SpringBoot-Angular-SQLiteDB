package com.example.demo;

import com.example.demo.model.Address;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.AddressRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import com.example.demo.utills.RoleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class DemoApplication {

    public RoleType roleType;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private AddressRepository addressRepository;


  /*  @Autowired
    private BCryptPasswordEncoder passwordEncoder;*/

    private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);

    public static void main(String[] args) {
        ApplicationContext ctx =
                SpringApplication.run(DemoApplication.class, args);

    }

    @Bean
    public CommandLineRunner demo(UserRepository repository) {
        return (args) -> {
            // save a few customers
            repository.save(new User("VST","42"));
            roleRepository.save(new Role("VST", roleType.ADMIN));
            roleRepository.save(new Role("VST", roleType.USER));
            /*repository.save(new User("Chloe", passwordEncoder.encode("roy@123")));
            roleRepository.save(new Role("Chole",roleType.USER));
            repository.save(new User("Kim", passwordEncoder.encode("Bauer")));
            roleRepository.save(new Role("Kim",roleType.USER));
            repository.save(new User("David", passwordEncoder.encode("Oalmaer")));
            roleRepository.save(new Role("David",roleType.ADMIN));
            repository.save(new User("Michelle", passwordEncoder.encode("Verman")));
            roleRepository.save(new Role("Michelle",roleType.USER));*/

            addressRepository.save(new Address("VST","Hamburg","Carola str","53"));
            addressRepository.save(new Address("VST","Munich","Bahnhof str","50"));
            addressRepository.save(new Address("VST","Berlin","Carola str","40"));
            addressRepository.save(new Address("Kim","Hamburg","Carola str","61"));
            addressRepository.save(new Address("Kim","Stuttgart","Carola str","68"));
            addressRepository.save(new Address("David","Stuttgart","Carola str","68"));
            addressRepository.save(new Address("David","Munich","Carola str","23"));
            addressRepository.save(new Address("Michelle","Stuttgart","Carola str","62"));
            addressRepository.save(new Address("Michelle","Munich","Carola str","61"));


            // fetch all customers
            log.info("User found with findAll():");
            log.info("-------------------------------");
            for (User user : repository.findAll()) {
                log.info(user.getUserName()+ " " +user.getPassword());
            }
            log.info("");

            // fetch an individual customer by ID
            User user = repository.findById(1L);
            log.info("User found with findById(1L):");
            log.info("--------------------------------");
            log.info(user.getId().toString());
            log.info("");

            // fetch customers by last name
            log.info("User found with findByUserName('VST'):");
            log.info("--------------------------------------------");
            repository.findByUserName("Bauer").forEach(bauer -> {
                log.info(bauer.getUserName().toString());
            });
            // for (Customer bauer : repository.findByLastName("Bauer")) {
            //  log.info(bauer.toString());
            // }
            log.info("");
        };
    }

}