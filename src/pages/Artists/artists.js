import { useState, useEffect } from "react";
import Axios from "axios";
import Artist from "./artistmodule";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Button,
  IconButton,
  Typography,
  Popper,
  Box,
  Dialog
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import Icon from "@mdi/react";
import { mdiCameraIris, mdiDotsVertical } from "@mdi/js";
import "./artist.css";

export default function Artists() {
  const [listOfArtists, setListOfArtists] = useState([]);
  const [filterarts, setfilterarts] = useState([]);
  const [arts, setArts] = useState([]);
  const [clicked, setclicked] = useState({
    isVisible : false,
    data : null
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const getArts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_FETCH}/arts`);
      const data = await res.data;
      console.log(data);
      setArts(data.data);
    } catch (err) {
      console.log(err);
    }
  };
 

  const sendRequest = async () => {
    try {
      const res = await Axios.get(`${process.env.REACT_APP_FETCH}/artists`);
      const resp = await res.data;
      console.log(resp);
      setListOfArtists(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
 

  useEffect(() => {
    getArts();
    getartsid(listOfArtists._id);
    sendRequest();
  }, []);
   function getartsid(_id) {
    const batte5 = arts?.filter((items) => items.artist._id === _id);
    setfilterarts(batte5);
    console.log(batte5);
    return batte5;
  
}

  return (
    <div className="myDiv">
      
      <div className="bg-img-artists">
        <div>
        <Dialog
          open={clicked.isVisible}
          onClose={() => {
            setclicked(!clicked.isVisible);
          }}
        >
          {clicked.isVisible && (
            <div className="dialog">
              <div>
                <button
                  className="xbtn"
                  onClick={() => {
                    setclicked(!clicked.isVisible);
                  }}
                >
                  x
                </button>
                {/* <img className="iimg" src={image} alt="artistimg" /> */}
              </div>
              {/* <h3 className="text">NAME:&ensp;{name}</h3>
              <h3 className="text">BIO:&ensp;{bio}</h3>
              <h3 className="text">DESCRIPTION:&ensp;{description}</h3> */}
            </div>
          )}
          <h2
            style={{
              textDecoration: "underline",
              margin: "5px 0px 0px 10px",
              color: "darkgoldenrod",
              font: " Times New Roman",
            }}
          >
            {/* {name}'s Arts */}
          </h2>
          <div>
            <div className="filtered Arts">
              {filterarts?.map((art, index) => {
                return (
                  <div key={index}>
                    <Link to="/artworks">
                      <img
                        className="filteredimages"
                        src={`${process.env.REACT_APP_FETCH}/${art.artimage}`}
                        alt=".."
                      />
                    </Link>
                    <h1 className="filteredtitle"> {art.arttitle}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </Dialog>
          <Container maxWidth="xl">
            <Grid container sx={{ margin: "2vh auto" }}>
              {listOfArtists?.map((artists) => {
                return (
                  <Grid item xs={14} sm={6} md={4} lg={4} xl={4} container
                  //  onClick={()=>{getartsid(artists._id)}}
                   >
                    <Popper open={open} anchorEl={anchorEl} >
                   <Box maxWidth={480} sx={{ border: 1, p: 2, bgcolor: "background.paper" ,margin:"0 80px 0 20px"}}>
                      <Typography><b>Name:</b>{artists.name}</Typography>
                      <Typography><b>Description:</b>{artists.description}</Typography>
                      <Typography><b>Bio:</b>{artists.bio}</Typography>
                </Box>
             </Popper>
                    <Card sx={{ margin: "2vh 1vw" }}>
                      <CardHeader
                        sx={{ display: "flex", alignItems: "center" }}
                        avatar={
                          <Avatar
                            src={`${process.env.REACT_APP_FETCH}/${artists.image}`}
                            sx={{ bgcolor: red[500], width: 50, height: 50 }}
                            aria-label="recipe"
                          >
                            {artists.name.slice(0, 1)}
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={handleClick}
                          >
                            <Icon
                              path={mdiDotsVertical}
                              size={1.3}
                              color="#222"
                            />
                          </IconButton>
                        }
                        title={
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {artists.name}
                          </Typography>
                        }
                      />
                      <Box
                        sx={{
                          display: "flex",
                          gap: 0.5,
                          mb: 0.5,
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          {filterarts?.slice(0,3)?.map((items,index)=>{
                            return(
                              <CardMedia
                              component="img"
                              height="150"
                              image= {`${process.env.REACT_APP_FETCH}/${items.artimage}`}
                            />
                            )
                          })}
                          
                        </Box>
                        {/* <Box sx={{ display: "flex" }}>
                          <CardMedia
                            component="img"
                            height="150"
                            image="https://images.pexels.com/photos/3280524/pexels-photo-3280524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <CardMedia
                            component="img"
                            height="150"
                            image="https://images.pexels.com/photos/2158469/pexels-photo-2158469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          />
                        </Box> */}
                      </Box>
                      {/* <Box
                        sx={{
                          display: "flex",
                          gap: 0.5,
                          justifyContent: "space-between",
                        }}
                      > */}
                        {/* <Box sx={{ display: "flex" }}>
                          <CardMedia
                            component="img"
                            width="100%"
                            image="https://images.pexels.com/photos/33158/leaves-fall-colors-rainbow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          />
                        </Box> */}
                        {/* <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <CardMedia
                            component="img"
                            width="100%"
                            image="https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          />
                        </Box> */}
                      {/* </Box> */}
                      <Box
                        sx={{
                          bgcolor: grey[100],
                          p: 3,
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Icon
                            path={mdiCameraIris}
                            title="Camera"
                            size={1.3}
                          />
                          <Typography
                            sx={{ ml: 1, fontWeight: "bold" }}
                            variant="span"
                          >
                            {arts.length}
                          </Typography>
                        </Box>
                        <Button variant="contained" color="success"onClick={
                          ()=>setclicked(
                            {
                            isVisible:!clicked.isVisible,
                            data:artists._id
                            })}>
                          Visit now
                        </Button>
                      </Box>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{ mb: 1 }}
                          component="div"
                        >
                          Art rolls
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{ fontWeight: "bold" }}
                          component="div"
                        >
                          {artists.bio.slice(0,80)}...
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {artists.description.slice(0,100)}...
                        </Typography>
                      </CardContent>
                      {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
        {/* <div className="artistlists">
          {filterArtists?.map((artist, index) => {
            return (
              <Artist
                arts={arts}
                key={index}
                _id={artist._id}
                name={artist.name}
                image={`${process.env.REACT_APP_FETCH}/${artist.image}`}
                bio={artist.bio}
                description={artist.description}
              />
            );
          })}
        </div>

        <div className="artistlists">
          {listOfArtists?.map((artist, index) => {
            return (
              <Artist
                arts={arts}
                key={index}
                _id={artist._id}
                name={artist.name}
                image={`${process.env.REACT_APP_FETCH}/${artist.image}`}
                bio={artist.bio}
                description={artist.description}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
