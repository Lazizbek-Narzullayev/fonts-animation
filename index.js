const secText = document.querySelector('.sec-text');

const textLoad = ()=>{
    
    setTimeout(() => {
        secText.textContent="biznesingizni";
    }, 0);
    setTimeout(() => {
        secText.textContent="loyihangizni";
    }, 4000);
    setTimeout(() => {
        secText.textContent="g'oyangizni";
    }, 8000);
}
textLoad();
setInterval(() => {
    textLoad();
}, 12000);