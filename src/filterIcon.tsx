import React from "react";
import { Icon } from "antd";

export function FilterIcon(filtered: boolean) {
  return (
    <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
  );
}
