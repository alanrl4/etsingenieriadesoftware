import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Providers from "./components/Providers";
import { dp } from "./theme/utils";

export default function App() {
    return (
        <Providers>
            <AppBar elevation={0} color="primary" variant="outlined">
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>
                        Gimnasio
                    </Typography>
                    <Box sx={{ display: "flex", gap: dp(8) }}>
                        <Button color="primary">Instructores</Button>
                        <Button color="primary">Actividades deportivas</Button>
                        <Button color="primary">Horarios</Button>
                        <Button color="primary">Accede / Registrate</Button>
                    </Box>
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
                        <Button color="inversePrimary" size="large">
                            Crear cuenta
                        </Button>
                        <Button
                            color="inversePrimary"
                            size="large"
                            variant="outlined"
                        >
                            Iniciar sesión
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ height: dp(320) }}>
                Primeras cuatro actividades. Boton de ver mas
            </Box>
            <Box sx={{ height: dp(320) }}>
                Horario resumido de la semana. Boton de ver mas
            </Box>
            <Box sx={{ height: dp(320) }}>Instructores. Boton de ver mas</Box>
            <Box sx={{ height: dp(320) }}>Footer?</Box>
        </Providers>
    );
}
