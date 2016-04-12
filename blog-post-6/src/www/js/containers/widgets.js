'use strict';

import Relay from 'react-relay';
import Widgets from '../components/widgets';
import InsertWidgetMutation from '../mutations/insert-widget-mutation';

// adding the id on user cause it to work

export default Relay.createContainer(Widgets, {
	fragments: {
		user: () => Relay.QL`
			fragment on User {
				id
				widgets(first: 10) {
          edges {
            node {
              id,
              name,
							color,
							size,
							quantity
            },
          },
        },
				${InsertWidgetMutation.getFragment('user')}
			}
		`
	}
});
