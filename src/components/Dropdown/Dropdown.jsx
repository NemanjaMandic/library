import React, {useState, useRef, useEffect} from 'react';
import { connect } from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { uniqueAuthors } from '../../utils';
import { filterBooksByAuthor } from '../../state/books/actions';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignSelf: 'flex-start',
    },
    selectMenu: {
      
        
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: 190
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

  type PropsT = {
    filterBooksByAuthor: Function,
    data: any
  };
const Dropdown = (props: PropsT) => {
    const { data, filterBooksByAuthor } = props;
    const classes = useStyles();

    const authors = uniqueAuthors(data);
    const [state, setState] = useState({
        author: ''
        
      });
      const inputLabel = useRef(null);

    const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
      
    });

    filterBooksByAuthor(event.target.value);
  };

    
    return(
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="authors">
          Any author
        </InputLabel>
        <Select
         className={classes.selectMenu}
          native
          value={state.author}
          onChange={handleChange('author')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'author',
            id: 'authors',
          }}
        >
          <option value="">{' '}</option>
          {authors.map(author => {
            return <option value={author} key={author}>{author}</option>
          })}
         
        </Select>
      </FormControl>
    );
}

const mapStateToProps = state => {
  const {books: { books: { data }}} = state;
  return {
    data
  }
}
export default connect(mapStateToProps, {filterBooksByAuthor})(Dropdown);