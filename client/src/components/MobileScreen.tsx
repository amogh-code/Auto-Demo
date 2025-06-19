import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface VehicleData {
  fare: number;
  verified: boolean;
  driverName: string;
  rating: number;
}

export default function MobileScreen() {
  const [vehicleId, setVehicleId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);

  // Sample data for simulation
  const vehicleDatabase: Record<string, VehicleData> = {
    'KA01AB1234': {
      fare: 85,
      verified: true,
      driverName: 'Rajesh Kumar',
      rating: 4.8
    },
    'MH12CD5678': {
      fare: 120,
      verified: true,
      driverName: 'Suresh Patil',
      rating: 4.6
    },
    'DL08EF9012': {
      fare: 95,
      verified: false,
      driverName: 'Unknown Driver',
      rating: 0
    },
    'KA05GH3456': {
      fare: 110,
      verified: true,
      driverName: 'Amit Singh',
      rating: 4.9
    }
  };

  const generateRandomData = (vehicleId: string): VehicleData => {
    const names = ['Ravi Kumar', 'Prakash Singh', 'Manjesh Reddy', 'Vikram Patel', 'Sunil Sharma'];
    const isVerified = Math.random() > 0.3; // 70% chance of being verified
    
    return {
      fare: Math.floor(Math.random() * 100) + 60, // Between 60-160
      verified: isVerified,
      driverName: isVerified ? names[Math.floor(Math.random() * names.length)] : 'Unknown Driver',
      rating: isVerified ? parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)) : 0
    };
  };

  const handlePriceCheck = () => {
    const cleanVehicleId = vehicleId.trim().toUpperCase();
    
    if (!cleanVehicleId) {
      alert('Please enter a vehicle number');
      return;
    }

    setIsProcessing(true);
    setShowResults(true);

    // Simulate processing delay
    setTimeout(() => {
      const data = vehicleDatabase[cleanVehicleId] || generateRandomData(cleanVehicleId);
      setVehicleData(data);
      setIsProcessing(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase();
    // Basic formatting for Indian vehicle numbers
    value = value.replace(/[^A-Z0-9]/g, '');
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    setVehicleId(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handlePriceCheck();
    }
  };

  return (
    <div className="relative">
      {/* Mobile Phone Frame */}
      <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl" style={{ width: '320px', height: '640px' }}>
        <div className="bg-white rounded-[2rem] h-full flex flex-col overflow-hidden">
          
          {/* Phone Header */}
          <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
              </svg>
              <h1 className="text-xl font-bold">RideConnect</h1>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
              </div>
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17 4h-2V2a1 1 0 00-2 0v2H7V2a1 1 0 00-2 0v2H3a1 1 0 000 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2z" />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 flex flex-col">
            
            {/* Feature Title */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Digitize Offline Ride</h2>
              <p className="text-gray-600 text-sm">Get fair pricing and safety info for any vehicle</p>
            </div>

            {/* Input Section */}
            <div className="mb-6">
              <label htmlFor="vehicleId" className="block text-sm font-semibold text-gray-700 mb-2">
                Vehicle Number/ID
              </label>
              <div className="relative">
                <Input
                  id="vehicleId"
                  type="text"
                  placeholder="e.g., KA01AB1234"
                  value={vehicleId}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none text-center font-mono text-lg"
                />
                <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={handlePriceCheck}
              disabled={isProcessing}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              Get Price & Safety
            </Button>

            {/* Results Section */}
            {showResults && (
              <Card className="bg-gray-50 rounded-xl p-4 space-y-4">
                
                {/* Processing State */}
                {isProcessing && (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center space-x-2">
                      <svg className="w-6 h-6 text-purple-600 animate-spin-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 font-medium">Processing system check</span>
                      <span className="flex space-x-1">
                        <span className="w-1 h-1 bg-purple-600 rounded-full animate-processing-dots"></span>
                        <span className="w-1 h-1 bg-purple-600 rounded-full animate-processing-dots" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-1 h-1 bg-purple-600 rounded-full animate-processing-dots" style={{ animationDelay: '0.4s' }}></span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Results Display */}
                {!isProcessing && vehicleData && (
                  <div className="space-y-4 opacity-0 translate-y-5 animate-fade-in-up">
                    
                    {/* Fare Display */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">Estimated Fare</h3>
                          <p className="text-gray-600 text-sm">Standardized pricing</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-green-600">₹{vehicleData.fare}</span>
                          <p className="text-gray-500 text-xs">Base fare included</p>
                        </div>
                      </div>
                    </div>

                    {/* Safety Status */}
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          vehicleData.verified ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {vehicleData.verified ? (
                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">
                            {vehicleData.verified ? 'Verified by RideConnect' : 'Unverified - Exercise Caution'}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {vehicleData.verified ? 'Vehicle and driver verified' : 'Vehicle not in our verified database'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Driver Info */}
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Driver</h3>
                          <p className="text-gray-600">{vehicleData.driverName}</p>
                          {vehicleData.verified && (
                            <div className="flex items-center mt-1">
                              <div className="flex text-yellow-400 text-xs">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-gray-500 text-xs ml-1">{vehicleData.rating} rating</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </Card>
            )}

          </div>

          {/* Footer Attribution */}
          <div className="p-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">Made by <span className="font-semibold text-purple-600">Amogh Kris</span></p>
          </div>

        </div>
      </div>
    </div>
  );
}
