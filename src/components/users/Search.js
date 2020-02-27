import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: propTypes.func.isRequired,
        clearUsers: propTypes.func.isRequired,
        showClear: propTypes.bool.isRequired,
        setAlert: propTypes.func.isRequired
    };

    onSubmit = e => {
        e.preventDefault();
        if ( this.state.text === '' ) {
            this.props.setAlert( 'Text must be entered!', 'warning' );
        } else {
            this.props.searchUsers( this.state.text );
            this.setState( { text: '' } );
        }
    };

    onChange = ( e ) => this.setState( { [ e.target.name ]: e.target.value } );


    render() {
        const { showClear, clearUsers, } = this.props;
        const { text } = this.state;
        return (
            <div>
                <form onSubmit={ this.onSubmit } className='form'>
                    <input type='text' name='text' placeholder='Search Users...' value={ text } onChange={ this.onChange } />
                    <input type='submit' value='Search' className='btn btn-danger btn-block' />
                </form>
                { showClear && (
                    <button className='btn btn-light btn-block' onClick={ clearUsers }
                    >
                        Clear
                    </button>
                ) }
            </div>
        );
    }
}

export default Search;