import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';

export default function Sidebar() {
  const navItems = [
    { text: 'Inicio', id: 'presentation', icon: <HomeIcon /> },
    { text: 'Habilidades', id: 'skills', icon: <CodeIcon /> },
    { text: 'Proyectos', id: 'projects', icon: <WorkIcon /> },
    { text: 'Educación', id: 'education', icon: <SchoolIcon /> },
    { text: 'Contacto', id: 'contact', icon: <MailIcon /> },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    console.log(open);

    setDrawerOpen(open);
  };

  const renderNavItems = (direction = 'row') => (
<List
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: direction,
    gap: direction === 'column' ? 2 : 0,
    flexGrow: 1,
    p: 2,
   // backgroundColor: direction === 'column' ? 'rgba(0, 0, 0, 0.4)' : 'none', // ✅ igual que el contenedor
   // backdropFilter: direction === 'column' ? 'blur(10px)' : 'none',
    
    borderRadius: 2, // opcional para estética
  }}
>
      {navItems.map((item) => (
        <ListItem
          key={item.text}
          sx={{
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: 'rgba(10, 32, 8, 0.93)',
              borderRadius: '30px',
            },
            p: 0,
          }}
        >
          <Link
            to={item.id}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleDrawer(false)} 
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'white',
              width: '100%',
              padding: '10px 16px',
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: '40px', textAlign: 'center' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ display: { xs: 'block', sm: 'block' } }}
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {/* Desktop Header */}
      {!isMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: '20%',
            width: '60%',
            height: '100px',
            backgroundColor: 'transparent',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            px: 2,
            zIndex: 1000,
          }}
        >
          {renderNavItems('row')}
        </Box>
      )}

      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              position: 'fixed',
              top: 16,
              left: 16,
              zIndex: 1300,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* ✅ Fondo desenfocado detrás del menú */}
          <AnimatePresence>
            {drawerOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  zIndex: 1200,
                }}
                onClick={toggleDrawer(false)}
              />
            )}
          </AnimatePresence>

          {/* Drawer sin fondo opaco */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            ModalProps={{ BackdropProps: { invisible: true } }}
            PaperProps={{
              sx: {
                backgroundColor: 'rgba(0,0,0,0.05)', // fondo semi-transparente del drawer
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: 'none',
                boxShadow: 'none',
              },
            }}
            sx={{ zIndex: 1300 }}
          >
            <Box sx={{ width: '100%', height: '100%', color: 'white' }}>
              {renderNavItems('column')}
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
}
