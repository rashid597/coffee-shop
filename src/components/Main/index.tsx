import Banner from "../../assets/banner.jpg";
import { Avatar, AvatarImage } from "../Shadcn/Avatar";
import { Card, CardContent, CardFooter, CardHeader } from "../Shadcn/Card";
import { hotBeverages } from "./beverages";
import CoffeeBanner from "../../assets/coffees/coffeesbanner.webp";
import { Button } from "../Shadcn/Button";
import { CirclePlus } from "lucide-react";
import { FunctionComponent, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

interface Product {
  id: number;
  name: string;
  contents: string;
  price: number;
  src: string;
  quantity: number;
}

interface CartProps {
  [productId: string]: Product;
}

export const Main = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  const addToCart = (product: Product): void => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  const isInCart = (productId: number): boolean =>
    Object.keys(cart || {}).includes(productId.toString());

  return (
    <main>
      <div className="h-screen">
        <img className="w-full h-[90%]" src={Banner} alt="banner" />
      </div>

      <div className="">
        <img src={CoffeeBanner} className="mx-auto" />
      </div>

      <div className="flex flex-wrap w-full justify-center">
        {hotBeverages.map((item, index) => {
          return (
            <Card key={index} className="w-[400px] m-2">
              <CardHeader className="">
                <div>
                  <Avatar className="w-28 h-28">
                    <AvatarImage src={item.src} />
                  </Avatar>
                </div>
                <div className="font-bold">{item.name}</div>
                <div>{item.contents}</div>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div> Rs.{item.price}</div>
                <div>
                  {" "}
                  <Button
                    disabled={isInCart(item.id)}
                    onClick={() => addToCart(item)}
                  >
                    <CirclePlus />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
};
