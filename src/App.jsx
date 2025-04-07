"use client";
import React, { useState } from "react";
import CustomButton from "./components/customButton/customButton";
import CustomDropdown from "./components/customDropDown/customDropDown";
import CustomDatePicker from "./components/customDatePicker/customDatePicker";
import CustomDateRangePicker from "./components/customDateRangePicker/customDateRangePicker"
import CustomInputField from "./components/customInputField/customInputField";
import CustomCheckboxField from "./components/customCheckboxField/customCheckboxField";
import CustomRadioField from "./components/customRadioButton/customRadioButton";
import CustomTable from "./components/customTable/customTable";
import ToggleButton from "./components/customToggle/customToggle";
import CustomTimePicker from "./components/customTimePicker/customTimePicker"
import CustomPagination from "./components/customPagination/customPagination";
import CustomSearch from "./components/customSearch/customSearch";
import BlueArrowUp from "./assets/icons/blue-arrow-up.svg";
import PhoneIcon from "./assets/icons/phone-icon.svg";
import CalenderIcon from "./assets/icons/calendar-table-icon.svg";
import MailIcon from "./assets/icons/mail.svg";
import LoactionIcon from "./assets/icons/location.svg";
import dayjs from "dayjs";
import OffcanvasModal from "./components/customOffcanvas/OffcanvasModal";
import FilterContent from "./components/test/FilterContent";

