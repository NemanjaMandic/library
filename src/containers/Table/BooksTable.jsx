// @flow

import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import EnhancedTableHead from '../../components/Table/EnhancedTableHead';
import TableRows from '../../components/Table/TableRows';
import Loader from '../../components/Loader';
import { getSorting, stableSort } from '../../utils';
import { selectBook, filterBooksByAuthor } from '../../state/books/actions';
import useStyles from './style';


type PropsT = {
  selectBook: Function,
  openSidebar: Function,
  filterBooksByAuthor: Function,
  inProgress: boolean,
  rows: Array<any>
}

export const BooksTable = (props: PropsT) => {
  const { rows, selectBook, openSidebar, inProgress, filterBooksByAuthor } = props;
  
  useEffect(() => {
    filterBooksByAuthor('');
  }, []);

  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('author');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

 const handleRowClick = (id) => {
   selectBook({bookId: id});
   openSidebar();
 }


  return (
    <>
    {inProgress && <Loader />}
    <div className={classes.root}>
      { rows ? (
         <div className={classes.paper}>
        
         <div className={classes.tableWrapper}>
           <Table
             stickyHeader 
             className={classes.table}
             aria-labelledby="tableTitle"
             aria-label="enhanced table"
           >
             <EnhancedTableHead
               classes={classes}
               numSelected={selected.length}
               order={order}
               orderBy={orderBy}
               onSelectAllClick={handleSelectAllClick}
               onRequestSort={handleRequestSort}
               rowCount={rows.length}
             />
             <TableBody>
               {stableSort(rows, getSorting(order, orderBy))
                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                 .map((row) => {
                   return (
                     <TableRows 
                     {...row} 
                     key={row.id} 
                     onRowClick={() => handleRowClick(row.id)} 
                     />
                   );
                 })}
             </TableBody>
           </Table>
         </div>
         <TablePagination
           rowsPerPageOptions={[]}
           component="div"
           count={rows.length}
           rowsPerPage={rowsPerPage}
           page={page}
           backIconButtonProps={{
             'aria-label': 'previous page',
           }}
           nextIconButtonProps={{
             'aria-label': 'next page',
           }}
           onChangePage={handleChangePage}
         />
       </div>
      ) : <h3>No table data</h3>}
    </div>
    </>
  );
}


const mapStateToProps = ({
  books: { books: { filteredBooks }},
  books: { books: { inProgress }}
}) => ({
  rows: filteredBooks,
  inProgress
 
});

export default connect(mapStateToProps, {selectBook, filterBooksByAuthor})(BooksTable);
