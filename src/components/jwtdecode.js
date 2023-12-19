import React from 'react'
import { jwtDecode } from 'jwt-decode'

const jwtdecode = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
     const decode =jwtDecode(token)
      console.log(decode)
    return (
    <div>
        
        
    </div>
  )
}

export default jwtdecode