---
layout: page
---

.featured_projects .text-blk {
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  line-height: 25px;
  margin-top: 40px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.featured_projects * {
  font-family: Nunito, sans-serif;
}

.featured_projects .responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.featured_projects .container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: block;
}

.featured_projects .responsive-container-block.bg {
  max-width: 1500px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  height: auto;
}

.featured_projects .container-block.bg {
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.featured_projects .responsive-container-block.content {
  justify-content: space-evenly;
}

.featured_projects #iu99 {
  color: black;
}

.featured_projects .im {
  width: 100%;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  background-color: #666666;
  height: 100%;
}

.featured_projects .responsive-container-block.img {
  width: 33.33%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  position: relative;
  min-height: auto;
  height: auto;
}

.featured_projects .responsive-container-block.overlay {
  position: absolute;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.featured_projects .responsive-container-block.desc {
  position: absolute;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.featured_projects .responsive-container-block.overlay.overlay-visible {
  background-color: #666666;
  mix-blend-mode: multiply;
}

.featured_projects .responsive-container-block.opt-cont {
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  margin-right: 0px;
  margin-bottom: 5px;
  margin-left: 0px;
}

.featured_projects .text-blk.tab {
  font-size: 25px;
  line-height: 34.1px;
  display: flex;
  align-items: center;
  color: #999999;
  font-weight: 700;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
  cursor: pointer;
  text-align: center;
}

.featured_projects .text-blk.tab.tab-active {
  color: #0087b1;
}

.featured_projects .responsive-container-block.img.hide.graphdes.mobdev {
  height: auto;
}

.featured_projects .text-blk.title {
  font-size: 20px;
  line-height: 27.28px;
  color: white;
  text-align: center;
  font-weight: 700;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
}

.featured_projects .text-blk.info {
  font-size: 20px;
  line-height: 27.28px;
  color: white;
  text-align: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 50px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}

.featured_projects .text-blk.heading {
  font-size: 25px;
  line-height: 34.1px;
  color: #0087b1;
  font-weight: 700;
  padding-top: 10px;
  padding-right: 0px;
  padding-bottom: 10px;
  padding-left: 0px;
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: #0087b1;
}

.featured_projects .tab:hover {
  cursor: pointer;
}

.featured_projects .bg {
  padding: 0 0 0 0;
  margin: 0 auto 0 auto;
}

.featured_projects .content {
  padding: 0 0 0 0;
}

.featured_projects .opt-cont {
  min-height: auto;
  padding: 0 0 0 0;
}

@media (max-width: 1024px) {
  .featured_projects .text-blk.info {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
}

@media (max-width: 768px) {
  .featured_projects .im {
    width: 100%;
  }

  .featured_projects .responsive-container-block.img {
    width: 60%;
  }

  .featured_projects .responsive-container-block.img.hide {
    display: none;
  }

  .featured_projects .responsive-container-block.img.hide.hidden {
    display: none;
  }

  .featured_projects .responsive-container-block.opt-cont {
    flex-direction: column;
  }

  .featured_projects .text-blk.info {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    font-size: 13px;
    line-height: 15px;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
  }

  .featured_projects .text-blk.title {
    font-size: 13px;
    line-height: 15px;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
  }

  .featured_projects .text-blk.title {
    font-size: 20px;
    line-height: 27.28px;
  }

  .featured_projects .text-blk.info {
    font-size: 20px;
    line-height: 27.28px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
  }

  .featured_projects .responsive-container-block.opt-cont {
    margin-top: 30px;
    margin-right: 0px;
    margin-bottom: 15px;
    margin-left: 0px;
  }
}

@media (max-width: 500px) {
  .featured_projects .im {
    width: 100%;
  }

  .featured_projects .im {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .featured_projects .responsive-container-block.img {
    width: 100%;
  }

  .featured_projects .responsive-container-block.opt-cont {
    flex-direction: column;
  }

  .featured_projects .responsive-container-block.img.hidden {
    display: none;
  }

  .featured_projects .text-blk.info {
    font-size: 17px;
    line-height: 22px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
  }

  .featured_projects .text-blk.title {
    font-size: 17px;
    line-height: 22px;
  }

  .featured_projects .text-blk.title {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
  }

  .featured_projects .text-blk.info {
    font-size: 20px;
    line-height: 27.28px;
  }

  .featured_projects .text-blk.title {
    font-size: 20px;
    line-height: 27.28px;
  }
}

<div class="featured_projects" unique-script-id="w-w-dm-id">
  <div class="container-block bg">
    <p class="text-blk heading">
      Galeria de Fotos
    </p>
    <div class="responsive-container-block opt-cont">
      <p class="text-blk tab tab-active" data-filter="all">
        All
      </p>
      <p class="text-blk tab" data-filter="webdes">
        Web Design
      </p>
      <p class="text-blk tab" data-filter="graphdes">
        Graphics Design
      </p>
      <p class="text-blk tab" data-filter="webdev">
        Web Development
      </p>
      <p class="text-blk tab" data-filter="mobdev">
        Mobile Development
      </p>
    </div>
    <div class="responsive-container-block content">
      <div class="responsive-container-block img webdes webdev">
        <img class="im image-block" src="/assets/img/Lab_foto5.png">
        <div class="responsive-container-block overlay">
        </div>
        <div class="responsive-container-block desc">
          <p class="text-blk title">
            Service Rendered
          </p>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
      <div class="responsive-container-block img webdes webdev">
        <div class="responsive-container-block overlay overlay-visible">
        </div>
        <div class="responsive-container-block desc">
          <p class="text-blk title">
            Service Rendered
          </p>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <img class="im" src="/assets/img/Lab_foto5.png">
      </div>
      <div class="responsive-container-block img webdes webdev">
        <div class="responsive-container-block overlay">
        </div>
        <div class="responsive-container-block desc">
          <p class="text-blk title">
            Service Rendered
          </p>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <img class="im" src="/assets/img/Lab_foto5.png">
      </div>
      <div class="responsive-container-block img graphdes mobdev">
        <img class="im" src="/assets/img/Lab_foto5.png">
        <div class="responsive-container-block overlay">
        </div>
        <div class="responsive-container-block desc">
          <p class="text-blk title">
            Service Rendered
          </p>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
      <div class="responsive-container-block img graphdes mobdev">
        <div class="responsive-container-block overlay">
        </div>
        <div class="responsive-container-block desc">
          <p class="text-blk title">
            Service Rendered
          </p>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <img class="im" src="/assets/img/Lab_foto5.png">
      </div>
      <div class="responsive-container-block img graphdes mobdev">
        <img class="im" src="/assets/img/Lab_foto5.png">
        <div class="responsive-container-block overlay">
        </div>
        <div class="responsive-container-block desc">
          <p class="text-blk title">
            Service Rendered
          </p>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
