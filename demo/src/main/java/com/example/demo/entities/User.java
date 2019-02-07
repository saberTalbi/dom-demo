package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
@Id
@GeneratedValue
private int id;
private String name;
private String email;
private String password;

public String getName() {
	return name;
}
public String getPassword() {
	return password;
}
public String getEmail() {
	return email;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id=id;
}
public void setName(String name) {
	this.name=name;
}
public void setEmail(String email) {
	this.email=email;
}
public void setPassword(String password) {
	this.password=password;
}
@Override
public String toString() {
    return "User{" + "id=" + id + ", name=" + name + ", email=" + email + '}';
}
}
