import React from 'react'
import {useStyle} from './HomeStyle';
import { Grid } from '@material-ui/core';
import {Button} from '@material-ui/core';
import { MdModeEditOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineCheck } from "react-icons/md";
import {Data} from './DataApi';
import {PendingData} from './DataApi';
import { Link } from 'react-router-dom';
export const Home = () => {
    const classes = useStyle();
    return (
         <div>
                                            {/*Totle Data Blocks */}
           
            <Grid container className={classes.root}>
                <Grid item sm={3} style={{}}><Grid className={classes.totleBlock}><span>Totle sold</span><span>700Kg</span></Grid></Grid>
                <Grid item sm={3} style={{}}><Grid className={classes.totleBlock}><span>Totle Earned</span><span>Rs:15000</span></Grid></Grid>
                <Grid item sm={3} style={{}}><Grid className={classes.totleBlock}><span>Pending Payments</span><span>Rs:25000</span></Grid></Grid>
                <Grid item sm={3} style={{}}><Grid className={classes.totleBlock}><span>Price per Unit</span><span>Rs:190</span></Grid></Grid>
            </Grid>

                                            {/* Current and Pending Customers and their */}
            
            <Grid container spacing={1} style={{marginTop:"20px",}}>
                <Grid container item xs={6} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"10px"}}>
                <Grid container style={{display:"flex",flexDirection:"row",alignItems:"center",margin:"10px"}}>
                        <h6 style={{flex:1}}>Current Customers</h6><Button variant="outlined" color="primary" startIcon={<MdAdd/>}>Add New</Button>
                </Grid>
                <Grid container className={classes.dataHeading}>
                         <Grid item xs={1}>ID</Grid>
                         <Grid item xs={3}>Name</Grid>
                         <Grid item xs={2}>Phone</Grid>
                         <Grid item xs={2}>Car No</Grid>
                         <Grid item xs={1}>edit</Grid>
                         <Grid item xs={1}>Delete</Grid>
                </Grid>
                <Grid container className={classes.dataTable}>
                    {
                        Data.map(val=>{
                            return(
                        
                         <Grid container className={classes.dataRow}>
                         
                         <Grid item xs={1}>{val.id}</Grid>
                         <Grid item xs={3}>{val.name}</Grid>
                         <Grid item xs={2}>{val.phone}</Grid>
                         <Grid item xs={2}>{val.carNumber}</Grid>
                         <Grid item xs={1}>
                         <MdModeEditOutline className={classes.editIcon}/>
                             </Grid>
                         <Grid item xs={1}>
                         <MdDelete className={classes.deleteIcon}/>
                             </Grid>
                             
                         </Grid>
                        
                                )
                        })
                    }
                 </Grid>
 
                </Grid>
                <Grid container item xs={6} style={{    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",}}>
                <Grid container style={{display:"flex",flexDirection:"row",alignItems:"center",margin:"10px"}}>
                        <h6 style={{flex:1}}>Pending Orders</h6><Button variant="outlined" color="primary" startIcon={<MdAdd/>}>Add New</Button>
                </Grid>
                <Grid container className={classes.dataHeading}>
                        <Grid item xs={1}>ID</Grid>
                        <Grid item xs={3}>Name</Grid>
                        <Grid item xs={2}>carW</Grid>
                        <Grid item xs={2}>Date</Grid>
                        <Grid item xs={1}>edit</Grid>
                        <Grid item xs={2}>Conform</Grid>
                        <Grid item xs={1}>Delete</Grid>
                    </Grid>
                <Grid container className={classes.dataTable}>
                   {
                       PendingData.map(val=>{
                           return(
                        <Grid container className={classes.dataRow}>
                        <Grid item xs={1}>{val.id}</Grid>
                        <Grid item xs={3}>{val.name}</Grid>
                        <Grid item xs={2}>{val.carWeight}</Grid>
                        <Grid item xs={2}>{val.date}</Grid>
                        <Grid item xs={1}>
                        <MdModeEditOutline className={classes.editIcon}/>
                        </Grid>
                        <Grid item xs={2}>
                        <MdOutlineCheck className={classes.conformIcon}/>
                        </Grid>
                        <Grid item xs={1}>
                        <MdDelete className={classes.deleteIcon}/>
                        </Grid>
                        </Grid>)
                       })
                   }
                </Grid>
                </Grid>
             
                
            </Grid>
         </div>
    )
}
