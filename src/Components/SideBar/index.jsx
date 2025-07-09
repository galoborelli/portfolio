import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: { xs: '60px', sm: '200px' },
        backgroundColor: 'transparent',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: 2,
        zIndex: 1000,
      }}
    >
      <List>
        {[
          { text: 'Habilidades', icon: <CodeIcon /> },
          { text: 'Proyectos', icon: <WorkIcon /> },
          { text: 'Educación', icon: <SchoolIcon /> },
          { text: 'Contacto', icon: <MailIcon /> },
        ].map((item) => (
          <ListItem
            key={item.text}
            button
            sx={{
                marginTop: { lg:"30%" },
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '30px',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
