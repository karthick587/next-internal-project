import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';

export { Nav };

function Nav(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    
    // only show nav when logged in
    if (!user) return null;
    function logout() {
        userService.logout();
    }
    
    function logout2() {
        userService.logout2();
    }
    return (
        <nav className="navbar navbar-expand navbar-dark color">
            <div className="container">
            <div className="navbar-nav">
                <NavLink href="#" exact className="nav-item nav-link">Home</NavLink>
               {props.menulinks}
                <a onClick={props.out} className="nav-item nav-link">Logout</a>
            </div>
            </div>
        </nav>
    );
}