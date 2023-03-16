import { Typography, useTheme } from '@mui/material';

const Logo = () => {
    const theme = useTheme();
    return (
        <Typography>
            Movie<span style={{ color: theme.palette.primary.main }}>Chill</span>
        </Typography>
    );
};

export default Logo;
