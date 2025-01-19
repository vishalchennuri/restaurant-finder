import React, { useState, useEffect } from 'react';
import { ChevronLeft, Star, MapPin, Coffee, UtensilsCrossed,Search,
  Filter,
  Clock ,Phone,Users,ChevronRight,Calendar,X,TrendingUp,ArrowRight} from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: 'Pista House',
    rating: 4.9,
    address: 'Gandimaisamma',
    image: 'https://images.jdmagicbox.com/v2/comp/hyderabad/f1/040pxx40.xx40.180405190502.d5f1/catalogue/pista-house-family-restaurant-bakery-and-banquet-hall-jntu-kukatpally-hyderabad-restaurants-7mj92ojs13.jpg' // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Flamingo Resto',
    rating: 4.7,
    address: 'ORR,Dundigal',
    image: 'https://lh5.googleusercontent.com/p/AF1QipMWb4JPTyqjc9n9FqUKLVgG7zqmat4xlOuO1F4X=w390-h262-n-k-no', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'My Village Kitchen & Jail Mandi',
    rating: 4.6,
    address: 'Bowrampet,Dundigal',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOXYLvdJvxsIUA04EtwEWobok4j4V89n5KCFvuI=s1360-w1360-h1020'
  },
  {
    id: 4,
    name: 'Milan Dhaba',
    rating: 4.4,
    address: 'Gundla Pochampally',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZipqdjDa9cCmMT4C8QbLyE8xxyC65iIAohw&s'
  },
  {
    id: 5,
    name: 'Lazeez Arabian mandi',
    rating: 4.4,
    address: 'Near gandimaisamma X-roads',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMoZJfWphbRkWK3mi3M7DF6WTlzvwi2PaT34L5s=s1360-w1360-h1020'
  },
  {
    id: 6,
    name: 'NV Grand Family Restaurant',
    rating: 4.3,
    address: 'Dommarapochampally',
    image: 'https://lh5.googleusercontent.com/p/AF1QipN0z937seBVcaWrgE-VJVQHHw5LxyaRvagT3mr1=w195-h130-n-k-no', // Replace with actual image URL
  },
  {
    id: 7,
    name: 'WhiteSand Kitchen and restro',
    rating: 4.2,
    address: 'Dundigal',
    image: 'https://lh5.googleusercontent.com/p/AF1QipMdKhzvj0tJRW7HXHailSC-RDnT7qj2K3zruIU9=w390-h262-n-k-no', // Replace with actual image URL
  },
  {
    id: 8,
    name: 'Ujwala Grand',
    rating: 4.1,
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
      icon: <Coffee className="w-24 h-24 text-orange-500 mx-auto mb-6 animate-bounce" />,
      buttonText: "Let's Begin"
    },
    {
      title: "Discover Amazing Restaurants",
      subtitle: "Find the best restaurants near you with just a few taps",
      icon: <UtensilsCrossed className="w-24 h-24 text-orange-500 mx-auto mb-6 animate-pulse" />,
      buttonText: "Next"
    },
    {
      title: "Ready to Start?",
      subtitle: "Your food adventure begins here",
      icon: <MapPin className="w-24 h-24 text-orange-500 mx-auto mb-6 animate-bounce" />,
      buttonText: "Explore Now"
    }
  ];

  const currentScreen = welcomeScreens[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8 transform transition-all duration-500 ease-out">
        <div className="mb-8">
          {currentScreen.icon}
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
          {currentScreen.title}
        </h1>
        <p className="text-gray-600 text-xl">
          {currentScreen.subtitle}
        </p>
      </div>
      <button
        onClick={onNext}
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {currentScreen.buttonText}
      </button>
    </div>
  );
};

const LocationPermission = ({ onAllow, onDeny }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-100 shadow-2xl">
        <div className="bg-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-12 h-12 text-orange-500" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">Enable Location</h2>
        <p className="text-gray-600 text-center mb-8">
          Let us find the best restaurants near you for a delightful dining experience
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onAllow}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            Enable Location
          </button>
          <button
            onClick={onDeny}
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Skip
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

