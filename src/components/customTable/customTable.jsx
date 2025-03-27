import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Paper,
} from "@mui/material";
import SortIcon from "../../assets/icons/sort.svg";
import DragIcon from "../../assets/icons/drag.svg";

const CustomTable = ({ columns: initialColumns, data, showCheckboxes }) => {
    const [columns, setColumns] = useState(initialColumns);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState(null);
    const [draggedColIndex, setDraggedColIndex] = useState(null);

    // Handle Select All Rows
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedRows([]); // Unselect all
        } else {
            setSelectedRows(data.map((row) => row.id)); // Select all row IDs
        }
        setSelectAll(!selectAll);
    };

    // Handle Individual Row Selection
    const handleSelectRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
        );
    };

    // Handle Sorting
    const handleSort = (columnId) => {
        const isAsc = orderBy === columnId && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(columnId);
    };

    // Sort Data
    const sortedData = [...data].sort((a, b) => {
        if (!orderBy) return 0;
        return order === "asc"
            ? a[orderBy] > b[orderBy]
                ? 1
                : -1
            : a[orderBy] < b[orderBy]
                ? 1
                : -1;
    });

    // Column Drag and Drop
    const handleDragStart = (index) => {
        setDraggedColIndex(index);
    };

    const handleDrop = (dropIndex) => {
        if (draggedColIndex === null || draggedColIndex === dropIndex) return;

        const updated = [...columns];
        const [moved] = updated.splice(draggedColIndex, 1);
        updated.splice(dropIndex, 0, moved);

        setColumns(updated);
        setDraggedColIndex(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <TableContainer
            component={Paper}
            className="border border-gray-300 rounded-md shadow-sm bg-white"
            sx={{
                width: "auto",
                height: "auto", // Figma height
                borderRadius: "12px", // Figma border-radius
                overflow: "hidden", // Prevents content overflow
            }}
        >
            <Table>
                {/* Table Header */}
                <TableHead>
                    <TableRow>
                        {/* Select All Checkbox in Header */}
                        {showCheckboxes && (
                            <TableCell
                                sx={{
                                    fontFamily: "Proxima Nova, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "13px",
                                    lineHeight: "140%",
                                    letterSpacing: "0%",
                                }}
                            >
                                <Checkbox
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    sx={{
                                        width: "16px",
                                        height: "16px",
                                        color: "#818B94",
                                        "&.Mui-checked": {
                                            color: "#17222B",
                                        },
                                    }}
                                />
                            </TableCell>
                        )}

                        {columns.map((column, index) => (
                            <TableCell
                                key={column.id}
                                draggable={column.isDrag}
                                onDragStart={() => handleDragStart(index)}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={() => handleDrop(index)}
                                sx={{
                                    fontFamily: "Proxima Nova, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "13px",
                                    lineHeight: "140%",
                                    letterSpacing: "0%",
                                    color: "#17222B",
                                    cursor: column.isDrag ? "grab" : "default",
                                    userSelect: "none",
                                    padding: "12px 16px",
                                }}
                            >
                                <div className="flex items-center w-[121.3px] h-[56px] justify-between pt-2 pr-2 pb-2 gap-5 whitespace-nowrap"                                >
                                    <div className="flex justify-center items-center">
                                        {/* Drag Icon (if drag is enabled) */}
                                        {column.isDrag && (
                                            <img
                                                src={DragIcon}
                                                alt="Drag"
                                                className="w-6 h-6 cursor-grab"
                                            />
                                        )}

                                        {/* Label */}
                                        <span className="font-bold text-[#17222B]">
                                            {column.label}
                                        </span>
                                    </div>

                                    {/* Sort Icon */}
                                    {column.showSort && (
                                        <img
                                            src={SortIcon}
                                            alt="Sort"
                                            className="w-4 h-4 cursor-pointer"
                                            onClick={() => handleSort(column.id)}
                                        />
                                    )}
                                </div>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                    {sortedData.map((row) => (
                        <TableRow key={row.id} className="hover:bg-gray-300">
                            {/* Checkbox in Rows */}
                            {showCheckboxes && (
                                <TableCell>
                                    <Checkbox
                                        checked={selectedRows.includes(row.id)}
                                        onChange={() => handleSelectRow(row.id)}
                                        sx={{
                                            width: "16px",
                                            height: "16px",
                                            color: "#818B94",
                                            "&.Mui-checked": {
                                                color: "#17222B",
                                            },
                                        }}
                                    />
                                </TableCell>
                            )}

                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    sx={{
                                        fontFamily: "Proxima Nova, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "13px",
                                        lineHeight: "140%",
                                        letterSpacing: "0%",
                                        color: "#17222B",
                                    }}
                                >
                                    {row[column.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
