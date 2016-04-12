'use strict';

import fs from 'fs';
import path from 'path';
import {
	GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString,
	GraphQLList, GraphQLInputObjectType
} from 'graphql';

class Widget {
	constructor(widget) {
		Object.assign(this, widget);
	}
}

const widgets = [];
let nextWidgetId = 1;

fs.readFile(path.join(__dirname, 'widgets.json'), function(err, data) {

	if (err) {
		console.dir(err);
		return;
	}

	JSON.parse(data).forEach(function(widget) {
		widgets.push(new Widget(widget));
	});
	nextWidgetId = widgets.length + 1;

});


const widgetType = new GraphQLObjectType({

	name: 'Widget',
	description: 'A widget',
	fields: () => ({
		id: {
			type: GraphQLInt,
			description: 'The id of the widget'
		},
		name: {
			type: GraphQLString,
			description: 'The name of the widget'
		},
		description: {
			type: GraphQLString,
			description: 'The description of the widget'
		},
		color: {
			type: GraphQLString,
			description: 'The color of the widget'
		},
		size: {
			type: GraphQLString,
			description: 'The size of the widget'
		},
		quantity: {
			type: GraphQLInt,
			description: 'The quantity of the widget'
		}
	})

});

const insertWidgetInputType = new GraphQLInputObjectType({

	name: 'InsertWidgetInput',
	description: 'A widget',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'The name of the widget'
		},
		description: {
			type: GraphQLString,
			description: 'The description of the widget'
		},
		color: {
			type: GraphQLString,
			description: 'The color of the widget'
		},
		size: {
			type: GraphQLString,
			description: 'The size of the widget'
		},
		quantity: {
			type: GraphQLInt,
			description: 'The quantity of the widget'
		}
	})

});

const query = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		widgets: {
			type: new GraphQLList(widgetType),
			description: 'A list of widgets',
			args: {
				id: { type: GraphQLInt, description: 'Id of the widget to retrieve.' }
			},
			resolve: (_, args) => args.id ? widgets.find(w => w.id === args.id) : widgets
		}
	})
});

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		insertWidget: {
			type: widgetType,
			args: {
				widget: {
					type: insertWidgetInputType,
					description: 'Widget to insert'
				}
			},
			resolve: (_, args) => {
				const widget = Object.assign({}, args.widget);
				widget.id = nextWidgetId++;
				widgets.push(widget);
				return widget;
			}
		}
	})
});

export const widgetsSchema = new GraphQLSchema({ query, mutation });
