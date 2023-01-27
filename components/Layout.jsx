import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ children, titel }) => {
  return (
    <>
      <Head>
        <title>{titel ? titel + '- amazon' : 'amazon'}</title>
        <meta name="description" content="Ecommerce Web" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex px-4 h-12 items-center justify-between shadow-md">
            <Link href={`/`} legacyBehavior>
              <a className="text-lg font-bold">amazon</a>
            </Link>
            <div>
              <Link href={`/Cart`} legacyBehavior>
                <a className="p-2">Cart</a>
              </Link>
              <Link href={`/Login`} legacyBehavior>
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          footer
        </footer>
      </div>
    </>
  );
};

export default Layout;
