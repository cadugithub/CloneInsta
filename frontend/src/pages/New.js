import React, { Component } from 'react';
import './New.css'
class New extends Component{
    state = {
       image: null,
       place: null,
       description: null,
       hashtags: null, 
    };
    render(){
        return(
            <form id="new-post">
                <input type="file"/>
                <input 
                type="text"
                name="author"
                placeholder="Autor do post"
                />
                <input 
                type="text"
                name="place"
                placeholder="Local do Post"
                />
                <input 
                type="text"
                name="description"
                placeholder="Descrição do Post"
                />
                <input 
                type="text"
                name="hashtag"
                placeholder="Hastags do post"
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default New;