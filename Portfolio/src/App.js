import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home.js'
import About from './Component/About/About.jsx'
import Portfolio from './Component/Portfolio/Portfolio.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Error from './Component/Error/Error.jsx'

const App = () => {
    return ( <
        div >
        <
        Routes >
        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = '/about'
        element = { < About / > }
        /> <
        Route path = '/footer'
        element = { < Footer / > }
        /> <
        Route path = '/portfolio'
        element = { < Portfolio / > }
        /> <
        Route path = '/*'
        element = { < Error / > }
        /> <
        /Routes> <
        /div>
    )
}

export default App;