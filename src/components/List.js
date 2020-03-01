import React ,{Component} from 'react'
import ReactDom from 'react-dom'
class List extends Component
{
    render(){
        return (<ol>
        {this.props.student.map((name,index) => <li key = {index}>{name}<button onClick={()=>{
            this.props.onRemoveName(name)
        }}>delete</button></li>)}  
     </ol>);
    }
}

export default List