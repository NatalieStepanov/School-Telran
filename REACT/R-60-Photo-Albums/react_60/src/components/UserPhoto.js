

const UserPhoto =({photo})=>{
    return(
        <div className="col">
             <div className="card text-center h-100">
                 <img src ={photo.src} className="card-img-top" alt="..."/>
                 <h5 className="card-title">{photo.title}</h5>  
             </div>
             <button className="btn btn-outline-danger"
                         onClick={removePhoto}>Remove</button>
        </div>
    )
}

const removePhoto =event=>{
    console.log(event.target.parentNode)
  }

export default UserPhoto