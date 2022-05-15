package com.diegoTQIBootcamp.TQI.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegoTQIBootcamp.TQI.dto.CourseDTO;
import com.diegoTQIBootcamp.TQI.entities.Course;
import com.diegoTQIBootcamp.TQI.repositories.CourseRepository;

@Service
public class CourseService {

	@Autowired
	private CourseRepository repository;

	@Transactional(readOnly = true)
	public Page<CourseDTO> findAllPaged(Pageable pageable) {
		Page<Course> page = repository.findAll(pageable);
		return page.map(x -> new CourseDTO(x));
	}

	@Transactional(readOnly = true)
	public CourseDTO findById(Long id) {
		Optional<Course> obj = repository.findById(id);
		Course entity = obj.orElse(null);
		return new CourseDTO(entity);
	}

	@Transactional
	public CourseDTO insert(CourseDTO dto) {
		Course entity = new Course();
		entity.setCourseName(dto.getCourseName());
		entity.setInstructorName(dto.getInstructorName());
		entity.setHours(dto.getHours());
		entity = repository.save(entity);
		return new CourseDTO(entity);
	}
}
