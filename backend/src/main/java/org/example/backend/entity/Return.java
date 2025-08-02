package org.example.backend.entity;

import java.time.LocalDateTime;

public class Return extends BaseEntity {
    String code;
    Order order;
    LocalDateTime returnedDate;
    LocalDateTime processedDate;
    String reason;
    /*
    0 - PENDING
    1 - APPROVED
    2 - REJECTED
     */
    Short returnStatus;
}
