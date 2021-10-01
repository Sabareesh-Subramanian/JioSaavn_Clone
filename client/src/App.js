import './App.css';
import { SidebarRoutes } from './components/SongInfo/SidebarRoutes';
import { SongInfo } from './components/SongInfo/SongInfo';


function App() {
  return (
    <div className="App">
      <SongInfo />
      <SidebarRoutes />
    </div>
  );
}

export default App;
