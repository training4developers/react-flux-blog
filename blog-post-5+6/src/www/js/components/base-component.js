import React from 'react';

export default class BaseComponent extends React.Component {

	_fromEdges(collection, labelFn) {
		return collection.edges.map(edge => ({
			value: edge.node.id, label: labelFn(edge.node)
		}));
	}
	
	_fromEnumType(enumType) {
		return enumType.enumValues.map(enumValue => ({
			value: enumValue.name, label: enumValue.description
		}));
	}
	
}