/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundcolor11: "rgb(65, 154, 255)",
        bordercolor1: "#eee",
        backgroundcolor12: "#d1585842",
        backgroundcolor10: "red",
        backgroundcolor9: "rgb(34, 197, 94)",
        backgroundcolor8: "rgb(210, 244, 223)",
        backgroundcolor7: "rgb(245, 158, 11)",
        backgroundcolor6: "rgb(253, 236, 206)",
        backgroundcolor5: "rgb(0, 117, 255)",
        backgroundcolor13: "#5ca6fa54",
        backgroundcolor4: "rgb(204, 227, 255)",
        backgroundcolor3: "#0075ff",
        backgroundcolor2: "#eee",
        backgroundcolor1: "#f1f5f9",
        choosecolor1: "#f6f6f6",
        hovercolor1: "#ffffff"
      },
      gridTemplateColumns: {
        'parent': 'minmax(190px, 250px) 1fr',
        'parentsm': '60px 1fr',
        'responsive-table': 'repeat(1, minmax(200px, 1fr))',
        'containermd': 'repeat(auto-fill, minmax(500px, 1fr))',
        'files': 'repeat(auto-fit, minmax(230px, 1fr))',
        'profile': 'repeat(auto-fill, minmax(250px, 1fr))',
        "fsd": 'minmax(100px, 1fr)',
        "fsd3": 'repeat(3, minmax(30%, 1fr))',
        "profilec": '30% 68%',
        "files1": '1fr 250px',
      },
      gridTemplateRows: {
        'parent': '100px 1fr',
      }, boxShadow: {
        'aside': '0 0 10px rgba(0, 0, 0, 0.144)',
      }, zIndex: {
        '2': '2',
        '42': '42',
      },
      fontFamily: {
        Open: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

