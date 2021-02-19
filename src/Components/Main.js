import React, {Component} from 'react'
import AddPhoto from './AddPhoto'
import PhotoWall from './PhotoWall'
import Title from './Title'
import {Route} from 'react-router-dom'

class Main extends Component{
  constructor(){
    super()
    this.state={
      posts : [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
        id: 2,
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
    }
  this.removePost=this.removePost.bind(this)
  this.addPost=this.addPost.bind(this)
  }

  removePost(removedPost){
   this.setState((state)=>({
      posts:state.posts.filter(post=>post!==removedPost)
   }))
  }
  
  addPost(newPost){
    this.setState((state)=>({
      posts:state.posts.concat(newPost)
    }))
  }
  


    render(){
      return(
       
        <div>
          {/* use exact otherwise it will render both / and /addphoto */}
          <Route exact path='/' render={()=>(
            <div>
              <Title title={"Photowall"}/>
              <PhotoWall posts={this.state.posts} onRemovePost={this.removePost} />
            </div>
          )}/>
          
          {/* for one component it can also be used like this: */}
          {/* <Route path='/addphoto' component={AddPhoto}/> */}
          <Route path='/addphoto' render={({history})=>(
            <AddPhoto onAddPost={(addedPost)=>{
              this.addPost(addedPost)
              history.push('/')
            }
            }/>
          )}/>

         </div>
     
      )
    }
}

export default Main