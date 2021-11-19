import Head from 'next/head';

import React from "react";

import { userService } from 'services';
import { NavLink, Nav, Alert } from 'components';
import Userdetails from 'components/userdetails';



export default Userdash;

function Userdash() {

    
    function logout2() {
        userService.logout2();
    }
    
    return (
        <>
         <div>
            <Head>
                <title>Next.js User dashbord</title>
                
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
          
            <div >
                <Nav out={logout2} />
                <Alert />
                <div className="container">
                <h1>Hi {userService.userValue?.lastName}!</h1>
                <p>You&apos;re logged in with Next.js & JWT!!</p>
               
            </div>
                 <Userdetails />
            </div>
    </div>
       
            {/* credits */}
          
        </>
    );
}
