import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Estante from './Estante'
import Busca from './Busca'

const categorias = [
      { name:'CurrentlyReading', 
        alias: 'Currently Reading'
      }, 
      { name: 'WanttoRead' , 
        alias: 'Want to Read'
      }, 
      { name:'Read', 
        alias:'Read'
      }
  ]

class BooksApp extends React.Component {

  state = {
    livros: []
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then((livros) => {
      this.setState(() => ({
        livros
      }))
    })
  }

  buscaLivroEstante = (id) => {
    return this.state.livros.filter((l) => (
      l.id === id
    ))
  }

  atualizaLivro = (livro, categoria) => {
    let livroestante = this.buscaLivroEstante (livro.id)
    if (livroestante.length === 0 ){
      let estanteatualizada = this.state.livros.concat(livro)
      this.setState(() => ({
        livros : estanteatualizada
      }))
    }

    BooksAPI.update(livro, categoria)
    .then (() => {
      this.setState(livros => ({
        livros: this.state.livros.map(b => {
          if (livro.id === b.id) {
            b.shelf = categoria;
          }
          return b;
        })
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Busca 
            atualizaLivro={this.atualizaLivro}
            estante={this.state.livros} 
          />
        )}
        />
        <Route exact path='/' render={() => (
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {this.state.livros.length !== 0 && (
                  <div>
                    {categorias.map((categoria) => (
                      <Estante 
                        key={categoria.name} 
                        livros={this.state.livros} 
                        categoria={categoria} 
                        atualizaLivro={this.atualizaLivro}/>
                    ))}
                  </div>
                )}
              </div>
              <div className="open-search">
                <Link
                  to='/search'
                  className='open-search'>
                  Add a book
                </Link>
              </div>
            </div>
          </div>
        )} />
      </div>
    )
  }
}
export default BooksApp
