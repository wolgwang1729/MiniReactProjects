import React,{useContext} from "react";
import UserContext from "../Context/UserContext";


function Profile(){
    const {user}=useContext(UserContext);
    if(!user){
        return <div>Please enter details</div>
    }
    else{
        return <div>Hello {user.userName}</div>
    }
}

export default Profile;
