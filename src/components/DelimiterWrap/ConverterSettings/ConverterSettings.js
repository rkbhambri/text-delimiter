import React from 'react';

const ConverterSettings = (props) => {
    return (
        <div className="converter-settings border w-100 mt-3">
            <div className="tidyup row col-md-7">
                <div className="settings-title col-md-6 p-3" style={{ lineHeight: '14px' }}>
                    <p>Tidy Up</p>
                    <p>Remove the new lines from output?</p>
                </div>
                <form className="select col-md-5 p-4" onChange={(event) => props.removeNewLine(event)}>
                    <label className="radio-inline">
                        <input type="radio" name="tidyup" value="true" defaultChecked /> Yes
                    </label>
                    <label className="radio-inline pl-4">
                        <input type="radio" name="tidyup" value="false" /> No
                    </label>
                </form>
            </div>
            <div className="remove-duplicates row col-md-7">
                <div className="settings-title col-md-6 p-3" style={{ lineHeight: '14px' }}>
                    <p>Attack the clones</p>
                    <p>Remove the duplicates from the result set</p>
                </div>
                <form className="select col-md-6 p-4" onChange={(event) => props.removeDuplicateToggle(event)}>
                    <label className="radio-inline">
                        <input type="radio" name="duplicates" value="true" /> Yes
                    </label>
                    <label className="radio-inline pl-4">
                        <input type="radio" name="duplicates" value="false" defaultChecked /> No
                    </label>
                </form>
            </div>
            <div className="explode row col-md-7">
                <div className="settings-title col-md-6 p-3" style={{ lineHeight: '14px' }}>
                    <p>Explode</p>
                    <p>Explode your records using this</p>
                </div>
                <form className="select col-md-5 p-4" onChange={(event) => props.selectExplode(event)}>
                    <label className="radio-inline">
                        <input type="radio" name="explode" value="\n" defaultChecked /> New Lines
                    </label>
                    <label className="radio-inline pl-4">
                        <input type="radio" name="explode" value=";" /> Semicolons
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="explode" value=" " /> Spaces
                    </label>
                    <label className="radio-inline" style={{ marginLeft: '45px' }}>
                        <input type="radio" name="explode" value="," /> Commas
                    </label>

                </form>
            </div>
            <div className="add-quotes row col-md-7">
                <div className="settings-title col-md-6 p-3" style={{ lineHeight: '14px' }}>
                    <p>Quotes</p>
                    <p>Add quotes to each record</p>
                </div>
                <form className="select col-md-6 p-4" onChange={(event) => props.addQuotes(event)}>
                    <label className="radio-inline">
                        <input type="radio" name="quotes" defaultChecked /> No
                    </label>
                    <label className="radio-inline pl-4">
                        <input type="radio" name="quotes" value='""' /> Double
                    </label>
                    <label className="radio-inline pl-4">
                        <input type="radio" name="quotes" value="''" /> Single
                    </label>
                </form>
            </div>
        </div>
    );
};

export default ConverterSettings;
