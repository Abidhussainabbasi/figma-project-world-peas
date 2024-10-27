import Image from 'next/image';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Heirloom tomato',
      price: '$5.99 / lb',
      description: '',
      imageSrc: '/images/tomato.jpg', // Change the path to your image location
    },
    {
      id: 2,
      name: 'Organic ginger',
      price: '$12.99 / lb',
      description: '',
      imageSrc: '/images/ginger.jpg', // Change the path to your image location
    },
    {
      id: 3,
      name: 'Sweet onion',
      price: '$2.99 / lb',
      description: '',
      imageSrc: '/images/onion.jpg', // Change the path to your image location
    },
  ];

  return (
    <div className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold">Produce</h1>
        <div className="text-lg">Fresh — September,2024</div>
      </header>

      <div className="flex space-x-4 mb-8">
        <button className="px-4 py-2 bg-green-600 text-white rounded-md">Default</button>
        <button className="px-4 py-2 border rounded-md">A-Z</button>
        <button className="px-4 py-2 border rounded-md">List view</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm">
            <Image 
              src={product.imageSrc} 
              alt={product.name} 
              width={300} 
              height={200} 
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-green-600 font-semibold">{product.price}</p>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
