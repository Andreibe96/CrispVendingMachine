import { JSX } from "@emotion/react/jsx-runtime";
import useVendingMachine from "./useVendingMachine";
import Keypad from "./Keypad/Keypad";
import Display from "./Display/Display";
import ProductSelection from "./ProductSelection/ProductSelection";
import "./VendingMachine.css";

function VendingMachine(): JSX.Element {
  const {
    depositAmount,
    setDepositAmount,
    displayText,
    availableProducts,
    onCancel,
    onOptionClick,
  } = useVendingMachine();

  return (
    <div className='VM'>
      <div className='vm-logo'></div>
      <div className='pdk-container'>
        <ProductSelection
          availableProducts={availableProducts}
          onOptionClick={onOptionClick}
        />
        <Display displayText={displayText} />
        {/* </div>

      <div className='keypad-container'> */}
        <Keypad
          depositAmount={depositAmount}
          onCancel={onCancel}
          setDepositAmount={setDepositAmount}
        />
      </div>
      <div className='item-collection'></div>
    </div>
  );
}

export default VendingMachine;
