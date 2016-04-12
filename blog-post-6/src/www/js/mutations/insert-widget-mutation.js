'use strict';

import Relay from 'react-relay';

export default class InsertWidgetMutation extends Relay.Mutation {

	static fragments = {
    user: () => Relay.QL`fragment on User { id }`
  };

	getMutation() {
    return Relay.QL`mutation { insertWidget }`;
  }

	getFatQuery() {
    return Relay.QL`
		fragment on InsertWidgetPayload @relay(pattern: true) {
      user {
        widgets {
          edges {
            node {
							id
              name
							description
							color
							size
							quantity
            }
          }
        }
      }
      newWidgetEdge
    }`;
  }

	getConfigs() {
    return [{
			type: 'RANGE_ADD',
      parentName: 'user',
      parentID: this.props.user.id,
      connectionName: 'widgets',
      edgeName: 'newWidgetEdge',
      rangeBehaviors: {
        '': 'append',
      },
    }];
  }

	getVariables() {
    return {
			widget: {
				name: this.props.name,
				description: this.props.description,
				color: this.props.color,
				size: this.props.size,
				quantity: parseInt(this.props.quantity, 10),
    	}
		};
  }
}
