function ScrollTo(section){
    const sec = document.getElementById(section);
    sec.scrollIntoView({behavior: 'smooth'});
}
function SellectProject(name){
    document.getElementById("spinner").style.display = "none";
    let image = document.getElementById("project-img");
    image.style.display = "block";
    if(name == "dvibes"){
        image.src="../Capture.PNG";
    }
    if(name == "covid-19"){
        image.src="../Capture d’écran 2023-05-12 013943.png";
    }
}