import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import logo from '/logo.png'
import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';
import { Header } from 'components/header';

export default Login;

function Login() {
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
                const returnUrl = router.query.returnUrl || '/userdash';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (

      <Layout>
        <div className="login-body">
        <Header />
      
            
       
        <div className="form">
  <div className="form-toggle"></div>
  <div className="form-panel one">
    <div className="form-header">
      <h1>user Login</h1>
    </div>
    <div className="form-content">
      <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label className="form-remember">
            <input type="checkbox"/>Remember Me
          </label>
        </div>
        <div className="form-group">
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
