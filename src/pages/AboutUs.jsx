import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 space-y-6">

      <section>
        <h2 className="text-2xl font-bold mb-2 text-blue-700">About Watch FlashSale Pro</h2>
        <p>
          <strong>Project Name:</strong> Watch FlashSale Pro
        </p>
        <p className="mt-2">
          This project is a simple <strong>Coupon Collecting Application</strong> designed to help users easily find and use discount coupons for different watch brands.
        </p>
        <p className="mt-2">
          There are many watch stores offering various vouchers and coupon codes. Our application collects all the available coupons in one place, making it easier for users to find active discounts and save money.
        </p>
        <p className="mt-2">
          Users can <strong>sign up or log in using email or Google account</strong> through Firebase Authentication. After logging in, they can browse available coupons by brand, view discount amounts and product categories, and copy coupon codes with a single click.
        </p>
      </section>

   
      <section>
        <h2 className="text-2xl font-bold mb-2 text-blue-700">About the Developer</h2>
        <p>
          Hi, I’m <strong>Hridoy Khan</strong>, a passionate web developer dedicated to building modern and user-friendly web applications.
        </p>
        <p className="mt-2">
          I enjoy crafting clean, responsive designs and efficient JavaScript logic to improve user experience and functionality. I created this project to simplify online shopping for watch lovers by helping them grab the best deals in seconds.
        </p>
      </section>

     
      <section>
        <h2 className="text-2xl font-bold mb-2 text-blue-700">My Skills</h2>
        <ul className="list-disc pl-5">
          <li>HTML5, CSS3, Tailwind CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Firebase Authentication</li>
          <li>Responsive Web Design</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
