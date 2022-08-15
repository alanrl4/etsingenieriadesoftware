import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Providers from "./components/Providers";
import { dp } from "./theme/utils";

export default function App() {
    return (
        <Providers>
            <AppBar elevation={0}>
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>
                        Gimnasio
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    height: dp(480),
                    padding: dp(24),
                    paddingBottom: dp(48),
                    bgcolor: "primary.main",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: dp(24),
                        maxWidth: "50%",
                    }}
                >
                    <Typography color="white" variant="h3">
                        Bievenido
                    </Typography>
                    <Typography color="white" variant="h6">
                        Inscribete ahora para tener todos los beneficios
                    </Typography>
                    <Box sx={{ display: "flex", gap: dp(8) }}>
                        <Button color="whitePrimary" size="large">
                            Crear cuenta
                        </Button>
                        <Button color="whitePrimary" size="large" variant="outlined">
                            Iniciar sesión
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Providers>
    );
}
