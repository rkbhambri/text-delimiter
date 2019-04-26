import React, { Component } from 'react';
import ColumnData from '../ColumnData/ColumnData';
import Controls from '../Controls/Controls';
import ConverterSettings from './ConverterSettings/ConverterSettings';
import DelimiterData from '../DelimiterData/DelimiterData';
import settingsImage from '../../settings.svg';

class DelimiterWrap extends Component {

	state = {
		delimiter: '',
		columnText: '',
		delimitedText: '',
		isSettingsVisible: false,
		explode: null,
		isRemoveNewLine: true,
		isRemoveDuplicate: false,
		quotes: null
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
		if (this.state.explode === null) {
			delimitedText = this.state.columnText.split(' ').join(this.state.delimiter);
		}
		if (this.state.explode === '\\n') {
			delimitedText = this.state.columnText.split(' ').join(this.state.delimiter + '\n');
		}
		if (this.state.explode !== '\\n') {
			if (this.state.isRemoveNewLine === 'false') {
				delimitedText = this.state.columnText.split(/\n/).join(this.state.delimiter);
				delimitedText = delimitedText.split(this.state.delimiter).join(',\n');
			} else {
				delimitedText = this.state.columnText.split(/\n/).join(this.state.delimiter);
			}
			// delimitedText = this.state.columnText.split(this.state.explode).join(this.state.delimiter);
		}
		if (this.state.isRemoveDuplicate === 'true') {
			const delimitedArray = delimitedText.split(this.state.delimiter)
			let uniqueDelimitedTextArray = []
			delimitedArray.map(item => {
				if (!uniqueDelimitedTextArray.includes(item)) {
					uniqueDelimitedTextArray.push(item)
				}
				return 1;
			});
		}
		if (this.state.quotes === '""') {
			delimitedText = this.state.columnText.split(/\n/);
			delimitedText = delimitedText.map(item => '"' + item + '"').join(', ');
		}
		if (this.state.quotes === "''") {
			delimitedText = this.state.columnText.split(/\n/);
			delimitedText = delimitedText.map(item => "'" + item + "'").join(', ');
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
		this.setState({
			explode: event.target.value,
			delimiter: event.target.value
		});
	};

	removeNewLine = (event) => {
		this.setState({ isRemoveNewLine: event.target.value });
	};

	removeDuplicateToggle = (event) => {
		this.setState({ isRemoveDuplicate: event.target.value });
	};

	addQuotes = (event) => {
		this.setState({ quotes: event.target.value });
	};

	render() {
		return (
			<div className="delimiter-wrap row m-2 pt-4">
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
				<div className="converter-settings col-md-5 offset-3 pl-5 text-center mt-4">
					<span className="settings-text border p-2" onClick={this.converterSettingToggle} style={{ cursor: 'pointer' }}>
						<span><img src={settingsImage} style={{ width: '18px', height: '18px' }} alt="Not found" /></span>
						<span className="pl-1">Converter Settings</span>
					</span>
				</div>
				{
					this.state.isSettingsVisible &&
					<ConverterSettings
						selectExplode={(event) => this.selectExplode(event)}
						removeNewLine={(event) => this.removeNewLine(event)}
						removeDuplicateToggle={(event) => this.removeDuplicateToggle(event)}
						addQuotes={(event) => this.addQuotes(event)} />
				}
			</div>
		);
	};
};

export default DelimiterWrap;
