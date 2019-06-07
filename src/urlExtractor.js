function extractImageURL(input) {
  /**Helper function that extracts the URL from the line of text the user
   * has typed (input). If there is no URL, then return null
  */
  const returnObj = {
    validImage: false,
    cleanText : "",
    imgsrc: ""
  }

  let indexOfURL;
  if (input.indexOf("https://") >= 0 ) {
    indexOfURL = input.indexOf("https://")
  }

  if (input.indexOf("http://") >= 0 ) {
    indexOfURL = input.indexOf("http://")
  }

  /* First make sure there is valid resource. If not, return the object
  with the appropriate values that indicate there are no image URLs, with the text
  */
  if (indexOfURL < 0) {
    returnObj.cleanText = input;
    return returnObj;
  }
  
  /** At this point, we have a URL. The next part, we have to discern
   * whether the resource is a valid image .png, .jpg or .gif
   */
  let res = input.substring(indexOfURL, input.length);
  let link = res.split(' ')[0];

  let extension = link.substring(link.length - 4, link.length);

  if (extension === ".png" || extension === ".jpg" || extension === ".gif") {
    let parsedInput = input.split(" ");
    let cleanInput = parsedInput.filter((data) => {
      return data != link
    })
 
    returnObj.imgsrc = link;
    returnObj.cleanText = cleanInput.join(" ");
    returnObj.validImage = true;

  } else {
    returnObj.cleanText = input;
  }
  return returnObj;
}
export default extractImageURL;