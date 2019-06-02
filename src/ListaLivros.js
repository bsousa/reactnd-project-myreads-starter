import React, {Component} from 'react'
import Livro from './Livro'

class ListaLivros extends Component {
    render (){
      const { livros } = this.props

      return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {livros.length > 0 && (
              livros.map((livro) => (
                <Livro 
                  atualizaLivro={this.props.atualizaLivro} 
                  key={livro.id} 
                  livro={livro}
                  estante={this.props.estante}/>              
              ))
            )}
          </ol>
        </div>
      )
    }
}
export default ListaLivros