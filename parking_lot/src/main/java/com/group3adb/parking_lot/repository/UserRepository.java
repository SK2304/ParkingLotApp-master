package com.group3adb.parking_lot.repository;

import com.group3adb.parking_lot.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<Users, Long> {
    Users findByUsername( String username );
    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

}

