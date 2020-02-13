import React from "react";
import { Button } from "react-bootstrap";
import { Table, Icon, Input } from "antd";
import { FilterDropdownProps } from "antd/lib/table";
import "antd/dist/antd.css";
import "./styles.css";
import { students, computeResults, computePoints } from "./students";

export function StudentTable() {
  const pointsFilterProps = {
    filterDropdown: (props: FilterDropdownProps) => (
      <div>
        <Input
          placeholder="Search points"
          value={props.selectedKeys ? props.selectedKeys[0] : ""}
          onChange={e =>
            props.setSelectedKeys
              ? props.setSelectedKeys(e.target.value ? [e.target.value] : [])
              : null
          }
          onPressEnter={() => runSearch(props.confirm)}
          className="idSearchText"
        />
        <Button
          variant="primary"
          onClick={() => runSearch(props.confirm)}
          size="sm"
        >
          Search <Icon type="search" style={{ marginLeft: "3px" }} />
        </Button>
        <Button
          variant="primary"
          onClick={() => resetBatchIdSearch(props.clearFilters)}
          size="sm"
        >
          Reset
        </Button>
      </div>
    ),
    onFilter: (value, records) => {
      const points = computePoints(computeResults(records.results));
      return points.toString() === value.toString();
    }
  };

  function runSearch(confirm: (() => void) | undefined) {
    if (confirm) {
      confirm();
    }
  }

  function resetBatchIdSearch(clearFilters: (() => void) | undefined) {
    if (clearFilters) {
      clearFilters();
    }
  }

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
          {computeResults(results).map((result, index) => (
            <>
              <span>{result.details.grade}</span>
              {results.length - 1 !== index && <span>,</span>}
            </>
          ))}
        </>
      )
    },
    {
      title: "Points",
      dataIndex: "results",
      key: "results",
      render: results => (
        <>{<span>{computePoints(computeResults(results))}</span>}</>
      ),
      ...pointsFilterProps
    }
  ];

  return <Table dataSource={students} columns={columns} />;
}
