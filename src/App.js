import React, { useState, useEffect } from 'react';
import { ChevronLeft, Star, MapPin, Coffee, UtensilsCrossed } from 'lucide-react';

// Sample data
const restaurants = [
  {
    id: 1,
    name: 'Pista House',
    rating: 4.5,
    address: 'Gandimaisamma',
    image: 'https://images.jdmagicbox.com/v2/comp/hyderabad/f1/040pxx40.xx40.180405190502.d5f1/catalogue/pista-house-family-restaurant-bakery-and-banquet-hall-jntu-kukatpally-hyderabad-restaurants-7mj92ojs13.jpg' // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Flamingo Resto',
    rating: 4.2,
    address: 'ORR,Dundigal',
    image: 'https://lh5.googleusercontent.com/p/AF1QipMWb4JPTyqjc9n9FqUKLVgG7zqmat4xlOuO1F4X=w390-h262-n-k-no', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'My Village Kitchen & Jail Mandi',
    rating: 4.8,
    address: 'Bowrampet,Dundigal',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOXYLvdJvxsIUA04EtwEWobok4j4V89n5KCFvuI=s1360-w1360-h1020'
  },
  {
    id: 4,
    name: 'Milan Dhaba',
    rating: 4.6,
    address: 'Gundla Pochampally',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZipqdjDa9cCmMT4C8QbLyE8xxyC65iIAohw&s'
  },
  {
    id: 5,
    name: 'Lazeez Arabian mandi',
    rating: 4.7,
    address: 'Near gandimaisamma X-roads',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMoZJfWphbRkWK3mi3M7DF6WTlzvwi2PaT34L5s=s1360-w1360-h1020'
  },
  {
    id: 6,
    name: 'NV Grand Family Restaurant',
    rating: 4.9,
    address: 'Dommarapochampally',
    image: 'https://lh5.googleusercontent.com/p/AF1QipN0z937seBVcaWrgE-VJVQHHw5LxyaRvagT3mr1=w195-h130-n-k-no', // Replace with actual image URL
  },
  {
    id: 7,
    name: 'WhiteSand Kitchen and restro',
    rating: 4.3,
    address: 'Dundigal',
    image: 'https://lh5.googleusercontent.com/p/AF1QipMdKhzvj0tJRW7HXHailSC-RDnT7qj2K3zruIU9=w390-h262-n-k-no', // Replace with actual image URL
  },
  {
    id: 8,
    name: 'Ujwala Grand',
    rating: 4.4,
    address: 'Gandi Maisamma, Domara Pocham Pally',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPAXhk63tWvYjwjS_yKXW4zvlO-NTgzAnfPmQdo=s1360-w1360-h1020', // Replace with actual image URL
  },
];

