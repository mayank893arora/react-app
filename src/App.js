import React ,{Component} from 'react'
import List from './components/List'
import Title from './components/Title'

class App extends Component{
  render(){
      return(
<div>
  <Title title={<h1>list of student</h1>} />
  <List student={['a','b']}/>

</div>
      );
  }
}

export default App