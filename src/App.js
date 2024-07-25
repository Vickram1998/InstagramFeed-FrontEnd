import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css';
import MainLayout from './Components/Main-layout';
import Posts from './Pages/PostView/Post';
import CreatePost from './Pages/PostView/CreatePost';
import ViewPost from './Pages/PostView/ViewPost';


function App() {
  return (
    <div className="App">
      <MainLayout>
        <BrowserRouter>
            <Routes>
                <Route path='posts' element={<Posts/>}>
                  <Route path='add' element={<CreatePost/>}></Route>
                  <Route path='view' element={<ViewPost/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
      </MainLayout>
    </div>
  );
}

export default App;
