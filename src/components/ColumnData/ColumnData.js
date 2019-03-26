import React from 'react';

const ColumnData = (props) => {
    return (
        <div className="column-data-wrapper col-md-5 text-center">
            <div className="Title text-center">
                <h2>Column Data</h2>
            </div>
            <div className="column-data">
                <textarea
                    className="w-100"
                    style={{ minHeight: '250px' }}
                    value={props.columnText}
                    onChange={(event) => props.changeColumnText(event)} />
            </div>
        </div>
    )
};

export default ColumnData;
