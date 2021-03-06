package com.group3adb.parking_lot.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "bookings")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
    @Id
    private String id;

    @NotEmpty
    private long starttime;
    
    @NotEmpty
    private long endtime;
    
    @NotEmpty
    private String geocode;

    @NotEmpty
    private String username;

    @NotEmpty
    private String type;

    @NotEmpty
    private String payment_id;

    @NotEmpty
    private String order_id;

    @NotEmpty
    private String signature;

    @NotEmpty
    private String vehicleno;
}