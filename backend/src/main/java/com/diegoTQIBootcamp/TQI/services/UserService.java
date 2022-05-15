package com.diegoTQIBootcamp.TQI.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegoTQIBootcamp.TQI.dto.RoleDTO;
import com.diegoTQIBootcamp.TQI.dto.UserDTO;
import com.diegoTQIBootcamp.TQI.dto.UserInsertDTO;
import com.diegoTQIBootcamp.TQI.dto.UserUpdateDTO;
import com.diegoTQIBootcamp.TQI.entities.Role;
import com.diegoTQIBootcamp.TQI.entities.User;
import com.diegoTQIBootcamp.TQI.repositories.RoleRepository;
import com.diegoTQIBootcamp.TQI.repositories.UserRepository;
import com.diegoTQIBootcamp.TQI.services.exceptions.DataBaseException;
import com.diegoTQIBootcamp.TQI.services.exceptions.ResourceNotFoundException;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	private static Logger logger = LoggerFactory.getLogger(UserService.class);

	@Transactional(readOnly = true)
	public List<UserDTO> findAll() {
		List<User> list = repository.findAll();
		return list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public Page<UserDTO> findAllPaged(Pageable pageable) {
		Page<User> page = repository.findAll(pageable);
		return page.map(x -> new UserDTO(x));
	}

	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found!"));
		return new UserDTO(entity);
	}

	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		User entity = new User();
		copyDTOToEntity(entity, dto);

		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity.getRoles().clear();

		for (RoleDTO roleDTO : dto.getRoles()) {
			Role role = roleRepository.getById(roleDTO.getId());
			entity.getRoles().add(role);
		}
		entity = repository.save(entity);
		return new UserDTO(entity);
	}

	@Transactional
	public UserDTO update(Long id, UserUpdateDTO dto) {
		try {
			User entity = repository.getById(id);

			copyDTOToEntity(entity, dto);

			for (RoleDTO roleDTO : dto.getRoles()) {
				Role role = roleRepository.getById(roleDTO.getId());
				entity.getRoles().add(role);
			}
			entity = repository.save(entity);
			return new UserDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found!");
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found");
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violation");
		}

	}

	private void copyDTOToEntity(User entity, UserDTO dto) {
		entity.setName(dto.getEmail());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		if (user == null) {
			logger.error("User not found: " + username);
			throw new UsernameNotFoundException("Email not found!");
		}
		logger.info("User found: " + username);
		return user;
	}

}
