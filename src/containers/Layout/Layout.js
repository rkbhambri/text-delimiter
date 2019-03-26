
import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Description from '../../components/Description/Description';
import DelimiterWrap from '../../components/DelimiterWrap/DelimiterWrap';

class Layout extends Component {
	render() {
		return (
			<div className="layout">
				<Header />
				<Description />
				<DelimiterWrap />
			</div>
		);
	}
}

export default Layout;
