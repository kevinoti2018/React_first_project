import React from 'react'
import Book from './Book';
import { books } from './data/data';
const Booklist = () => {
  return (
    <div>
    <h1>amazon best sellers</h1>
    <section className='booklist'>
    {books.map((book) => {
      return <Book {...book} key={book.id} />;
    })}
  </section>
       
    </div>
  )
}

export default Booklist