export const genColor = (color, [main, onMain, container, onContainer]) => {
    const o = {
        [color]: {
            main,
        },
    };

    if (onMain) o[color].contrastText = onMain;
    if (container) {
        o[color + "Container"] = { main: container };
        if (onContainer) o[color + "Container"].contrastText = onContainer;
    }

    return o;
};

export const colorPalette = (palette) => {
    const o = {};

    Object.keys(palette).forEach((key) => {
        const c = palette[key];
        Object.assign(o, genColor(key, typeof c === "string" ? [c] : c));
    });

    return o;
};

export const dp = (n) => {
    return `${n / 16}rem`;
};
