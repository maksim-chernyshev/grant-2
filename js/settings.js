$( function() {
    $( "#age" ).selectmenu();
} );

const settingsForm = document.getElementById("settingsForm");
const settingsTitles = document.querySelector(".settings__titles-wrapper")
const settingsTitlesSuccess = document.querySelector(".settings__titles-wrapper--success")

settingsForm.addEventListener("submit", () => {
    settingsForm.style.display = "none";
    settingsTitles.style.display = "none";
    settingsTitlesSuccess.style.display = "block";
})