import {React} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes, generatePath } from 'react-router-dom';
import routes from './routes';
import { getUrl } from './utils';


function App() {

  console.log(getUrl('home.blog.categories'));
  
  // console.log(generatePath('post/:id/:url', {id: 3, url: 'test-url'}));

  return useRoutes(routes)
}

export default App;
