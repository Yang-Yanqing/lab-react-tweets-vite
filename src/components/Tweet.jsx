  import React from "react";
  import ProfileImage from "./ProfileImage";
  import User from "./User";
  import Timestamp from "./Timestamp";
  import Message from "./Message";
  import Actions from "./Actions";
 
  function Tweet(props){
 
  const {user,timestamp,message}=props.tweetProps;
  return (
    <div className="tweet">
   <ProfileImage theImage={IMAGE_URL}/>
      
      <div className="body">
        <div className="top">
          <User theName={user.name} theHandle={user.handle} />    

          <Timestamp theTime={timestamp} />
        </div>

       <Message message={message}/>

       <Actions/>
       </div>

        

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
  }

  export default Tweet;