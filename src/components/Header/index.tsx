import { ShoppingCart } from "lucide-react";
import BrewLogo from "../../assets/BrewLogo.png";
import { Badge } from "../Shadcn/Badge";

const Header = () => {
  console.log();
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex-1  mx-3">
          <img src={BrewLogo} className="w-20" alt="BrewLogo" />
        </div>
        <div className="flex-1">
          <ul className="list-none flex  justify-around text-amber-800">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-end relative ">
          <div className="mx-4">
            <Badge className="absolute -top-1 right-2 bg-amber-800">1</Badge>
            <ShoppingCart className="text-amber-800" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
