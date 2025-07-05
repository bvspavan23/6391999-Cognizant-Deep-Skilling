package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("HI This is the Setter Method from BookService Class");
    }

    public void info() {
        System.out.println("This is the BookService class.");
        bookRepository.info();
    }
}
