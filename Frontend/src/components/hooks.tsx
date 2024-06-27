import { useEffect, useState } from "react";
import { getAuthToken } from "@/lib/auth";
export function useLoadData(url: unknown) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const accessToken = getAuthToken();

    const fetchData = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await fetch(url, {
          headers,
        });

        // Check if the response status is OK (200-299)
        if (!response.ok) {
          setError(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();
        setData(data);
      } catch (error) {
        // Handle and log any errors
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error after logging it
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, isLoading, error];
}
