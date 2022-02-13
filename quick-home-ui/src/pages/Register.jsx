import React from 'react';

const Register = () => {

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });

  };

  return (
    <div className='Register-Container'>
      <div className='Register-Wrapper'>
        <h1 className='Register-Title'>CREATE AN ACCOUNT</h1>
        <form className='Register-Form'>
          <input className='Register-Input' placeholder="first name" />
          <input className='Register-Input' placeholder="last name" />
          <input className='Register-Input' placeholder="username" />
          <input className='Register-Input' placeholder="email" />
          <input className='Register-Input' placeholder="password" />
          <select className='Register-Input' >
            <option className='Register-Input' disabled select>Role</option>
            <option className='Register-Input'>User</option>
            <option className='Register-Input'>Seller</option>
          </select>
          <span className='Register-Agreement'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className='Register-Button1' onClick={handleClick} disabled={isFetching}>CREATE</button>
          <button className='Register-Button2'>CANCEL</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
