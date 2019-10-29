// @Flow

import React from 'react';
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import BookHeader from '../../components/Header/BookHeader';
import useStyles from './style';

 
type PropsT = {
    data: Array<any>
}

const Book = (props: PropsT) => {
    const classes = useStyles();
    const { data: {title, author, year, pages, quantity, photo, id} } = props;
   
  return(
     <div>
         <BookHeader title={title} author={author} link={`/edit-book/${id}`} />
         <div className={classes.imgWrapper}>
           <img src={photo} className={classes.img} />
         </div>
         <div className={classes.content}>
            <p>Info</p>
            <p>Title {title}</p>
            <p>Author {author}</p>
            <p>Year {year}</p>
            <p>Pages {pages}</p>
            <p>Quantity {quantity}</p>
         </div>

         <Divider />
     </div>
      
  );
}

const mapStateToProps = state => {
    const { books: { book: {data}}} = state;
    return {
        data
    }
}
export default connect(mapStateToProps)(Book);