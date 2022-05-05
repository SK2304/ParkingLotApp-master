package com.group3adb.parking_lot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

import com.group3adb.parking_lot.model.Booking;
import com.group3adb.parking_lot.service.BookingService;

@Repository
public interface BookingRepository extends MongoRepository<Booking, Long>,BookingService{
    Boolean existsByUsername(String username);
    List<Booking> findByUsername(String username,long st,long en);
    List<Booking> findByUsername(String username);
    List<Booking> findByGeocode(String geocode);
    List<Booking> findRange(String geocode,long st,long en);
}