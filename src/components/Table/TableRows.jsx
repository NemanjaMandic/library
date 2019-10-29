// @flow

import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

type PropsT = {
    id: number,
    author: string,
    title: string,
    year: number | string | Date,
    pages: number,
    photo: any,
    quantity: number,
    onRowClick: Function
}

const TableRows = (props: PropsT) => {
    const {id, author, title, year, pages, quantity, photo, onRowClick } = props;
    return(
            <TableRow
                hover
                tabIndex={-1}
                key={id}
            >
                <TableCell >
                <Avatar alt="book image" src={photo} style={{ borderRadius: 0 }} />
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                {title}
                </TableCell>
                <TableCell align="right">{author}</TableCell>
                <TableCell align="right">{year}</TableCell>
                <TableCell align="right">{pages}</TableCell>
                <TableCell align="right">{quantity}</TableCell>
                <TableCell >
                <IconButton edge="end" color="inherit" onClick={onRowClick}>
                <MoreIcon />
                </IconButton>
                </TableCell>
            </TableRow>
    );
}

export default TableRows;