const menuItems = {
  1: [
    { dishName: "Haleem", description: "Slow-cooked stew of meat, lentils, and wheat", price: 180 },
    { dishName: "Hyderabadi Biryani", description: "Aromatic basmati rice with marinated meat", price: 250 },
    { dishName: "Mutton Kebab", description: "Grilled skewers of spiced minced mutton", price: 220 },
    { dishName: "Chicken 65", description: "Spicy deep-fried chicken pieces", price: 200 },
    { dishName: "Double Ka Meetha", description: "Traditional bread pudding dessert", price: 100 },
    { dishName: "Tandoori Chicken", description: "Chicken marinated in yogurt and spices, roasted in a tandoor", price: 300 },
    { dishName: "Butter Naan", description: "Soft Indian bread with butter", price: 40 },
    { dishName: "Dal Tadka", description: "Yellow lentils tempered with garlic and spices", price: 150 },
    { dishName: "Egg Biryani", description: "Spiced rice cooked with boiled eggs", price: 200 },
    { dishName: "Mutton Haleem", description: "Rich, slow-cooked mutton stew with lentils and wheat", price: 250 },
    { dishName: "Shami Kebab", description: "Minced meat patties with spices", price: 180 },
    { dishName: "Veg Biryani", description: "Fragrant rice cooked with mixed vegetables and spices", price: 180 }
  ],
  2: [
    { dishName: "Grilled Chicken", description: "Succulent grilled chicken with herbs", price: 300 },
    { dishName: "Paneer Tikka", description: "Marinated paneer cubes grilled to perfection", price: 250 },
    { dishName: "Veg Manchurian", description: "Deep-fried vegetable balls in tangy sauce", price: 220 },
    { dishName: "Hakka Noodles", description: "Stir-fried noodles with vegetables", price: 200 },
    { dishName: "Brownie with Ice Cream", description: "Warm brownie served with vanilla ice cream", price: 150 },
    { dishName: "Chilli Chicken", description: "Crispy fried chicken tossed in spicy sauce", price: 230 },
    { dishName: "Fish Fingers", description: "Crispy fried fish sticks served with dip", price: 280 },
    { dishName: "Chicken Lollipop", description: "Spicy batter-fried chicken wings", price: 240 },
    { dishName: "Pasta Arrabiata", description: "Pasta in spicy tomato sauce", price: 200 },
    { dishName: "Crispy Corn", description: "Crispy fried corn kernels tossed with spices", price: 180 },
    { dishName: "Chicken Satay", description: "Grilled chicken skewers with peanut sauce", price: 300 }
  ],
  3: [
    { dishName: "Jail Mandi Special Chicken", description: "Specialty chicken dish with unique spices", price: 280 },
    { dishName: "Mutton Mandi", description: "Rice dish with tender mutton pieces", price: 320 },
    { dishName: "Fish Fry", description: "Crispy fried fish with spices", price: 260 },
    { dishName: "Veg Pulao", description: "Fragrant rice cooked with mixed vegetables", price: 200 },
    { dishName: "Gulab Jamun", description: "Soft milk-based sweets in sugar syrup", price: 90 },
    { dishName: "Chicken Shawarma", description: "Grilled chicken wrapped in pita bread", price: 180 },
    { dishName: "Tandoori Pomfret", description: "Whole pomfret fish grilled with spices", price: 350 },
    { dishName: "Reshmi Kebab", description: "Tender chicken kebabs marinated in creamy sauce", price: 280 },
    { dishName: "Chicken Malai Tikka", description: "Chicken skewers marinated in cream and spices", price: 270 },
    { dishName: "Prawns Masala", description: "Juicy prawns cooked in spicy masala", price: 350 }
  ],
  4: [
    { dishName: "Butter Chicken", description: "Creamy tomato-based chicken curry", price: 270 },
    { dishName: "Dal Makhani", description: "Rich and creamy black lentil curry", price: 180 },
    { dishName: "Tandoori Roti", description: "Whole wheat flatbread baked in tandoor", price: 30 },
    { dishName: "Paneer Lababdar", description: "Cottage cheese in a rich gravy", price: 240 },
    { dishName: "Lassi", description: "Traditional yogurt-based drink", price: 60 },
    { dishName: "Kadai Paneer", description: "Paneer cubes cooked in tomato and capsicum gravy", price: 220 },
    { dishName: "Tandoori Mushroom", description: "Grilled mushrooms marinated in spices", price: 200 },
    { dishName: "Mutton Handi", description: "Slow-cooked mutton curry in a clay pot", price: 280 },
    { dishName: "Stuffed Kulcha", description: "Stuffed Indian bread baked in tandoor", price: 100 }
  ],
  5: [
    { dishName: "Arabian Mandi", description: "Traditional Arabian rice dish with meat", price: 350 },
    { dishName: "Shawarma", description: "Grilled meat wrapped in flatbread", price: 150 },
    { dishName: "Falafel", description: "Deep-fried chickpea balls", price: 120 },
    { dishName: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 100 },
    { dishName: "Baklava", description: "Layered pastry dessert with nuts and honey", price: 130 },
    { dishName: "Grilled Lamb Chops", description: "Juicy lamb chops grilled with spices", price: 380 },
    { dishName: "Mutton Kapsa", description: "Arabian spiced mutton rice", price: 400 }
  ],
  6: [
    { dishName: "Mutton Rogan Josh", description: "Tender mutton curry with aromatic spices", price: 290 },
    { dishName: "Chicken Tikka Masala", description: "Grilled chicken in spiced tomato gravy", price: 260 },
    { dishName: "Jeera Rice", description: "Basmati rice flavored with cumin seeds", price: 150 },
    { dishName: "Naan", description: "Leavened flatbread baked in tandoor", price: 40 },
    { dishName: "Kheer", description: "Rice pudding dessert with nuts", price: 100 },
    { dishName: "Tandoori Lamb Chops", description: "Grilled lamb chops marinated in spices", price: 400 }
  ],
  7: [
    { dishName: "Pasta Alfredo", description: "Pasta in creamy Alfredo sauce", price: 220 },
    { dishName: "Margherita Pizza", description: "Classic pizza with tomato and mozzarella", price: 250 },
    { dishName: "Caesar Salad", description: "Fresh salad with Caesar dressing", price: 180 },
    { dishName: "Mojito", description: "Refreshing mint and lime drink", price: 120 },
    { dishName: "Chocolate Mousse", description: "Light and airy chocolate dessert", price: 150 },
    { dishName: "BBQ Chicken Wings", description: "Grilled chicken wings with BBQ sauce", price: 260 }
  ],
  8: [
    { dishName: "Andhra Chicken Curry", description: "Spicy chicken curry from Andhra cuisine", price: 260 },
    { dishName: "Gongura Mutton", description: "Mutton cooked with sorrel leaves", price: 280 },
    { dishName: "Pesarattu", description: "Green gram dosa served with chutney", price: 100 },
    { dishName: "Pulihora", description: "Tangy tamarind rice preparation", price: 150 },
    { dishName: "Payasam", description: "Sweet milk-based dessert with vermicelli", price: 90 }
  ]
};


