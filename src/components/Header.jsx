import NavBar from "./NavBar";
import { Link } from "react-router-dom"
import CartSummary from "./CartSummary";

export default function Header({ title, isLoading }) {
   return (
      <div className="header">
         <img
            alt=""
            className="header-image"
            src="https://www.streamingdigitally.com/wp-content/uploads/2022/04/heartstopper.jpg"
         />
         <div className="header-wrap">
            <div className="header-text">
               <Link to="/">
                  <h1 className="header-title">
                     {title}
                  </h1>
               </Link>

            </div>
         </div>
         <NavBar />
      </div>
   );
}