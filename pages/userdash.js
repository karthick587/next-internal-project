import Head from 'next/head';

import React from "react";

import { userService } from 'services';
import { NavLink, Nav, Alert } from 'components';
import Userdetails from 'components/userdetails';
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";





export default Userdash;
const CLOUD_NAME = "dwvnm18dm";
const UPLOAD_PRESET = "<y4cgpq4l>";
function Userdash() {

    
    function logout2() {
        userService.logout2();
    }
    
    return (
        <>
         <div>
            <Head>
                <title>dashbord</title>
                
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
          
            <div >
                <Nav out={logout2}
                profileName={<h5>{userService.userValue?.username}</h5>} 
                profileEmail={<h5>{userService.userValue?.email}</h5>}
                />
                <Alert />
                <div className="container">
                <h1>Hi {userService.userValue?.lastName}!</h1>
                <p>You&apos;re logged in with Next.js & JWT!!</p>
               
            </div>
                 <Userdetails />
            </div>
            <Uploady
    destination={{ 
        url: `https://api.cloudinary.com/v1_1/{dwvnm18dm}/upload`,
        params: {
            upload_preset: UPLOAD_PRESET,
        }
    }}>
    <UploadButton/>
</Uploady>
               

    </div>
       
            {/* credits */}
          
        </>
    );
}
