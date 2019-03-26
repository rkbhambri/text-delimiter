import React, { Component } from 'react';
import ColumnData from '../ColumnData/ColumnData';
import Controls from '../Controls/Controls';
import ConverterSettings from './ConverterSettings/ConverterSettings';
import DelimiterData from '../DelimiterData/DelimiterData';

class DelimiterWrap extends Component {

	state = {
		delimiter: ',',
		columnText: '',
		delimitedText: '',
		isSettingsVisible: false,
		explode: '\\n',
		isRemoveNewLine: true,
		isRemoveDuplicate: false
	};

	changeDelimiter = (event) => {
		this.setState({ delimiter: event.target.value });
	};

	changeColumnText = (event) => {
		this.setState({ columnText: event.target.value });
	};

	changeDelimitedText = (event) => {
		this.setState({
			delimitedText: event.target.value
		});
	};

	delimitData = () => {
		let delimitedText = this.state.delimitedText;

		if (this.state.explode === '\\n') {
			if (this.state.isRemoveNewLine === 'false') {
				delimitedText = this.state.columnText.split(/\n/).join(this.state.delimiter);
				delimitedText = delimitedText.split(this.state.delimiter).join(',\n');
			} else {
				delimitedText = this.state.columnText.split(/\n/).join(this.state.delimiter);
			}
		}
		if (this.state.explode !== '\\n') {
			delimitedText = this.state.columnText.split(this.state.explode).join(this.state.delimiter);
		}
		if (this.state.isRemoveDuplicate === 'true') {
			const delimitedArray = delimitedText.split(this.state.delimiter)
			let uniqueDelimitedTextArray = []
			delimitedArray.map(item => {
				if (!uniqueDelimitedTextArray.includes(item)) {
					uniqueDelimitedTextArray.push(item)
				}
				return 1;
			})
		}
		this.setState({
			delimitedText
		});
	};

	reset = () => {
		this.setState({
			columnText: '',
			delimitedText: ''
		});
	};

	converterSettingToggle = () => {
		this.setState({ isSettingsVisible: !this.state.isSettingsVisible });
	};

	selectExplode = (event) => {
		this.setState({ explode: event.target.value });
	}

	removeNewLine = (event) => {
		this.setState({ isRemoveNewLine: event.target.value });
	};

	removeDuplicateToggle = (event) => {
		this.setState({ isRemoveDuplicate: event.target.value })
	}

	render() {
		console.log(this.state.isRemoveNewLine)
		return (
			<div className="delimiter-wrap border row m-2">
				<ColumnData
					changeColumnText={(event) => this.changeColumnText(event)}
					columnText={this.state.columnText} />
				<Controls
					changeDelimiter={(event) => this.changeDelimiter(event)}
					delimitData={this.delimitData}
					reset={this.reset} />
				<DelimiterData
					changeDelimitedText={(event) => this.changeDelimitedText(event)}
					delimitedText={this.state.delimitedText} />
				<div className="converter-settings col-md-5 offset-3 pl-5 text-center mb-2">
					<span className="border p-2" onClick={this.converterSettingToggle}>Converter Settings</span>
				</div>
				{
					this.state.isSettingsVisible &&
					<ConverterSettings
						selectExplode={(event) => this.selectExplode(event)}
						removeNewLine={(event) => this.removeNewLine(event)}
						removeDuplicateToggle={(event) => this.removeDuplicateToggle(event)} />
				}
			</div>
		);
	};
};

export default DelimiterWrap;
