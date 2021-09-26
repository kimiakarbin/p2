import React, { useState } from 'react';
import './ProjectStyle.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react/cjs/react.development';
import image1 from './images/1.jpg';

const ListItem1 = () => {
    return (
        <div className="picture--border">
            <img className="img--image" src={image1} alt="" />
            <div className="Footer--picture">
                <h3>first picture</h3>
                <a href="www.html.com">
                    <p>www.html.com</p>
                </a>
            </div>
            <div className="middle">
                <div className="delete--icon">
                    <i className="material-icons">delete</i>
                </div>
                <div class="picture--text">first picture</div>
            </div>
        </div>
    );
};

export default ListItem1;
