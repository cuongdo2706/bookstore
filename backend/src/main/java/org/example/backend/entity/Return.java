package org.example.backend.entity;

import java.time.LocalDateTime;

public class Return {
    String code;
    LocalDateTime returnDate;
    /*
    0 - RETURN
    1 - EXCHANGE
    2 - BOTH
     */
    Short returnType;
    Order order;
}
