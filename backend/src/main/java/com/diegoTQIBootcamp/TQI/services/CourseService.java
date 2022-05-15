package com.diegoTQIBootcamp.TQI.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegoTQIBootcamp.TQI.dto.CourseDTO;
import com.diegoTQIBootcamp.TQI.entities.Course;
import com.diegoTQIBootcamp.TQI.repositories.CourseRepository;
import com.diegoTQIBootcamp.TQI.services.exceptions.ResourceNotFoundException;

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
		Course entity = obj.orElseThrow(() -> new ResourceNotFoundException("Id not found:" + id));
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

	@Transactional
	public CourseDTO update(Long id, CourseDTO dto) {
		try {
			Course entity = repository.getById(id);
			entity.setCourseName(dto.getCourseName());
			entity.setInstructorName(dto.getInstructorName());
			entity.setHours(dto.getHours());
			return new CourseDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found");
		}
	}
}
