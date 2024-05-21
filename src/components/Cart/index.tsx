import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../Shadcn/Drawer";
import { Button } from "../Shadcn/Button";
import { Minus, Plus, ShoppingCart } from "lucide-react";

import useLocalStorageState from "use-local-storage-state";
import { Operation, Quantifier } from "../Quantifier";

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

export const Cart = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  const getProducts = () => Object.values(cart || {});

  const totalPrice = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        {/* <Button variant="outline">Open Drawer</Button> */}
        <div className="mx-4 cursor-pointer relative">
          <ShoppingCart className="text-amber-800" />
          <p className="absolute -top-2 -right-4 bg-amber-800 px-1 rounded-lg text-white my-1 text-sm">
            8
          </p>
        </div>
      </DrawerTrigger>
      <DrawerContent className="">
        <div className="mx-auto w-full">
          <div className="flex flex-wrap">
            {getProducts().map((product) => (
              <div className="w-[300px] border m-2 p-2 rounded-md">
                <div className="flex items-center">
                  <img className="w-10 mr-2" src={product.src} />
                  <p>{product.name}</p>
                </div>
                <div className="p-4 pb-0">
                  <Quantifier
                    removeProductCallback={() =>
                      handleRemoveProduct(product.id)
                    }
                    productId={product.id}
                    handleUpdateQuantity={handleUpdateQuantity}
                  />
                </div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <div className="text-lg font-bold">Total price: {totalPrice}</div>
            <Button>Place order</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
