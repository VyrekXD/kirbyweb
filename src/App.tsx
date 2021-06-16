import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Routes/Home'))

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Cargando...</div>}>
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App