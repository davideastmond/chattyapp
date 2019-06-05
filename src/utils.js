module.exports = {
  generateRandomId: function generateRandomString() {
    /** This function generates a string of random alpha numeric characters */
    const validChars = "abcdefghijklmnopqrstuvwxyz1234567890";
  
    let returnString = "";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * (validChars.length - 1 - 0) + 0);
      const shouldCap = Math.floor(Math.random() * (2 - 0) + 0);
        returnString += validChars[randomNumber];
    }
    return returnString.toUpperCase();
  }
}