import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { adminService } from 'services';

export { Adminnav };

function Adminnav() {
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        const subscription = adminService.admin.subscribe(x => setAdmin(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        adminService.logout();
    }

    // only show nav when logged in
    if (!admin) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                <NavLink href="/admins" className="nav-item nav-link">Users</NavLink>
                <a onClick={logout} className="nav-item nav-link">Logout</a>
            </div>
        </nav>
    );
}