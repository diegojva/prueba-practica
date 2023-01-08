package com.prueba.tecnica.repository;

import com.prueba.tecnica.model.User;

public interface IUserRepo extends IGenericRepository<User, Integer> {

    User findOneByUsername(String username);

}
