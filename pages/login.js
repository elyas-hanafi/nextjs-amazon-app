import Layout from '@/components/Layout';
import Link from 'next/link';

const LiginScreen = () => {
  return (
    <Layout titel={`Login Form`}>
      <form className="mx-auto max-w-screen-md">
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type={`email`} className="w-full" id="email" autoFocus></input>
        </div>{' '}
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type={`password`}
            className="w-full"
            id="password"
            autoFocus
          ></input>
        </div>
        <div className="mb-4">
          <button className="primary-button">Login</button>
        </div>{' '}
        <div className="mb-4">
          Do &apos;t have an account? &nbsp;
          <Link href={`register`}>Register</Link>
        </div>
      </form>
    </Layout>
  );
};

export default LiginScreen;
