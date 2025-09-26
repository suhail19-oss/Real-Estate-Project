import React from "react";

const Contacts = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together.
      </p>

      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        {/* Name Input */}
        <div className="w-full md:w-1/2 px-2 mb-4 text-left">
          <label className="block mb-2">Your Name</label>
          <input
            className="w-full border border-gray-300 rounded py-3 px-4"
            type="text"
            name="Name"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="w-full md:w-1/2 px-2 mb-4 text-left">
          <label className="block mb-2">Your Email</label>
          <input
            className="w-full border border-gray-300 rounded py-3 px-4"
            type="email"
            name="Email"
            placeholder="Your Email"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Contacts;
