import React from "react";

// components
import {useQuery} from "react-query";
import axios from "axios";

export default function Customer() {
  const {isLoading, error, data, isFetching} = useQuery('customers', () =>
    axios.get('http://localhost:5000/api/customers/').then(res => res.data),
  )

  if (isLoading) return <p>Loading...</p>
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'}>
            <div className='rounded-t mb-0 px-4 py-3 border-0'>
              <div className='flex flex-wrap items-center'>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
                  <h3 className={'font-semibold text-lg text-blueGray-700'}>Customer List</h3>
                </div>
              </div>
            </div>
            <div className='block w-full overflow-x-auto'>
              {/* Projects table */}
              <table className='items-center w-full bg-transparent border-collapse'>
                <thead>
                <tr>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    }
                  >
                    Customer ID
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    }
                  >
                    Customer Type ID
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    }
                  >
                    Name
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    }
                  >
                    Email
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    }
                  >
                    Phone
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    }
                  >
                    Identification ID
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    }
                  >
                    Gender
                  </th>
                </tr>
                </thead>
                <tbody>
                {data.map(totalUser => (
                  <tr>
                    <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                      <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.makh}</div>
                    </td>
                    <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                      <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.maloaikh}</div>
                    </td>
                    <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                      <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.tenkh}</div>
                    </td>
                    <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                      <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.email}</div>
                    </td>
                    <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                      <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.sodienthoai}</div>
                    </td>
                    <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                      <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.socccd}</div>
                    </td>
                    <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                      <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.gioitinh}</div>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
