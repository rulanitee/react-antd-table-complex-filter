import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import { SubjectClass } from "./utils";

export default function App() {
  const subjects = [
    {
      text: "Maths",
      value: "Maths"
    },
    {
      text: "Physics",
      value: "Physics"
    },
    {
      text: "Chemistry",
      value: "Chemistry"
    },
    {
      text: "Shona",
      value: "Shona"
    },
    {
      text: "Geography",
      value: "Geography"
    },
    {
      text: "History",
      value: "History"
    },
    {
      text: "Accounts",
      value: "Accounts"
    },
    {
      text: "Business",
      value: "Business"
    },
    {
      text: "Commerce",
      value: "Commerce"
    }
  ];
  const students = [
    {
      key: "1",
      name: "Frank Yellow",
      age: 12,
      address: "Randburg, 201 Bram Fischer Dr",
      gender: "Male",
      results: [
        {
          subject: "History",
          mark: 80
        },
        {
          subject: "Shona",
          mark: 45
        },
        {
          subject: "Geography",
          mark: 35
        }
      ]
    },
    {
      key: "2",
      name: "Vimbai Red",
      age: 13,
      address: "Sandton, 15 Grayston Dr",
      gender: "Female",
      results: [
        {
          subject: "Accounts",
          mark: 35
        },
        {
          subject: "Geography",
          mark: 90
        },
        {
          subject: "Business",
          mark: 65
        }
      ]
    },
    {
      key: "3",
      name: "Tatenda Blue",
      age: 13,
      address: "Fourways, 451 Camdeboo Rd",
      gender: "Male",
      results: [
        {
          subject: "Maths",
          mark: 65
        },
        {
          subject: "Physics",
          mark: 55
        },
        {
          subject: "Chemistry",
          mark: 64
        }
      ]
    },
    {
      key: "34",
      name: "Gamuchirai Green",
      age: 13,
      address: "Bryanston, 300 Sloane",
      gender: "Male",
      results: [
        {
          subject: "Accounts",
          mark: 65
        },
        {
          subject: "Business",
          mark: 75
        },
        {
          subject: "Commerce",
          mark: 68
        }
      ]
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender"
    },
    {
      title: "Results",
      dataIndex: "results",
      key: "results",
      render: results => (
        <>
          {results.map((result, index) => (
            <>
              <span className={SubjectClass(result.subject)}>
                {result.mark}
              </span>
              {results.length - 1 !== index && <span>,</span>}
            </>
          ))}
        </>
      ),
      filters: subjects,
      onFilter: (value, record) => {
        const results = record.results.map(r => r.subject);
        return results.includes(value.toString());
      }
    }
  ];

  return (
    <div className="App">
      <Table />
    </div>
  );
}
