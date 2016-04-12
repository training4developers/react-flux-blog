'use strict';

import Relay from 'react-relay';

export default class extends Relay.Mutation {

	static fragments = {
    widget: () => Relay.QL`fragment on Widget { id }`
  };

	getMutation() {
    return Relay.QL`mutation { insertWidget }`;
  }

	getFatQuery() {
    return Relay.QL`
      fragment on InsertWidgetPayload {
				widget {
					id,
					name,
					description,
					color,
					size,
					quantity
				}
      }`;
  }

	getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        widget: this.props.widget.id,
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
				quantity: this.props.quantity,
    	}
		};
  }
}
