import React, { Component } from 'react';
import api from '../services/api'
import './Feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component{
    state = {
        feed: [],
    };

    async componentDidMount(){
        const response = await api.get('API/aluno');
        console.log(response.data)
        this.setState({feed: response.data});
    }
    render(){
        return(
            <section id='post-list'>
                {this.state.feed.map(post => (
                <article key={post.id}>
                    <header>
                        <div className="user-info">   
                            <span>{post.nome}</span>
                            <span className='place'>{post.nome}</span>
                        </div>

                        <img src={more} alt="mais" />
                    </header>

                    <img src={`http://localhost:3333/files/${post.image}`} alt=""/>
                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>900 curtidas</strong>
                        <p>
                            {post.description}
                            <span>#react #omnistack</span>
                        </p>
                    </footer>
                </article>))}
            </section>
        );
    }
}

export default Feed;