import { Route, BrowserRouter } from 'react-router-dom';
import Routes from 'react-router-dom';
import Error404 from './pages/Error404';
import Layout from './components/Layout';

function App() {
  return ( 
  <BrowserRouter>
    <Routes>
      <Route>
        <Layout> 
          <Route path="/" component={Home}/>
          <Route path="/novo" component={Novo}/>
          <Route path="*" component={Erro404}/>
        </Layout>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App