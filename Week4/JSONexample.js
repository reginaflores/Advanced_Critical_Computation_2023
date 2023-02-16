
//Data:
//Search Query Manually to download JSON
//https://serpapi.com/playground?q=chicana&tbm=isch&ijn=0


//Note: JSON URL
//https://serpapi.com/search.json?engine=google&q=chicana&google_domain=google.com&tbm=isch&ijn=0&gRecaptchaResponse=03AFY_a8WWW4HRxF7Gcv17tQNB1Ut-DFL9SxiSEqACRsLHxH9OYPgm1lXpxIp8dCyKs1Psct3JV10xwN4aM-2d1YlHiJHr1aFluAo1yr2GdpfkI3c6dO2DjfFjGLgCpMg9KEjov3i3D53A9LJ_ZbeoC229pgPtpasMFgI2GDKZBCoBI1v7j-dKjFYB8wm0CCaISgUYPEwAVOjH2CYyqOosSR1HRMT5_BHoOLff_8FMq5sfpwHMrA71tkvIWlS83n62NgzsCRstsXD8xOLB1uaAx3pLgIyPKDo9KgJCXJ6Ch_qfy3Xi-un7a_3Ncfw2t31uAl8z_7IdcBx6ijQ_mH8_Lw4VwRGumeHEBRAmTAFYWDqpgvGXdaK5Xxo5pWC6aefvDQcxgxIUajVRU4anima83_0x0ZWIfLBi0NlCe-SfCXLeo1ELZd2Lkp98P8IkvXw1vhdITkjJUPlzZImx8h1PFow76lefBEQw81hdbVJSEh4ufILAgyB2d1cpswssozEiSJJATKqsi4mcu2qUKKfywquIdo1juNd7dLKpnTPb3Dz07avu2zpREWsnI3srRqODaErtvz4pHpvn-YtPzl9O2jsftOWTYi90ow



let myData; 
let picArr = [];

function preload(){
    myData = loadJSON('data.json');
  }

  function setup() {
    noCanvas();
  for(let i=0; i<myData.images_results.length; i++){
    picArr.push(createImg(myData.images_results[i].thumbnail));
  }
}



