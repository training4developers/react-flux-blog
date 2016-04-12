'use strict';

import Relay from 'react-relay';
import WidgetForm from '../components/widget-form';
import InsertWidgetMutation from '../mutations/insert-widget-mutation';

export default Relay.createContainer(WidgetForm, {
	fragments: {
		node: () => Relay.QL`
			fragment on User {
				widgets {
					edges {
						node {
							id,
							name,
							description,
							color,
							size,
							quantity
						}
					}
				},
				${InsertWidgetMutation.getFragment('widget')}
			}`
	}
});
