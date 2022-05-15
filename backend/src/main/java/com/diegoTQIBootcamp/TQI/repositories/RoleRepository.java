package com.diegoTQIBootcamp.TQI.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diegoTQIBootcamp.TQI.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
