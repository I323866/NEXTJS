// import Link from 'next/link'
// import { signIn, signOut, useSession } from 'next-auth/client'
// import styles from './header.module.css'

// // The approach used in this component shows how to built a sign in and sign out
// // component that works on pages which support both client and server side
// // rendering, and avoids any flash incorrect content on initial page load.
// export default function Header () {
//   const [ session, loading ] = useSession()
  
//   return (
//     <header>
//       <noscript>
//         <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
//       </noscript>
//       <div className={styles.signedInStatus}>
//         <p className={`nojs-show ${(!session && loading) ? styles.loading : styles.loaded}`}>
//           {!session && <>
//             <span className={styles.notSignedInText}>You are not signed in</span>
//             <a
//                 href={`/api/auth/signin`}
//                 className={styles.buttonPrimary}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   signIn()
//                 }}
//               >
//                 Sign in
//               </a>
//           </>}
//           {session && <>
//             {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} className={styles.avatar}/>}
//             <span className={styles.signedInText}>
//               <small>Signed in as</small><br/>
//               <strong>{session.user.email || session.user.name}</strong>
//               </span>
//             <a
//                 href={`/api/auth/signout`}
//                 className={styles.button}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   signOut()
//                 }}
//               >
//                 Sign out
//               </a>
//           </>}
//         </p>
//       </div>
//       <nav>
//         {/* <ul className={styles.navItems}>
//           <li className={styles.navItem}><Link href="/"><a>Home</a></Link></li>
//           <li className={styles.navItem}><Link href="/client"><a>Client</a></Link></li>
//           <li className={styles.navItem}><Link href="/server"><a>Server</a></Link></li>
//           <li className={styles.navItem}><Link href="/protected"><a>Protected</a></Link></li>
//           <li className={styles.navItem}><Link href="/api-example"><a>API</a></Link></li>
//         </ul> */}
//       </nav>
//     </header>
//   )
// }

import React from "react";
import Link from "next/link";
import useUser from "../../lib/useUser";
import { useRouter } from "next/router";
import fetchJson from "../../lib/fetchJson";

const Header = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {!user?.isLoggedIn && (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
          {user?.isLoggedIn && (
            <>
              {/* <li>
                <Link href="/profile-sg">
                  <a>
                    <img src={user.avatarUrl} width={20} height={20} /> Profile
                    (Static Generation, recommended)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile-ssr">
                  <a>Profile (Server-side Rendering)</a>
                </Link>
              </li> */}
              <li>
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    mutateUser(
                      await fetchJson("/api/logout", { method: "POST" }),
                      false,
                    );
                    router.push("/");
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          )}
          <li>
            <a href="https://github.com/vvo/next-iron-session">
              {/* <img src="/GitHub-Mark-Light-32px.png" widht="32" height="32" /> */}
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }

        li {
          margin-right: 1rem;
          display: flex;
        }

        li:first-child {
          margin-left: auto;
        }

        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        a img {
          margin-right: 1em;
        }

        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  );
};

export default Header;
