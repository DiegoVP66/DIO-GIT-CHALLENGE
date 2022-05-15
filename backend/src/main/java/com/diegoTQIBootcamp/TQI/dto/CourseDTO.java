package com.diegoTQIBootcamp.TQI.dto;

import java.io.Serializable;

import com.diegoTQIBootcamp.TQI.entities.Course;

public class CourseDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String courseName;
	private String instructorName;
	private Double hours;
	private Double percent;

	public CourseDTO() {
	}

	public CourseDTO(Long id, String courseName, String instructorName, Double hours, Double percent) {
		this.id = id;
		this.courseName = courseName;
		this.instructorName = instructorName;
		this.hours = hours;
		this.percent = percent;
	}

	public CourseDTO(Course entity) {
		id = entity.getId();
		courseName = entity.getCourseName();
		instructorName = entity.getInstructorName();
		hours = entity.getHours();
		percent = entity.getPercent();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getInstructorName() {
		return instructorName;
	}

	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}

	public Double getHours() {
		return hours;
	}

	public void setHours(Double hours) {
		this.hours = hours;
	}

	public Double getPercent() {
		return percent;
	}

	public void setPercent(Double percent) {
		this.percent = percent;
	}

}
