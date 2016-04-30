import Relay from 'react-relay';
import WidgetToolComponent from '../components/widget-tool';
import InsertWidgetMutationType from '../mutations/insert-widget-mutation';
import UpdateWidgetMutationType from '../mutations/update-widget-mutation';
import DeleteWidgetMutationType from '../mutations/delete-widget-mutation';

export default Relay.createContainer(WidgetToolComponent, {
	
	fragments: {
		colors: () => Relay.QL`fragment on __Type { enumValues { name description } }`,
		sizes: () => Relay.QL`fragment on __Type { enumValues { name description } }`,
		viewer: () => Relay.QL`
			fragment on Viewer {
				id
				users(first: 1000) {
					edges {
						node {
							id
							firstName
							lastName
						}
					}
				}
				widgets(first: 1000) {
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
				${InsertWidgetMutationType.getFragment('viewer')}
				${UpdateWidgetMutationType.getFragment('viewer')}
				${DeleteWidgetMutationType.getFragment('viewer')}
			}
		`
	}
	
});