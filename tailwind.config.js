/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // system colors
        zari_default_white: "#FFFFFF",
        zari_default_black: "#161616",
        zari_primary: "#8F39D6",
        zari_input: "#3A2B4D",
        zari_danger: "#FF416E",

        // text colors
        // zari_default_white: '#FFFFFF', 위에 존재
        zari_txt_disabled: "#B8B8B8",
        zari_txt_primary: "#A356FB",
        zari_txt_place_holder: "#A191B3",
        zari_txt_danger: "#FF416E",
        zari_txt_warning: "#FAB402",
        zari_txt_success: "#00E577",

        // button colors 위에 있는건 비활성화
        zari_btn_disabled: "#5C5C5C",
        zari_btn_primary: "#8F39D6",
        zari_btn_danger: "#FF416E",

        zari_gradient_to: "#9731C7",
        zari_gradient_from: "#4D35E1",
      },
    },
  },
  plugins: [],
};
