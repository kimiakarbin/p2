import React from 'react';
import './ProjectStyle.css';
import image2 from './images/2 (2).jpg';

const ListItem2 = () => {
    return (
        <div className="picture--border">
            <img className="img--image" src={image2} alt="" />

            <div className="Footer--picture">
                <h3>second picture</h3>
                <a href="www.css.com">
                    <p>www.css.com</p>
                </a>
            </div>
            <div className="middle">
                <div className="delete--icon">
                    <i className="material-icons">delete</i>
                </div>
                <div class="picture--text">second picture</div>
            </div>
        </div>
    );
};

export default ListItem2;
