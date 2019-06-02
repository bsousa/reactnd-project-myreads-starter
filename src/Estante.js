import React from 'react'
import ListaLivros from './ListaLivros'
import PropTypes from 'prop-types'

function Estante (props) {
    const LivrosCategoria = props.livros.filter((c) => (
        c.shelf.toLowerCase() === props.categoria.name.toLowerCase()
    ))

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.categoria.alias}</h2>
            <ListaLivros
                atualizaLivro={props.atualizaLivro}
                livros={LivrosCategoria}
            />
        </div>
    )
}
Estante.propTypes = {
    atualizaLivro: PropTypes.func.isRequired,
    livros: PropTypes.array.isRequired,
    categoria: PropTypes.object.isRequired,
}
export default Estante