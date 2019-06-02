import React from 'react'
import Livro from './Livro'
import PropTypes from 'prop-types'

function ListaLivros (props) {
  const livros  = props.livros

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {livros.length > 0 && (
          livros.map((livro) => (
            <Livro
              atualizaLivro={props.atualizaLivro}
              key={livro.id}
              livro={livro}
            />
          ))
        )}
      </ol>
    </div>
  )
}
ListaLivros.propTypes = {
  atualizaLivro: PropTypes.func.isRequired,
  livros: PropTypes.array.isRequired,
}
export default ListaLivros