// Welcome screens component
const WelcomeScreen = ({ currentStep, onNext }) => {
  const welcomeScreens = [
    {
      title: "Welcome to Food Explorer!",
      subtitle: "Your gateway to culinary adventures",
      icon: <Coffee className="w-24 h-24 text-orange-500 mx-auto mb-6" />,
      buttonText: "Next"
    },
    {
      title: "Discover Amazing Restaurants",
      subtitle: "Find the best restaurants near you with just a few taps",
      icon: <UtensilsCrossed className="w-24 h-24 text-orange-500 mx-auto mb-6" />,
      buttonText: "Next"
    },
    {
      title: "Ready to Start?",
      subtitle: "Your food adventure begins here",
      icon: <MapPin className="w-24 h-24 text-orange-500 mx-auto mb-6" />,
      buttonText: "Enter App"
    }
  ];

  const currentScreen = welcomeScreens[currentStep];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8 animate-fade-in">
        {currentScreen.icon}
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          {currentScreen.title}
        </h1>
        <p className="text-gray-600 text-xl">
          {currentScreen.subtitle}
        </p>
      </div>
      <button
        onClick={onNext}
        className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
      >
        {currentScreen.buttonText}
      </button>
    </div>
  );
};

// Location permission modal
const LocationPermission = ({ onAllow, onDeny }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-center mb-4">Location Access</h2>
        <p className="text-gray-600 text-center mb-6">
          Allow us to access your location to find restaurants near you
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onAllow}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Allow
          </button>
          <button
            onClick={onDeny}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

// Loading screen
const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 mb-4"></div>
      <p className="text-gray-600 text-xl">Fetching the best restaurants for you...</p>
    </div>
  );
};

// Restaurant list component
const RestaurantList = ({ onSelectRestaurant }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-orange-500 mb-8">Nearby Restaurants</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              onClick={() => onSelectRestaurant(restaurant)}
              className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow animate-fade-in"
            >
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
                <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                <p className="text-gray-600 mb-2">Rating: {restaurant.rating}</p>
                <p className="text-gray-600">{restaurant.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Restaurant menu component
const RestaurantMenu = ({ restaurant, onBack }) => {
  const menu = menuItems[restaurant.id] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={onBack}
          className="flex items-center text-orange-500 mb-6 hover:text-orange-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to restaurants
        </button>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-orange-500 mb-2">{restaurant.name}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{restaurant.cuisine}</span>
            <span>•</span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-orange-500 mr-1" />
              {restaurant.rating}
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          {menu.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.dishName}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <span className="font-semibold text-orange-500">₹{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  const [appState, setAppState] = useState('welcome');
  const [welcomeStep, setWelcomeStep] = useState(0);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleWelcomeNext = () => {
    if (welcomeStep < 2) {
      setWelcomeStep(welcomeStep + 1);
    } else {
      setAppState('location');
    }
  };

  const handleLocationAllow = () => {
    setAppState('loading');
    // Simulate loading
    setTimeout(() => {
      setAppState('restaurants');
    }, 2000);
  };

  const handleLocationDeny = () => {
    // For demo purposes, we'll still show restaurants
    setAppState('loading');
    setTimeout(() => {
      setAppState('restaurants');
    }, 2000);
  };

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setAppState('menu');
  };

  const handleBackToRestaurants = () => {
    setSelectedRestaurant(null);
    setAppState('restaurants');
  };

  // Render different screens based on app state
  switch (appState) {
    case 'welcome':
      return <WelcomeScreen currentStep={welcomeStep} onNext={handleWelcomeNext} />;
    
    case 'location':
      return <LocationPermission onAllow={handleLocationAllow} onDeny={handleLocationDeny} />;
    
    case 'loading':
      return <LoadingScreen />;
    
    case 'restaurants':
      return <RestaurantList onSelectRestaurant={handleSelectRestaurant} />;
    
    case 'menu':
      return <RestaurantMenu restaurant={selectedRestaurant} onBack={handleBackToRestaurants} />;
    
    default:
      return null;
  }
};

export default App;