import React from "react";
import { Select, MenuItem } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import NextNavIconActive from "../../assets/icons/next-nav.svg";
import PrevNavIconActive from "../../assets/icons/prev-nav.svg";
import DropDownPagination from "../../assets/icons/drop-down-pagination.svg";

const CustomPagination = ({ totalPages = 8, currentPage, setCurrentPage }) => {
    const [rowsPerPage, setRowsPerPage] = React.useState(15);

    const NextNavIcon = () => <img src={NextNavIconActive} alt="Dropdown Icon" style={{ width: 28, height: 28 }} />;
    const PrevNavIcon = () => <img src={PrevNavIconActive} alt="Dropdown Icon" style={{ width: 28, height: 28 }} />;

    const DropDownPageIcon = () => <img src={DropDownPagination} alt="Dropdown Icon" style={{ width: 12, height: 12 }} />;

    const handleChangePage = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // Generate Page Numbers Dynamically
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 6) {
            // Show all pages if total pages <= 6
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1); // Always show first page

            if (currentPage > 3) {
                pages.push("..."); // Add ellipsis when necessary
            }

            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push("..."); // Add ellipsis before last page if needed
            }

            pages.push(totalPages); // Always show last page
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3 shadow-md w-full max-w-[1304px] mx-auto gap-3">
            {/* Lines Per Page */}
            <div className="flex items-center gap-3 text-gray-500">
                <span className="text-sm">Lines per page</span>
                <Select
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(Number(e.target.value))}
                    variant="outlined"
                    IconComponent={DropDownPageIcon} //  Custom Arrow Inside
                    className={clsx("shadow-sm rounded-md", "custom-select")}
                    sx={{
                        width: 48, // Adjust width
                        height: 28,
                        borderRadius: 8,
                        fontSize: "16px",
                        padding: "2px 2px 2px 4px",
                        justifyContent: "right", // Center align text & icon
                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                        "& .MuiSelect-icon": {
                            display: "none", // Hide default dropdown icon
                            "!important": true, // Ensuring this style can't be overridden
                        },
                        "!important": true // Add !important to override default styles
                    }}
                >
                    {[10, 15, 20, 25, 30].map((size) => (
                        <MenuItem key={size} value={size}>
                            {size}
                        </MenuItem>
                    ))}
                </Select>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
                {/* Prev Button */}
                <button
                    className={clsx(
                        "w-8 h-8 flex items-center justify-center rounded-full",
                        currentPage > 1 ? "bg-blue-100" : "opacity-50 cursor-not-allowed",
                        "custom-pagination-button"
                    )}
                    onClick={() => handleChangePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{ "!important": true }} // Enforce !important
                >
                    <PrevNavIcon />
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        className={clsx(
                            "w-8 h-8 flex items-center justify-center rounded-full",
                            page === "..."
                                ? "cursor-default text-gray-400"
                                : page === currentPage
                                    ? "bg-gray-900 text-white font-bold"
                                    : "text-gray-500",
                            page === "..." ? "text-gray-400" : "custom-page-button"
                        )}
                        onClick={() => typeof page === "number" && handleChangePage(page)}
                        disabled={page === "..."}>
                        {page}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    className={clsx(
                        "w-8 h-8 flex items-center justify-center rounded-full",
                        currentPage < totalPages ? "bg-blue-100" : "opacity-50 cursor-not-allowed",
                        "custom-pagination-button"
                    )}
                    onClick={() => handleChangePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={{ "!important": true }} // Enforce !important
                >
                    <NextNavIcon />
                </button>
            </div>
        </div>
    );
};

export default CustomPagination;
