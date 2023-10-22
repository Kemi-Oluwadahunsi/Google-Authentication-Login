import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  "./styles.css"
import { Link } from "react-router-dom";
import {signInWithGoogle} from './components/Firebase'
import { FcGoogle } from 'react-icons/fc';

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry")
            return;
        }
        console.log(user, pwd);
        setSuccess(true);
    }
    
    return (
        
        <>
            <div className=" grid h-screen w-full place-content-center ">

                {success ? (
                    <section>
                        <h1 className="text-white text-4xl ">Success!</h1>
                        <span className="text-white text-4xl mt-10"><Link to = "/login" >Sign In</Link></span>
                    </section>
            ) : (

            <section className="bg-gray-900  justify-center rounded-lg"  >
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>
                
                

                <form className="w-full form-width mx-auto p-8  rounded-lg" onSubmit={handleSubmit}>

                    <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>
                    <div className="flex flex-col text-gray-300 py-2">
                        <label htmlFor="username">
                        User Name:
                        <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon className="ml-2" icon={faCheck} />
                        </span>

                        <span className={validName || !user ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                        </label>
                        <input 
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}>
                        </input>

                    </div>

                    <p  id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                       
                            <FontAwesomeIcon className="ml-2 text-gray-300 text-xs" icon={faInfoCircle} />
                            <span className="ml-1 text-gray-300 text-xs">
                                4 to 24 characters.<br />
                                Letters, numbers, underscores, hyphens allowed.
                            </span>
                
                    </p>

                    <div className="flex flex-col text-gray-300 py-2">

                        <label htmlFor="password">
                            Password:

                            <span className={validPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon  className="ml-2" icon={faCheck} />
                            </span>

                            <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                         </label>

                        <input 
                             className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}>
                        </input>

                    </div>
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>

                            <FontAwesomeIcon className="text-gray-300 text-xs ml-2" icon={faInfoCircle} />
                            <span className="ml-1 text-gray-300 text-xs">
                                8 to 24 characters. <br />
                                Must include uppercase and lowercase letters, a number and a special character. <br />
                                Allowed special characters: <span aria-label="exclamation mark">!</span>
                                <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </span>
                    </p>

                    <div className="flex flex-col text-gray-300 py-2">

                        <label htmlFor="confirm_pwd">
                        Confirm Password:

                        <span className={validMatch && matchPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon className="ml-2" icon={faCheck} />
                        </span>

                        <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>

                    <input 
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}>
                    </input>
                    </div>

                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon className="text-gray-300 text-xs" icon={faInfoCircle} />
                            <span className="ml-1"> Must match the first password input field.</span>
                    </p>

                    <button className="w-full my-5 py-2 cursor-pointer bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    <span className='text-gray-300  grid place-content-center'>or</span>
                    <button
                        onClick={signInWithGoogle}
                        className=" flex justify-center gap-3 w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                    > <FcGoogle className="text-2xl" /> Sign Up with Google</button>

                    <p className="text-gray-300 flex justify-around">
                        Already have an Account?
                        <span className="line">
                            {/*for router link for sign in*/}
                            <Link to= "/login"  className="hover: text-teal-600">Sign In</Link>
                        </span>
                    </p>
                </form>
            </section>
            )}

            </div>
        </>
    )
}

export default SignUp