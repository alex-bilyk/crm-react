import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import {
    Navbar,
    Sidebar
} from './components'

import {
    Home,
    Dashboard
} from './pages'

import './App.css'

const routes = [
    {
        path: '/',
        exact: true,
        label: 'Home',
        icon: 'home',
        main: () => <Home />
    },
    {
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'bar-chart-2',
        main: () => <Dashboard />
    },
]

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />

                <div className="container-fluid">
                    <div className="row">
                        <Sidebar routes={routes} />

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>
                        </main>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App