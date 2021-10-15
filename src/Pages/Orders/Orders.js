import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyle } from './OrdersStyle'
import {Button} from '@material-ui/core';
import { MdAdd } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineCheck } from "react-icons/md";

export const Orders = () => {
    const classes = useStyle();
    return (
        <div style={{width:"90vw",margin:"auto"}}>
            <Grid container style={{margin:"auto",background:"white"}}>
                <Grid container className={classes.heading}>
                    <Grid item xs={2}>Customer</Grid>
                    <Grid item xs={2}>Contact</Grid>
                    <Grid item xs={5}>Address</Grid>
                    <Grid item xs={1}>Orders</Grid>
                    <Grid item xs={1}>Payment Done</Grid>
                    <Grid item xs={1}>Remaning Payments</Grid>
                </Grid>
                <Grid container className={classes.OrderData}>
                    <Grid item xs={2}>Hamza Faham</Grid>
                    <Grid item xs={2}>03169650686</Grid>
                    <Grid item xs={5}>Maini swabi near government heigh school maini</Grid>
                    <Grid item xs={1}>17</Grid>
                    <Grid item xs={1}>75000</Grid>
                    <Grid item xs={1}>25000</Grid>
                </Grid>
            </Grid>


            <Grid container style={{margin:"auto",marginTop:"20px",background:"white"}} >
                <Grid container item xs={6} style={{  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"10px"}}>
                <Grid container style={{display:"flex",flexDirection:"row",alignItems:"center",margin:"10px"}}>
                        <h6 style={{flex:1}}>Orders</h6><Button variant="outlined" color="primary" startIcon={<MdAdd/>}></Button>
                </Grid>
                <Grid container className={classes.heading}>
                    <Grid item xs={2}>ID</Grid>
                    <Grid item xs={2}>Weight</Grid>
                    <Grid item xs={2}>Payments</Grid>
                    <Grid item xs={2}>conform</Grid>
                    <Grid item xs={2}>Edit</Grid>
                    <Grid item xs={2}>Delete</Grid>
                   
                   

                </Grid>
                <Grid container className={classes.OrderData}>
                    <Grid item xs={2}>1</Grid>
                    <Grid item xs={2}>2000</Grid>
                    <Grid item xs={2}>800700</Grid>
                    <Grid item xs={2}><MdOutlineCheck className={classes.conformIcon}/></Grid>
                    <Grid item xs={2}><MdModeEditOutline className={classes.editIcon}/></Grid>
                    <Grid item xs={2}><MdDelete className={classes.deleteIcon}/></Grid>
                </Grid>
                </Grid>
                <Grid container item xs={6} style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"10px"}}>
                <Grid container style={{display:"flex",flexDirection:"row",alignItems:"center",margin:"10px"}}>
                        <h6 style={{flex:1}}>Payments</h6><span>Date: 16-4-2021</span>
                </Grid>
                <Grid container className={classes.heading}>
                    <Grid item xs={1}>ID</Grid>
                    <Grid item xs={2}>Weight</Grid>
                    <Grid item xs={2}>Payments</Grid>
                    <Grid item xs={3}>Date</Grid>
                    <Grid item xs={2}>Report</Grid>
                    <Grid item xs={1}>Edit</Grid>
                    <Grid item xs={1}>Delete</Grid>
                </Grid>
                <Grid container className={classes.OrderData}>
                    <Grid item xs={1}>1</Grid>
                    <Grid item xs={2}>2000</Grid>
                    <Grid item xs={2}>800700</Grid>
                    <Grid item xs={3}>12-2-2021</Grid>
                    <Grid item xs={2}>Done</Grid>
                    <Grid item xs={1}><MdModeEditOutline className={classes.editIcon}/></Grid>
                    <Grid item xs={1}><MdDelete className={classes.deleteIcon}/></Grid>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
