package com.group3adb.parking_lot.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.group3adb.parking_lot.model.Authority;
import com.group3adb.parking_lot.model.UserRoleName;

public interface AuthorityRepository extends MongoRepository<Authority, String> {
  Authority findByName(UserRoleName name);
}

