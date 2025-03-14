import React from "react";
import CustomButton from "./components/customButton/customButton";
import CustomDropdown from "./components/customDropDown/customDropDown";

function App() {
  return (
    <>
      <div className="flex items-center justify-around gap-2 w-screen h-screen bg-gray-100">

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
          {/* -- Primary Buttons -- */}
          <h4 className="text-lg text-gray-400">Primary</h4>
          <CustomButton text="Button" onClick={() => alert('Hi Team!')} />
          <CustomButton text="Button" disabled={true} showText={true} variant="primary" />
          {/* <CustomButton text="Button" startIcon={true} endIcon={false} />
  <CustomButton text="Button" startIcon={false} endIcon={true} />
  <CustomButton text="Button" startIcon={false} endIcon={false} />
  <CustomButton showText={false} rounded="full" /> */}
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Secondary</h4>
          {/* -- Secondary Buttons -- */}
          <CustomButton text="Button" variant="secondary" />
          <CustomButton text="Button" disabled={true} variant="secondary" />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Teritary</h4>
          {/* -- Teritary Buttons -- */}
          <CustomButton text="Button" variant="teritary" />
          <CustomButton text="Button" disabled={true} variant="teritary" />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Icon</h4>
          {/* -- Icon Button -- */}
          <CustomButton variant="icon" disabled={false} showText={false} startIcon={false} endIcon={true} />
          <CustomButton variant="icon" disabled={true} showText={false} startIcon={false} endIcon={true} />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Chips</h4>
          {/* -- Chips -- */}
          <CustomButton text="Chips" variant="chips" rounded="full" startIcon={true} endIcon={true} />
          <CustomButton text="Chips" disabled={true} variant="chips" rounded="full" />
        </div>
      </div>
      <div className="flex items-center justify-around gap-2 w-screen h-screen bg-gray-100">
        <div className="flex flex-col gap-5 border-r-1 border-l-1 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Dropdown Default</h4>

          {/* Default */}
          <CustomDropdown label="Value" options={["Option 1", "Option 2", "Option 3"]} required={true} initialValue="Option 2" // ✅ Pre-selects "Option 2"
         />
        </div>
        <div className="flex flex-col gap-5 border-r-1 border-l-1 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Dropdown Disable</h4>
          {/* Disabled */}
          <CustomDropdown label="Disabled" options={["Option 1", "Option 2", "Option 3"]} disabled />
        </div>
        <div className="flex flex-col gap-5 border-r-1 border-l-1 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Dropdown Error</h4>

          {/* Error */}
          <CustomDropdown label="Error" options={["Option 1", "Option 2", "Option 3"]} errorMessage="Error message" />
        </div>

      </div>

    </>

  );
}

export default App;
