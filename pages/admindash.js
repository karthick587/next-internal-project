import Head from 'next/head';

import React from "react";

import { userService } from 'services';
import { NavLink, Nav, Alert } from 'components';





export default Admindash;
function Admindash() {

    function logout() {
        userService.logout();
    }
    return (
        <>
         <div>
            <Head>
                <title>Next.js 11 - User Registration and Login Example</title>
                
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
          
            <div>
                <Nav out={logout}  menulinks={ <NavLink href="/users" className="nav-item nav-link">users</NavLink>} />
               
                <Alert />
               <div className="container">
                 admindash
                 </div>
            </div>
           
           </div>
       
            {/* credits */}
          
        </>
    );
}
