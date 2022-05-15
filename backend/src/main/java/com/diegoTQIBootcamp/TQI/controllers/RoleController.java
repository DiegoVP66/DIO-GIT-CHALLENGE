package com.diegoTQIBootcamp.TQI.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.diegoTQIBootcamp.TQI.dto.RoleDTO;
import com.diegoTQIBootcamp.TQI.services.RoleService;

@RestController
@RequestMapping(value = "/roles")
public class RoleController {

	@Autowired
	private RoleService service;

	@GetMapping
	public ResponseEntity<List<RoleDTO>> findAll() {
		List<RoleDTO> dto = service.findAll();
		return ResponseEntity.ok().body(dto);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<RoleDTO> findById(@PathVariable Long id) {
		RoleDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}

	@PostMapping
	public ResponseEntity<RoleDTO> insert(@RequestBody RoleDTO dto) {
		RoleDTO newDTO = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(newDTO);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<RoleDTO> update (@PathVariable Long id, @RequestBody RoleDTO dto){
		RoleDTO newUser = service.update(id, dto);
		return ResponseEntity.ok().body(newUser);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<RoleDTO> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
