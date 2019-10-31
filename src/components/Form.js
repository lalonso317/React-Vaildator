import React, { useState } from 'react'
import validator from 'validator'

function Fill(props){
/////// HOOKS ///////

// NAME
const [fname, setFname] = useState('')
const [fnameError, setfnameError] = useState('')
// EMAIL
const [email, setEmail] = useState('')
const [emailError, setemailError] = useState('')
// USERNAME
const [user, setUser] = useState('')
const [userError, setuserError] = useState('')
// PASSWORD
const [pass, setPass] = useState('')
const [passError, setpassError] = useState('')
// CONFIRM
const [confirm,setConfirm] = useState('')
const [confirmError, setconfirmError] = useState('') 
// WEBSITE
const [web, setWeb] = useState('')
const [webError, setwebError] = useState('')


// Submit event handler
function handleSubmit(e){
    e.preventDefault()
    let err = false
    // NAME //////////////
    if(fname !== ''){
        if(!validator.isAlphanumeric(fname)){
            err = true
            setfnameError('- Must be a valid Name')
        }else{
            setfnameError('')
        }
    }else{
        err = true
        setfnameError('- Cannot be blank')
    }

    // EMAIL /////////////
    if (email !== ''){
        if(!validator.isEmail(email)){
            err = true
            setemailError("- Must be a valid email")
        }else{
            setemailError('')
        }
    }else{
        err = true
        setemailError('- Cannot be blank')
    }
    // USERNAME ////////////
    if (user !== ''){
        if(!validator.isAlphanumeric(user)){
            err = true
            setuserError("- Must be a valid name")
        }else{
            setuserError('')
        }
    }else{
        err = true
        setuserError('- Cannot be blank')
    }

    // PASSWORD /////////////
    if(pass !== '' && confirm !== '' ){
        if(!validator.isAscii(pass)){
            err = true
            setpassError('- Cannot be blank')
        }else if(!validator.isAscii(confirm)){
            err = true
            setconfirmError('- Cannot be blank')
        
            }if(pass === confirm){
                setpassError('')
                setconfirmError('')
            }else if(pass !== confirm){
                err = true
                setpassError('- Must Match')
                setconfirmError('- Must Match')
            }
     }else if(pass !== '' && confirm == ''){
            err = true
            setconfirmError("- Password's must match ")
    }else if(pass == '' && confirm !== ''){
        err = true
        setpassError("- Password's must match") 
    }else {
        err = true 
        setpassError('- Cannot be blank')
        setconfirmError('- Cannot be blank')
   }
    
    // WEBSITE //////////////
    if(web !== ''){
        if(!validator.isURL(web)){
            err = true
            setwebError('- Enter a valid URL')
        }else{
            setwebError('')
        }
    }else{
        err = true
        setwebError('- Cannot be Blank')
    }

    if(!err){
        props.history.push('/Complete/')
    }
    
    }
    

    return(
        <div id="body">
            <form id="form" onSubmit={handleSubmit}>
            <h1>Profile Form - All fields required</h1>

            {/* NAME */}
            <label className={fnameError === '' ? '': 'labelerror'} htmlFor="name">Name {fnameError}</label>
            <input type="text" 
            id="name" 
            placeholder = 'Name'
            className={fnameError === '' ? '': 'error'}
            value={fname} 
            onChange = {e => setFname(e.target.value)}>
            </input>

            {/* EMAIL */}
            <label className={emailError === '' ? '': 'labelerror'} htmlFor="email">Email { emailError}</label>
            <input 
            type="email" 
            className={emailError === '' ? '': 'error'}
            value={email} 
            placeholder="Email"
            id="email"
            onChange = {e => setEmail(e.target.value)}>
            </input> 

             {/*USERNAME  */}
            <label className={userError === '' ? '': 'labelerror'} htmlFor="user">Username {  userError}</label>
            <input 
            type="text" 
            placeholder="Username"
            className = {userError === '' ? '' : 'error'}
            id="user" 
            value={user} 
            onChange = {e => setUser(e.target.value)}>
            </input>

            {/* PASSWORD */}
            <label className={passError === '' ? '': 'labelerror'} htmlFor="pass">Password {  passError}</label>
            <input
             type="password" 
             id="pass" 
             placeholder = "Password"
             className={passError === '' ? '' : 'error'}
             value={pass} 
             onChange = {e => setPass(e.target.value)}>
             </input>
           
            {/* CONFIRM PASSWORD */}
            <label className={confirmError === '' ? '': 'labelerror'} htmlFor="confirm">Confirm Password { confirmError}</label>
            <input 
            type="password" 
            id="confirm" 
            placeholder = "Confirm Password"
            className = {confirmError === '' ? '' : 'error'}
            value={confirm}
             onChange = {e => setConfirm(e.target.value)}>
             </input>

            {/* WEBSITE */}
            <label className={webError === '' ? '': 'labelerror'}  htmlFor="web">Website {webError}</label>
            <input
            type="text" 
            id="web" 
            placeholder = "Url"
            className = {webError === '' ? '' : 'error'}
            class
            value={web} 
            onChange = {e => setWeb(e.target.value)}>
            </input>

            {/* BUTTON */}
             <button type="submit">Submit</button>
            </form>
        </div>
    )
}
 export default Fill
// 