package com.group3adb.parking_lot.service;

import com.group3adb.parking_lot.model.Users;

import java.util.List;


public interface UserService {
    Users findById(Long id);
    Users findByUsername(String username);
    List<Users> findAll ();
}
