
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header'
import {connect} from 'react-redux'
import Loader from './components/Loader';

function App({isLoading}) {
  return (
    <div className="App">
     <Header />
     <hr />
     <TodoList/>
     {isLoading && <Loader />}
    </div>
  );
}

const mapStateToProps= ({AppReducer})=>{
  return{
    isLoading: AppReducer.isLoading
  }
}

export default connect(mapStateToProps)(App);
