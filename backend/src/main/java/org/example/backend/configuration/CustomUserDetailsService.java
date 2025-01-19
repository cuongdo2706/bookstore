package org.example.backend.configuration;

import lombok.Data;
import org.example.backend.entity.Account;
import org.example.backend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@Data
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private AccountRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = userRepository.findByUsername(username);
        GrantedAuthority authority = new SimpleGrantedAuthority(account.getRole());
        return new org.springframework.security.core.userdetails.User(
                username,
                account.getPassword(),
                Collections.singletonList(authority)
        );
    }
}
