package com.group3adb.parking_lot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.group3adb.parking_lot.model.ParkingLot;

@Repository
public interface ParkingLotRepository extends MongoRepository<ParkingLot, String>{
    ParkingLot findByGeocode(String geocode);
}