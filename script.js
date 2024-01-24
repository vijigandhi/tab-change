
let para = document.getElementById("para")
let h= document.getElementById("his")
let img = document.getElementById("image")

let arr=[
    {
        src:"blue-rose.jpg",
        Head:"History",
        Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            "Excepturi veritatis dolor omnis consequuntur," +
            "libero repudiandae voluptas maiores aperiam "+
            "iste impedit delectus natus, consectetur,"+ 
            "quos tempora laboriosam consequatur debitis explicabo fuga."
    },

    {
        src:"lily.jpg",
        Head:"Vision",
        Description:"The true lilies are erect perennial plants with leafy stems,"+ 
        "scaly bulbs, usually narrow leaves,"+ 
        "and solitary or clustered flowers."+ 
        "The flowers consist of six petal-like segments,"+ 
        "which may form the shape of a trumpet, with a more or less elongated tube,"+ 
        "as in the Madonna lily (Lilium candidum) and Easter lily"
    },
    
    {
        src:"lotus.jpg",
        Head:"Goals",
        Description:"The lotus flower is an aquatic perennial." +
        "Sometimes mistaken for the water-lily, "+
        "the lotus has a distinctively different structure."+
        "It also only comes in pink hues or white, "+
        "whereas the lily comes in many different colors. "+
        "The roots are implanted in the soil of a river or pond,"+ 
        "and the leaves float on the surface."
    },
]

let main = document.querySelectorAll("button");
main[0].classList.add("background");
main[0].classList.add("default");

main.forEach((btn,index) => { 
    btn.addEventListener("click",() =>
    {
        img.src=arr[index].src;
        h.innerText=arr[index].Head;
        para.innerText=arr[index].Description;

        btn.classList.add("default")
        btn.classList.add("background");

        main.forEach((btn1,index1) => {
            if(index != index1)
            {
                btn1.classList.remove("default");
                btn1.classList.remove("background");
            }
        });    
    });
});




//---------------------individual functions-------------------------
// hist.addEventListener("click",historyFunction)
// hist.classList.add("color");

// function historyFunction()
// {
//     hist.classList.remove("color")
//     img.setAttribute("src","blue-rose.jpg")
//     h.innerText="History"
//     para.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit." +
//     "Excepturi veritatis dolor omnis consequuntur," +
//     "libero repudiandae voluptas maiores aperiam "+
//     "iste impedit delectus natus, consectetur,"+ 
//     "quos tempora laboriosam consequatur debitis explicabo fuga."
    
//     hist.style.backgroundColor="white"
//     vision.style.backgroundColor=""
//     goals.style.backgroundColor=""
// }

// vision.addEventListener("click",visionFunction)

// function visionFunction()
// {
//     hist.classList.remove("color")
//     img.setAttribute("src","lily.jpg")
//     h.innerText="Vision"
//     para.innerText="The true lilies are erect perennial plants with leafy stems, scaly bulbs, usually narrow leaves, and solitary or clustered flowers. The flowers consist of six petal-like segments, which may form the shape of a trumpet, with a more or less elongated tube, as in the Madonna lily (Lilium candidum) and Easter lily";
//     hist.style.backgroundColor=""
//     vision.style.backgroundColor="white"
//     goals.style.backgroundColor=""
// }

// goals.addEventListener("click",goalFunction)

// function goalFunction()
// {
//     hist.classList.remove("color")
//     img.setAttribute("src","lotus.jpg")
//     h.innerText="Goals"
//     para.innerText="The lotus flower is an aquatic perennial. Sometimes mistaken for the water-lily, the lotus has a distinctively different structure. It also only comes in pink hues or white, whereas the lily comes in many different colors. The roots are implanted in the soil of a river or pond, and the leaves float on the surface.";
//     hist.style.backgroundColor=""
//     vision.style.backgroundColor=""
//     goals.style.backgroundColor="white"
// }




