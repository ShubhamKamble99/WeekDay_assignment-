import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import Select from "react-select";
import JobCard from "../Components/JobCard";

function Jobsearch(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roleOptions, setRoleOptions] = useState([]);
  const [searchRole, setSearchRole] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          limit: 10,
          offset: 0,
        });
      let url = "https://api.weekday.technology/adhoc/getSampleJdJSON";
      const requestOptions = {
        method: "POST",
        url: url,
        headers: myHeaders,
        body: raw,
      };
      try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("result", result);
        setData(result);
      } catch (error) {
        console.error("There was a problem with the request:", error);
        setError(error.message);
        setData([]); // Clear data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  //   For Roles
  useEffect(() => {
    if (data && data.jdList) {
      const roles = data.jdList.map((item) => item.jobRole);
      const uniqueRoles = [...new Set(roles)]; // Remove duplicates
      const options = uniqueRoles.map((role) => ({ value: role, label: role }));
      setRoleOptions(options);
    }
  }, [data]);

  let filteredData = [];
  if (data && data.jdList) {
    filteredData = data.jdList.filter((item) =>
      item.jobRole.toLowerCase().includes(searchRole.toLowerCase())
    );
  }
  //   For Location
  return (
    <div className="">
      <div className={`${Style.DataSearchSection}`}>
        <div className="">
          <Select
            width="auto"
            isMulti={true}
            options={roleOptions}
            menuPortalTarget={document.body}
            placeholder="Roles"
          />
        </div>
        <div className="">
          <Select placeholder="Number Of Employees" />
        </div>
        <div className="">
          <Select placeholder="Experience" />
        </div>
        <div className="">
          <Select placeholder="Remote" />
        </div>
        <div className="">
          <Select placeholder="Mininum Base Pay Salary" />
        </div>
        <div className="">
          <Select placeholder="Search Company Name" />
        </div>
      </div>
      <div className={`${Style.JobCardSection}`}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          filteredData.map((item, index) => (
            <div key={index}>
              {/* <JobCard item={item} /> */}
              {item.location}
            </div>
          ))
        )}
        {/* {Array(6)
          .fill(true)
          .map((item, index) => (
            <JobCard key={index} />
          ))} */}
      </div>
    </div>
  );
}

export default Jobsearch;
