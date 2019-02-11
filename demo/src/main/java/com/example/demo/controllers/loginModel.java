package com.example.demo.controllers;

public class loginModel {
 public String login;
 public String password;
 public loginModel() {
	 
 }
public String getLogin() {
	return login;
}
public void setLogin(String login) {
	this.login = login;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
@Override
public String toString() {
	return "loginModel = {"+login+"   "+password+"  }";
}

 
}
