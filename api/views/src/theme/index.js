import { createTheme } from "@mui/material";
import { colorPalette, dp } from "./utils";

const lightColors = {
    ...colorPalette({
        primary: ["#2640ff", "#ffffff", "#dfe0ff", "#000a63"],
        whitePrimary: ["#ffffff", "#2640ff", "#000a63", "#dfe0ff"],
        secondary: ["#5b5d72", "#ffffff", "#e0e0f9", "#3a0b00"],
        tertiary: ["#8f437c", "#ffffff", "#ffd7ef", "#3a0031"],
        error: ["#ba1a1a", "#ffffff", "#ffdad6", "#410002"],
        transparent: ["#ba1a1a00", "#1a1c1e", "#ffdad600", "#41000200"],
    }),
    background: {
        default: "#fffbff",
        paper: {
            default: "#fffbff",
            variant: "#e3e1ec",
        },
    },
    outline: {
        main: "#777680",
    },
    text: {
        primary: "#1b1b1f",
        secondary: "#46464f",
    },
    mode: "light",
};

const theme = createTheme({
    palette: {
        ...lightColors,
        action: {
            hoverOpacity: 0.08,
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
    },
    typography: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    components: {
        MuiIcon: {
            defaultProps: {
                baseClassName: "material-symbols-rounded",
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                variant: "contained",
            },
            styleOverrides: {
                root: ({ theme, ownerState }) => ({
                    textTransform: "none",
                    borderRadius: dp(24),
                    paddingLeft: ownerState.size === "large" ? dp(28) : dp(24),
                    paddingRight: ownerState.size === "large" ? dp(28) : dp(24),
                    height:
                        ownerState.size === "large"
                            ? dp(46)
                            : ownerState.size === "small"
                            ? dp(32)
                            : dp(40),
                    fontSize:
                        ownerState.size === "large"
                            ? dp(18)
                            : ownerState.size === "small"
                            ? dp(10)
                            : dp(14),
                    lineHeight: dp(20),
                    fontWeight: 500,
                }),
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                zIndex: -1000,
            },
        },
    },
});

export default theme;
