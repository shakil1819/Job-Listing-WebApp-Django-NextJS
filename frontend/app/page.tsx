// app/page.tsx
"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/jobs/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {data ? (
        <ul>
          {(data as any[]).map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
