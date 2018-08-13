var ReactGA = require('react-ga');

ReactGA.initialize('UA-122015764-1');

exports.onRouteUpdate = state => {
  ReactGA.pageview(state.location.pathname);
};
