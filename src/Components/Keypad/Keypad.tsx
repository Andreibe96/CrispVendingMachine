import { JSX } from "react";
import { Button, Fab } from "@mui/material";

function Keypad({
  depositAmount,
  setDepositAmount,
  onCancel,
}: {
  depositAmount: number;
  setDepositAmount: React.Dispatch<React.SetStateAction<number>>;
  onCancel: () => void;
}): JSX.Element {
  return (
    <div className='keypad'>
      <div className='amount-deposited'>
        Amount Deposited: ${depositAmount.toFixed(2)}
      </div>
      <div className='insert-change'>Insert Change</div>
      <div className='change-buttons'>
        <Fab
          size='medium'
          className='change-button'
          onClick={() =>
            setDepositAmount((prev) => parseFloat((prev + 0.05).toFixed(2)))
          }
        >
          $0.05
        </Fab>
        <Fab
          size='medium'
          className='change-button'
          onClick={() =>
            setDepositAmount((prev) => parseFloat((prev + 0.1).toFixed(2)))
          }
        >
          $0.10
        </Fab>
        <Fab
          size='medium'
          className='change-button'
          onClick={() =>
            setDepositAmount((prev) => parseFloat((prev + 0.25).toFixed(2)))
          }
        >
          $0.25
        </Fab>
      </div>
      <div className='cancel-button'>
        <Button
          variant='contained'
          color='error'
          disabled={depositAmount === 0}
          onClick={onCancel}
          sx={{
            fontFamily: "Courier New, monospace",
            fontSize: "16px",
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default Keypad;
