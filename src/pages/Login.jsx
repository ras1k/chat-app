import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ChatGram</span>
                <span className="title">Login</span>
                <form >
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                    {/* {err && <span>Something went wrong</span>} */}
                </form>
                <p>You don&apos;t have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;