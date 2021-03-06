package com.group3adb.parking_lot.service.impl;

import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.List;

import com.group3adb.parking_lot.model.Booking;
import com.group3adb.parking_lot.service.BookingService;

//import com.group3adb.parking_lot.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;




public class BookingServiceImpl implements BookingService{
 
  
    

    @Autowired
	private MongoTemplate mongoTemplate;
    
    @Override
    public List<Booking> findRange(String geocode, long st, long en) throws AccessDeniedException {
        // String pattern = "yyyy-MM-dd'T'HH:mm:ss";
        // DateFormat df = new SimpleDateFormat(pattern);
        // String str = df.format(st);
        // String end =df.format(en);
        // System.out.println("sss "+str+" "+end );
        BasicQuery query = new BasicQuery("{$or: [ {$and:[{starttime: {$lte:"+Long.toString(st)+"}},{endtime:{$gte:"+Long.toString(en)+"}}]} ,{$or: [ {starttime: { $gte:" +Long.toString(st)+", $lte:"+Long.toString(en)+"}} ,  {endtime: {$gte:"+Long.toString(st) +",$lte:" +Long.toString(en)+"}}]}] , geocode:'"+geocode+"'} )"
           );
        // "{starttime:{$lte:" + Long.toString(st) + "}, endtime: {$gte:" + Long.toString(en) + "},geocode:{$eq:" + Long.toString(geocode) + "} }}"
        //Query query = new Query();
       
        List<Booking> u = mongoTemplate.find(query,Booking.class);
        // .matching( query.addCriteria(Criteria.where("starttime").lte(st).and("endtime").gte(en).and("geocode").is(geocode))).all();
        return u;
    }

    @Override
    public List<Booking> findByUsername(String username,long st, long en) throws AccessDeniedException {
        BasicQuery query = new BasicQuery("{starttime: { $lte:" +Long.toString(st)+"}} ,  {endtime: {$gte:" +Long.toString(en)+"}} , geocode:'"+username+"'} )"
           );
        // "{starttime:{$lte:" + Long.toString(st) + "}, endtime: {$gte:" + Long.toString(en) + "},geocode:{$eq:" + Long.toString(geocode) + "} }}"
        //Query query = new Query();
       
        List<Booking> u = mongoTemplate.find(query,Booking.class);
        // .matching( query.addCriteria(Criteria.where("starttime").lte(st).and("endtime").gte(en).and("geocode").is(geocode))).all();
        return u;
    }

    
    

    

}