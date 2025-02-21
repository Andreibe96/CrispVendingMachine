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
      <div className='amount-deposited' data-testid='amount-deposited'>
        Amount Deposited: ${depositAmount.toFixed(2)}
      </div>
      <div className='insert-change'>Insert Change</div>
      <div className='change-buttons'>
        <Fab
          data-testid='nickle-button'
          size='medium'
          className='change-button'
          onClick={() =>
            setDepositAmount((prev) => parseFloat((prev + 0.05).toFixed(2)))
          }
        >
          $0.05
        </Fab>
        <Fab
          data-testid='dime-button'
          size='medium'
          className='change-button'
          onClick={() =>
            setDepositAmount((prev) => parseFloat((prev + 0.1).toFixed(2)))
          }
        >
          $0.10
        </Fab>
        <Fab
          data-testid='quarter-button'
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
          data-testid='cancel-button'
          variant='contained'
          color='error'
          disabled={depositAmount === 0}
          onClick={onCancel}
          sx={{
            fontSize: "14px",
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default Keypad;
