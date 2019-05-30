package com.example.demo.controllers;

import java.io.Console;
import java.security.Principal;
import java.util.Base64;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.UserDao;
import com.example.demo.entities.UserEntity;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthWebService {
	private UserModel usrModel;
    private final UserDao userDao;
    //private BCryptPasswordEncoder bCryptPasswordEncoder;
    private boolean isExist=false;
    
    @Autowired
    public AuthWebService(UserDao userDao) {
    	//this.bCryptPasswordEncoder=bCryptPasswordEncoder;
        this.userDao = userDao;
    }
	
    @RequestMapping(value = "/auth")
	public @ResponseBody UserModel auth(@RequestBody LoginModel model) {
		System.out.println(model.toString());
		UserEntity usr= userDao.findByEmailAndPassword(model.login,model.password);
		if(usr!=null) {
		usrModel=new UserModel(usr.getName(),usr.getEmail(),usr.getAdress(),usr.getRole(),usr.getDateOfBirth());
		System.out.println(usr.toString());
		}
		return usrModel;
	}
   
  /*  @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
          .substring("Basic".length()).trim();
        return () ->  new String(Base64.getDecoder()
          .decode(authToken)).split(":")[0];
    }*/
	
	@PostMapping(value = "/createUser")
	public @ResponseBody UserModel createUser(@RequestBody UserEntity model) {
		usrModel=null;
		System.out.println(model.toString());
		UserEntity usr=new UserEntity();
		usr=model;
		//usr.setPassword(bCryptPasswordEncoder.encode(usr.getPassword()));
		try { 
		isExist=(userDao.findByEmail(usr.getEmail())!=null)? true:false;
		if(!isExist) {
			userDao.save(usr);
			usrModel=new UserModel(usr.getName(),usr.getEmail(),usr.getAdress(),usr.getRole(),usr.getDateOfBirth());
		
		}
		

		}catch (Exception e) {
		}
		return usrModel;
	}
}
