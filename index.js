let writer = () => {
  document.write('Hello World');
};

function randomArtPrimaryImageSmallMaker() {
  let artPiece = Math.floor((Math.random() * (496907 - 1) +1 ));
  // let artPiece = fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
  var artPieceObjectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artPiece}`;
  fetch(`${artPieceObjectUrl}`)
    .then(rawResponse => {
      if(!rawResponse.ok) {
        throw new Error('website broke')
      };
      return rawResponse.json();
    })
    .then(jsonifiedResponse => {
      let output = {
        title: jsonifiedResponse.title,
        medium: jsonifiedResponse.medium,
        objectID: jsonifiedResponse.objectID,
        url: artPieceObjectUrl
      }
      console.log(output)
      return output;

    })

};


// async function smallImageReader() {
//   try {
//     let smallJson = randomArtPrimaryImageSmallMaker()
//     console.log(smallJson)
//   } catch (error) {
//     console.log('async caught error ' + error)
//   }
// }
