package com.example.demo.dao;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.UserEntity;



@Repository
public interface UserDao extends CrudRepository<UserEntity, Integer>{
	 List<UserEntity> findByName(String name);
	 UserEntity findByEmail(String email);
	 UserEntity findByEmailAndPassword(String email,String password);
}
