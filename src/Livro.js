import React, { Component } from 'react'
import Menu from './Menu'

class Livro extends Component {
  render() {
    const { livro } = this.props
    return (
      <li>
        <div className="book" key={livro.id}>
          <div className="book-top">
            {livro.imageLinks !== undefined && (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${livro.imageLinks.thumbnail})`
                }}>
              </div>
            )}
            <Menu
              atualizaLivro={this.props.atualizaLivro}
              livro={livro}
             />
          </div>
          <div className="book-title">{livro.title}</div>
          {livro.authors !== undefined && (
            <div className="book-authors">{livro.authors.map((author) => (
              <div key={author}>{author}</div>
            ))}</div>
          )}
        </div>
      </li>
    )
  }
}
export default Livro