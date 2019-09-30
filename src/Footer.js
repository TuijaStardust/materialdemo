import React from 'react';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    footer: {
        background:"lightgrey",
    },
    form: {
        width:250,
        background:"lightyellow",
        display:"block",
        padding:20,
        margin:10,
        borderRadius:"5%"
    },
    textfield: {

    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <form className={classes.form}>
                <TextField label="Firstname" type="label" fullWidth margin="normal" />
                <TextField label="Lastname" type="label" fullWidth margin="normal" />
                <TextField label="Email" type="email" fullWidth margin="normal" />
                <TextField label="Phone" type="phone" fullWidth variant="outlined" margin="dense" />
                <TextField label="Password" type="password" variant="filled" fullWidth required margin="dense" />
                <FormControl>
                    <RadioGroup aria-label="gender" name="gender1">
                        <FormControlLabel value="female" control={<Radio />} label="Female" fullWidth/>
                        <FormControlLabel value="male" control={<Radio />} label="Male" fullWidth/>
                        <FormControlLabel value="other" control={<Radio />} label="Other" fullWidth/>
                    </RadioGroup>
                        <FormControlLabel value="end" control={<Checkbox  color="primary" />} label="Subscribe newsletter" labelPlacement="end" />
                        <FormControlLabel value="end" control={<Checkbox  color="primary" />} label="So something!" labelPlacement="end" />
                </FormControl>
                <Button size="small" variant="primary" fullWidth >Submit</Button>

            </form>
        </footer>
    )
}

export default Footer;