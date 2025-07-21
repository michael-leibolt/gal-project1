function randParser() {
  return randomArtPrimaryImageSmallMaker()
    .then((artObj) => {
      console.log("randParser: " + artObj.title);
      async function updateTitlePara() {
        let titleParagraph = await randParser();
        document.getElementById("titlePara").value = titleParagraph;
      }
      updateTitlePara();
      return artObj;
    })
    .then((artObj) => {
      console.log("aboutParser: " + artObj.title);
      async function updateAboutPara() {
        let aboutParagraph = await aboutParser();
        document.getElementById("aboutPara").value = aboutParagraph;
      }
      aboutParser();
      return artObj;
    })
    .then((artObj) => {
      console.log("photoParser: " + artObj.title);
      async function updatePhoto() {
        let mainPhoto = await photoParser();
        console.log(mainPhoto);
        document.getElementById("mainPhoto").src = mainPhoto;
      }
      updatePhoto();
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function randParser() {
  return randomArtPrimaryImageSmallMaker()
    .then((artObj) => {
      console.log("randParser: " + artObj.title);
      document.getElementById("titlePara").value = artObj.title;
      return artObj;
    })
    .then((artObj) => {
      console.log("aboutParser: " + artObj.title);
      document.getElementById(
        "aboutPara"
      ).value = `The piece was made by ${artObj.artist}. It was acquired by ${artObj.department} in ${artObj.acquireDate}.`;
      return artObj;
    })
    .then((artObj) => {
      console.log("photoParser: " + artObj.title);
      document.getElementById("mainPhoto").src = artObj.smallPhoto;
      return artObj;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
