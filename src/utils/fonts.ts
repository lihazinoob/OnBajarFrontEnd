// defining the fonts for the application
import NextFont from "next/font/local"; 

export const lufga = NextFont({ 
  src:[
    {
      path:"../../public/fonts/Lufga-Regular.woff2",
      weight:"400",
      style:"normal"
    },
    
  ],
  variable: "--font-lufga",
});
