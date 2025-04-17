import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        AI Outfit Designer
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Transform your wardrobe with AI-powered outfit suggestions. Upload your clothes and get personalized style recommendations.
                    </p>

                    {/* Waitlist Form */}
                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Join the Waitlist
                        </h2>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                            >
                                Get Early Access
                            </button>
                        </form>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-purple-600 text-2xl mb-4">📸</div>
                        <h3 className="text-xl font-semibold mb-2">Upload Your Clothes</h3>
                        <p className="text-gray-600">Simply take a photo of your clothing items and let our AI do the magic.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-purple-600 text-2xl mb-4">🤖</div>
                        <h3 className="text-xl font-semibold mb-2">AI-Powered Suggestions</h3>
                        <p className="text-gray-600">Get personalized outfit recommendations based on your style and occasion.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-purple-600 text-2xl mb-4">👔</div>
                        <h3 className="text-xl font-semibold mb-2">Smart Closet</h3>
                        <p className="text-gray-600">Organize your wardrobe and discover new combinations you never thought of.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage; 