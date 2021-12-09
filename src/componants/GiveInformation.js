import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Giveinformation(props) {
    const [input, setInput] = useState('');
    const [date, setDate] = useState();
    const [link, setLink] = useState();
    const [image, setImage] = React.useState(null);

    const uploadImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };
    console.log('x');
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: uuidv4(),
            text: input,
            date: date,
            link: link,
            picture: image,
        });

        setInput('');
        setDate('');
        setLink('');
        setImage('');
    };

    const onClear = () => {
        setInput('');
        setDate('');
        setLink('');
        setImage('');
    };
    return (
        <form className="Information" onSubmit={handleSubmit}>
            <div className="projectName">
                <label className="lable-projectName">projectName :</label>
                <input
                    className="input-name"
                    type="text"
                    name="text"
                    value={input}
                    placeholder="project name"
                    onChange={(event) => setInput(event.target.value)}
                />
            </div>

            <div className="projectDate">
                <label className="lable-projectDate">projectDate :</label>
                <input
                    className="input-date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
            </div>
            <div className="projectLink">
                <label className="lable-projectLink">projectLink :</label>
                <input
                    className="input-Link"
                    type="text"
                    name="link"
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                />
            </div>
            <div className="projectSnapShot">
                <label className="label-projectSnapShot">
                    ProjectSnapShot :
                </label>

                <input type="file" onChange={uploadImage} />
            </div>

            <div className="button">
                <button className="button-submit">SUBMIT</button>
                <button className="button-clear" onClick={onClear}>
                    CLEAR
                </button>
            </div>
            <hr />
        </form>
    );
}
export default Giveinformation;
