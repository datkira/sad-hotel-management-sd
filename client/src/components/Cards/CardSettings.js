import React from 'react'
import { Formik } from 'formik'
import {useQuery} from "react-query";
import axios from "axios";

// components

export default function CardSettings () {
  const { data: dataTyperooms, isLoading: isLoadingTyperoom } = useQuery('typerooms', () =>
    axios.get('http://localhost:5000/api/typerooms/').then(res => res.data),
  )

  const { data: dataRoomList, isLoading: isLoadingRoomList } = useQuery('rooms', () =>
    axios.get('http://localhost:5000/api/rooms/').then(res => res.data),
  )

  if (isLoadingTyperoom || isLoadingRoomList) return <p>Loading...</p>
  return (
    <>
      <div className={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'}>
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
              <h3 className={'font-semibold text-lg text-blueGray-700'}>Type Room List</h3>
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
                ID
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
                Description
              </th>
            </tr>
            </thead>
            <tbody>
            {dataTyperooms.map(typeRoom => (
              <tr>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{typeRoom.maloaiphong}</div>
                </td>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{typeRoom.tenloaiphong}</div>
                </td>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{typeRoom.mota}</div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'}>
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
              <h3 className={'font-semibold text-lg text-blueGray-700'}>Room List</h3>
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
                ID
              </th>
              <th
                className={
                  'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                }
              >
                Type Room ID
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
                Status
              </th>
              <th
                className={
                  'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                }
              >
                Price (VND)
              </th>
            </tr>
            </thead>
            <tbody>
            {dataRoomList.map(totalUser => (
              <tr>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.maphong}</div>
                </td>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.maloaiphong}</div>
                </td>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.ten}</div>
                </td>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.tinhtrang}</div>
                </td>                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.gia}</div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
        <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
          <Formik
            initialValues={{ name: '', description: '' }}
            onSubmit={async (values, { setSubmitting }) => {
              // await sendForm(values.name, values.description)
              setSubmitting(false)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}><h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
                Add new type room
              </h6>
                <div className='flex flex-wrap'>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      >
                        Type room name
                      </label>
                      <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      >
                        Description
                      </label>
                      <input
                        type='text'
                        name='description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        defaultValue='Lucky'
                      />
                    </div>
                  </div>
                  <div className={"ml-3"}>
                    <button className={"bg-lightBlue-500 text-white px-2 py-2 rounded text-sm"}>Create type room</button>
                  </div>
                </div>
              </form>)}</Formik>
        </div>
      </div>
      <div
        className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
        <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
          <Formik
            initialValues={{ name: '', description: '' }}
            onSubmit={async (values, { setSubmitting }) => {
              console.log('asdsad', values)
              // await sendForm(values.name, values.description)
              setSubmitting(false)
            }}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
              <form onSubmit={handleSubmit}><h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
                Add new room
              </h6>
                <div className='flex flex-wrap'>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      >
                        Status
                      </label>
                      <input
                        type='text'
                        name='description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        defaultValue='Lucky'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      >
                        Price
                      </label>
                      <input
                        type='text'
                        name='description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        defaultValue='Lucky'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      >
                        Type Room ID
                      </label>
                      <input
                        type='text'
                        name='description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        defaultValue='Lucky'
                      />
                    </div>
                  </div>
                  <div className={"ml-3"}>
                    <button className={"bg-lightBlue-500 text-white px-2 py-2 rounded text-sm"}>Create type room</button>
                  </div>
                </div>
              </form>)}</Formik>
        </div>
      </div>
    </>
  )
}
