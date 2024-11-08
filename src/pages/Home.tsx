import React from 'react';
import { ArrowRight, PieChart, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
              Take Control of Your
              <span className="text-indigo-600"> Financial Future</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              Smart financial management for individuals and businesses. Track expenses,
              manage investments, and achieve your financial goals with ease.
            </p>
            <div className="mt-10">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100">
                <PieChart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Expense Tracking</h3>
              <p className="mt-2 text-base text-gray-500">
                Track your expenses in real-time and categorize them automatically.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Investment Management</h3>
              <p className="mt-2 text-base text-gray-500">
                Monitor your investments and get insights for better returns.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Secure Platform</h3>
              <p className="mt-2 text-base text-gray-500">
                Bank-level security to protect your financial data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;