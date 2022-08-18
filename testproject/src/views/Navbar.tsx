import {Component} from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import Login from '../login/Login'
import About from './About'
import Contact from './Contact'
import Home from './Home'

export default class Navbar extends Component {
    render() {
        return (
            <HashRouter>
                 <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={()=>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                        </Switch>
                    }/>
                 </Switch>
            </HashRouter>
            
        )
    }
}
