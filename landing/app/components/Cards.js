import React from 'react';

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 m-2 xs:m-1 sm:m-13">
      {/* Card 1 */}
      <div className="bg-red-50 p-2 sm:p-4 rounded-lg pt-8 sm:pt-14">
        <img src="/images/cardt.png" alt="card" className="mx-auto max-w-full" />
        <h1 className="text-bold text-xl pt-4">Smart Produce Management</h1>
        <p className="pt-2">
          Stay in control of your farm produce with real-time inventory
          tracking, automated pricing updates, and seamless order management.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-blue-50 p-2 sm:p-4 rounded-lg pt-8 sm:pt-14">
        <img src="/images/digital.png" alt="digital" className="mx-auto max-w-full" />
        <h1 className="text-bold text-xl pt-4">
          Digital Marketplace for Farmers & Buyers
        </h1>
        <p className="pt-2">
          Reach more buyers, showcase your products, and boost sales with our
          easy-to-use online marketplace designed for farmers and traders.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-blue-50 p-2 sm:p-4 rounded-lg pt-8 sm:pt-14">
        <img src="/images/seem.png" alt="seem" className="mx-auto max-w-full" />
        <h1 className="text-bold text-xl pt-4">
          Seamless Logistics & Delivery Support
        </h1>
        <p className="pt-2">
          Partner with trusted transporters, optimize delivery routes, and track
          shipments in real time to ensure smooth and timely deliveries.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-blue-50 p-2 sm:p-4 rounded-lg pt-8 sm:pt-14">
        <img src="/images/data.png" alt="data" className="mx-auto max-w-full" />
        <h1 className="text-bold text-xl pt-4">
          Data-Driven Insights & Market Trends
        </h1>
        <p className="pt-2">
          Stay ahead of the market with up-to-date price trends, sales
          analytics, and performance reports to maximize profits.
        </p>
      </div>
    </div>
  );
}