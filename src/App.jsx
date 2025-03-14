import React from "react";
import CustomButton from "./components/customButton/customButton";
import CustomInputField from "./components/customInputField/customInputField";


function App() {
  return (
    <div className="flex flex-wrap items-center justify-around gap-2 py-10 bg-gray-200 h-screen">

      {/* -- Custom Button Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Custom Buttons</h1>
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          {/* -- Primary Buttons -- */}
          <h4 className="text-lg text-gray-400">Primary</h4>
          <CustomButton text="Button" onClick={() => alert('Hi Team!')} />
          <CustomButton text="Button" disabled={true} showText={true} variant="primary" />
          {/* <CustomButton text="Button" startIcon={true} endIcon={false} />
        <CustomButton text="Button" startIcon={false} endIcon={true} />
        <CustomButton text="Button" startIcon={false} endIcon={false} />
        <CustomButton showText={false} rounded="full" /> */}
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Secondary</h4>
          {/* -- Secondary Buttons -- */}
          <CustomButton text="Button" variant="secondary" />
          <CustomButton text="Button" disabled={true} variant="secondary" />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Teritary</h4>
          {/* -- Teritary Buttons -- */}
          <CustomButton text="Button" variant="teritary" />
          <CustomButton text="Button" disabled={true} variant="teritary" />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Icon</h4>
          {/* -- Icon Button -- */}
          <CustomButton variant="icon" disabled={false} showText={false} startIcon={false} endIcon={true} />
          <CustomButton variant="icon" disabled={true} showText={false} startIcon={false} endIcon={true} />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Chips</h4>
          {/* -- Chips -- */}
          <CustomButton text="Chips" variant="chips" rounded="full" startIcon={true} endIcon={true} />
          <CustomButton text="Chips" disabled={true} variant="chips" rounded="full" />
        </div>

      </div>


      {/* -- Custom InputField Component -- */}
      <div className="flex items-center gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Custom InputField</h1>
        </div>

        <div className="flex flex-col gap-2 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          <CustomInputField state="default" valueType="default" label="Label" />
        </div>

        <div className="flex flex-col gap-2 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Non editable</h4>
          <CustomInputField state="non-editable" valueType="default" label="Label" />
        </div>

        <div className="flex flex-col gap-2 border-r-1 border-l-1 p-6 pb-8 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Error</h4>
          <CustomInputField state="error" hasError={true} label="Label" />
        </div>

      </div>

    </div>
  );
}

export default App;
