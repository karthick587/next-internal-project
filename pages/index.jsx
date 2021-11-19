import { userService } from 'services';
import { Link } from 'components';

export default Home3;

function Home3() {
    
    return (
        <div >
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>You&apos;re logged in with Next.js & JWT!!</p>
               
            </div>
        </div>
      
    </div>
    );
}
