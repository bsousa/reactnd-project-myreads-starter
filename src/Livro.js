import React from 'react'
import Menu from './Menu'
import PropTypes from 'prop-types'

function Livro (props) {
  const livro = props.livro
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
            atualizaLivro={props.atualizaLivro}
            livro={livro}
          />
        </div>
        <div className="book-title">{livro.title}</div>
        <div className="book-authors">
          {livro.authors && livro.authors.join(', ')}
        </div>
      </div>
    </li>
  )
}
Livro.propTypes = {
  livro: PropTypes.object.isRequired,
  atualizaLivro: PropTypes.func.isRequired,
}
export default Livro