package com.diegoTQIBootcamp.TQI.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegoTQIBootcamp.TQI.dto.CourseDTO;
import com.diegoTQIBootcamp.TQI.entities.Course;
import com.diegoTQIBootcamp.TQI.repositories.CourseRepository;
import com.diegoTQIBootcamp.TQI.services.exceptions.DataBaseException;
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
	public List<CourseDTO> findALL() {
		List<Course> list = repository.findAll();
		return list.stream().map(x -> new CourseDTO(x)).collect(Collectors.toList());
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
		copyDTOToEntity(entity, dto);
		entity = repository.save(entity);
		return new CourseDTO(entity);
	}

	@Transactional
	public CourseDTO update(Long id, CourseDTO dto) {
		try {
			Course entity = repository.getById(id);
			copyDTOToEntity(entity, dto);
			return new CourseDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found");
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not Found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violation!");
		}
	}

	private void copyDTOToEntity(Course entity, CourseDTO dto) {
		entity.setCourseName(dto.getCourseName());
		entity.setInstructorName(dto.getInstructorName());
		entity.setHours(dto.getHours());
		entity.setPercent(dto.getPercent());
	}
}
