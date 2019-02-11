package com.example.demo.DAO;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.User;



@Repository
public interface UserDao extends CrudRepository<User, Integer>{
	 List<User> findByName(String name);
	 User findByEmail(String email);
	 User findByEmailAndPassword(String email,String password);
}
