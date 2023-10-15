import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { creatUser } = useContext(AuthContext);

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, email, password }
        console.log(user);

        creatUser(email, password)
            .then(result => {
                console.log(result.user);
                const lastSignInTime = result.user?.metadata?.lastSignInTime;
                const user = { email, lastSignInTime: lastSignInTime };

                fetch('https://coffee-shop-server-eo88ulseb-ahtesham-sajids-projects.vercel.app/user', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User Created successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                        }
                    })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'User Already Exist',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <p>Already have an account? <Link className="text-red-500 underline" to='/signin'>Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;