import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tables from './Tables/Tables'
const Dashboard = () => {
  const [name, setName] = useState('John')
  const [title, setTitle] = useState('CEO')
  const [status, setStatus] = useState('Active')
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    axios.get('http://localhost:8000/insurance', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(typeof res.data)
      setData(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }, []);

  return (
    <div>
      <div class="flex flex-col text-center">
        <h1 className='text-base mt-10 mb-2'>STAKED AMOUNT</h1>
        <h1 className='text-5xl mb-10'>4 SYNX</h1>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto mx-10">
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden border-b border-pur sm:rounded-lg">
              <table class="min-w-full divide-y divide-pur">
                <thead class="bg-pur">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Insurance Type</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date of Applying</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">

                  {/* {data.map(item => {
                    
                    return (
                      <Tables  />
                    )
                  })} */}

                  {data.map((item) => (
                    <Tables item={item} />
                  ))}
                            </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard; 