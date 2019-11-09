// @flow

import React, {useState, useRef, useEffect} from 'react';
import { connect } from "react-redux";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { updateBook } from '../../state/books/actions';
import useStyles from './style';
import FormHeader from '../../components/Form/FormHeader';

  
 type PropsT = {
  updateBook: Function,
  match: any,
  data: Array<any>
 }
  


    
const EditBook = (props: PropsT) => {
  
    const { 
      updateBook, 
      match, 
      data: {
        title, 
        author, 
        year, 
        pages, 
        quantity, 
        photo, 
        id} } = props;
    
   
    const classes = useStyles();

 

    const [values, setValues] = useState({
        title,
        author,
        pages,
        year,
        quantity,
        photo
      });

    const fileInput = useRef();

    const handleChange = name => event => {
        setValues({
          ...values,
          [name]: event.target.value,
        
        })
     
    };

    const handleUpload = () => {
      let reader = new FileReader();
      reader.readAsDataURL(fileInput.current.files[0])
      reader.onload = (e) => {

        setValues({
          ...values,
          photo: e.target.result,
        
        })
    }
  }
  

   const handleSubmit = (event) => {
       event.preventDefault();
        updateBook(values);

        setValues({
            title: '',
            author: '',
            pages: '',
            year: '',
            quantity: '',
            photo: null
        })
        
      }
  return (
    <div className={classes.root}>
     <FormHeader title="Edit Book" />
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <TextField
          className={classes.margin}
          label="Title"
          disabled
          onChange={handleChange('title')}
          value={values.title}
      />
      <TextField
        className={classes.margin}
        label="Author"
        disabled
        onChange={handleChange('author')}
        value={values.author}
      />

      <TextField
        id="date"
        label="Date of birth (Author)"
        type="date"
        disabled
        defaultValue="2017-05-24"
        className={`${classes.margin} ${classes.dateBirth}`}
        InputLabelProps={{
        shrink: true,
        }}
      />
      <TextField
        id="standard-number"
        label="Number of pages"
        disabled
        value={values.pages}
        onChange={handleChange('pages')}
        type="number"
        className={`${classes.margin} ${classes.numberInput}`}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        label="Year of publishing"
        value={values.year}
        onChange={handleChange('year')}
        disabled
        type="number"
        className={`${classes.margin} ${classes.numberInput}`}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
       <TextField
        label="Quantity"
        value={values.quantity}
        onChange={handleChange('quantity')}
        type="number"
        className={`${classes.margin} ${classes.numberInput}`}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <div className={classes.uploadWrapper}>
      <TextField
        label="Cover photo"
        value={values.photo}
        disabled
        className={`${classes.margin} ${classes.fileInput}`}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
     
     <input
        accept="image/*"
        className={classes.input}
        disabled
        ref={fileInput}
        onChange={handleUpload}
        // value={values.photo}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" disabled className={classes.uploadBtn}>
          Upload image
        </Button>
      </label>
      </div>
      
      <Button type="submit" variant="contained" color="primary" className={classes.saveBtn}>Edit Book</Button>
    </form>
      
    </div>
  );
}


const mapStateToProps = state => {
  const { books: { book: {data}}} = state;
  return {
      data
  }
}

export default connect(mapStateToProps, {updateBook})(EditBook);