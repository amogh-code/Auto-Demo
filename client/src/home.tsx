import { useState } from "react";
import MobileScreen from "@/components/MobileScreen";
import ExplanationPanel from "@/components/ExplanationPanel";
import AnimatedArrow from "@/components/AnimatedArrow";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      {/* Header */}
      <header className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          RideConnect Demo
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the future of ride-hailing with our innovative offline vehicle integration system
        </p>
      </header>

      {/* Three Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Panel - How It Works */}
        <div className="order-2 lg:order-1 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <ExplanationPanel
              title="How It Works"
              icon="list-ol"
              items={[
                {
                  number: 1,
                  title: "Spot a Vehicle",
                  description: "Find an auto or taxi on the street"
                },
                {
                  number: 2,
                  title: "Enter Vehicle ID",
                  description: "Type the license plate number"
                },
                {
                  number: 3,
                  title: "Get Instant Info",
                  description: "View fare estimate and safety status"
                },
                {
                  number: 4,
                  title: "Ride with Confidence",
                  description: "Enjoy transparent, safe transportation"
                }
              ]}
            />
            {/* Animated Arrow pointing to mobile */}
            <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
              <AnimatedArrow direction="right" delay="1s" />
            </div>
          </div>
        </div>

        {/* Central Mobile Screen */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <MobileScreen />
        </div>

        {/* Right Panel - Benefits */}
        <div className="order-3 animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                Benefits for All
              </h2>
              
              <div className="space-y-6">
                {/* Riders Benefits */}
                <div>
                  <h3 className="font-semibold text-green-600 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    For Riders
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Transparent, fair pricing
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Enhanced safety verification
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      No more price negotiations
                    </li>
                  </ul>
                </div>

                {/* Drivers Benefits */}
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" clipRule="evenodd" />
                    </svg>
                    For Drivers
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Access to digital platform
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Increased earning potential
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified driver status
                    </li>
                  </ul>
                </div>

                {/* Service Benefits */}
                <div>
                  <h3 className="font-semibold text-purple-600 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                    </svg>
                    For Service
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Expanded vehicle network
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Better market coverage
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Increased user engagement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Animated Arrow pointing to mobile */}
            <div className="hidden lg:block absolute -left-8 top-1/2 transform -translate-y-1/2">
              <AnimatedArrow direction="left" delay="1.2s" />
            </div>
          </div>
        </div>

      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Revolutionary Offline Integration</h3>
          <p className="text-gray-600 leading-relaxed">
            RideConnect bridges the gap between traditional street-side transportation and modern ride-hailing technology. 
            Our innovative platform brings transparency, safety, and standardized pricing to offline vehicle bookings, 
            creating a seamless experience for all stakeholders in the transportation ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}
