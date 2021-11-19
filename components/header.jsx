import Image from 'next/image'
import profilePic from '/img_avatar2.png'
import Logo from '/logo.png'
import { Link } from 'components';
export { Header };

function Header() {

    return (
       <div>
<nav className="navbar navbar-expand-lg navbar-light bg-opacity-0">
  <div className="container">
    <a className="navbar-brand" href="#"><Image src={Logo} alt="Logo" class="Logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
     
       
      </ul>
      <div className="btn-group" role="group">
   
    <button className="avatarbtn" data-bs-toggle="dropdown" aria-expanded="false">
    <Image src={profilePic} alt="Avatar2" class="avatar" />
  </button>
    <ul id="avatardrop" class="dropdown-menu">
      <li><a className="dropdown-item" href="#"><Image src={profilePic} alt="Avatar2" class="avatar" />   <Link href="/account/adminlogin">adminlogin</Link></a></li>
      <li><a className="dropdown-item" href="#"><Image src={profilePic} alt="Avatar2" class="avatar" />  <Link href="/account/login" >user login</Link></a></li>
    </ul>
  </div>
    </div>
  </div>
</nav>

       </div>
    );
}
