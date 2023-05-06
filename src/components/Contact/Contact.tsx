import Title from "../Title";

export default function Contact() {
  return (

    <div className="w-full h-full  relative" id="contact"  data-scroll data-scroll-section >
      <div className="mx-auto grid place-items-center">
        <Title text="contact" classNames="py-10 mt-5"/>
        <form className="w-full max-w-md p-5">
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-5 rounded-md  font-normal text-xl  text-white  transition ease-in-out m-0 focus:text-gray-700  bg-gray-500 bg-opacity-20 backdrop-blur-sm focus:outline-none"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block w-full px-3 py-5 rounded-md  font-normal text-xl  bg-clip-padding text-white  transition ease-in-out m-0 focus:text-gray-700  bg-gray-500 bg-opacity-20 backdrop-blur-sm focus:outline-none"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
               className="form-control block w-full px-3 py-5 rounded-md  font-normal text-xl  bg-clip-padding text-white  transition ease-in-out m-0 focus:text-gray-700  bg-gray-500 bg-opacity-20 backdrop-blur-sm focus:outline-none resize-none"
              rows={5}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              defaultChecked
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              checked
            />
            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87"
            >Send me a copy of this message</label
            >
          </div>
          <button
            type="submit"
            className="w-full text-3xl px-6 py-2.5 bg-blue-600 text-white leading-tight font-semibold rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>

  )
}
