import React, {useMemo} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Table from 'react-bootstrap/Table'
// import {useTable} from 'react-table'
// import MOCK DATA from './MOCK_DATA.json'
// import {COLUMNS} from './columns'
import './table.css'

export const Table = () =>{

   const columns = useMemo(()=> COLUMNS, [])
   const data = useMemo(()=> MOCK_DATA, [])

   const tableInstance = useTable ({
      columns,
      data
   })

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
   } = tableInstance

   return(
      <table {...getTableProps()}>
         <thead>
            {headerGroups.map((headerGroup)=>(
               <tr {headerGroup.getHeaderGroupProps}>
                  {headerGroup.headers.map((column)=>(
                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row)=>{
               preparRow(row)
               return (
                  <tr {...row.getRowProps()}>
                  {row.cells.map((cell)=>{
                     return <td {...cell.getCellProps()}>{cell.render('cell')}
                     </td>
                  })}
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
}
