import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import GlobalLoading from '../common/GlobalLoading';
import Topbar from '../common/Topbar';

const MainLayout = () => {
    return (
        <>
            {/* global loading  */}
            <GlobalLoading />
            {/* global loading */}
            <Box display="flex" minHeight="100vh">
                {/* header */}
                <Topbar />
                {/* header */}

                <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
                    <Outlet />
                </Box>
            </Box>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default MainLayout;
