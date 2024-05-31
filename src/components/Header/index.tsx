import { ShoppingCart, Star } from "lucide-react";
import BrewLogo from "../../assets/BrewLogo.png";
import { Badge } from "../Shadcn/Badge";
import { Cart } from "../Cart";
import { Link } from "react-router-dom";

const Header = () => {
  console.log();
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <div className="flex-1  mx-3">
          {/* <img src={BrewLogo} className="w-20" alt="BrewLogo" /> */}
          <p className="flex items-center text-amber-800">
            <Star className="mr-2" />{" "}
            <span className="font-bold text-lg">Star Coffee Shop</span>
          </p>
          {/* Start coffee shop */}
        </div>
        <div className="flex-1">
          <ul className="list-none flex  justify-around text-amber-800">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-end relative ">
          <div className="mx-4">
            <Cart />
            {/* <Badge className="absolute -top-1 right-2 bg-amber-800">1</Badge>
            <ShoppingCart className="text-amber-800" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
