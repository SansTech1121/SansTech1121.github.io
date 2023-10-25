var img = document.getElementById('img');

var slides = ['assets/img/ImageSlider/PIC (2).jpg'
,'assets/img/ImageSlider/PIC (3).jpg'
,'assets/img/ImageSlider/PIC (4).jpg'
];

var Start=0;

function Slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
};