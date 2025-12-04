import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import {Test2} from './Test.js';

function App() {


  var mobile = "iphone";
  var version= 238;

  function add(){
    console.log("Sagar Prajapati");
  }

  return (
    <div id='abc'>
      Sagar Prajapati

      <Test mobile = {mobile} version1={version}/>
      <Test2 mobile = {mobile} version1={version} add1 = {add}/>
    </div>

    
  );
}

export default App;
