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

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

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

  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

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
          {/* <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader> */}
          <div className="flex flex-wrap">
            {getProducts().map((product) => (
              <div className="w-[300px] border m-2 p-2 rounded-md">
                <div className="flex items-center">
                  <img className="w-10 mr-2" src={product.src} />
                  <p>{product.name}</p>
                </div>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => onClick(-10)}
                      disabled={goal <= 200}
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-md font-bold">{goal}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => onClick(10)}
                      disabled={goal >= 400}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
