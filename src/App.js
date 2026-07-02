import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import bgImage from './assets/banner-bg.jpg';
import { Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        bgcolor: "#090d16",
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 45%),
          radial-gradient(circle at 85% 75%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
          linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 45px 45px, 45px 45px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Banner />
    </Box>
  );
}

export default App;
