import NotFound from './pages/error/page';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/page';
import { AboutPage } from './pages/about/page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
