"use client";

import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:8000/ws/jobs/");

    socket.on("job_message", (message) => {
      setData((prevData) => [...prevData, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {data.length ? (
        <ul>
          {data.map((job, index) => (
            <li key={index}>{job.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
