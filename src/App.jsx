import React from "react";
import CustomButton from "./components/Button";

function App() {
  return (
    <div className="flex items-center justify-around gap-2 w-screen h-screen bg-gray-100">

      <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
        {/* -- Primary Buttons -- */}
        <h4 className="text-lg text-gray-400">Primary</h4>
        <CustomButton text="Button" />
        {/* <CustomButton text="Button" startIcon={true} endIcon={false} />
        <CustomButton text="Button" startIcon={false} endIcon={true} />
        <CustomButton text="Button" startIcon={false} endIcon={false} />
        <CustomButton showText={false} rounded="full" /> */}
        <CustomButton text="Button" disabled={true} showText={true} variant="primary" />
      </div>

      <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
        <h4 className="text-lg text-gray-400">Secondary</h4>
        {/* -- Secondary Buttons -- */}
        <CustomButton text="Button" variant="secondary" />
        <CustomButton text="Button" disabled={true} variant="secondary" />
      </div>

      <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
        <h4 className="text-lg text-gray-400">Teritary</h4>
        {/* --Teritary Buttons -- */}
        <CustomButton text="Button" variant="teritary" />
        <CustomButton text="Button" disabled={true} variant="teritary" />
      </div>

      <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
        <h4 className="text-lg text-gray-400">Icon</h4>
        {/* ✅ Icon Button (icon only) */}
        <CustomButton variant="icon" disabled={false} showText={false} startIcon={false} endIcon={true} />
        <CustomButton variant="icon" disabled={true} showText={false} startIcon={false} endIcon={true} />
      </div>

      <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
        <h4 className="text-lg text-gray-400">Chips</h4>
        {/* --Chips -- */}
        <CustomButton text="Chips" variant="chips" rounded="full" startIcon={true} endIcon={true} />
        <CustomButton text="Chips" disabled={true} variant="chips" rounded="full" />
      </div>

    </div>
  );
}

export default App;
