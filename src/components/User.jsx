const User=(props)=>{
    return(
         <span className="user">
         <span className="name">props.theName</span>
         <span className="handle">@ props.theHandle</span>
         </span>

    )
}

export default User;
