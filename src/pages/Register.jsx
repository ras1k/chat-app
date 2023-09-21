import { FcAddImage } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ChatGram</span>
                <span className="title">Register</span>
                <form >
                    <input required type="text" placeholder="display name" />
                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="password" autoComplete="on" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <FcAddImage />
                        <span>Add an avatar</span>
                    </label>
                    <button >Sign up</button>
                    {/* {loading && "Uploading and compressing the image please wait..."}
            {err && <span>Something went wrong</span>} */}
                </form>
                <p>
                    You do have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;