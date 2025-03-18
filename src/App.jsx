"use client";
import React, { useState } from "react";
import CustomButton from "./components/customButton/customButton";
import CustomDropdown from "./components/customDropDown/customDropDown";
import CustomDatePicker from "./components/customDatePicker/customDatePicker";
import CustomInputField from "./components/customInputField/customInputField";
import CustomRadioField from "./components/customRadioButton/customRadioButton";

function App() {
  // State for radio button selection
  const [selectedRadio, setSelectedRadio] = useState("option1");

  return (
    <div className="flex flex-wrap items-center justify-around gap-2 py-10 bg-gray-200 h-screen">
      {/* --- Custom Button Section --- */}
      <div className="flex gap-8 border-b border-t pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">
        <div className="flex items-center gap-4 justify-center border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Custom Buttons</h1>
        </div>

        {/* Primary Buttons */}
        <div className="flex flex-col gap-4 border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Primary</h4>
          <CustomButton text="Button" onClick={() => alert("Hi Team!")} />
          <CustomButton text="Button" disabled variant="primary" />
        </div>

        {/* Secondary Buttons */}
        <div className="flex flex-col gap-4 border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Secondary</h4>
          <CustomButton text="Button" variant="secondary" />
          <CustomButton text="Button" disabled variant="secondary" />
        </div>

        {/* Tertiary Buttons */}
        <div className="flex flex-col gap-4 border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Tertiary</h4>
          <CustomButton text="Button" variant="tertiary" />
          <CustomButton text="Button" disabled variant="tertiary" />
        </div>

        {/* Icon Buttons */}
        <div className="flex flex-col gap-4 border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Icon</h4>
          <CustomButton variant="icon" showText={false} endIcon />
          <CustomButton variant="icon" disabled showText={false} endIcon />
        </div>

        {/* Chips */}
        <div className="flex flex-col gap-4 border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Chips</h4>
          <CustomButton text="Chips" variant="chips" rounded="full" startIcon endIcon />
          <CustomButton text="Chips" disabled variant="chips" rounded="full" />
        </div>
      </div>

      {/* --- Custom Dropdown Section --- */}
      <div className="flex items-center justify-around gap-2 w-screen h-screen bg-gray-100">
        <div className="flex flex-col gap-5 border-r p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Dropdown Default</h4>
          <CustomDropdown label="Value" options={["Option 1", "Option 2", "Option 3"]} initialValue="Option 2" />
        </div>
        <div className="flex flex-col gap-5 border-r p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Dropdown Disabled</h4>
          <CustomDropdown label="Disabled" options={["Option 1", "Option 2", "Option 3"]} disabled />
        </div>
        <div className="flex flex-col gap-5 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">Dropdown Error</h4>
          <CustomDropdown label="Error" options={["Option 1", "Option 2", "Option 3"]} errorMessage="Error" />
        </div>
      </div>

      {/* --- Custom InputField Section --- */}
      <div className="flex items-center gap-8 border-b border-t pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">
        <div className="flex items-center gap-4 justify-center border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Custom InputField</h1>
        </div>
        <div className="flex flex-col gap-2 border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          <CustomInputField state="default" valueType="default" label="Label" />
        </div>
        <div className="flex flex-col gap-2 border-r border-l p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Non-editable</h4>
          <CustomInputField state="non-editable" valueType="default" label="Label" />
        </div>
        <div className="flex flex-col gap-2 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Error</h4>
          <CustomInputField state="error" hasError label="Label" />
        </div>
      </div>

      {/* --- Custom DatePicker Section --- */}
      <div className="flex items-center justify-around gap-2 w-screen h-screen bg-gray-100">
        <div className="flex flex-col gap-5 border-r p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">DatePicker Default</h4>
          <CustomDatePicker label="Date" required />
        </div>
        <div className="flex flex-col gap-5 border-r p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">DatePicker Disabled</h4>
          <CustomDatePicker label="Disabled Date" disabled />
        </div>
        <div className="flex flex-col gap-5 p-6 border-gray-300">
          <h4 className="text-lg text-gray-400">DatePicker Error</h4>
          <CustomDatePicker label="Error Date" errorMessage="Invalid date" />
        </div>
      </div>

      {/* --- Custom Radio Button Section --- */}
      <div className="flex items-center gap-8 border border-purple-400 rounded-4xl p-4 shadow-xl text-center bg-white">
        <div className="flex items-center gap-4 justify-center border border-gray-300 rounded-4xl p-6 shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Custom Radio Button</h1>
        </div>

        <CustomRadioField state="default" label="Option 1" value="option1" selectedValue={selectedRadio} onChange={setSelectedRadio} />
        <CustomRadioField state="default" label="Option 2" value="option2" selectedValue={selectedRadio} onChange={setSelectedRadio} />
        <CustomRadioField state="disabled" label="Disabled" value="disabled" selectedValue={selectedRadio} onChange={setSelectedRadio} />
      </div>
    </div>
  );
}

export default App;
