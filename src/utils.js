module.exports = {
  generateRandomId: function generateRandomString() {
    /** This function generates a string of random alpha numeric characters */
    const validChars = "abcdefghijklmnopqrstuvwxyz1234567890";
  
    let returnString = "";
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * (validChars.length - 1 - 0) + 0);
      const shouldCap = Math.floor(Math.random() * (2 - 0) + 0);
      if (shouldCap === 1) {
        returnString += validChars[randomNumber].toUpperCase();
      } else {
        returnString += validChars[randomNumber];
      }
    }
    return returnString.toUpperCase();
  }
}