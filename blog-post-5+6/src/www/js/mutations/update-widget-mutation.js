import Relay from 'react-relay';

export default class extends Relay.Mutation {
	
	static fragments = {
		viewer: () => Relay.QL`fragment on Viewer { id }`
	}
	
	getMutation() {
		return Relay.QL`mutation { updateWidget }`;
	}
	
	// receives the parameters from the constructor, builds
	// the variables to send the GraphQL server
	getVariables() {
		return {
			widget: {
				// id is included because we are updating, input type must accept id
				id: this.props.id, 
				name: this.props.name,
				description: this.props.description,
				color: this.props.color,
				size: this.props.size,
				quantity: this.props.quantity,
				ownerId: this.props.ownerId
			}
		};
	}	
	
	getConfigs() {
		return [{
			// update operation
			type: 'FIELDS_CHANGE',
			fieldIDs: {
				// id of the top level fragment
				// id of the viewer updated
				viewer: this.props.viewer.id, 
				widgets: this.props.widget.id 
			}
		}];
	}
	
	getFatQuery() {
		// corresponds to the structure of the output types
		// patten is used to not specify the parameters for the connections
		return Relay.QL`
			fragment on UpdateWidgetPayload @relay(pattern: true) {
				viewer {
					widgets {
						edges {
							node {
								id
								name
								description
								color
								size
								quantity
								owner {
									id
									firstName
									lastName
								}
							}
						}
					}
				}
				widgetEdge
			}
		`;
	}
} 