import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Home page component representing the main landing page
 */
export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Helmet>
        <title>Proto MAS - Home</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Proto MAS
        </h1>
        <p className="text-xl text-gray-600">
          Your multi-agent system prototyping framework
        </p>
      </div>
    </div>
  );
};