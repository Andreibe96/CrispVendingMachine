import { JSX } from "react";

function Display({ displayText }: { displayText: string }): JSX.Element {
  return (
    <div className='display-screen' data-testid='display-screen'>
      {displayText}
    </div>
  );
}

export default Display;
