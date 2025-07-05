package com.main;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.main.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
}

