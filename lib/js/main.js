let submitBtn = document.getElementById("submit_button")
let mainTitle = document.getElementById("main_title")
let storyResult = document.getElementById("story_result")
let formContainer = document.querySelector(".form_container")


submitBtn.onclick= function(event) {
    event.preventDefault()

    let titleInputBox = document.getElementById("title_input")
    let nounBox = document.getElementById("noun")
    let verbBox = document.getElementById("verb")
    let adjectiveBox = document.getElementById("adjective")
    let titleInput = titleInputBox.value
    let noun = nounBox.value
    let verb = verbBox.value
    let adjective = adjectiveBox.value

    if (titleInput == "" || noun == "" || verb == "" || adjective == "") {
        alert("Please fill in all fields")
    } else {
        mainTitle.innerHTML = titleInput
        formContainer.style.display= "none"
        storyResult.innerHTML = "Last night I ate a " + noun + ", and today I just had to " + verb + ". What a " + adjective + " day!"
    }


}