import React from 'react';

function LogIn({login}){

    function logging(e){
        e.preventDefault();
        login(true);
    }

    return (
        <form onSubmit={logging}>
            Username:<input type='text'/>
            <br/>
            <br/>
            Password:<input type='text'/>
            <br/>
            <br/>
            <button>Login</button>
        </form>
    )
}
export default LogIn;