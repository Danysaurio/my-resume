import { FaAndroid, FaEnvelope, FaHeading, FaUser } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
      <div className=" mx-auto pl-8 pt-6 pb-8 pr-10 mb-4">
        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2">
            Name
          </label>
          <div className="relative">
            <FaUser className="absolute top-0 left-0 text-gray-500 h-full ml-2 text-sm" />
            <input
              className="pl-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2">
            Mail
          </label>
          <div className="relative">
            <FaEnvelope className="absolute top-0 left-0 text-gray-500 h-full ml-2 text-sm" />
            <input
              className="pl-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mail"
              type="text"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2">
            Subject
          </label>
          <div className="relative">
            <FaHeading className="absolute top-0 left-0 text-gray-500 h-full ml-2 text-sm" />
            <input
              className="pl-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mail"
              type="text"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
