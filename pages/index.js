import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TemplateDefault from "../src/templates/Default";
import Card from "../src/components/Card";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    marginTop: 50,
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    marginTop: 20,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
        >
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase placeholder="Ex.: Iphone 12 com garantia" fullWidth />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth="lg" className={classes.cardGrid}>
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="textPrimary"
        >
          Destaques
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={"https://source.unsplash.com/random?a=2"}
              title="Produto X"
              subtitle="R$ 60,00"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={"https://source.unsplash.com/random?a=2"}
              title="Produto X"
              subtitle="R$ 60,00"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={"https://source.unsplash.com/random?a=2"}
              title="Produto X"
              subtitle="R$ 60,00"
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
};

export default Home;
