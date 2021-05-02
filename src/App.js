import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Details from './Components/RecentBlogPost/Details/Details';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog'
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route path="/Details/:id">
              <Details></Details>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
