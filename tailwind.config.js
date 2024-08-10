module.exports = {

    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
 
     darkMode: false,
 
     theme: {

        // sm:w-4/6

        screens:{
            'xs': '240px',
            'sm': '420px',
            'md': '640px',  //@media (min-width:640px){}
            'lg': '768px',  //@media (min-width:768px){}
            'xl': '1024px', //@media (min-width:1024px){}
            '2xl': '1280px', //@media (min-width:1280px){}
            '4xl': '1536px', //@media (min-width:1536px){}
        },
 
       extend: {
        inset:{
            '17': '68px',
            '26': '104px',
        }
       },
 
     },
 
     variants: {
 
       extend: {},
 
     },
 
     plugins: [],
 
   }