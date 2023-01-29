import { Store } from '@/utils/Store';
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

const Layout = ({ children, titel }) => {
  const { dispatch, state } = useContext(Store);
  const { cart } = state;
  const [CartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, e) => a + e.quantity, 0));
  }, [cart.cartItems]);
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
              <Link href={`/cart`} legacyBehavior>
                <a className="p-2">
                  Cart
                  {CartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {CartItemsCount}
                    </span>
                  )}
                </a>
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
