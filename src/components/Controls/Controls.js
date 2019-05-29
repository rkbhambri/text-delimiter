import React from 'react';

const Controls = (props) => {
    return (
        <div className="controls-wrapper mt-5 p-4">
            <select className="form-control mt-2" defaultValue="," onChange={(event) => props.changeDelimiter(event)}>
                <option value=",">,</option>
                <option value=";">;</option>
                <option value="|">|</option>
                <option value=":">:</option>
                <option value=" ">Spaces</option>
            </select>
            <button
                className="btn btn-primary form-control mt-2"
                onClick={props.delimitData}>&#8594;</button>
            <button
                className="btn btn-primary form-control mt-2"
                onClick={props.reset}>Reset</button>
        </div>
    );
};

export default Controls;
