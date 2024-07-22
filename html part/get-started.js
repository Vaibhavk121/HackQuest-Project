let progressArray = [];
let profileDetails = {
    username: null,
    age: null,
    currentMenu: "landing",
    studiedLanguages: [],
    studiedTechnologies: [],
    interestInLanguage: [],
    interestInTechnology: [],
    interestInDomain: []
}
const body = document.querySelector("body");

const techFluencyInnerHTML = `<div class="name-age-container">
        <div class="name-div">
            <span class="my-name-is">My name is </span>
            <input class="my-name-input" placeholder="your name" />
        </div>
        <div class="age-div">
            <span class="my-age-is">I am</span>
            <input class="my-age-input" type="number" placeholder="your age" />
            <span class="my-age-is-fin">years old</span>
        </div>
        <div class="tech-fluency-button-div">
            <button class="tech-fluency-button">Proceed</button>
        </div>
    </div>`;

const getStartedButton = document.querySelector(".get-started-button");
getStartedButton.addEventListener("click", (event) => {
    //PROGRESS ARRAY STEP FORWARD TO NAME AND AGE ENTRY
    body.innerHTML = techFluencyInnerHTML;
    const proceedToFluencyButton = document.querySelector(".tech-fluency-button");
    proceedToFluencyButton.addEventListener("click", (event) => {
        //only switch to fluency page if there is a username and age
        const username = document.querySelector(".my-name-input").value;
        const age = document.querySelector(".my-age-input").value;
        if (username.trim().length > 5 && age > 5 && age < 85) {
            profileDetails.username = username;
            profileDetails.age = age;
            if (age <= 15) {
                body.innerHTML = "now at page for children";
            }
            else {
                body.innerHTML = "now at the tech fluency page"
            };

        } else {
            alert("invalid form data");
        }
    })
})







const progressArrayStepForward = () => {

}

const progressArrayStepBackward = () => {

}


const generateRecommendations = (category, inclusion, exclusion) => {

}