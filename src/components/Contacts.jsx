import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const Contacts = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "191b421d-af08-40d4-ab44-ee89e3116937");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
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

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 text-left">
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-2 mb-4 text-left">
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none"
            name="Message"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-12 rounded hover:bg-blue-700 transition"
          >
            {result ? result : "Send Message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contacts;
