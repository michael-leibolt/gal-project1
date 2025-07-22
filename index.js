function randomArtPrimaryImageSmallMaker() {
  let artPiece = Math.floor(Math.random() * (496907 - 1) + 1);
  // let artPiece = fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
  var artPieceObjectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artPiece}`;
  return fetch(`${artPieceObjectUrl}`)
    .then((rawResponse) => {
      if (!rawResponse.ok) {
        alert("please try again!");
        throw new Error("website broke");
      }
      return rawResponse.json();
    })
    .then((jsonifiedResponse) => {
      let output = {
        title: jsonifiedResponse.title,
        medium: jsonifiedResponse.medium,
        objectID: jsonifiedResponse.objectID,
        url: artPieceObjectUrl,
        bigPhoto: jsonifiedResponse.primaryImage,
        smallPhoto: jsonifiedResponse.primaryImageSmall,
        department: jsonifiedResponse.department,
        artist: jsonifiedResponse.artistDisplayName,
        endDate: jsonifiedResponse.objectEndDate,
        acquireDate: jsonifiedResponse.accessionYear,
        dateRange: jsonifiedResponse.objectDate,
      };
      return output;
    });
}

function randParser() {
  return randomArtPrimaryImageSmallMaker()
    .then((artObj) => {
      //console.log("TitleParser: " + artObj.title);
      //console.log("Da url: " + artObj.url);
      if (artObj.title.trim() === "") {
        //console.log("title does not exist");
        document.getElementById("titlePara").innerHTML = "No Title";
        return artObj;
      } else {
        document.getElementById("titlePara").innerHTML = artObj.title;
        return artObj;
      }
    })
    .then((artObj) => {
      //console.log("photoParser: " + artObj.title);
      //console.log(artObj.smallPhoto);
      //console.log(artObj.bigPhoto);
      if (artObj.smallPhoto.trim() === "" && artObj.bigPhoto.trim() === "") {
        //console.log("photo does not exist");
        document.getElementById("mainPhoto").src =
          "https://image.similarpng.com/file/similarpng/very-thumbnail/2021/06/Art-empty-frame-in-golden-on-transparent-background-PNG.png";
        document.getElementById("mainPhoto").alt = "Photo does not exist";
        return artObj;
      } else if (artObj.smallPhoto.trim() !== "") {
        document.getElementById("mainPhoto").src = artObj.smallPhoto;
        return artObj;
      } else {
        document.getElementById("mainPhoto").src = artObj.bigPhoto;
        return artObj;
      }
    })
    .then((artObj) => {
      //console.log(
      //   "Artist: " +
      //     artObj.artist +
      //     "Department: " +
      //     artObj.department +
      //     "Date: " +
      //     artObj.acquireDate
      // );
      if (artObj.artist.trim() === "") {
        document.getElementById("tableArtist").innerText = "Unknown Artist";
        return artObj;
      } else {
        document.getElementById("tableArtist").innerText = artObj.artist;
        return artObj;
      }
    })
    .then((artObj) => {
      if (artObj.department.trim() === "") {
        document.getElementById("tableDepartment").innerText =
          "Unknown Department";
        return artObj;
      } else {
        document.getElementById("tableDepartment").innerText =
          artObj.department;
        return artObj;
      }
    })
    .then((artObj) => {
      if (artObj.acquireDate.trim() === "") {
        document.getElementById("tableDate").innerText = "Unknown Date";
      } else {
        document.getElementById("tableDate").innerText = artObj.acquireDate;
        return artObj;
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
randParser();

function addElement() {
  if (finderModes.value === "ObjectId") {
    let objectId = document.createElement("input");
    let objectIdSubmit = document.createElement("button");

    objectId.placeholder = "Which Art Id would you like next?";
    objectId.id = "objectIdInput";
    objectIdSubmit.innerHTML = "Submit";
    objectIdSubmit.id = "objectIdSubmit";
    objectIdSubmit.setAttribute("onclick", "logger()");
    document.getElementById("top").after(objectId);
    document.getElementById("objectIdInput").after(objectIdSubmit);
    //console.log("made it to the end");
  } else if (finderModes.value !== "ObjectId") {
    document.getElementById("objectIdInput").remove();
    //console.log("removed the input box");
    document.getElementById("objectIdSubmit").remove();
    //console.log("removed the input box submit button");
  }
}

const finderModes = document.querySelector("#finderModes");
const topperButton2 = document.querySelector("#topperButton2");

topperButton2.addEventListener("click", () => randParser());
finderModes.addEventListener("change", () => {
  console.log(finderModes.value);
  addElement();
});

function logger() {
  console.log(document.getElementById("objectIdInput").value);
}
