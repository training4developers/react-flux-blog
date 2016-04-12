import Relay from 'react-relay';

export default class extends Relay.Route {

	static paramDefinitions = {
    nodeId: { required: true }
  };

  static queries = {
    node: () => Relay.QL`query { node(id: $nodeId) }`
  };

	static routeName = 'NodeRoute';
}
