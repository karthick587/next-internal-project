import Image from 'next/image'
import profilePic from '/img_avatar2.png'
import Logo from '/logo.png'
import { Link } from 'components';
export { Header };

function Header() {

    return (
       <div>
<nav class="navbar navbar-expand-lg navbar-light bg-opacity-0">
  <div class="container">
    <a class="navbar-brand" href="#"><Image src={Logo} alt="Logo" class="Logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
     
       
      </ul>
      <div class="btn-group" role="group">
   
    <button class="avatarbtn" data-bs-toggle="dropdown" aria-expanded="false">
    <Image src={profilePic} alt="Avatar2" class="avatar" />
  </button>
    <ul id="avatardrop" class="dropdown-menu">
      <li><a class="dropdown-item" href="#"><Image src={profilePic} alt="Avatar2" class="avatar" />   <Link href="/account/adminlogin">adminlogin</Link></a></li>
      <li><a class="dropdown-item" href="#"><Image src={profilePic} alt="Avatar2" class="avatar" />  <Link href="/account/login" >user login</Link></a></li>
    </ul>
  </div>
    </div>
  </div>
</nav>

       </div>
    );
}
