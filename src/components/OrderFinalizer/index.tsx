import useLocalStorageState from "use-local-storage-state";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../Shadcn/AlertDialog";
import { Button } from "../Shadcn/Button";

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

export const OrderFinalizer = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  const getProducts = () => Object.values(cart || {});

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={getProducts().length < 1} variant="outline">
          Place order
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your order has been placed!</AlertDialogTitle>
          <AlertDialogDescription>
            {getProducts().map((product) => {
              return (
                <div className="flex items-center">
                  <img className="w-10 mr-2" src={product.src} />
                  <p>{product.name}</p>
                  <p className="mx-2">{`x ${product.quantity}`}</p>
                </div>
              );
            })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              setCart({});
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
