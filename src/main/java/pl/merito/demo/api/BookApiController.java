package pl.merito.demo.api;

import org.springframework.web.bind.annotation.*;
import pl.merito.demo.Book;
import pl.merito.demo.BookRepository;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:4200")
public class BookApiController {

    private final BookRepository bookRepository;

    public BookApiController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    @PostMapping
    public Book save(@RequestBody Book book) {
        return bookRepository.save(book);
    }
}
