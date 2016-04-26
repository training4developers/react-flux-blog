import path from 'path';
import fs from 'fs';
import Viewer from './models/viewer';
import User from './models/user';
import Widget from './models/widget';

const widgets = [];
const users = [];

const loadData = (fileName, collection) => JSON.parse(fs.readFileSync(fileName)).forEach(item => collection.push(item));

loadData(path.join(__dirname, '../widgets.json'), widgets);
loadData(path.join(__dirname, '../users.json'), users);

let nextWidgetId = widgets.length + 1;

// using promises to simulate a real async data source

export const getViewer = id =>
	new Promise(resolve =>
		resolve(new Viewer(id)));

export const getUsers = () =>
	new Promise(resolve =>
		setImmediate(() =>
			resolve(users.map(u =>
				new User(u)))));

export const getUser = id =>
	new Promise(resolve =>
		setImmediate(() =>
			resolve(new User(users.find(u =>
				u.id === id)))));

export const getUserWidgets = id =>
	new Promise(resolve =>
		resolve(widgets.filter(w => w.ownerId === id).map(w => new Widget(w))));

export const getWidget = id =>
	new Promise(resolve =>
		resolve(new Widget(widgets.find(w => w.id === id))));
		
export const getWidgets = () =>
	new Promise(resolve => 
		resolve(widgets.map(w => new Widget(w))));

export const insertWidget = widget =>
	new Promise(resolve => {
		widget.id = nextWidgetId++;
		widgets.push(widget);
		resolve(widget);
	});
	
export const updateWidget = widget =>
	new Promise(resolve =>
		resolve(Object.assign(widgets.find(w => w.id === widget.id), widget)));

export const deleteWidget = id =>
	new Promise(resolve => {
		const deletedWidget = widgets.find(w => w.id === id);
		widgets.splice(widgets.indexOf(deletedWidget),1);
		resolve(deletedWidget);
	});
