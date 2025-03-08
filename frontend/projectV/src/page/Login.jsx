import React from 'react';

function Login() {
  return (
    <section id='login-body'>
            <div id='namedes-box'>
                <h1 id='name'>PROJECTV</h1>
                <p id='des'>Share your thoghts with the world!</p>
            </div>
            <div id='login-page'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} id='login-form'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
                {/* <p id='createAcc'>Don't have an account? <Link to="/signup">Create Now!</Link></p> */}
            </div>
        </section>
  );
}

export default Login;
