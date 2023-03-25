import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from './../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const {logIn} = useContext(AuthContext);
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          form.reset();
        })
        .catch(err=>console.error(err));
    }
    return (
        <div className="hero w-full py-10 ">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className="w-3/4" src={img} alt=""/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-4xl font-bold text-center pt-4">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn bg-orange-600 border-0 text-white" type="submit" value="Login" />
        </div>
      </form>
      <p className="text-center pb-10">New to Car Server ? <Link className="text-orange-600 font-bold" to='/signup'>SignUp</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;