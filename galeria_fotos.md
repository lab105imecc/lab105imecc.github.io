---
layout: page
---

<style>
.desktop_4 * {
  font-family: Nunito, sans-serif;
}

.desktop_4 .responsive-container-block {
  min-height: 75px;
  height: auto;
  width: auto;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.desktop_4 .btn-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.desktop_4 .project:hover .btn-box {
  display: block;
}

.desktop_4 .text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  line-height: 25px;
}

.desktop_4 .responsive-container-block.bigContainer {
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
}

.desktop_4 .responsive-container-block.Container {
  max-width: 940px;
  flex-direction: row;
  margin-top: 80px;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
}

.desktop_4 .portfolio {
  display: inline-block;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 700px;
  overflow-y: auto;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  width: 630px;
}

.desktop_4 button {
  cursor: pointer;
}

.desktop_4 img {
  cursor: pointer;
}

.desktop_4 img:hover {
  transform: scale(1.02);
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: all;
}

.desktop_4 .project {
  position: relative;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  display: inline-block;
}

.desktop_4 .overlay {
  position: fixed;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgba(71, 69, 69, 0.7);
  height: 100%;
  width: 100%;
  max-height: 100%;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: none;
}

.desktop_4 .overlay-inner {
  top: 50%;
  right: 0px;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: white;
  padding-top: 25px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  position: relative;
  opacity: 1;
  width: fit-content;
  max-width: 50%;
  max-height: 85;
}

.desktop_4 .close {
  position: absolute;
  top: 3px;
  right: 10px;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  color: #474545;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: initial;
  border-right-style: initial;
  border-bottom-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-bottom-color: initial;
  border-left-color: initial;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.desktop_4 .overlay-inner .hdImgs {
  width: fit-content;
  height: calc(85% - 55px);
  display: flex;
}

.desktop_4 .overlay-inner img {
  max-height: 100%;
  max-width: 100%;
  transform: none;
}

.desktop_4 .project-image {
  height: 200px;
  width: 300px;
  margin-top: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
}

.desktop_4 .project.first-project {
  display: inline-block;
}

.desktop_4 .responsive-container-block.textContainer {
  flex-direction: column;
  width: 200px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 30px;
}

.desktop_4 .text-blk.optionsText {
  font-size: 20px;
  font-weight: 800;
  line-height: 34px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
}

.desktop_4 .text-blk.active {
  font-size: 20px;
  line-height: 34px;
  font-weight: 700;
  color: #03a9f4;
}

.desktop_4 .text-blk.list {
  font-size: 20px;
  line-height: 34px;
  cursor: pointer;
}

.desktop_4 .text-blk.all {
  margin-right: 10px;
  margin-left: 0px;
}

.desktop_4 .text-blk.list {
  margin-left: 0px;
  margin-right: 20px;
}

.desktop_4 .project-image.one {
  border-radius: 6px;
}

.desktop_4 .project-image.two {
  border-radius: 6px;
}

.desktop_4 .project-image.three {
  border-radius: 6px;
}

@media (max-width: 1024px) {
  .desktop_4 .responsive-container-block.bigContainer {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
  }

  .desktop_4 .responsive-container-block.Container {
    flex-direction: column-reverse;
  }

  .desktop_4 .responsive-container-block.textContainer {
    flex-direction: row;
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .desktop_4 .responsive-container-block.textContainer {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 0px;
    min-height: auto;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 40px;
    margin-left: 0px;
  }

  .desktop_4 .text-blk.optionsText {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 5px;
    margin-left: 0px;
    max-width: 100%;
  }

  .desktop_4 .responsive-container-block.Container {
    max-width: 640px;
  }

  .desktop_4 .overlay-inner {
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    padding-top: 25px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    width: 100%;
  }

  .desktop_4 .overlay {
    padding-top: 20px;
    padding-right: 40px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .desktop_4 .responsive-container-block.textContainer {
    display: inline;
  }

  .desktop_4 .text-blk.optionsText {
    display: block;
    font-size: 30px;
    line-height: 40px;
  }

  .desktop_4 .text-blk.list.all.active {
    display: inline-block;
  }

  .desktop_4 .text-blk.list {
    display: inline-block;
  }
}

@media (max-width: 768px) {
  .desktop_4 .responsive-container-block.Container {
    max-width: 440px;
  }

  .desktop_4 .project-image.two {
    width: 400px;
  }

  .desktop_4 .project {
    margin-top: 5px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .desktop_4 .portfolio {
    max-width: 420px;
  }

  .desktop_4 .project-image.one {
    width: 400px;
    margin-top: 0px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 0px;
  }

  .desktop_4 .project-image.three {
    width: 400px;
  }

  .desktop_4 .overlay-inner {
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    width: 100%;
  }

  .desktop_4 .close {
    font-size: 14px;
    top: 2px;
    right: 5px;
  }

  .desktop_4 .overlay-inner {
    padding-top: 24px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
  }

  .desktop_4 .overlay {
    padding-top: 10px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-left: 30px;
  }
}

@media (max-width: 500px) {
  .desktop_4 .portfolio {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
    width: auto;
    max-width: 100%;
  }

  .desktop_4 .project-image.one {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    width: 100%;
    height: auto;
  }

  .desktop_4 .project {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
    width: 100%;
    margin-top: 5px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .desktop_4 .responsive-container-block.textContainer {
    width: auto;
    flex-direction: column;
    align-items: flex-start;
  }

  .desktop_4 .text-blk.optionsText {
    width: 200px;
  }

  .desktop_4 .responsive-container-block.Container {
    max-width: 100%;
  }

  .desktop_4 .project-image.two {
    width: 100%;
    height: auto;
  }

  .desktop_4 .project-image.three {
    width: 100%;
    height: auto;
  }

  .desktop_4 .text-blk.list {
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: 10px;
  }

  .desktop_4 .overlay-inner {
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    width: 100%;
  }

  .desktop_4 .close {
    font-size: 10px;
    top: 0px;
    right: 5px;
  }

  .desktop_4 .text-blk.list {
    font-size: 16px;
  }

  .desktop_4 .text-blk.optionsText {
    font-size: 30px;
  }

  .desktop_4 .text-blk.list {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
  }

  .desktop_4 .text-blk.optionsText {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
  }

  .desktop_4 .overlay-inner {
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    width: 100%;
  }

  .desktop_4 .close {
    font-size: 10px;
    top: 0px;
    right: 5px;
  }

  .desktop_4 .overlay-inner {
    padding-top: 15px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
  }

  .desktop_4 .overlay {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }

  .desktop_4 .responsive-container-block.textContainer {
    flex-direction: row;
  }

  .desktop_4 .text-blk.list.active {
    background-color: rgba(3, 169, 244, 0.09);
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border-bottom-right-radius: 110px;
    border-bottom-left-radius: 110px;
  }

  .desktop_4 .text-blk.list {
    margin-right: 10px;
    margin-left: 0px;
  }

  .desktop_4 .responsive-container-block.textContainer {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
  }

  .desktop_4 .text-blk.optionsText {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
  }

  .desktop_4 .overlay-inner .hdImgs {
    width: 90%;
  }
}
</style>

<div class="desktop_4" unique-script-id="w-w-dm-id">
  <div class="responsive-container-block bigContainer">
    <div class="responsive-container-block Container">
      <div class="portfolio">
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d42.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d42.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d45.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d45.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d45.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d45.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d45.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d45.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d432.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d45.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d45.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d41.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d43.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image three" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d46.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
        <div class="project">
          <img alt="" class="project-image one" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
          <div class="overlay">
            <div class="overlay-inner">
              <button class="close">
                Close X
              </button>
              <div class="hdImgs">
                <img class="squareImg two" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d44.png">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn">
              View
            </button>
          </div>
        </div>
      </div>
      <div class="responsive-container-block textContainer">
        <p class="text-blk optionsText">
          Options
        </p>
        <p class="text-blk list all active" data-filter="all">
          All
        </p>
        <p class="text-blk list" data-filter="one">
          One
        </p>
        <p class="text-blk list" data-filter="two">
          Two
        </p>
        <p class="text-blk list" data-filter="three">
          Three
        </p>
      </div>
    </div>
  </div>
</div>
