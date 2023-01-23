import Axios from "axios";
import { useEffect, useState } from "react";
import Art from "./art";
import "../HomeBody/art";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { flexbox } from "@mui/system";

export default function ArtContainer() {
  const [listOfArt, setListOfArt] = useState([]);

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  
 const GetArts =async () => {
  try{
  const res =await Axios.get(`${process.env.REACT_APP_FETCH}/arts`)
  const response =await res.data;
  setListOfArt(response.slice(0,6));
  }catch(err){
    console.log(err);
  }
 }

  useEffect(() => {
  GetArts();
  }, []);


  return (
    <>
      {/* <div className="cards">
        {listOfArt?.map((art) => {
          return (
            <Art
              key={art._id}
              arttitle={art.arttitle}
              artimage={`${process.env.REACT_APP_FETCH}/${art.artimage}`}
              artprice={art.artprice}
              artdesc={art.artdesc}
            />
          );
        })}
      </div> */}
      {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {listOfArt?.map((art, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <div>xs=2</div>
          </Grid>
        ))}
      </Grid>
    </Box> */}
    <Typography
    align="center"
    color="GrayText"
     gutterBottom 
     variant="h5" 
     component="div"
     sx={{margin:"20px",
     }}>
      Latest Arts
    </Typography>  
    <Grid margin={1}  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           
     {listOfArt?.map((art, index) => (
        <Grid item xs={4} md={4} sx={{backgroundColor:"rgb(225, 228, 232)"}}>
                 
      <Card sx={{
        margin:"0 auto",
        maxWidth: 355 ,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgb(242, 243, 245)"}}>
      <CardActionArea>
        <CardMedia
         sx={{objectFit:"contain",marginTop:"8px"}}
          component="img"
          height="190"
          image={`${process.env.REACT_APP_FETCH}/${art.artimage}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography component="div" align="inherit"noWrap>
          <Typography gutterBottom variant="h5" component="div">
            {art.arttitle}
          </Typography>
          <Typography gutterBottom variant="h7">
            {art.artprice}
          </Typography>
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
        ))}
</Grid>
    </>
  );
}
