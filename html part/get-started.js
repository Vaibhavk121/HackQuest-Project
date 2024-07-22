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

const getStartedButton = document.querySelector(".get-started-button");
getStartedButton.addEventListener("click", (event) => {
    //PROGRESS ARRAY STEP FORWARD TO NAME AND AGE ENTRY
    renderAgeNamePage();
})







// const progressArrayStepForward = () => {
// }

// const progressArrayStepBackward = () => {
// }


const slantInnerHTML = `<div class="slant-container">
        <div class="slants-div">
            <div class="slant">
                <img src="#" />
                <h2>Web Development</h2>
            </div>
            <div class="slant">
                <img src="#" />
                <h2>Web Development</h2>
            </div>
            <div class="slant">
                <img src="#" />
                <h2>Web Development</h2>
            </div>
            <div class="slant">
                <img src="#" />
                <h2>Web Development</h2>
            </div>
        </div>
        <div class="select-profeciency-div">
            <button class="select-profeciency-button">Select Profeciency</button>
        </div>
    </div>`
const renderSlantPage = () => {
    body.innerHTML = slantInnerHTML;
    //ADD EVENT LISTENERS etc etc
}


const generateRecommendations = (category, inclusion, exclusion) => {

}


const ageNameInnerHTML = `<div class="name-age-container">
        <div class="name-div">
            <span class="my-name-is">My name is </span>
            <input class="my-name-input" placeholder="your name" />
        </div>
        <div class="age-div">
            <span class="my-age-is">I am</span>
            <input class="my-age-input" type="number" value="5" />
            <span class="my-age-is-fin">years old</span>
        </div>
        <div class="tech-fluency-button-div">
            <button class="tech-fluency-button">Proceed</button>
        </div>
    </div>`;

const renderAgeNamePage = () => {
    body.innerHTML = ageNameInnerHTML;
    //add event listeners etc etc;
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
                // body.innerHTML = "now at the select slant page for adults";
                renderSlantPage();
            };

        } else {
            alert("invalid form data");
        }
    })
}