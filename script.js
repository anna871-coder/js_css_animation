function pageLoad() {

    let myObjects = [
        {
            tag: "h1",
            content: "Anna"
        },
        {
            tag: "p",
            content: "Frontend developer"
        }
    ];
    /* console.log(myObjects); */

    /* for ( let i = 0; i < myObjects.length; i++) {
    
    } */
    console.log(myObjects.length);
    let rootE = document.getElementById("root");
console.log(rootE);
    for (myObject of myObjects) {
        /*        console.log(myObject)} */
        rootE.insertAdjacentHTML("beforeend", `<${myObject.tag}>${myObject.content}</${myObject.tag}>
      `);

    }

    rootE.addEventListener("click", function () {
        rootE.classList.toggle("clicked");
    });
};

window.addEventListener("load", pageLoad);