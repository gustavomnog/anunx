import { Button, Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import TemplateDefault from "../../src/templates/Default";
import Card from "../../src/components/Card";

const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: "30px auto",
    display: "block",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Meus Anúncios
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonAdd}
        >
          Publicar novo anúncio
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              image={"https://source.unsplash.com/random?a=2"}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              image={"https://source.unsplash.com/random?a=2"}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              image={"https://source.unsplash.com/random?a=2"}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              image={"https://source.unsplash.com/random?a=2"}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
