package com.diegoTQIBootcamp.TQI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diegoTQIBootcamp.TQI.dto.CourseDTO;
import com.diegoTQIBootcamp.TQI.services.CourseService;

@RestController
@RequestMapping(value = "/courses")
public class CourseController {

	@Autowired
	private CourseService service;

	@GetMapping
	public ResponseEntity<Page<CourseDTO>> findAllPaged(Pageable pageable) {
		Page<CourseDTO> page = service.findAllPaged(pageable);
		return ResponseEntity.ok().body(page);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<CourseDTO> findById(@PathVariable Long id) {
		CourseDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}
