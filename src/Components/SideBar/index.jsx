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
import * as Icons from '@mui/icons-material'; // ✅ importo todos los íconos dinámicamente
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';

export default function Sidebar({ data }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
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
        borderRadius: 2,
      }}
    >
      {data?.content?.map((item, index) => {
        const IconComponent = Icons[item.icon]; // ✅ buscar el icono por nombre
        return (
          <ListItem
            key={index}
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
              to={item.section.toLowerCase()}
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
                {IconComponent ? <IconComponent /> : null}
              </ListItemIcon>
              <ListItemText
                primary={item.section}
                sx={{ display: { xs: 'block', sm: 'block' } }}
              />
            </Link>
          </ListItem>
        );
      })}
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
                backgroundColor: 'rgba(0,0,0,0.05)',
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
