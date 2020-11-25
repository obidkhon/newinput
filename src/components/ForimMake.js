import React, { Component } from 'react'

 class ForimMake extends Component {


constructor(props) {
    super(props)

    this.state = {
         username:'',
         coments:'',
         topics:'react'
    }
}


handlerUserNameChange=(event)=>{
    this.setState({
        username:event.target.value
    })
}
comentsChange=(event)=>{
    this.setState({
        coments: event.target.value
    })
}

handleTopicsChange=(event)=>{
    this.setState({
        topics:event.target.value
    })
}



handleSubmit= event =>{
    alert(`${this.state.username} ${this.state.coments} ${this.state.topics}`)
event.preventDefault()
}


    render() {

        const{ username,coments,topics}=this.state
        return (
            <form   onSubmit={this.handleSubmit}  > 

<div>
    <lable> UsserName </lable>
    <input  typen='text'  value={username}  onChange={this.handlerUserNameChange}/>
                 
            </div>

            <div>
                <lable>Massage</lable>
                <textarea type='coments' value={coments}  onChange={this.comentsChange}> </textarea>
            </div>

<div>  
<lable> Topics</lable>
<select value={topics} onChange={this.handleTopicsChange}>
<option value='react'> React   </option>
    <option value='java'> java  </option>
    <option value='Js'> js  </option>
  

</select>
<button type='submit'>sumit  </button>
</div>


            </form>
        )
    }
}

export default ForimMake
