import React ,{Component} from 'react'
import List from './components/List'
import Title from './components/Title'
import Navbar from './components/navbar'


class App extends Component{
  constructor() {
    super()
    this.state ={
      student:['d','f']
    }
    this.removestudent=this.removestudent.bind(this)
  }
  removestudent(nameRemove)
  {
    console.log(nameRemove)
    this.setState((state)=>({
    names:state.student.filter(name => name !==nameRemove)
    }))
  }
  render(){
      return(
<div class>
  <Navbar/>
  <Title title={<h1>list of student</h1>} />
  <List student={this.state.student} onRemoveName ={this.removestudent}/>

</div>
      );
  }
}

export default App