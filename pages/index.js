import Layout from '@/components/Layout';
import Productitem from '@/components/Productitem';
import data from '@/utils/data';

const Index = () => {
  return (
    <Layout titel={`Home`}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <Productitem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
