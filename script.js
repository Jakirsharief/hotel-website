document.querySelectorAll('.product-card').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        Document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }); 
});
//function 
function showMessage(){
    let name = prompt("Enter Your Name:");

    //condition
    if(name===""|| name ===null){
        alert("please enter your name");
    }else{
        alert("Hello" + name + "! welcome to Brew Haven")
    }
}

// product hover effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseover', function(){
        this.style.transform = 'translateY(-15px)';
    });
    card.addEventListener('mouseout', function(){
        this.style.transform = 'translateY(0)';
    });
});

    function showSection() {
      document.getElementById("productFirst").style.display = "none";
      document.getElementById("firstProductBack").style.display = "block";
    }

    function goBack() {
      document.getElementById("productFirst").style.display = "block";
      document.getElementById("firstProductBack").style.display = "none";
    }
 // search button moves//
 function searchItems() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    let coffeeSection = document.getElementById("coffeeSection");
    let foodSection = document.getElementById("foodSection");
    let heroSection = document.getElementById("heroSection");

    if (input.includes("coffee")) {
        heroSection.style.display = "none";   // 👈 hero hide
        coffeeSection.style.display = "block";
        foodSection.style.display = "none";
    } 
    else if (input.includes("burger") || input.includes("sandwich") || input.includes("fries")) {
        heroSection.style.display = "none";   // 👈 hero hide
        coffeeSection.style.display = "none";
        foodSection.style.display = "block";
    } 
    else if (input === "") {
        heroSection.style.display = "block";  // 👈 hero show back
        coffeeSection.style.display = "block";
        foodSection.style.display = "block";
    }
    else {
        heroSection.style.display = "none";
        coffeeSection.style.display = "block";
        foodSection.style.display = "block";
    }
}