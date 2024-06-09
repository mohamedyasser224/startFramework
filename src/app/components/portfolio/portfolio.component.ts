import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  clicked:Boolean = false;
  imgSrc:string='';

  imgsArray =["assets/imgs/poert1.png","assets/imgs/port2.png","assets/imgs/port3.png"]

  displayModal(image:string){
    this.clicked=true;
    this.imgSrc = "assets/imgs/"+image+".png"
  }
  hideModal(){
    this.clicked = false
  }
  

//   let modal:any = document.querySelector(".my-modal");
//   let allImgs:any = document.querySelectorAll(".row img");

// console.log(allImgs);

// console.log(modal);

// function showModal(){
//   modal.classList.remove("d-none");
// }

// function hideModal(){
//   modal.classList.add("d-none");
// }

// for(let i=0; i<allImgs.length; i++ ){
//   allImgs[i].addEventListener("click", function(){
//     console.log("hello");
    
//   })
// }



}

