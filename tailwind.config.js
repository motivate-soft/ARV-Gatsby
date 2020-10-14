// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      textColor: {
        'primary': '#828281',
        'secondary': '#707070',
        'third': '#595957',
        'black': '#313131'
      },
      backgroundColor: {
        'grey': '#E8E7E2',
        'primary': '#F7F7EF',
        'second': '#595957',
        'third': '#2B2B2A',
        'yellow': '#FFEB55',
        'yellow-hover': '#EFD512',
      },
      fontFamily: {
        'lora-regular': ['LoraRegular'],
        'lora-bold': ['LoraBold'],
        'lato-regular': ['LatoRegular'],
      },
      borderRadius: {
        'large': '15px'
      }
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
