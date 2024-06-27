import React from "react";
import { Table, TableRow, TableCell } from "./ui/table";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

interface Patient {
  _id: string;
  name: string;
  // Add other properties as needed
}

interface PatientProps {
  patient: Patient[];
}

const PatientTable: React.FC<PatientProps> = ({ patient }) => {
  console.log(patient);
  return (
    <>
      {patient?.data.map((item) => (
        <TableRow key={item._id}>
          <Link to={`/patients/${item._id}`}>
            <TableCell className="hidden sm:table-cell">
              <img
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                width="64"
              />
            </TableCell>
          </Link>
          <TableCell className="font-medium">{item.name}</TableCell>
          <TableCell>
            <Badge variant="outline">{item.age}</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">{item.address}</TableCell>
          <TableCell className="hidden md:table-cell">{item.gender}</TableCell>
          <TableCell className="hidden md:table-cell">
            2023-07-12 10:42 AM
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default PatientTable;
