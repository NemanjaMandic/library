// @flow

import React, {useState, useRef} from 'react';
import { connect } from "react-redux";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { submitBook } from '../../state/books/actions';
import useStyles from './style';
import FormHeader from '../../components/Form/FormHeader';

  
 type PropsT = {
  submitBook: Function,
  data: Array<any>
 }
  


    
const BookForm = (props: PropsT) => {
  
    const { submitBook} = props;
  
    const classes = useStyles();

  
    const [values, setValues] = useState({
        title: '',
        author: '',
        dateOfBirth: '',
        pages:  '',
        year: '',
        quantity: '',
        photo: null
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
     
        submitBook(values);

        setValues({
            title: '',
            author: '',
            dateOfBirth: '',
            pages: '',
            year: '',
            quantity: '',
            photo: null
        })
        event.preventDefault();
      }
  return (
    <div className={classes.root}>
     <FormHeader title="Add Book" />
         <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
            className={classes.margin}
            label="Title"
            onChange={handleChange('title')}
            value={values.title}
        />
         <TextField
            className={classes.margin}
            label="Author"
            onChange={handleChange('author')}
            value={values.author}
        />

         <TextField
            id="date"
            label="Date of birth (Author)"
            type="date"
            defaultValue="2017-05-24"
            onChange={handleChange('dateOfBirth')}
            className={`${classes.margin} ${classes.dateBirth}`}
            InputLabelProps={{
            shrink: true,
            }}
      />
      <TextField
        id="standard-number"
        label="Number of pages"
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
        value={values.photo === null ? "Choose image" : fileInput.current.files[0].name}
       
        className={`${classes.margin} ${classes.fileInput}`}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
     
     <input
        accept="image/*"
        className={classes.input}
        ref={fileInput}
        onChange={handleUpload}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.uploadBtn}>
          Upload image
        </Button>
      </label>
      </div>
      
      <Button type="submit" variant="contained" color="primary" className={classes.saveBtn}>Save Book</Button>
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

export default connect(mapStateToProps, {submitBook})(BookForm);