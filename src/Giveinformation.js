import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Giveinformation(props) {
    const [input, setInput] = useState('');
    const [date, setDate] = useState();

    const [myimage, setMyImage] = React.useState(null);
    const uploadImage = (e) => {
        setMyImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: uuidv4(),
            text: input,
            date: date,
            picture: myimage,
        });

        setInput('');
        setDate('');

        setMyImage('');
    };

    const onClear = () => {
        setInput('');
        setDate('');

        setMyImage('');
    };
    return (
        <form className="GiveInformation" onSubmit={handleSubmit}>
            <div className="projectName">
                <label className="lable--projectName">projectName :</label>
                <input
                    type="text"
                    placeholder="project name"
                    className="input--name"
                    name="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
            </div>

            <div className="projectDate">
                <label className="lable--projectDate">projectDate :</label>
                <input
                    className="input--date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
            </div>
            <div className="projectSnapShot">
                <label className="label--projectSnapShot">
                    ProjectSnapShot :
                </label>
                {/* <input
                    loading="lazy"
                    type="file"
                    value={file}
                    onChange={(event) => setFile(event.target.value)}
                />
                 */}
                <img
                    src={myimage}
                    alt="gfd"
                    style={{ height: 100, width: 100 }}
                />
                <input type="file" onChange={uploadImage} />
            </div>

            <div className="button">
                <button className="button--submit">SUBMIT</button>
                <button className="button--clear" onClick={onClear}>
                    CLEAR
                </button>
            </div>
            <hr />
        </form>
    );
}
export default Giveinformation;
