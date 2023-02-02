import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Productitem = ({ product }) => {
  return (
    <>
      <div className="card">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </Link>
        <div className="flex p-5 flex-col items-center justify-center">
          <Link href={`/product/${product.slug}`}>
            <h1 className="text-lg">{product.name}</h1>
          </Link>
          <p className="mb-2">{product.brand}</p>
          <p>${product.price}</p>
          <button className="primary-button" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Productitem;
