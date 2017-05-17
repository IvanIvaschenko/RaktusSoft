import React, { Component } from 'react';

class Post extends Component{

  onClikHandler(direct,e){
    e.preventDefault();
    var artist = this.refs.artist.value,
    place = this.refs.place.value,
    records = this.refs.records.value,
    obj={
       artist: artist,
       place: place,
       records: records
     }

     if (artist.length===0 || place.length===0 || records.length===0) {
       return false
     }

     if (direct === 'add') {
       return this.props.postActions.addPost(obj)
    }else{
     obj.id = this.props.post.selectedObj.id;
     this.props.postActions.updatePost(obj);
   }
  }

  onClikcEdit(obj, e){
    e.preventDefault();
    this.props.postActions.editPost(obj);
  }

  onClikDelete(id, e){
    e.preventDefault();
    this.props.postActions.deletePost({
      id: id,
      token: localStorage.getItem('token')
    })
  }

  render() {
    const add =
    <div  className='add-post fadeInUp'>
      <h1>ADD YOUR POST</h1>
      <form>
          <input ref='artist'  placeholder='Artist' />
          <input ref='place'  placeholder='Concert place'/>
          <input ref='records'  placeholder='Perfomance record'/>
          <button className='send-btn add-btn' onClick={this.onClikHandler.bind(this, 'add')}>ADD</button>
      </form>
    </div>

    const edit =
    <div  className='add-post updt-post fadeInUp'>
      <h1>UPDATE POST</h1>
      <h1>{this.props.post.selectedObj.artist}</h1>
      <h1 className='close-edit' onClick={()=>this.props.postActions.closeEdit()}>X CLOSE</h1>
      <form>
        {<h1>{this.props.selectedObj}</h1>}
          <input ref='artist' placeholder='Artist' />
          <input ref='place' placeholder='Concert place'/>
          <input ref='records' placeholder='Perfomance record'/>
          <button className='send-btn add-btn' onClick={this.onClikHandler.bind(this, 'update')}>ADD</button>
      </form>
    </div>

    const posts = this.props.post.data.map((item, index)=>{
      return(
          <div className='post' key={index}>
            <div ><h2>{item.artist}</h2></div>
            <div><h2>{item.concertPlace}</h2></div>
            <div><h2>{item.perfomansRecords}</h2></div>
            <div className='delete' onClick={this.onClikDelete.bind(this, item.id)}><h2>{this.props.auth.login ? 'X' : null}</h2></div>
            <div className='edit' onClick={this.onClikcEdit.bind(this, item)}><h2>{this.props.auth.login ? 'edit' : null}</h2></div>
          </div>
    )
    }
  )

    return(
      <div>
        <div className='post'>
          <div><h2>Artist</h2></div>
          <div><h2>Concert place</h2></div>
          <div><h2>Perfomance records</h2></div>
        </div>
        {this.props.post.data.length===0 ? <h1>No posts</h1> : posts}
        {this.props.auth.login ? <div>{this.props.post.postIsEdit ? edit : add}</div> :null }
      </div>
    )
  }
}



export default Post;
