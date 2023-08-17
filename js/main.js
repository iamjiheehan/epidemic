const titlemoveBox = document.querySelectorAll(".showcase_txtslide-item");
const boxCount = titlemoveBox[0].childElementCount;
const moveRate = 100 / (boxCount + 1);
let num = 0;

//무한로테이션 텍스트 핸들러 함수
function titleMove() {
    num++;
    
    titlemoveBox.forEach((elem, idx) => {
        if (num >= boxCount) {
        elem.style.transform = `translateY(-${moveRate * num}%)`;
        setTimeout(() => {
            num = 0;
            elem.style.transition = "none";
            elem.style.transform = `translateY(-${moveRate * num}%)`;
        }, 1210); //requestAnimation반복 시간(0.4) + 트랜지션시간(0.8) + 약간의 여유(0.1);
        } else {
        elem.style.transition = "0.8s"; 
        elem.style.transform = `translateY(-${moveRate * num}%)`;
        }
    });
    setTimeout(() => {
        window.requestAnimationFrame(titleMove);
    }, 4000); //시간s마다 텍스트가 올라가는 애니메이션 무한 실행
    }

    function cloneBox(){
    //클론 Movebox 마지막 div
    titlemoveBox.forEach((elem) => {
    let lastChild = elem.lastElementChild;
    let cloneLast = lastChild.cloneNode(true);
    elem.prepend(cloneLast);
    cloneLast.style.opacity = 0;
        setTimeout(() => {
        cloneLast.style.opacity = 1;
        cloneLast.classList.add('showcase_txtslide-item');
        lastChild.classList.add('showcase_txtslide-item');
        }, 1000); //로딩 될때 box가 나타난 이후의 시간
    });
    }
    window.addEventListener('load',()=>{
    cloneBox();
    titleMove();  
})
