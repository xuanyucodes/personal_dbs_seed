import React, {useState} from 'react';
import api_call from '../api/api_call';

const Login = ({setIsLoggedIn}) => {

    const [loginID, setLoginID] = useState('');
    const [password, setPassword] = useState('');
    const [activeErrorMsg, setActiveErrorMsg] = useState('transition hidden');

    const onLoginIDChange = (e) => { setLoginID(e.target.value);}
    const onPasswordChange = (e) => { setPassword(e.target.value);}

    const attemptLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await api_call.post('/login', {
                username: loginID, 
                password: password
            });
            if (response.data.username === loginID) {setIsLoggedIn(true);}
        }
        
        catch (e) {setActiveErrorMsg('');}
    }

    return (        
        <div className="ui middle aligned center aligned grid">
            <div className="column">
            <form className="ui large form" onSubmit={attemptLogin}>
                <div className="ui stacked segment">
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="user icon"/>
                            <input placeholder="Username" value={loginID} onChange={onLoginIDChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon"/>
                            <input value={password} placeholder="Password" onChange={onPasswordChange}/>
                        </div>
                    </div>
                    <button type="submit" className="ui button red">Submit</button>
                    <p className={activeErrorMsg} style={{marginTop: '20px'}}>Error! Please try again.</p>
                </div>
            </form>
            </div>
            
        </div>
    );
}

export default Login;