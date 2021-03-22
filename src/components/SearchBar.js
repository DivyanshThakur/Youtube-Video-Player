import React, { Component } from 'react'

export class SearchBar extends Component {
    state = {value: ''};

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search">Search Video</label>
                        <input type="text" id="search" value={this.state.value} placeholder="Search..." onChange={ e => this.setState({value: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