const SearchOverlay = ({ onClose,onSelectRestaurant }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleRestaurantClick = (restaurant) => {
    onSelectRestaurant(restaurant);
    onClose();
  };
  // Sample data for suggestions
  const recentSearches = [
    "Paradise Biryani",
    "Shah Ghouse",
    "Bawarchi",
    "Cafe 555"
  ];

  const popularLocations = [
    "Gachibowli",
    "Hitech City",
    "Madhapur",
    "Kukatpally",
    "Jubilee Hills"
  ];

  const trendingRestaurants = [
    { name: "Pista House", location: "Gandimaisamma", rating: "4.9" },
    { name: "Flamingo Resto", location: "ORR,Dundigal", rating: "4.7" },
    { name: "My Village Kitchen", location: "Bowrampet", rating: "4.6" }
  ];

  // Filter suggestions based on search query
  const filteredRestaurants = restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Search Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto p-4">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for restaurants or locations..."
              className="w-full pl-12 pr-10 py-3 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button 
              onClick={onClose}
              className="absolute right-4 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-4xl mx-auto p-4">
        {searchQuery ? (
          // Show filtered results when searching
          <div className="space-y-4">
            {filteredRestaurants.map((restaurant) => (
              <div 
                key={restaurant.id}
                className="flex items-center p-4 hover:bg-orange-50 rounded-xl cursor-pointer transition-colors"
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600">{restaurant.address}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      {restaurant.rating} ★
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        ) : (
          // Show suggestions when not searching
          <div className="space-y-8">
            {/* Recent Searches */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-3">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Locations */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-3">Popular Locations</h3>
              <div className="flex flex-wrap gap-2">
                {popularLocations.map((location, index) => (
                  <button
                    key={index}
                    className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    {location}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Restaurants */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-3">Trending Restaurants</h3>
              <div className="space-y-3">
                {trendingRestaurants.map((restaurant, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 hover:bg-orange-50 rounded-xl cursor-pointer transition-colors"
                  >
                    <TrendingUp className="w-5 h-5 text-orange-500 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-800">{restaurant.name}</h4>
                      <p className="text-sm text-gray-600">{restaurant.location}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        {restaurant.rating} ★
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Restaurant list component
const TableReservation = ({ restaurant, onClose }) => {
  const [step, setStep] = useState(1);
  const [reservation, setReservation] = useState({
    date: '',
    time: '',
    guests: 2,
    name: '',
    phone: '',
    specialRequests: ''
  });

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', 
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const handleSubmit = () => {
    console.log('Reservation details:', reservation);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Table Reservation</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={reservation.date}
                    onChange={(e) => setReservation({...reservation, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        reservation.time === time
                          ? 'bg-orange-500 text-white'
                          : 'bg-orange-50 text-orange-500 hover:bg-orange-100'
                      }`}
                      onClick={() => setReservation({...reservation, time})}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={reservation.guests}
                    onChange={(e) => setReservation({...reservation, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={reservation.name}
                  onChange={(e) => setReservation({...reservation, name: e.target.value})}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={reservation.phone}
                    onChange={(e) => setReservation({...reservation, phone: e.target.value})}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={reservation.specialRequests}
                  onChange={(e) => setReservation({...reservation, specialRequests: e.target.value})}
                  placeholder="Any special requests or preferences?"
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="w-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Confirm Reservation
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Reservation Summary */}
        {reservation.date && reservation.time && (
          <div className="border-t border-gray-100 p-6 bg-orange-50">
            <h3 className="font-semibold text-gray-800 mb-2">Reservation Summary</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Date: {reservation.date}</p>
              <p>Time: {reservation.time}</p>
              <p>Guests: {reservation.guests}</p>
              <p>Restaurant: {restaurant?.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const RestaurantList = ({ onSelectRestaurant }) => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchRestaurantSelect = (restaurant) => {
    onSelectRestaurant(restaurant);
    setShowSearch(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Nearby Restaurants
        </h1>
        <div className="flex gap-4">
          <button 
            onClick={() => setShowSearch(true)}
            className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Search className="w-6 h-6 text-orange-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all">
            <Filter className="w-6 h-6 text-orange-500" />
          </button>
        </div>
      </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => onSelectRestaurant(restaurant)}
            />
          ))}
        </div>
        {showSearch && <SearchOverlay onClose={() => setShowSearch(false)}
        onSelectRestaurant={handleSearchRestaurantSelect} />}
      </div>
    </div>
  );
};

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-lg">
          <Star className="w-4 h-4 text-orange-500 mr-1" />
          <span className="font-semibold">{restaurant.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{restaurant.name}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm">{restaurant.address}</p>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          <p className="text-sm">20-30 min</p>
        </div>
      </div>
    </div>
  );
};

const RestaurantMenu = ({ restaurant, onBack }) => {
  const [showReservation, setShowReservation] = useState(false);
  const menu = menuItems[restaurant.id] || [];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  return (
    <div className="max-w-4xl mx-auto p-6">
    <div className="flex justify-between items-center mb-6">
      <button
        onClick={onBack}
        className="flex items-center text-orange-500 hover:text-orange-600 transition-colors bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Back to restaurants
      </button>
  
      <button
        onClick={() => setShowReservation(true)}
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Reserve Table
      </button>
    </div>


          {showReservation && (
            <TableReservation restaurant={restaurant} onClose={() => setShowReservation(false)} />
          )}


        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="relative h-48 -mt-6 -mx-6 mb-6">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover rounded-t-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
            <div className="absolute bottom-4 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-orange-500 mr-1" />
                  <span className="font-semibold">{restaurant.rating}</span>
                </div>
                <span>•</span>
                <span>{restaurant.address}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-100 text-orange-500 hover:bg-orange-200'
                }`}
              >
                {category}
              </button>
            ))}


          </div>
        </div>

        <div className="grid gap-6">
          {menu.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
  );
};

const MenuItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{item.dishName}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
        <div className={`transform transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
          <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-bold">
            ₹{item.price}
          </span>
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