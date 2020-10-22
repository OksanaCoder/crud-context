import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Button } from 'react-bootstrap'
import ListArticle from './components/ListArticle'
import CreateArticle from './components/CreateArticle'
import EditArticle from './components/EditArticle'
import DeleteArticle from './components/DeleteArticle'
import { GlobalProvider} from './context/GlobalState'
// import { GlobalContext } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <Router>
    <Container>
      <div className='mb-5' style={{display: 'flex', justifyContent: 'space-between', alignItems :'center', padding: '10px'}}>
      <h5 className='mt-4'>React CRUD with Hooks and Context API</h5>
      <Link to='/create'><Button>Create new article</Button></Link>
      </div>
        

         <Route exact path='/' component={ListArticle} />
         <Route path='/create' component={CreateArticle} />
         <Route path='/edit/:id' component={EditArticle} />
         <Route path='/delete/:id' component={DeleteArticle} />
    
    </Container>
    </Router>
    </GlobalProvider>


  );
}

export default App;
