import { Link } from "react-router-dom";
import Profile from "../About/Profile";
import "./Contact.css"
import contact from "../../Assets/business.png"
const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col md:flex-row h-full mt-10">
      <div className="md:w-1/2  flex flex-col justify-center p-10">
        <h2 className="text-3xl font-bold mb-4 font-serif">Contact Us</h2>
        <h3></h3>
        <Profile />
        <p className="mt-20 font-serif font-sans font-bold text-xl  text-slate-950 ">
          For any query you can contact us on <span className="text-red-600 cursor-pointer">foodwave@gmail.com</span>
        </p>

        <Link to="/" className="mt-5 cursor-pointer">
          <span className="px-7 bg-red-600 text-white  rounded-3xl py-4 hover:bg-red-700 font-bold">Contact Us</span>
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