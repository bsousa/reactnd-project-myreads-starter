import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListaLivros from './ListaLivros'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input';

class Busca extends Component {
  static propTypes = {
    atualizaLivro: PropTypes.func.isRequired,
  }  
  state = {
    query: '',
    livros: []
  }

  buscaLivroEstante = (id) => {
    return this.props.estante.filter((l) => (l.id === id))
  }

  buscaLivros = (query) => {
    this.setState(() => ({
      query: query
    }))
    BooksAPI.search(query)
      .then((resultadobusca) => {
        if (resultadobusca !== undefined && resultadobusca.items === undefined) {
          this.setState(livros => ({
            livros: resultadobusca.map(b => {
              let li = this.buscaLivroEstante(b.id)
              b.shelf = li.length !== 0 ? li[0].shelf : 'none'
              return b;
            })
          }))
        } else {
          this.setState(() => ({
            livros : resultadobusca
          }))
        }
      })
  }

  render() {
    const { query, livros } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={2}
              debounceTimeout={150}
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.buscaLivros(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {livros !== undefined && (
            <ListaLivros
              atualizaLivro={this.props.atualizaLivro}
              livros={livros}
            />
          )}
        </div>
      </div>
    )
  }
}
export default Busca