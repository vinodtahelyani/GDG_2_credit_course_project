import { AppRegistry } from 'react-native';
import App from './App';

var Forecast = React.createClass({
    render: function() {
      return (
        <App />
      )
    }
  })
  
AppRegistry.registerComponent('forecast', () => Forecast);
