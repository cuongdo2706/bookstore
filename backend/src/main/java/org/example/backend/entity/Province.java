package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tbl_province")
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
public class Province {
    @Id
    Short code;
    String name;
    @JsonIgnore
    @OneToMany(mappedBy = "province")
    List<Commune> communes;
}
