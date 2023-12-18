import { Link } from "react-router-dom";
import Profile from "../About/Profile";
import "./Contact.css"
import contact from "../../Assets/business.png"
const Contact = () => {
  return (
    <div className="bg-blue-200 flex flex-col md:flex-row h-full">
      <div className="md:w-1/2  flex flex-col justify-center p-10">
        <h2 className="text-3xl font-bold mb-4 font-serif">Contact Us</h2>
        <h3></h3>
        <Profile />
        <p className="mb-2 font-serif  text-slate-950 ">
          For any query you can contact us on foodwave@gmail.com
        </p>

        <Link to="/" className="mt-5 cursor-pointer">
          <span className="px-7 bg-indigo-600 text-gray-50 rounded-3xl py-4 hover:bg-indigo-800">Contact Us</span>
        </Link>

      </div>
      <div className="flex justify-center items-center">
        <div className="md:w-1/2 ">
          <img src={contact} className="object-cover h-64 md:h-auto md:w-full" />
        </div>

      </div>
    </div>
  )
}
export default Contact;