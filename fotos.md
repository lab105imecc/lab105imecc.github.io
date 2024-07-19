---
layout: page
title: Fotos
---

<style>
.column-f5{
float: left;
width: 14.28%;
text-align: center;
}
.column-f2c{
float: left;
width: 33.33%;
text-align: center;
}
.row:after {
content: "";
display: table;
clear: both;
}

#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 50%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)}
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 45px;
  right: 45px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>

----

#### Lab 105
<p class="ptitle"> \ </p>

<div class="row">
<div class="column-f2c">
<img id="myImg"  class="imageClass" src="/assets/img/Lab_foto8.png" alt="DE" style="width:90%;max-width:300px">
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>
<figcaption> <p class="cc3"> Lab 105 </p></figcaption>
</div>
<div class="column-f2c">
<img id="myImg" class="imageClass" src="/assets/img/Lab_foto8.png" alt="=D" style="width:71%;max-width:300px">
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img0">
  <div id="caption"></div>
</div>
<figcaption> <p class="cc3">  </p></figcaption>
</div>
<div class="column-f2c">
<img id="myImg" class="imageClass" src="/assets/img/Lab_foto8.png" alt="50 anos IMEC" style="width:90%;max-width:300px">
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img0">
  <div id="caption"></div>
</div>
<figcaption> <p class="cc3">  </p></figcaption>
</div>
</div>



<div style="display: flex; align-items: flex-start;">
  <div style="flex: 2;">
    <img src="/assets/img/Lab_foto8.png" alt=" " style="max-width: 125%; height: auto;">
  </div>
  <div style="flex: 1;">
    <img src="/assets/img/Lab_foto3.png" alt=" " style="max-width: 125%; height: auto;">
  </div>
</div>

<div style="display: flex; align-items: flex-start;">
  <div style="flex: 2;">
    <img src="/assets/img/Lab_foto4.png" alt=" " style="max-width: 125%; height: auto;">
  </div>
  <div style="flex: 1;">
    <img src="/assets/img/Lab_foto5.png" alt=" " style="max-width: 125%; height: auto;">
  </div>
</div>
