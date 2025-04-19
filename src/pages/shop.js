import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function Shop() {
  // State for shopping cart
  const [cart, setCart] = useState([]);
  
  // State for the currently selected sticker (for detailed view)
  const [selectedSticker, setSelectedSticker] = useState(null);
  
  // State for checkout modal
  const [showCheckout, setShowCheckout] = useState(false);
  
  // Shipping cost - flat rate
  const shippingCost = 3.50;
  
  // Calculate cart total (items only)
  const itemsTotal = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  
  // Calculate cart total with shipping
  const cartTotal = cart.length > 0 ? (parseFloat(itemsTotal) + shippingCost).toFixed(2) : "0.00";
  
  // Simulate adding to cart - using a safer approach than alert
  const addToCart = (sticker) => {
    setCart((prevCart) => [...prevCart, sticker]);
  };
  
  // Handle successful payment
  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      // Clear cart after successful payment
      setCart([]);
      setShowCheckout(false);
      
      // In a real application, you would save the order details to your database here
      console.log('Payment completed', details);
      alert(`Thank you for your purchase! Order ID: ${details.id}`);
    });
  };
  
  // Create PayPal order
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: 'AlpinistHub Merchandise',
          amount: {
            currency_code: 'USD',
            value: cartTotal,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: itemsTotal
              },
              shipping: {
                currency_code: 'USD',
                value: cart.length > 0 ? shippingCost.toFixed(2) : "0.00"
              }
            }
          },
          items: cart.map((item, index) => ({
            name: item.name,
            unit_amount: {
              currency_code: 'USD',
              value: item.price.toFixed(2)
            },
            quantity: '1'
          }))
        }
      ]
    });
  };
  
  // Product data for hats
  const hats = [
    {
      id: 1,
      name: "AlpinistHub Mountain Cap",
      image: "/merchandise/AlpinistHubHat.png",
      price: 24.99,
      description: "Premium adjustable cap with embroidered AlpinistHub mountain logo. One-size-fits-most with breathable fabric perfect for climbing days or everyday wear."
    },
    {
      id: 2,
      name: "Choss Connoisseur Cap",
      image: "/merchandise/ChossConnoisseur.png",
      price: 24.99,
      description: "For those who appreciate the finer qualities of questionable rock. This premium embroidered cap is perfect for days when you're climbing on less-than-solid terrain."
    }
  ];

  // Product data for the stickers
  const stickers = [
    {
      id: 1,
      name: "AlpinistHub Logo",
      image: "/stickers/AlpinistHub.png",
      price: 3.99,
      description: "Show your AlpinistHub pride with our official logo sticker. Perfect for water bottles, laptops, or climbing gear."
    },
    {
      id: 2,
      name: "Choss Connoisseur",
      image: "/stickers/ChossConnoisseur.png",
      price: 3.99,
      description: "For those who appreciate the finer qualities of questionable rock. A humorous take on climbing's less solid moments."
    },
    {
      id: 3,
      name: "Climb Chat Repeat",
      image: "/stickers/ClimbChatRepeat.png",
      price: 3.99,
      description: "The perfect summary of most climbing days. A great conversation starter at the crag."
    },
    {
      id: 4,
      name: "I Got Beta on AlpinistHub",
      image: "/stickers/IGotBetaOnAlpinistHub.png",
      price: 3.99,
      description: "Share your source of climbing knowledge with this playful sticker that shows you're in the know."
    },
    {
      id: 5,
      name: "Beta Spray",
      image: "/stickers/BetaSpray.png",
      price: 3.99,
      description: "For the climber who can't help but share beta whether you want it or not. A humorous take on the climbing culture phenomenon."
    },
    {
      id: 6,
      name: "Dyno or Die",
      image: "/stickers/DynoorDie.png",
      price: 3.99,
      description: "For the dynamic movement enthusiasts who see static climbing as just too boring. Show your commitment to airtime."
    },
    {
      id: 7,
      name: "Nice Crux Bro",
      image: "/stickers/NiceCruxBro.png",
      price: 3.99,
      description: "The perfect ironic congratulations for that friend working through the crux. A climbing culture classic."
    },
    {
      id: 8,
      name: "Racked and Reckless",
      image: "/stickers/RackedandReckless.png",
      price: 4.99,
      description: "Premium sticker for the trad climber who's always ready for adventure with a full rack and an empty regard for danger."
    },
    {
      id: 9,
      name: "Send Train",
      image: "/stickers/SendTrain.png",
      price: 3.99,
      description: "All aboard the Send Train! For those magical days when everyone in the crew is crushing their projects."
    },
    {
      id: 10,
      name: "Slack is Sketchy",
      image: "/stickers/SlackisSketchy.png",
      price: 3.99,
      description: "A reminder to your belayer that you prefer your rope tight. Safety first, sends second!"
    },
    {
      id: 11,
      name: "Soft Catch Club",
      image: "/stickers/SoftCatchClub.png",
      price: 4.99,
      description: "Premium sticker for members of the exclusive club of belayers who know how to give the perfect soft catch."
    }
  ];
  
  return (
    <div>
      <Head>
        <title>AlpinistHub | Shop</title>
        <meta name="description" content="Shop AlpinistHub merchandise - stickers, guides, and more climbing gear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="logo-container">
          <Link href="/">
            <img src="/images/alpinisthub.png" alt="AlpinistHub Logo" className="site-logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <img src="/icons/mountain.png" alt="" className="nav-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/rope-soloing">
              <img src="/icons/carabiner.png" alt="" className="nav-icon" />
              Rope Soloing
            </Link>
          </li>
          <li>
            <Link href="/learn">
              <img src="/icons/helmet.png" alt="" className="nav-icon" />
              Learn
            </Link>
          </li>
          <li>
            <Link href="/shop" className="active">
              <img src="/icons/mountain_destination.png" alt="" className="nav-icon" />
              Shop
            </Link>
          </li>
        </ul>
      </nav>

      <main className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', marginTop: '2rem' }}>
          <img src="/icons/mountain_destination.png" alt="Shop icon" width={40} height={40} style={{ objectFit: 'contain' }} />
          <h1 style={{ margin: 0 }}>AlpinistHub Shop</h1>
        </div>

        <div className="alert alert-info" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '2rem' }}>
          <img src="/icons/axe_comment.png" width={30} height={30} alt="Information" style={{ marginTop: '0.25rem' }} />
          <div>
            <h4>Direct Support</h4>
            <p>
              Every purchase directly supports AlpinistHub's mission to provide high-quality climbing education and resources. 
              Products ship within 3-5 business days.
            </p>
          </div>
        </div>
        
        {/* Hat Product Grid */}
        <h2>Headwear</h2>
        <div className="product-grid">
          {hats.map(hat => (
            <div key={hat.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={hat.image} 
                  alt={hat.name} 
                  className="product-image"
                  onClick={() => setSelectedSticker(hat)}
                />
              </div>
              <h3>{hat.name}</h3>
              <p className="product-price">${hat.price.toFixed(2)}</p>
              <button 
                className="btn"
                onClick={() => addToCart(hat)}
              >
                <span className="btn-icon-wrapper">
                  <img src="/icons/carabiner.png" alt="" className="btn-icon" />
                </span>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Sticker Product Grid */}
        <h2>Stickers</h2>
        <div className="product-grid">
          {stickers.map(sticker => (
            <div key={sticker.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={sticker.image} 
                  alt={sticker.name} 
                  className="product-image"
                  onClick={() => setSelectedSticker(sticker)}
                />
              </div>
              <h3>{sticker.name}</h3>
              <p className="product-price">${sticker.price.toFixed(2)}</p>
              <button 
                className="btn"
                onClick={() => addToCart(sticker)}
              >
                <span className="btn-icon-wrapper">
                  <img src="/icons/carabiner.png" alt="" className="btn-icon" />
                </span>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        {/* Product Details Modal - simplified version */}
        {selectedSticker && (
          <div className="modal-backdrop" onClick={() => setSelectedSticker(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedSticker.name}</h2>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedSticker(null)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="product-large-image" style={{ 
                    textAlign: 'center',
                    marginBottom: '1rem',
                    background: '#f8f9fa',
                    padding: '1rem',
                    borderRadius: '5px'
                  }}>
                    <img 
                      src={selectedSticker.image} 
                      alt={selectedSticker.name} 
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '300px',
                        objectFit: 'contain'
                      }} 
                    />
                  </div>
                  <div>
                    <h3>Description</h3>
                    <p>{selectedSticker.description}</p>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginTop: '1rem',
                    padding: '1rem 0',
                    borderTop: '1px solid #eaeaea'
                  }}>
                    <p className="product-price-large" style={{ margin: 0 }}>${selectedSticker.price.toFixed(2)}</p>
                    <button 
                      className="btn"
                      onClick={() => {
                        addToCart(selectedSticker);
                        setSelectedSticker(null);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Cart Summary - Always visible */}
        <div className="cart-summary">
          <div className="cart-icon">
            <img src="/icons/carabiner.png" alt="Cart" width={24} height={24} />
            <span className="cart-count">{cart.length}</span>
          </div>
          <div className="cart-total">
            Total: ${cartTotal}
            {cart.length > 0 && <span className="shipping-note" style={{ fontSize: '0.8rem', display: 'block', marginTop: '0.25rem', opacity: '0.8' }}>(includes $3.50 shipping)</span>}
          </div>
          <button 
            className="btn checkout-btn"
            disabled={cart.length === 0}
            onClick={() => setShowCheckout(true)}
          >
            Checkout
          </button>
        </div>
        
        {/* PayPal Checkout Modal */}
        {showCheckout && (
          <div className="modal-backdrop" onClick={() => setShowCheckout(false)}>
            <div className="modal-content checkout-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Checkout</h2>
                <button 
                  className="modal-close"
                  onClick={() => setShowCheckout(false)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <h3>Order Summary</h3>
                <div className="checkout-items">
                  {cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="checkout-item">
                      <img src={item.image} alt={item.name} className="checkout-item-image" />
                      <div className="checkout-item-details">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="checkout-subtotal" style={{ marginTop: '1rem', padding: '0.5rem 0', borderTop: '1px solid #eaeaea' }}>
                  <p style={{ display: 'flex', justifyContent: 'space-between', margin: '0.25rem 0' }}>
                    <span>Items:</span>
                    <span>${itemsTotal}</span>
                  </p>
                  <p style={{ display: 'flex', justifyContent: 'space-between', margin: '0.25rem 0' }}>
                    <span>Shipping (Flat Rate):</span>
                    <span>${cart.length > 0 ? shippingCost.toFixed(2) : "0.00"}</span>
                  </p>
                </div>
                <div className="checkout-total" style={{ marginTop: '0.5rem', borderTop: '1px solid #eaeaea', paddingTop: '0.5rem', fontWeight: 'bold' }}>
                  <h3 style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
                    <span>Total:</span>
                    <span>${cartTotal}</span>
                  </h3>
                </div>
                <div className="paypal-button-container">
                  <PayPalScriptProvider options={{ 
                    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "AfgqG03olz-5iAEo6BjDDxXxU4ujID1ZyKp2nU89cmvdu-KEhY8YlpV-EU_y0fHwQ_Ruz_rrwefP62hG",
                    currency: "USD"
                  }}>
                    <PayPalButtons 
                      style={{ layout: 'vertical' }}
                      createOrder={createOrder}
                      onApprove={handleApprove}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="container" style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', gap: '1.5rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/mountain.png" width={20} height={20} alt="Home" />
            Home
          </Link>
          <Link href="/rope-soloing" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/carabiner.png" width={20} height={20} alt="Rope Soloing" />
            Rope Soloing
          </Link>
          <Link href="/learn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/helmet.png" width={20} height={20} alt="Learn" />
            Learn
          </Link>
          <Link href="/shop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/mountain_destination.png" width={20} height={20} alt="Shop" />
            Shop
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} AlpinistHub.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
