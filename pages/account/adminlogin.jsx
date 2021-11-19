import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import logo from '/logo.png'
import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';
import { Header } from 'components/header';

export default Adminlogin;

function Adminlogin() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/admindash';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
      <Layout>

        <div className="login-body">
        <Header />
      
            
       
        <div class="form">
  <div class="form-toggle"></div>
  <div class="form-panel one">
    <div class="form-header">
      <h1>Admin Login</h1>
    </div>
    <div class="form-content">
      <form onSubmit={handleSubmit(onSubmit)}> 
        <div class="form-group">
          <label for="username">Adminname</label>
          <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div class="form-group">
          <label class="form-remember">
            <input type="checkbox"/>Remember Me
          </label><a class="form-recovery"><Link href="/account/register" className="btn btn-link">Register</Link></a>
        </div>
        <div class="form-group">
        <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
        </div>
      </form>
    </div>
  </div>
 
</div>

<script></script>
 

        </div>
        </Layout>
    );
}
