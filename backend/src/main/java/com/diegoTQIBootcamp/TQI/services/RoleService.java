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

import com.diegoTQIBootcamp.TQI.dto.RoleDTO;
import com.diegoTQIBootcamp.TQI.entities.Role;
import com.diegoTQIBootcamp.TQI.repositories.RoleRepository;
import com.diegoTQIBootcamp.TQI.services.exceptions.DataBaseException;
import com.diegoTQIBootcamp.TQI.services.exceptions.ResourceNotFoundException;

@Service
public class RoleService {

	@Autowired
	private RoleRepository roleRepository;

	@Transactional(readOnly = true)
	public List<RoleDTO> findAll() {
		List<Role> list = roleRepository.findAll();
		return list.stream().map(x -> new RoleDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public Page<RoleDTO> findAllPaged(Pageable pageable) {
		Page<Role> page = roleRepository.findAll(pageable);
		return page.map(x -> new RoleDTO(x));
	}

	@Transactional(readOnly = true)
	public RoleDTO findById(Long id) {
		Optional<Role> obj = roleRepository.findById(id);
		Role entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found!"));
		return new RoleDTO(entity);
	}

	@Transactional
	public RoleDTO insert(RoleDTO dto) {
		Role entity = new Role();
		entity.setAuthority(dto.getAuthority());

		return new RoleDTO(entity);
	}

	@Transactional
	public RoleDTO update(Long id, RoleDTO dto) {
		try {
			Role entity = roleRepository.getById(id);
			entity.setAuthority(dto.getAuthority());
			return new RoleDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found!");
		}
	}

	public void delete(Long id) {
		try {
			roleRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found");
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violation");
		}

	}

}
