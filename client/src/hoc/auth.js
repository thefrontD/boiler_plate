import { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function(Specificcomponent, option, adminRoute = null){

    function AuthenticationCheck(props){
        const dispatch = useDispatch();
            
        useEffect(()=> {
            dispatch(auth()).then(response =>{
                
            })
            
            Axios.get('/api/users/auth')
        })
    }
}
export default function(Specificcomponent, option, adminRoute = null){

    function AuthenticationCheck(props){
        const dispatch = useDispatch();
            
        useEffect(()=> {
            
            Axios.get('/api/users/auth')
        })
    }
}