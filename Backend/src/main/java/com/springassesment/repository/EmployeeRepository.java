package com.springassesment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springassesment.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
