import NotFound from './pages/error/page';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/page';
import { AboutPage } from './pages/about/page';
import { Signin } from './Signin/about/page';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={AboutPage} />
      <Route component={NotFound} />
      <Route path = "client/src/pages/Signin/page.tsx" exact component={ Signin} />
    </Switch> 
  );
}

export default App;
