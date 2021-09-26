import React from 'react';
import './ProjectStyle.css';
import image4 from './images/4.jpg';
const ListItem4 = () => {
    return (
        <div className="picture--border">
            <img className="img--image" src={image4} alt="" />
            <div className="Footer--picture">
                <h3>forth picture</h3>
                <a href="www.javascript.com">
                    <p>www.javascript.com</p>
                </a>
            </div>
            <div className="middle">
                <div className="delete--icon">
                    <i className="material-icons">delete</i>
                </div>
                <div class="picture--text">forth picture</div>
            </div>
        </div>
    );
};

export default ListItem4;
