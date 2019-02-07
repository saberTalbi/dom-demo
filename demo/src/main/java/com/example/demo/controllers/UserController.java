package com.example.demo.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.DAO.UserDao;
import com.example.demo.entities.User;


	@Controller
	public class UserController {
	    
	    private final UserDao userDao;

	    @Autowired
	    public UserController(UserDao userDao) {
	        this.userDao = userDao;
	    }
	    
	    @GetMapping("/signup")
	    public String showSignUpForm(User user) {
	        return "add-user";
	    }
	    
	    @PostMapping("/adduser")
	    public String addUser(@Valid User user, BindingResult result, Model model) {
	        if (result.hasErrors()) {
	            return "add-user";
	        }
	        
	        userDao.save(user);
	        model.addAttribute("users", userDao.findAll());
	        return "index";
	    }
	    
	    @GetMapping("/edit/{id}")
	    public String showUpdateForm(@PathVariable("id") long id, Model model) {
	        User user = userDao.findById((int) id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
	        model.addAttribute("user", user);
	        return "update-user";
	    }
	    
	    @PostMapping("/update/{id}")
	    public String updateUser(@PathVariable("id") int id, @Valid User user, BindingResult result, Model model) {
	        if (result.hasErrors()) {
	            user.setId(id);
	            return "update-user";
	        }
	        
	        userDao.save(user);
	        model.addAttribute("users", userDao.findAll());
	        return "index";
	    }
	    
	    @GetMapping("/delete/{id}")
	    public String deleteUser(@PathVariable("id") int id, Model model) {
	        User user = userDao.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
	        userDao.delete(user);
	        model.addAttribute("users", userDao.findAll());
	        return "index";
	    }
	}