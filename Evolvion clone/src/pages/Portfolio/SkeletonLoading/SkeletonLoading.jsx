import React from 'react'
import Skeleton from '@mui/material/Skeleton';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f3f3f3', // Your custom dark color
                },
            },
        },
    },
});

export default function SkeletonLoading({ length, height, width, br }) {

    return (
        <ThemeProvider theme={theme}>
            {Array.from({ length: length ? length : 1 }).map((_, i) => (
                <div
                    style={{
                        height,
                        width,
                    }}
                    key={i}
                >
                    <Skeleton variant="rectangular" width="100%" height="100%" style={{ borderRadius: br }} />
                </div>
            ))}
        </ThemeProvider>
    )
}
