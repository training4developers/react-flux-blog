'use strict';

import fs from 'fs';
import path from 'path';
import User from './models/user';
import Widget from './models/widget';

const widgets = [];
let nextWidgetId = 1;

fs.readFile(path.join(__dirname, '../widgets.json'), function(err, data) {

	if (err) return console.dir(err);

	JSON.parse(data).forEach(function(widget) {
		widgets.push(new Widget(widget));
	});

	nextWidgetId = widgets.length + 1;

});

export const getUser = (id) => new User({ id });

export const getWidgets = () => widgets;

export const getWidget = (id) => widgets.find(w => w.id === parseInt(id, 10));

export const insertWidget = (widget) => {
	widget.id = nextWidgetId++;
	widgets.push(widget);
};
