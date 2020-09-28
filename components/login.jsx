import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../server/lib/hooks';

const LoginPage = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useUser();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.replace('/');
  }, [user]);

  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }

  return (
      <div className="login">
        <Head>
          <title>Sign in</title>
        </Head>
        
        <form onSubmit={onSubmit}>
          {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
          <label htmlFor="email">
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
            />
          </label>
          <label htmlFor="password">
            <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
            />
          </label>
          <button type="submit">Войти</button>
          {/* <Link href="/forgetpassword">
            <a>Forget password</a>
          </Link> */}
        </form>

  <style>{`
    form {
      padding: 30px 50px;
        background: rgba(255,255,255,0.8);
        border-radius: 10%;
        display: flex;
        flex-direction: column;
        max-width: 300px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }
    input {
      margin-bottom: 20px;
    }
    button {
      background: #ccc;
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      color: #fff;
    }
  `}</style>
      </div>
  );
};

export default LoginPage;