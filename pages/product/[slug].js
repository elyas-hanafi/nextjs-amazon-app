import Layout from '@/components/Layout';
import data from '@/utils/data';
import { Store } from '@/utils/Store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

const ProductScreen = () => {
  const { query } = useRouter();
  const router = useRouter();
  const { dispatch, state } = useContext(Store);
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Page Not Found </div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert('Sorry,Product is out of stock');
      return;
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    router.push(`/cart`);
  };
  return (
    <Layout titel={product.name}>
      <div className="py-2">
        <Link href={`/`}>back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            responsive
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>{product.description}</li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>price</div>
            <div>${product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>status</div>
            <div>${product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
          </div>
          <button className="primary-button w-full" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
