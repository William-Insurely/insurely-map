const errorhandler = (zipcode) => {
  if(Number(zipcode) < 0){
    zipcode = 0
  }
  let isError
  let errorMesseges
  switch(Number(zipcode)) {
    case  0:
      isError = true
      errorMesseges = 'Felaktigt Postnummer'
      break;

    // case y:
    //   // code block
    //   break;
    default:
       isError = false
       errorMesseges = false
  }

return {isError, errorMesseges}
}

export default errorhandler