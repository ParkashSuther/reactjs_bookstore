import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import BooksCategory from '../pages/BooksCatagery'
import Menu from '../components/Menu';
import RecentBooks from "../pages/RecentBooks";
import Error from '../pages/NotFound'
import Footer from '../components/Footer'
class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <Menu/>
                <Route>
                    <Route exact path='/' component={Home}  />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/books-categories' component={BooksCategory} />
                    <Route exact path='/recent-books' component={RecentBooks} />
                    
                    <Route/>
                </Route>
                <Footer/>
            </div>
        )
    }
}

export default AppRouter;