import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { useFetch } from './hooks/useFetch';


function App() {
  const {loading,data,error} =useFetch('https://jsonplaceholder.typicode.com/users')
  console.log(loading,data,error)

  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;
