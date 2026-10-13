import { useState } from "react";
import { FaCalendarAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

import Image from "../assets/Login-page.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page container-fluid d-flex justify-content-center align-items-center p-3">

      <div className="login-container row g-0 overflow-hidden rounded-2 shadow">

        <section className="login-left col-6 d-flex flex-column justify-content-between align-items-center p-4">

          <div className="brand-section d-flex align-items-center justify-content-center gap-2">
            <FaCalendarAlt className="brand-logo flex-shrink-0" />
            <div>
              <h2 className="brand-title mb-1">LeavePro</h2>
              <p className="brand-subtitle mb-0"> Employee Leave Management System </p>
            </div>
          </div>

          <div className="employee-illustration d-flex align-items-center justify-content-center w-100">
            <img src={Image} alt="Employee working on a laptop" className="img-fluid" />
          </div>

          <div className="left-description text-center">
            <p className="mb-0">Manage your leaves,</p>
            <p className="mb-0">track your balance and</p>
            <p className="mb-0">keep your work-life balance.</p>
          </div>

        </section>

        <section className="login-right col-6 d-flex justify-content-center align-items-center p-4">

          <div className="login-content w-100">

            <div className="welcome-section mb-4">
              <h1 className="welcome-title mb-1">Welcome Back!</h1>
              <p className="welcome-subtitle mb-0">Login to your account to continue</p>
            </div>

            <form>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fs-6">Email Address :</label>
                <div className="input-group">
                  <span className="input-group-text"> <FaEnvelope /> </span>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fs-6"> Password : </label>
                <div className="input-group">
                  <span className="input-group-text"> <FaLock /> </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="input-group-text password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary login-button w-100 mt-1" > Login </button>

            </form>

            <p className="contact-text text-center mt-3 mb-4"> Don't have an account?{" "} <a href="#" className="contact-HR">Contact your HR</a> </p>

            <div className="demo-section border rounded-3 p-3">

              <h2 className="demo-heading mb-3 fs-6">Demo Accounts</h2>

              <div className="demo-account d-flex align-items-center gap-3 mb-3">
                <div className="demo-avatar rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                  <FaUser />
                </div>

                <div className="demo-details">
                  <h3 className="demo-role mb-1">Employee Login</h3>
                  <p className="demo-credentials mb-0"> employee@company.com / 123456 </p>
                </div>
              </div>

              <div className="demo-account d-flex align-items-center gap-3">
                <div className="demo-avatar rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                  <FaUser />
                </div>

                <div className="demo-details">
                  <h3 className="demo-role mb-1">Manager Login</h3>
                  <p className="demo-credentials mb-0">manager@company.com / 123456</p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Login;