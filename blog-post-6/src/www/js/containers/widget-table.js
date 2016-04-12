'use strict';

import Relay from 'react-relay';
import WidgetTable from '../components/widget-table';

export default Relay.createContainer(WidgetTable, {
	fragments: {
		user: () => Relay.QL`
			fragment on User {
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
			}
		`
	}
});
