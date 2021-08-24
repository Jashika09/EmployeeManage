package com.springassesment.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table( name = "Employee_Record")
public class Employee {
	
	private long id;
	private String title;
	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private Date dob;
	private int code;
	private double phoneNo;
	private String previousEmployee;
	private String experience;
	private String position;
	private String education;
	private String address;
	private String city;
	private String state;
	private String country;
	private int pinCode;
	private String password;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Column(name = "title", nullable = false)
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Column(name = "first_name", nullable = false)
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	@Column(name = "last_name", nullable = true)
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	@Column(name = "gender", nullable = false)
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Column(name = "dob", nullable = false)
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	@Column(name = "code", nullable = false)
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	@Column(name = "phone_number", nullable = false)
	@Size(max = 10)
	public double getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(double phoneNo) {
		this.phoneNo = phoneNo;
	}
	@Column(name = "previous_employee", nullable = true)
	public String getPreviousEmployee() {
		return previousEmployee;
	}
	public void setPreviousEmployee(String previousEmployee) {
		this.previousEmployee = previousEmployee;
	}
	@Column(name = "experience", nullable = true)
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	@Column(name = "position", nullable = true)
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	@Column(name = "education", nullable = true)
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	
	@Column(name = "address", nullable = false)
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Column(name = "city", nullable = false)
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Column(name = "state", nullable = false)
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	@Column(name = "country", nullable = false)
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Column(name = "pincode", nullable = false)
	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}
	
	@Column(name = "OTP")
	public String getPassword() {
		int length = 6;
		String passwordset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
		char[] pwd = new char[length];
		for(int i=0; i<length; i++) {
			int rand = (int) (Math.random() * passwordset.length());
			pwd[i] = passwordset.charAt(rand);
		}
		return new String(pwd);
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", title=" + title + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", gender=" + gender + ", email=" + email + ", dob=" + dob + ", code=" + code + ", phoneNo=" + phoneNo
				+ ", previousEmployee=" + previousEmployee + ", experience=" + experience + ", position=" + position
				+ ", education=" + education + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", country=" + country + ", pinCode=" + pinCode + ", password=" + password + "]";
	}
	
}
