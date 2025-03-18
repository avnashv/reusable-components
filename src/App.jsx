"use client";
import React, { useState } from "react";
import CustomButton from "./components/customButton/customButton";
import CustomDropdown from "./components/customDropDown/customDropDown";
import CustomDatePicker from "./components/customDatePicker/customDatePicker";
import CustomInputField from "./components/customInputField/customInputField";
import CustomCheckboxField from "./components/customCheckboxField/customCheckboxField";
import CustomRadioField from "./components/customRadioButton/customRadioButton";

function App() {
  // State for radio button selection
  const [selectedRadio, setSelectedRadio] = useState("option1");

  const [textValue, setTextValue] = useState("Value");

  return (
    <div className="flex flex-col h-full items-center justify-around gap-7 py-10 bg-gray-300">

      <div className="items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-200 rounded-4xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-500">Custom Components</h1>
      </div>

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

      {/* -- Custom Dropdown Component -- */}
      <div className="flex gap-8 w-auto border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Dropdown</h1>
        </div>

        <div className="flex flex-col gap-4 text-left border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          <CustomDropdown label="Value" options={["Option 1", "Option 2", "Option 3"]} required={true} initialValue="Option 2" // ✅ Pre-selects "Option 2"
          />
        </div>

        <div className="flex flex-col gap-4 text-left border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Disable</h4>
          <CustomDropdown label="Disabled" options={["Option 1", "Option 2", "Option 3"]} disabled />
        </div>

        <div className="flex flex-col gap-4 text-left border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Error</h4>
          <CustomDropdown label="Error" options={["Option 1", "Option 2", "Option 3"]} errorMessage={"Error"} />
        </div>

      </div>

      {/* -- Custom InputField Component -- */}
      <div className="flex items-center gap-4 border-b-1 border-t-1 rounded-4xl py-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">InputField</h1>
        </div>

        {/* Editable InputField */}
        <div className="flex flex-col text-left gap-2 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          <CustomInputField
            state="default"
            label="Label"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </div>

        {/* Non-Editable Input */}
        <div className="flex flex-col text-left gap-2 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Non editable</h4>
          <CustomInputField state="non-editable" valueType="default" label="Label" />
        </div>

        {/* ✅ Disabled Input */}
        <div className="flex flex-col text-left gap-2 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Disabled</h4>
          <CustomInputField state="disabled" label="Label" />
        </div>

        {/* Error State */}
        <div className="flex flex-col text-left gap-2 border-r-1 border-l-1 p-6 pb-8 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Error</h4>
          <CustomInputField state="error" hasError label="Label" />
        </div>
      </div>

      {/* -- Custom DatePicker Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">DatePicker</h1>
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Default</h4>
          <CustomDatePicker label="Date" required />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Disabled</h4>
          <CustomDatePicker label="Disabled Date" disabled />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Error</h4>
          <CustomDatePicker label="Error Date" errorMessage="Invalid date" />
        </div>
      </div>

      {/* --- Custom Radio Button Section --- */}
      <div className="flex items-center gap-8 rounded-4xl p-4 shadow-xl text-center bg-white">
        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Radio Button</h1>
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Checked</h4>
          <CustomRadioField state="default" label="Option 1" value="option1" selectedValue={selectedRadio} onChange={setSelectedRadio} />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">UnChecked</h4>
          <CustomRadioField state="default" label="Option 2" value="option2" selectedValue={selectedRadio} onChange={setSelectedRadio} />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Disabled</h4>
          <CustomRadioField state="disabled" label="Disabled" value="disabled" selectedValue={selectedRadio} onChange={setSelectedRadio} />
        </div>

      </div>
      {/* -- Custom CheckboxField Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Checkbox</h1>
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          {/* Checked */}
          <CustomCheckboxField label="Label" description="Description" defaultChecked={true} />
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Unchecked</h4>
          {/* Unchecked */}
          <CustomCheckboxField label="Label" description="Description" defaultChecked={false} />
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Disabled Checked</h4>
          {/* Disabled Checked */}
          <CustomCheckboxField label="Label" description="Description" disabled={true} defaultChecked={true} />
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Disabled Unchecked</h4>
          {/* Disabled Unchecked */}
          <CustomCheckboxField label="Label" description="Description" disabled={true} defaultChecked={false} />
        </div>


      </div>

    </div>
  );
}

export default App;
