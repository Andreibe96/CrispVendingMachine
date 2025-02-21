import { JSX } from "react";
import { Product } from "../types";
import { Button } from "@mui/material";

function ProductSelection({
  availableProducts,
  onOptionClick,
}: {
  availableProducts: Product[];
  onOptionClick: (value: number) => void;
}): JSX.Element {
  return (
    <div className='product-selection'>
      <div className='product-buttons'>
        {/* dyanmically adds buttons as product selection increases */}
        {availableProducts.map((p) => (
          <div key={p.id}>
            <Button
              className={`product-button-${p.name}`}
              variant='contained'
              onClick={() => onOptionClick(p.id)}
              disabled={p.stock === 0}
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                height: "150px",
                width: "90px",
                borderRadius: "15%",
                border: "2px solid black",
                backgroundColor: "#007672",
                outline: "none",
                boxShadow: "none",
              }}
            >
              {p.name}
            </Button>
            <div className='product-price'>
              {/* dynamically changing price output based on product stock */}
              {p.stock === 0 ? `(Out of Stock)` : `$${p.price}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSelection;
