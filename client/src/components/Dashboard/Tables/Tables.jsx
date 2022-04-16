import React from 'react'
import { Button } from '@mui/material';
import minter from '../../Payment/minter';
const Tables = ({ item }) => {
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">{item.insuranceType}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">16/3/2022</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        {item.status === "accepted" ? (
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-black"> Accepted </span>
        ) : item.status === "rejected" ? (
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black"> Rejected </span>
        ) : (
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-black"> Ongoing </span>
        )}
        {/* {!item.status === 'Ongoing' ? <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Accepted </span>: <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-black"> Ongoing </span> } */}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount} SNX</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

      <Button
                            type="submit"
                            variant="contained"
          sx={{ }}
          onClick={() => { minter(); }}
          className='bg-pur'
                        >
                            Mint
        </Button>

      </td>

      
    </tr>
  )
}
export default Tables;