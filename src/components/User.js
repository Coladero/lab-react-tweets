

function User(props){
    console.log(props)
    return(
        <div>
  <span>   
    <span className="name">{props.userData.name} </span>
    <span className="handle">{props.userData.handle}</span>
  </span> 
  </div>
    )
}

export default User