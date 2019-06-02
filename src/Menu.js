import React, {Component} from 'react'

class Menu extends Component {
    handleSubmit = (e) => {
        this.props.atualizaLivro(this.props.livro, e.target.value)
        this.setState({optionsState: e.target.value});
    }
    state = {
        optionsState : this.props.livro.shelf
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.optionsState} onChange={this.handleSubmit}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}
export default Menu