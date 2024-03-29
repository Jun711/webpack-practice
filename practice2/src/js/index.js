// this module is an instance of the navigo router object shared across our app
import Router from './router/Router';

import App from './App';
import Home from './components/Home';
import LoadingSpinner from './components/LoadingSpinner';

// instantiate app
const app = App();

// on the root route, the app will render the Home component
Router
  .on(() => {
    app.render(Home);
  })
  .resolve(); // navigo's method for manually checking the current route

// navigating to the "tasty" route triggers the app to render the Tasty component
Router
  .on('/tasty', () => {
  });