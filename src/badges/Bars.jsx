
import spots from "../spots";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Bars() {
  return (
    <>
      {/* <h3 style={{marginLeft:"20px"}}>Beach Houses</h3> */}
      <div className="cards">
        {spots.items.map((res) => (
          <Card key={res.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 160 }}
              image={res.image}
              title="Product Image"
              style={{ width: "500px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                <LocationOnIcon />
                {res.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {res.count}  various locations
                <br />
                {res.descr}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant='outlined'>View More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}