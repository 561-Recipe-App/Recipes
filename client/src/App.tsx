import NotFound from './pages/error/page';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/page';
import { AboutPage } from './pages/about/page';
import RecipePage from './pages/recipe/page';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/recipe/:id/:title" exact component={RecipePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
