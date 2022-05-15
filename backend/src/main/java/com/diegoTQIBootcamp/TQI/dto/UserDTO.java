package com.diegoTQIBootcamp.TQI.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.diegoTQIBootcamp.TQI.entities.User;

public class UserDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	private String lastName;
	private String email;

	private Set<RoleDTO> roles = new HashSet<>();

	public UserDTO() {
	}

	public UserDTO(Long id, String name, String lastName, String email) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
	}

	public UserDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		lastName = entity.getLastName();
		email = entity.getEmail();
		entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<RoleDTO> getRoles() {
		return roles;
	}

}