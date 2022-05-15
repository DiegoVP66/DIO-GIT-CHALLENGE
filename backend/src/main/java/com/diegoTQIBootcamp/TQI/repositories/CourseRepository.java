package com.diegoTQIBootcamp.TQI.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diegoTQIBootcamp.TQI.entities.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
