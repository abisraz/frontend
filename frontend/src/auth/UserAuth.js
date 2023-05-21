import React, { useState } from 'react'
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    if(currentUser!==null){
        return children;
    }else{
        Swal.fire({
            icon : 'error',
            title : 'Error',
            text : 'You should be loggedin'
        });
        return <Navigate to="/main/login" />
    }
  
}

export default UserAuth