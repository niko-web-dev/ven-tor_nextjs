import Head from 'next/head';

import MainLink from '../components/MainLink'

import {useUser, useAllUser} from "../server/lib/hooks";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ven-tor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className="content bg">
        <MainLink 
          url="/animation-main-page" 
          text="Animation page"/>

        <MainLink 
          url="/minimal-page" 
          text="Minimal page" />
        </div>

        <Navbar/>
      </main>
      
      <style jsx global>{`
        .main {
          width: 100%;
        }
        .animation_page,
        .minimal_page {
          font-family: 'lacart';
          width: 100%;
          height: 50vh;
          position: relative;
          font-size: 36px;
          color: #000;
        }
        .animation_page > div,
        .minimal_page > div {
          transform: translate(-50%, -50%);
          position: absolute;
          left: 50%;
          padding: 30px 50px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10%;
        }
        .animation_page div {
          top: 50%;
        }
        .minimal_page div {
          bottom: 50%;
        }
        div a {
          display: block;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: lacart.woff2;
        }

        * {
          box-sizing: border-box;
        }
          
        @media screen and (max-width: 760px){
          .animation_page,
          .minimal_page {
            font-size: 22px;
          }
          .animation_page > div,
        .minimal_page > div{
          padding: 10px;
        }
          .amim-page_btn, .min-page_btn{
            width: 300px;
            text-align: center;
            // padding: 0;
          }
      }
      `}</style>
    </div>
  );
}

const Navbar = () => {
  const [user, { mutate }] = useUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    // set the user state to null
    mutate(null);
  };
  
    return (
    
      /* ... */
      
      <button onClick={handleLogout}>Logout</button>
      /* ... */
  );
 
  
};