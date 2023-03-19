import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AuthModal from '../common/AuthModal';
import Footer from '../common/Footer';
import GlobalLoading from '../common/GlobalLoading';
import Topbar from '../common/Topbar';

const MainLayout = () => {
    return (
        <>
            {/* global_loading  */}
            <GlobalLoading />
            {/* global_loading */}

            {/* login modal */}
            <AuthModal />
            {/* login modal */}
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
