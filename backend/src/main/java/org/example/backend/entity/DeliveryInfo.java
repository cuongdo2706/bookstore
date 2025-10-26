package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_delivery_info")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DeliveryInfo {
    @Id
    @Column(name = "id")
    Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    Order order;

    String recipientName;

    String email;

    String phoneNum;

    String address;
}
