import React, {Component} from 'react'
import ListaLivros from './ListaLivros'

class Estante extends Component {
    render() {

        const {livros, categoria } = this.props

        const LivrosCategoria = livros.filter((c) => (
            c.shelf.toLowerCase() === categoria.name.toLowerCase()
        ))

        return (
          <div className="bookshelf">
              <h2 className="bookshelf-title">{categoria.alias}</h2>
              <ListaLivros 
                atualizaLivro={this.props.atualizaLivro} 
                livros={LivrosCategoria} 
              />
          </div>
        )
    }
}
export default Estante