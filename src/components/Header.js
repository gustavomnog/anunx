import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import Link from "next/link";
import { AccountCircle } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6,
  },
  divider: {
    margin: "8px 0",
  },
}));

const Header = () => {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false);
  const classes = useStyles();

  const openUserMenu = Boolean(anchorUserMenu);

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Anunx
            </Typography>
            <Link href="/user/publish" passHref>
              <Button color="inherit" variant="outlined">
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton
              color="secondary"
              onClick={(e) => setAnchorUserMenu(e.currentTarget)}
            >
              {true === false ? <Avatar src="" /> : <AccountCircle />}
              <Typography
                variant="subtitle2"
                color="secondary"
                className={classes.userName}
              >
                Gustavo M Nogueira
              </Typography>
            </IconButton>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
