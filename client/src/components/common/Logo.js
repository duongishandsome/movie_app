import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
    const theme = useTheme();
    return (
        <Typography
            fontWeight="700"
            fontSize="1.7rem"
            component={Link}
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            Movie<span style={{ color: theme.palette.primary.main }}>Chill</span>
        </Typography>
    );
};

export default Logo;
