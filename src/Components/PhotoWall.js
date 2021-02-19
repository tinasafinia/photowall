import React from 'react'
import Photo from './Photo'
import Proptypes from 'prop-types'
import {Link} from 'react-router-dom'


function PhotoWall (props) {

      return(
        <div>             
          <Link className='addIcon' onClick={props.onAddphoto} to='/addphoto'></Link>
          <div className='photoGrid'>
          
          {props.posts.sort(function(x,y){
            return y.id-x.id
          })
          .map((post, i)=><Photo key={i} post={post} onRemovePost={props.onRemovePost}/>)}
          </div>
        </div>
      ) 
}

//this is just for easier debugging
PhotoWall.prototype={
  posts:Proptypes.array.isRequired,
  onRemovePost:Proptypes.func.isRequired
}
export default PhotoWall