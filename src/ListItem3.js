import React from 'react';
import './ProjectStyle.css';
import image3 from './images/3.jpg';
const ListItem3 = () => {
    return (
        <div className="picture--border">
            <img className="img--image" src={image3} alt="" />

            <div className="Footer--picture">
                <h3>third picture</h3>
                <a href="www.react.com">
                    <p>www.html.com</p>
                </a>
            </div>
            <div className="middle">
                <div className="delete--icon">
                    <i className="material-icons">delete</i>
                </div>
                <div class="picture--text">third picture</div>
            </div>
        </div>
    );
};

export default ListItem3;
