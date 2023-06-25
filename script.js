//console.log("hello i am script file")
 

  let element = document.getElementById('time')
  //console.log(time)
  

  // setInterval(() =>{
  //   let hours = new Date().getHours()
  //   let minutes = new Date().getMinutes()
  //   let seconds = new Date().getSeconds()
  
  //   console.log(hours, minutes, seconds)
  
  //   let time = `${hours} : ${minutes} : ${seconds}`
  //   element.innerHTML = time//all inner html will be assigned to time here
  // }, 1000)

  //OPtimized code
  setInterval(() =>{
    let date = new Date()
    // let hours 
    // let minutes 
    // let seconds 
  
    // console.log(hours, minutes, seconds)
  
    let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    element.innerHTML = time//all inner html will be assigned to time here
  }, 1000)