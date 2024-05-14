/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.{html, js}'],
  theme: {
    extend: {
      fontSize: {
        xxs: [10, 1],
      },
      colors:{
        'cool-dark' : '#0F0D0D',
        'white-eggshell': '#F1F1F1',
        'sub-grey': '#151515',
        'my-green': '#3b9244',
        'resume-green': '#226D2A',
        'skill-grey': '#303030',
        'hover-grey': '#1E1E1E',
        'project-white': '#E4E4E4',
        'widget-black': '#181818'
      },
      fontFamily:{
        Sofia: ["Sofia Sans"]
      },
      boxShadow: {
        'about-profile': '-10px 10px 0px rgba(17, 42, 20, 100)',
        'about-inv-profile': '10px 10px 0px rgba(17, 42, 20, 100)',
        'about-info-pre': 'inset 0 0em 0px 0px #F1F1F1',
        'about-info': 'inset 6em 0px 0px 0px #F1F1F1',
        'main': '10px 0px 0px rgba(17, 42, 20, 100)',
      },
      animation:{
        'popDown': 'popDown 0.5s ease-in-out forwards',
        'typingWait': 'typingWait 1.5s steps(1) infinite',
      },
      keyframes:{
        popDown:{
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'}
        },
        typingWait:{
          '50%': {opacity: 0},
        }
      },
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".removeScrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".removeScrollbar": {
          "-ms-overflow-style": "none",  
          "scrollbar-width": "none",  
        },

      };
      addUtilities(newUtilities);
    }
      
    

  ],
}

