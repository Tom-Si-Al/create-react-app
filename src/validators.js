export const isEmailValid = (email) => {
  if (email.includes("@")  ){
    return true
  } 
  return false
}