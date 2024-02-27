package net.ichou.inventoryservice;

import net.ichou.inventoryservice.entities.Product;
import net.ichou.inventoryservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository){
        return args -> {
            productRepository.save(Product.builder().id(UUID.randomUUID().toString()).name("Computer").price(4300).quantity(12).build());
            productRepository.save(Product.builder().id(UUID.randomUUID().toString()).name("printer").price(1300).quantity(18).build());
            productRepository.save(Product.builder().id(UUID.randomUUID().toString()).name("Smart phone").price(2400).quantity(64).build());
        };
    }

}
