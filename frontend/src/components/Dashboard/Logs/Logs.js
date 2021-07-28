import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getLogs } from "../../../actions/logs";
import LogsSkeleton from "./LogsSkeleton";


const Logs = () => {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logsReducer);

  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-4 mx-auto">
        <h2 className="text-left text-lg font-semibold text-gray-700 capitalize dark:text-gray-200 mb-2">Logs ({!logs?.length ? 0 : logs.length} latest records)</h2>
        {!logs?.length ? <LogsSkeleton />
          :
          <div className="text-xs overflow-auto max-h-96 shadow">
            <div className="shadow rounded-lg">
              <table className="table-auto leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-xs uppercase font-normal">
                      #
                    </th>
                    <th scope="col" className=" hidden md:table-cell w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-xs uppercase font-normal">
                      Action
                    </th>
                    <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-xs uppercase font-normal">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, index) => (
                    <tr key={log._id} className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-xs ">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {index + 1}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-xs ">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {log.logAction}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-xs ">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {new Date(log.loggedAt).toDateString()} {new Date(log.loggedAt).toLocaleTimeString()}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Logs;
