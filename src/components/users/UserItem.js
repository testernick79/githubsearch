import React, { Component } from 'react';

class UserItem extends Component {
    state = {

        id: 'id',
        login: 'mojombo',
        html_url: 'https://github.com/mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        reposr_url: 'https://api.github.com/users/mojombo/repos'


    };



    render() {
        const { avatar_url, login, html_url, reposr_url } = this.state;
        return (
            <div className='card text-center'>
                <img src={ avatar_url } alt='' className='round-img' style={ { width: '90px' } } />
                <h3>{ login }</h3>
                <div>
                    <a href={ html_url } className='btn btn-dark btn-sm my-1'>Github</a>
                </div>
                <div>
                    <a href={ reposr_url } className='btn btn-dark btn-sm my-1'>View Repos</a>
                </div>
            </div>
        );
    }
}


export default UserItem;