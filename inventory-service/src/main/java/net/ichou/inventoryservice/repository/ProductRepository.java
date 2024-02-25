package net.ichou.inventoryservice.repository;

import net.ichou.inventoryservice.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProductRepository extends JpaRepository<Product, String> {
}
