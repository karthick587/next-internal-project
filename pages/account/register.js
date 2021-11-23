import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'components';

import { Layout } from 'components/account';
import { userService, alertService } from 'services';
import { Header } from 'components/header';


export default Register;

function Register() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
            adminfirstName: Yup.string()
            .required('First Name is required'),
            adminlastName: Yup.string()
            .required('Last Name is required'),
            adminname: Yup.string()
            .required('adminname is required'),
            adminemail: Yup.string()
            .required('adminemail is required'),
            password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('/account/adminlogin');
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
        <div className="login-body">
            <Header />
     
        <div className="form">
            <div className="form-panel one">
    <div className="form-header">
      <h1>Register Account</h1>
    </div>
    <div className="form-content">
      <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="form-group">
        <label>First Name</label>
                            <input name="adminfirstName" type="text" {...register('adminfirstName')} className={`form-control ${errors.adminfirstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.adminfirstName?.message}</div>
        </div>
        <div className="form-group">
           <label>Last Name</label>
                            <input name="adminlastName" type="text" {...register('adminlastName')} className={`form-control ${errors.adminlastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.adminlastName?.message}</div>
        </div>
        <div className="form-group">
        <label>adminname</label>
                            <input name="adminname" type="text" {...register('adminname')} className={`form-control ${errors.adminname ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.adminname?.message}</div>
        </div>
        <div className="form-group">
        <label>Email</label>
                            <input name="adminemail" type="email" {...register('adminemail')} className={`form-control ${errors.adminemail ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.adminemail?.message}</div>
        </div>
        <div className="form-group">
        <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        
        <div className="form-group">
        <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </button>
                        <Link  href="/account/adminlogin" >Cancel</Link>
        </div>
      </form>
    </div>
    </div>
  </div>
        </div>
        </Layout>
    );
}
