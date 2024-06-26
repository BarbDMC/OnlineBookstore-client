import './Login.css';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../../hooks/useLogin";
import { login as loginAction } from '../../features/user/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, isLoading } = useLogin();

  const handleEMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loggedUser = await login(email, password);

    if (loggedUser) {
      dispatch(loginAction(loggedUser));
      navigate('/store');
    }
  };

  return (
    <section className="login-background">
      <div className="login-container-align">
        <div className="login-container">
          <div className="login-container-content">
            <h1 className="login-container-content__title">
              Sign in to your account
            </h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="login-form-label">Your email</label>
                <input type="email" name="email" data-testid="email" className="login-form-input" placeholder="name@company.com" required={true} onChange={handleEMailChange} />
              </div>
              <div>
                <label htmlFor="password" className="login-form-label">Password</label>
                <input type="password" name="password" data-testid="password" className="login-form-input" placeholder="••••••••" required={true} onChange={handlePasswordChange} />
              </div>
              <button type="submit" className="login-form-button" disabled={isLoading} >Sign in</button>
              {error && <p className="login-error">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
