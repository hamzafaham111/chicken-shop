import { makeStyles } from "@material-ui/core";
export const useStyle = makeStyles(theme=>({
    heading:{
        fontSize:"12px",
        fontWeight:"bold", 
        textAlign:"center",
        padding:"5px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        marginBottom:"5px",
        background:"white",
        marginTop:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    OrderData:{
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        padding:"15px 5px 15px 5px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    deleteIcon:{
        background:"red",
        width:"25px",
        height:"25px",
        padding:"3px",
        borderRadius:"50%",
        color:"white",
        cursor:"pointer",
        "&:hover":{
          boxShadow: "rgba(0, 0, 0, 0.16) 4px 4px 4px",   
        height:"28px",
        width:"28px",
        }
    },
    conformIcon:{
        background:"green",
        width:"25px",
        height:"25px",
        padding:"3px",
        borderRadius:"50%",
        color:"white",
        cursor:"pointer",
        "&:hover":{
        boxShadow: "rgba(0, 0, 0, 0.16) 4px 4px 4px",   
        height:"28px",
        width:"28px",
        }
    },
    editIcon:{
        background:"blue",
        width:"25px",
        height:"25px",
        padding:"3px",
        borderRadius:"50%",
        color:"white",
        cursor:"pointer",
        "&:hover":{
          boxShadow: "rgba(0, 0, 0, 0.16) 4px 4px 4px",   
        height:"28px",
        width:"28px",
        }
    },
}))
