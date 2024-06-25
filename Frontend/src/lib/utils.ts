import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AuthContext } from "../store/authContext";
import { useContext } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function loadData (endPoint: any, options = {}, token = null) {


  try {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`http://localhost:3000/api/v1/${endPoint}`, {
      ...options,
      headers,
    });

    // Check if the response status is OK (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle and log any errors
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error after logging it
  }
};


