import React, {Component} from 'react'

class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        const linkVal= event.target.elements.link.value
        const descriptionVal = event.target.elements.description.value
        const post = {
            id:Number(new Date()),
            description:descriptionVal,
            imageLink:linkVal
        }
        if(descriptionVal && linkVal){
            this.props.onAddPost(post)
            console.log(post.id)
        }
    }
   
    render(){
        return(
            <div>
                <h1>Photowall</h1>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input className='input' type="text" placeholder='Link' name='link'/>
                        <input className='input' type="text" placeholder='Description' name='description'/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddPhoto