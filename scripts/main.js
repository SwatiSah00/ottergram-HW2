var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";

function setDetails(imageUrl, titleText) {
  "use strict";
  // Code will go here
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

/*function pev_click(thumb){
  var prev = document.getElementById("prev");
  var
}

function next_click(thumb){
  var next = document.getElementById("prev");
}*/

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();

function imgSlideShow() {
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var currentImageDetail = detailImage.getAttribute("src");
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  var currentImgTitle = detailTitle.textContent;

  var thumbnailsArray = getThumbnailsArray();
  var currentImageArrayIndex;
  for (var i = 0; i < thumbnailsArray.length; i++) {
    if (thumbnailsArray[i].innerHTML.indexOf(currentImageDetail) != -1) {
      currentImageArrayIndex = i;
    }
  }
  if (document.activeElement.id == "prev") {
    if (currentImageArrayIndex > 0) {
      var previousImg = thumbnailsArray[currentImageArrayIndex - 1].getAttribute("data-image-url");
      var previousImgTitle = thumbnailsArray[currentImageArrayIndex - 1].getAttribute("data-image-title");
      setDetails(previousImg, previousImgTitle);
    }
  } else if (document.activeElement.id == "next") {
    if (currentImageArrayIndex < thumbnailsArray.length - 1) {
      var nextImage = thumbnailsArray[currentImageArrayIndex + 1].getAttribute("data-image-url");
      var nextImageTitle = thumbnailsArray[currentImageArrayIndex + 1].getAttribute("data-image-title");
      setDetails(nextImage, nextImageTitle);
    }
  }
}
