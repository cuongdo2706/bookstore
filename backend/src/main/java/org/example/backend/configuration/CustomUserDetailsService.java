package org.example.backend.configuration;

import lombok.Data;
import org.example.backend.entity.User;
import org.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Data
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
//        List<GrantedAuthority> authorities = user.getRoles().stream()
//                .map((roles) -> new SimpleGrantedAuthority(roles.getName()))
//                .collect(Collectors.toList());
        GrantedAuthority authority=new SimpleGrantedAuthority(user.getRole());
        return new org.springframework.security.core.userdetails.User(
                username,
                user.getPassword(),
                Collections.singletonList(authority)
        );
    }
}
