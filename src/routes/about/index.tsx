import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/Shadcn/Card";
import { Button } from "../../components/Shadcn/Button";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Card className="w-[500px] h-fit">
          <CardHeader className="text-amber-800">
            <div className="flex">
              <Star className="mr-2" />{" "}
              <p className="font-bold text-lg">Star Coffee Shop</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-amber-700">
              Indulge in the aroma of freshly brewed coffee, delivered straight
              to your doorstep with our unparalleled service. Each cup is
              crafted with meticulous care and passion, ensuring a delightful
              experience that will elevate your mood and energize your day.
              Savor the rich flavors and smooth textures of our premium blends,
              expertly roasted to perfection. Treat yourself to the ultimate
              coffee indulgence, where every sip is a testament to our
              dedication to providing you with the best.
            </p>
          </CardContent>
          <CardFooter>
            <p>
              Need a cuppa? Order now and let us bring the perfect pick-me-up
              straight to your doorstep.
            </p>
            <Button
              className="bg-amber-800"
              onClick={() => {
                navigate("/");
              }}
            >
              Order now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
