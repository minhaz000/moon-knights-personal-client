import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from './../../assets/images/login/login.svg';


const Signup = () => {
    const {createUser, googleSignIn} = useContext(AuthContext);
    
    const handleSignIn=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .catch(err=>console.error(err));
    }

    const handleGooleSignIn = () =>{
      googleSignIn()
      .then(result =>{
        const user = result.user;
        console.log(user);
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
    <h1 className="text-4xl font-bold text-center pt-4">Sign Up</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" />
        </div>
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
        </div>
        <div className="form-control mt-6">
        <input className="btn bg-orange-600 border-0 text-white" type="submit" value="SignUp" />
        </div>
      </form>
      <button className="btn w-4/5 mx-auto" onClick={handleGooleSignIn}>Google SignIn</button>
      <p className="text-center pb-10">Already have an account ? <Link className="text-orange-600 font-bold" to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default Signup;