//main app logic

import { useState, useEffect } from "react";
import { Product } from "./types";

function useVendingMachine() {
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);

  const defaultMessage =
    "Thank you for using our vending machine.\nPlease deposit more change or select a product";

  //populating customer options and initial deposit on first load
  useEffect(() => {
    const products: Product[] = [
      { id: 1, name: "Cola", price: 0.25, stock: 10 },
      { id: 2, name: "Diet Cola", price: 0.35, stock: 8 },
      { id: 3, name: "Lime Sode", price: 0.25, stock: 0 },
      { id: 4, name: "Water", price: 0.45, stock: 2 }, //criminal to make water the most expensive
    ];

    setDisplayText(defaultMessage);
    setAvailableProducts(products);
    setDepositAmount(2.0);
  }, []);

  //user idle timeout of 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText(defaultMessage);
    }, 10000);

    return () => clearTimeout(timer);
  }, [displayText]);

  const onCancel = () => {
    setDepositAmount(0);
    setDisplayText(
      `Purchase canceled.\n$${depositAmount.toFixed(2)} being returned to you.`
    );
  };

  const onOptionClick = (option: number): void => {
    if (!availableProducts) {
      return;
    }

    const selectedProduct = availableProducts.find((p) => p.id === option);

    if (selectedProduct) {
      if (depositAmount >= selectedProduct.price) {
        if (selectedProduct.stock > 0) {
          //changing selected products stock on purchase
          const updatedProducts = availableProducts.map((p) =>
            p.id === selectedProduct.id ? { ...p, stock: p.stock - 1 } : p
          );

          setAvailableProducts(updatedProducts);

          const newTotal = depositAmount - selectedProduct.price;
          setDisplayText(
            newTotal === 0
              ? `${selectedProduct.name} being dispensed.`
              : `${selectedProduct.name} being dispensed.\n$${newTotal.toFixed(
                  2
                )} being returned to you.`
          );

          //reseting deposit amount on purchase
          setDepositAmount(0);
        } else {
          //should never hit this else block, button disabled
          setDisplayText(
            `${selectedProduct.name} is out of stock.\nPlease make another selection.`
          );
        }
      } else {
        const difference = selectedProduct.price - depositAmount;
        setDisplayText(
          `Not enough money deposited.\nPlease insert $${difference.toFixed(2)}`
        );
      }
    } else {
      return;
    }
  };

  return {
    depositAmount,
    setDepositAmount,
    displayText,
    setDisplayText,
    availableProducts,
    setAvailableProducts,
    onCancel,
    onOptionClick,
  };
}

export default useVendingMachine;