function App() {
  // State for radio button selection
  const [selectedRadio, setSelectedRadio] = useState("option1");

  // State for input field value
  const [textValue, setTextValue] = useState("Value");
  const [currentPage, setCurrentPage] = useState(1);

  // inside Header component:
const [isFilterOpen, setIsFilterOpen] = useState(false);
const toggleFilter = () => setIsFilterOpen(prev => !prev);

  // Sample data for the custom table
  const columns = [
    { id: "leadNo", label: "Lead no", showSort: false, isDrag: false },
    { id: "title", label: "Title", showSort: false, isDrag: true },
    { id: "lastName", label: "Last Name", showSort: false, isDrag: true },
    { id: "status", label: "Status", showSort: true, isDrag: true },
    { id: "branch", label: "Branch", showSort: true, isDrag: false },
    { id: "createdDate", label: "Created Date", showSort: true, isDrag: true },
    { id: "phone", label: "Phone", showSort: false, isDrag: false },
    { id: "email", label: "Email", showSort: false, isDrag: true },
    { id: "leadSource", label: "Lead Source", showSort: false, isDrag: true },
    { id: "location", label: "Location", showSort: true, isDrag: false },
  ];

  // Sample data for the custom table
  const data = [
    {
      id: 1,
      leadNo: "LEAD355451001",
      title: "Antony",
      lastName: "Dasan",
      status: "Potential",
      branch: "Kochi",
      createdDate: "12 Dec, 2020",
      phone: "(884) 819-3264",
      email: "a@gmail.com",
      leadSource: "Meta",
      location: "Australia",
    },
    {
      id: 2,
      leadNo: "LEAD355451002",
      title: "Nandhana",
      lastName: "Krishnan",
      status: "Inactive",
      branch: "Kochi",
      createdDate: "12 Dec, 2020",
      phone: "(884) 819-3264",
      email: "b@gmail.com",
      leadSource: "Google Ads",
      location: "Canada",
    },
    {
      id: 3,
      leadNo: "LEAD355451003",
      title: "Lakshmi",
      lastName: "Priya",
      status: "Potential",
      branch: "Kottayam",
      createdDate: "14 Dec, 2020",
      phone: "(884) 819-3264",
      email: "c@gmail.com",
      leadSource: "Meta",
      location: "Canada",
    },
    {
      id: 4,
      leadNo: "Aravind",
      title: "Nandhan",
      lastName: "Krishnan",
      status: "Inactive",
      branch: "Kochi",
      createdDate: "12 Dec, 2020",
      phone: "(884) 819-3264",
      email: "d@gmail.com",
      leadSource: "Google Ads",
      location: "US",
    },
  ];


  const getRow = (columnId, value) => {
    switch (columnId) {
      case "createdDate":
        return (
          <div className="flex items-center gap-2">
            <img src={CalenderIcon} alt="Calender" className="w-4 h-4" />
            <span>{value}</span>
          </div>
        );
      case "phone":
        return (
          <div className="flex items-center gap-2">
            <img src={PhoneIcon} alt="Phone" className="w-4 h-4" />
            <span>{value}</span>
          </div>
        );
      case "email":
        return (
          <div className="flex items-center gap-2">
            <img src={MailIcon} alt="Mail" className="w-4 h-4" />
            <span>{value}</span>
          </div>
        );
      case "location":
        return (
          <div className="flex items-center gap-2">
            <img src={LoactionIcon} alt="Location" className="w-4 h-4" />
            <span>{value}</span>
          </div>
        );
      default:
        return value;
    }
  };

  const initialTime = dayjs().set("hour", 10).set("minute", 30);
  return (
    <div className="flex flex-col min-h-screen items-center justify-around gap-7 py-10 bg-gray-300">

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
          <CustomButton text="Button" onClick={toggleFilter} />
          <CustomButton text="Create Lead" startIcon={false} endIcon={true} iconImg={MailIcon} />
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
          <CustomButton variant="icon" disabled={false} showText={false} startIcon={false} endIcon={true} iconImg={BlueArrowUp} />
          <CustomButton variant="icon" disabled={true} showText={false} startIcon={false} endIcon={true} iconImg={BlueArrowUp} />
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
          {/* <CustomDropdown  options={["Option 1 4567", "Option 2", "Option 3"]} required={true} 
          placeHolder="Select Option"
          /> */}
          <CustomDropdown
            options={[
              { name: "Kochi Leads", count: 8467 },
              { name: "Mumbai Leads", count: 5321 },
              { name: "Delhi Leads", count: 6789 }
            ]}
            required={true}
            placeHolder="Select Branch"
          />

        </div>

        <div className="flex flex-col gap-4 text-left border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Disable</h4>
          <CustomDropdown label="Disabled" options={["Option 1", "Option 2", "Option 3"]} disabled placeHolder="Select Option" />
        </div>

        <div className="flex flex-col gap-4 text-left border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Error</h4>
          <CustomDropdown label="Error" options={["Option 1", "Option 2", "Option 3"]} errorMessage={"Error"} placeHolder="Select Option" />
        </div>

      </div>


      {/* -- Multiple Custom Dropdown Component -- */}
      <div className="flex gap-8 w-auto border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Multiple Dropdown</h1>
        </div>

        <div className="flex flex-col gap-4 text-left border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          <CustomDropdown
            label="Values"
            options={["Aravinth Raj FE Dev", "Aravinth", "Raj", "Avinash", "Sreejitha", "Nirmal"]}
            required={true}
            multiple={true}
            placeHolder="Select Options"
          />
        </div>

        <div className="flex flex-col gap-4 text-left border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Disable</h4>
          <CustomDropdown label="Disabled"
            options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"]}
            multiple={true}
            initialValue={["Option 1", "Option 3"]}
            placeHolder="Select Options"
            disabled />
        </div>

        <div className="flex flex-col gap-4 text-left border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Error</h4>
          <CustomDropdown label="Error" options={["Aravinth Raj", "Avinash Vijayan", "Sreejitha M C", "Nirmal Kumar VG", "Rajesh Padinjaremadam", "Sree Lakshmi"]} errorMessage={"Error Message"} multiple={true}
            placeHolder="Select Options" />
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
            placeholder="Enter your first name"
            onChange={(e) => setTextValue(e.target.value)}
          />
        </div>

        {/* Non-Editable Input */}
        <div className="flex flex-col text-left gap-2 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Non editable</h4>
          <CustomInputField state="non-editable" valueType="default" label="Label" />
        </div>

        {/*  Disabled Input */}
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

      {/* -- Custom Date Range Picker Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Date Range Picker</h1>
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Default</h4>
          <CustomDateRangePicker label="Date" required />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Disabled</h4>
          <CustomDateRangePicker label="Disabled Date" disabled />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Error</h4>
          <CustomDateRangePicker label="Error Date" errorMessage="Invalid date" />
        </div>
      </div>


      {/* -- Custom TimePicker Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Time Picker</h1>
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Default</h4>
          <CustomTimePicker label="Time" required />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Disabled</h4>
          <CustomTimePicker label="Disabled Time" value={initialTime} disabled />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-gray-400">Error</h4>
          <CustomTimePicker label="Error Date" errorMessage="Error Message" />
        </div>
      </div>

      {/* --- Custom Radio Button Section --- */}
      <div className="flex items-center gap-8 rounded-4xl p-4 shadow-xl text-center bg-white">
        <div className="flex items-center gap-4 justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Radio Button</h1>
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md w-60">
          <h4 className="text-lg text-gray-400">Checked</h4>
          <CustomRadioField state="default" label="Option 1" value="option1" selectedValue={selectedRadio} onChange={setSelectedRadio} />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md w-60">
          <h4 className="text-lg text-gray-400">UnChecked</h4>
          <CustomRadioField state="default" label="Option 2" value="option2" selectedValue={selectedRadio} onChange={setSelectedRadio} />
        </div>

        <div className="flex flex-col gap-4 border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md w-60">
          <h4 className="text-lg text-gray-400">Disabled</h4>
          <CustomRadioField state="disabled" label="Disabled" value="disabled" selectedValue={selectedRadio} onChange={setSelectedRadio} />
        </div>

      </div>

      {/* -- Custom CheckboxField Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-4 mx-9 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Checkbox</h1>
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md w-48">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          {/* Checked */}
          <CustomCheckboxField label="Label" description="Description" defaultChecked={true} />
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md w-48">
          <h4 className="text-lg text-center text-gray-400">Unchecked</h4>
          {/* Unchecked */}
          <CustomCheckboxField label="Label" description="Description" defaultChecked={false} />
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md w-48">
          <h4 className="text-lg text-center text-gray-400">Disabled Checked</h4>
          {/* Disabled Checked */}
          <CustomCheckboxField label="Label" description="Description" disabled={true} defaultChecked={true} />
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md w-60">
          <h4 className="text-lg text-center text-gray-400">Disabled Unchecked</h4>
          {/* Disabled Unchecked */}
          <CustomCheckboxField label="Label" description="Description" disabled={true} defaultChecked={false} />
        </div>
      </div>

      {/* -- Custom Toggle Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Toggele Button</h1>
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          {/* leftLabel */}
          <ToggleButton
            label="Label Description"
            description="This is a description"
            position="left"
          />

        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Unchecked</h4>
          {/* rightLabel */}
          <ToggleButton
            label="Label Description"
            description="This is a description"
            position="right"
          />
        </div>
        {/* Disabled Toggle */}
        <div className="flex flex-col border-x border-gray-300 p-6 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Disabled</h4>
          <ToggleButton
            label="Label Description"
            description="This is a description"
            position="left"
            disabled
          />
        </div>
      </div>

      {/* -- Custom Pagination Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Pagination</h1>
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          <CustomPagination
            totalPages={8}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

        </div>
      </div>

      {/* -- Custom Search Component -- */}
      <div className="flex gap-8 border-b-1 border-t-1 pt-2 rounded-4xl pb-2 px-2 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Search</h1>
        </div>

        <div className="flex flex-col border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h4 className="text-lg text-center text-gray-400">Default</h4>
          <CustomSearch />


        </div>
      </div>

      {/* -- Custom Table Component -- */}
      <div className="flex gap-4 border-b-1 border-t-1 rounded-2xl pt-4 pb-4 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">Table</h1>
        </div>

        <div className="flex flex-col flex-grow w-full max-w-[90%] border-r-1 border-l-1 p-3 border-gray-300 rounded-2xl shadow-md bg-gray-200 ">
          <CustomTable columns={columns} data={data} showCheckboxes={true} getRow={getRow} />
        </div>

      </div>
      {/* offcanvas modal */}
      <div className="flex gap-4 border-b-1 border-t-1 rounded-2xl pt-4 pb-4 shadow-xl border-gray-300 text-center bg-white">

        <div className="flex items-center justify-center border-r-1 border-l-1 p-6 border-gray-300 rounded-4xl shadow-md">
          <h1 className="text-xl font-bold text-gray-500">offcanvas</h1>
        </div>

        <div className="flex flex-col flex-grow w-full max-w-[90%] border-r-1 border-l-1 p-3 border-gray-300 rounded-2xl shadow-md bg-gray-200 ">
          <OffcanvasModal
            isOpen={isFilterOpen}
            onClose={toggleFilter}
            title="Filter"
          >
            <FilterContent onClose={toggleFilter} />
          </OffcanvasModal>
        </div>


      </div>
    </div>
  );
}

export default App;
