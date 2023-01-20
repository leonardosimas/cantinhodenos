import { createTheme, ThemeType } from "@nextui-org/react";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";

const themeType: ThemeType = "light";

const projectTheme = createTheme({
  type: themeType,
  theme: {
    colors,
    fonts,
  },
});

export default projectTheme;
