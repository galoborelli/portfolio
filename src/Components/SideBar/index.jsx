import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';

export default function Sidebar() {
  const navItems = [
    { text: 'Inicio', id: 'presentation', icon: <HomeIcon /> },
    { text: 'Habilidades', id: 'skills', icon: <CodeIcon /> },
    { text: 'Proyectos', id: 'projects', icon: <WorkIcon /> },
    { text: 'Educación', id: 'education', icon: <SchoolIcon /> },
    { text: 'Contacto', id: 'contact', icon: <MailIcon /> },

  ];

  return (
    <Box
      id="sidebar"
      sx={{
        position: 'fixed',
        top: 0,
        left: "18%",
        width: '60%',
        height: '100px',
        backgroundColor: 'transparent',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        px: 2,
        zIndex: 1000,
      }}
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
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
                backgroundColor: 'rgba(255,255,255,0.1)',
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
                sx={{ display: { xs: 'none', sm: 'block' } }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
