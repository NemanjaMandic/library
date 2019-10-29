import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const headCells = [
    { id: 'title', sortable: true, label: 'Title' },
    { id: 'author', label: 'Author' },
    { id: 'year', label: 'Year' },
    { id: 'pages', sortable: true, numeric: true, disablePadding: false, label: 'Pages' },
    { id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity' },
  ];
  
  
  const EnhancedTableHead = (props) => {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
           {' '}
          </TableCell>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
             {headCell.sortable ? (
                <TableSortLabel
                active={orderBy === headCell.id}
                direction={order}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
             ) : headCell.label }
              
            </TableCell>
            
          ))}
          <TableCell>{' '}</TableCell>
        </TableRow>
      </TableHead>
    );
  }
  

export default EnhancedTableHead;