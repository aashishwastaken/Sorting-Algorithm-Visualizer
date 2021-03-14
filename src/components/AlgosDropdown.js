import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AlgosDropdown({algo,setAlgo}) {
    const classes = useStyles();
    

    const handleChange = (event) => {
        setAlgo(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel id="demo-simple-select-outlined-label">Algorithm</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={algo}
                onChange={handleChange}
                label="Algorithm"
            >
                
                <MenuItem value="Bubble Sort">Bubble Sort</MenuItem>
                <MenuItem value="Selection Sort">Selection Sort</MenuItem>
                <MenuItem value="Merge Sort">Merge Sort</MenuItem>
                <MenuItem value="Insertion Sort">Insertion Sort</MenuItem>
                <MenuItem value="Quick Sort">Quick Sort</MenuItem>
            </Select>
        </FormControl>
    )
}
