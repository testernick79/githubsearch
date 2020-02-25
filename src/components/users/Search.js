import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: propTypes.func.isRequired
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers( this.state.text );
        this.setState( { text: '' } );
    };

    onChange = ( e ) => this.setState( { [ e.target.name ]: e.target.value } );


    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmit } className='form'>
                    <input type='text' name='text' placeholder='Search Users...' value={ this.state.text } onChange={ this.onChange } />
                    <input type='submit' value='Search' className='btn btn-danger btn-block' />
                </form>
                <button className='btn btn-light btn-block'>Clear</button>
            </div>
        )
    }
}

export default Search