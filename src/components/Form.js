import React, { useState } from 'react'
import validator from 'validator'
import Submit from './Complete'

function Fill(props){
const [fname, setFname] = useState('')
const [fnameError, setfnameError] = useState('')
const [email, setEmail] = useState('')
const [emailError, setemailError] = useState('')
const [user, setUser] = useState('')
const [userError, setuserError] = useState('')
const [pass, setPass] = useState('')
const [passError, setpassError] = useState('')
const [confirm,setConfirm] = useState('')
const [confirmError, setconfirmError] = useState('') 
const [web, setWeb] = useState('')
const [webError, setwebError] = useState('')

function handleSubmit(e){
    e.preventDefault()
    let err = false
    // NAME
    if(fname !== ''){
        if(!validator.isAlpha(fname)){
            err = true
            setfnameError('- Must be a valid Name')
        }else{
            setfnameError('')
        }
    }else{
        err = true
        setfnameError('- Cannot be blank')
    }
    // EMAIL
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
    // USERNAME
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
    // PASSWORD 
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
            setconfirmError('- Cannot be blank')
    }else if(pass == '' && confirm !== ''){
        err = true
        setpassError('- Cannot be blank') 
    }else {
        err = true 
        setpassError('- Cannot be blank')
        setconfirmError('- Cannot be blank')
   }
    
    // WEBSITE
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
            <label className={fnameError === '' ? '': 'labelerror'} htmlFor="name">Name {fnameError}</label>
            <input type="text" 
            id="name" 
            placeholder = 'Name'
            className={fnameError === '' ? '': 'error'}
            value={fname} 
            onChange = {e => setFname(e.target.value)}>
            </input>

            <label className={fnameError === '' ? '': 'labelerror'} htmlFor="email">Email { emailError}</label>
            <input 
            type="email" 
            className={emailError === '' ? '': 'error'}
            value={email} 
            placeholder="Email"
            id="email"
            onChange = {e => setEmail(e.target.value)}>
            </input> 
             
            <label className={fnameError === '' ? '': 'labelerror'} htmlFor="user">Username {  userError}</label>
            <input 
            type="text" 
            placeholder="Username"
            className = {userError === '' ? '' : 'error'}
            id="user" 
            value={user} 
            onChange = {e => setUser(e.target.value)}>
            </input>
           
            <label className={fnameError === '' ? '': 'labelerror'} htmlFor="pass">Password {  passError}</label>
            <input
             type="password" 
             id="pass" 
             placeholder = "Password"
             className={passError === '' ? '' : 'error'}
             value={pass} 
             onChange = {e => setPass(e.target.value)}>
             </input>
           
            <label className={fnameError === '' ? '': 'labelerror'} htmlFor="confirm">Confirm Password { confirmError}</label>
            <input 
            type="password" 
            id="confirm" 
            placeholder = "Confirm Password"
            className = {confirmError === '' ? '' : 'error'}
            value={confirm}
             onChange = {e => setConfirm(e.target.value)}>
             </input>
           
            <label className={fnameError === '' ? '': 'labelerror'}  htmlFor="web">Website {webError}</label>
            <input
            type="url" 
            id="web" 
            placeholder = "Url"
            className = {webError === '' ? '' : 'error'}
            class
            value={web} 
            onChange = {e => setWeb(e.target.value)}>
            </input>

             <button type="submit">Submit</button>
            </form>
        </div>
    )
}
 export default Fill
// 