import React from 'react';

const DelimiterData = (props) => {
    return (
        <div className="delimiter-data-wrapper col-md-5 text-center">
            <div className="Title text-center">
                <h2>Delimiter Data</h2>
            </div>
            <div className="delimiter-data">
                <textarea
                    className="w-100"
                    style={{ minHeight: '250px' }}
                    value={props.delimitedText}
                    onChange={(event) => props.changeDelimitedText(event)} />
            </div>
        </div>
    )
};

export default DelimiterData;
