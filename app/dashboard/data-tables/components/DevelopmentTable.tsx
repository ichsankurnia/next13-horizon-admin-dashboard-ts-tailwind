'use client'

import { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import CardMenu from "@/components/card/CardMenu";
import Card from "@/components/card";
import Progress from "@/components/progress";
import { DiApple, DiAndroid, DiWindows } from "react-icons/di";


type Props = {
  columnsData: any[]
  tableData: any[]
}

const DevelopmentTable = (props: Props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  return (
    <Card className={"w-full h-full p-4"}>
      <div className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Development Table
        </div>
        <CardMenu />
      </div>

      <div className="h-full overflow-x-auto">
        <table
          {...getTableProps()}
          className="mt-8 h-max w-full"
          color="gray-500"
        // variant="simple"
        // mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 "
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let renderData;
                    if (cell.column.Header === "NAME") {
                      renderData = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "TECH") {
                      renderData = (
                        <div className="flex items-center gap-2">
                          {cell.value.map((item: any, key: number) => {
                            if (item === "apple") {
                              return (
                                <div
                                  key={key}
                                  className="text-[22px] text-gray-600 dark:text-white"
                                >
                                  <DiApple />
                                </div>
                              );
                            } else if (item === "android") {
                              return (
                                <div
                                  key={key}
                                  className="text-[21px] text-gray-600 dark:text-white"
                                >
                                  <DiAndroid />
                                </div>
                              );
                            } else if (item === "windows") {
                              return (
                                <div
                                  key={key}
                                  className="text-xl text-gray-600 dark:text-white"
                                >
                                  <DiWindows />
                                </div>
                              );
                            } else return null;
                          })}
                        </div>
                      );
                    } else if (cell.column.Header === "DATE") {
                      renderData = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PROGRESS") {
                      renderData = (
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}%
                          </p>
                          <Progress width="w-[68px]" value={cell.value} />
                        </div>
                      );
                    }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="pt-[14px] pb-3 text-[14px]"
                      >
                        {renderData}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default DevelopmentTable;
