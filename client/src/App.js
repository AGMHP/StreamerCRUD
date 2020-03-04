import React from 'react';
import './App.css';
import { Router, Route} from 'react-router-dom';
import history from './history';
import Header from './components/Header'
import StreamCreate from './components/streamer/StreamCreate';
import StreamDelete from './components/streamer/StreamDelete';
import StreamEdit from './components/streamer/StreamEdit';
import StreamList from './components/streamer/StreamList';
import StreamShow from './components/streamer/StreamShow';
//28106910442-vka1p48ntduntsu35ab8hmcnq79cqnij.apps.googleusercontent.com

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path ='/' exact component={StreamList}/>
          <Route path ="/stream/new" exact component={StreamCreate}/>
          <Route path ="/stream/delete" exact component={StreamDelete}/>
          <Route path ="/stream/edit/:id" exact component={StreamEdit}/>
          <Route path ="/stream/show" exact component={StreamShow}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
