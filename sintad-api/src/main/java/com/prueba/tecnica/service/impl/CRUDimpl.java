package com.prueba.tecnica.service.impl;

import com.prueba.tecnica.repository.IGenericRepository;
import com.prueba.tecnica.service.ICRUD;

import java.util.List;


public abstract class CRUDimpl<T, ID> implements ICRUD<T,ID> {

    protected abstract IGenericRepository<T, ID> getRepo();

    @Override
    public T save(T t) {
        return getRepo().save(t);
    }

    @Override
    public T update(T t) {
        return getRepo().save(t);
    }

    @Override
    public T findById(ID id) {
        return getRepo().findById(id).orElse(null);
    }

    @Override
    public List<T> findAll() {
        return getRepo().findAll();
    }

    @Override
    public void delete(ID id) {
        getRepo().deleteById(id);
    }
}
