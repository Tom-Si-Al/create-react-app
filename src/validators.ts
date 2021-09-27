export const isEmailValid = (email: string): boolean => {
  if (email.includes("@")  ){
    return true
  } 
  return false
}