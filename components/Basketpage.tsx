import Image from 'next/image';

const BasketPage = () => {
  const items = [
    {
      id: 1,
      name: 'Heirloom tomato',
      price: '$5.99',
      weight: '1 lb',
      imageSrc: '/images/tomato.jpg', 
    },
    {
      id: 2,
      name: 'Organic ginger',
      price: '$6.50',
      weight: '0.5 lb',
      imageSrc: '/images/ginger.jpg', 
    },
    {
      id: 3,
      name: 'Sweet onion',
      price: '$14.95',
      weight: '5 lb',
      imageSrc: '/images/onion.jpg', 
    },
  ];

  const orderSummary = {
    subtotal: '$27.44',
    shipping: '$3.99',
    tax: '$2.00',
    total: '$33.43',
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Basket</h1>
      <div className="text-gray-500 mb-6">3 items</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items List */}
        <div className="col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-green-600 font-semibold">{item.price} / lb</p>
                  <p className="text-gray-500 text-sm">{item.weight}</p>
                </div>
              </div>
              <div>
                <button className="flex items-center space-x-2 border rounded-md px-2 py-1">
                  <span>{item.weight}</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="text-lg font-semibold">{item.price}</div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-bold mb-4">Order summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{orderSummary.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{orderSummary.shipping}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{orderSummary.tax}</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{orderSummary.total}</span>
          </div>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md">
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
