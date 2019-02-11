package com.example.demo.controllers;

import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DAO.UserDao;
import com.example.demo.entities.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthWebService {
	private User usr;
    private final UserDao userDao;
    @Autowired
    public AuthWebService(UserDao userDao) {
        this.userDao = userDao;
    }
	
    @PostMapping(value = "/auth")
	public User auth(@RequestBody loginModel model) {
		System.out.println(model.toString());
		usr= userDao.findByEmailAndPassword(model.login,model.password);
		System.out.println(usr.toString());
		return usr;
	}
    @GetMapping(value = "/auth")
	public @ResponseBody User auth() {
		return usr;
	}
	
	@PostMapping(value = "/createUser")
	public boolean createUser(@RequestBody ModelUser model) {
		System.out.println(model.toString());
		User usr=new User();
		usr.setEmail(model.getEmail());
		usr.setName(model.getName());
		usr.setPassword(model.getPassword());
		try { 
		userDao.save(usr);
		return true;
		}catch (Exception e) {
			return false;
		}
	}
}
