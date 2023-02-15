import React, {useMemo} from 'react'
import {useTable, usePagination} from 'react-table'
import { COLUMNS } from './Colums'
import './Table.css'
import {FaForward, FaBackward} from 'react-icons/fa'

export const Table = (props) => {
    const dataProps = props.data

    const columns = useMemo(() => COLUMNS, [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = useMemo(() => dataProps)

    const tableInstance = useTable({
        columns,
        data
    }, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        state,
        prepareRow
    } = tableInstance

    const {pageIndex, pageSize} = state

  return (
    <div className={props.className}>
        <table {...getTableProps()}>
            <thead> 
                {
                    headerGroups.map((headerGroup) => {
                        return(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((header) => {
                                        return(
                                            <th {...header.getHeaderProps()}>{header.render('Header')}</th>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                
            </thead>

            <tbody {...getTableBodyProps()}>
            {
                    page.map((row) => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return(
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <div className='pagination'>
            <span>Số dòng mỗi trang</span>
            <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                {
                    [3, 5, 10, 15].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))
                }
            </select>

            <span>
                Page{' '} 
                <strong>{pageIndex + 1} of {pageOptions.length}</strong>
            </span>
            
            

            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}><FaBackward/></button>
                <button onClick={() => nextPage()} disabled={!canNextPage}><FaForward/></button>
            </div>
        </div>
    </div>
  )
}
