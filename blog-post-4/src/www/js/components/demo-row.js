'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars

export default (props) => <tr>
	<td>{props.demo.name}</td>
	<td>{props.demo.description}</td>
	<td><a href={props.demo.url}>Run It!</a></td>
</tr>;
