//theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            //dark mode
            // palette values for dark mode
            primary: {
              main: "#fa057b",
            },
            mono: {
              main: "#fff",
              sub: "#000",
            },
            grays: {
              dark: "#333",
              main: "#555",
              mediumMain: "#777",
              medium: "#999",
              light: "#ccc",
            },
            background: {
              main: "#000",
            },
          }
        : {
            //light mode
            // palette values for dark mode
            primary: {
              main: "#fa057b",
            },
            mono: {
              main: "#000",
              sub: "#fff",
            },
            grays: {
              dark: "#333",
              main: "#555",
              mediumMain: "#777",
              medium: "#999",
              light: "#ccc",
            },
            background: {
              main: "#fff",
            },
          }),
    },
  };
};
