import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useCartStore from "@/store/useCartStore";
import { FiShoppingCart } from "react-icons/fi";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/utils/firebase/config";
import { RxCrossCircled } from "react-icons/rx";
import useUser from "@/store/user.store";

const ShoppingCart = () => {
  const { items, incrementItem, decrementItem, removeItem, clearCart } =
    useCartStore((state) => ({
      items: state.items,
      incrementItem: state.incrementItem,
      decrementItem: state.decrementItem,
      removeItem: state.removeItem,
      clearCart: state.clearCart,
    }));

  const user = useUser((state) => state.user);

  const handleCheckout = async () => {
    try {
      if (!user) {
        toast.error("Please sign in to checkout.");
        return;
      }

      const order = {
        userId: user.uid, // Include user ID in the order
        items,
        createdAt: new Date(),
        status: "pending",
      };
      await addDoc(collection(db, "orders"), order);
      clearCart();
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error adding order: ", error);
      toast.error("Failed to place the order. Please try again.");
    }
  };

  if (items.length === 0) return null;

  return (
    <Drawer>
      <ToastContainer />
      <DrawerTrigger className="relative text-black px-4 py-2 flex items-center rounded-lg hover:bg-blue-600 transition duration-300">
        <FiShoppingCart size={25} />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {items.length}
          </span>
        )}
      </DrawerTrigger>
      <DrawerContent className="p-6 bg-gray">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-bold">
            Shopping Cart
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col space-y-4 h-[300px] overflow-auto">
          {items.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decrementItem(item.id)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="font-semibold text-gray-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => incrementItem(item.id)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
        <DrawerFooter className="flex justify-end mt-6">
          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Checkout
          </button>
        </DrawerFooter>
        <DrawerClose className="ml-4 absolute right-6">
          <button className="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            <RxCrossCircled size={25} />
          </button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
