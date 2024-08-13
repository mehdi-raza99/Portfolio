const sidebar=document.querySelector(".sidebar");
function showSideBar() {
    sidebar.style.display = 'flex';
}
function hideSideBar(){
    sidebar.style.display = 'none';
}
function showEducationSection(){
    const skillButton=document.querySelector(".Skills-button");
    const educationButton=document.querySelector(".Education-button");
    skillButton.style.color='white';
    educationButton.style.color='rebeccapurple';
    educationButton.style.borderBottom = "2px solid rebeccapurple";

    const skillSection=document.querySelector(".skills");
    const educationSection=document.querySelector(".Education");
    skillSection.style.display= 'none'
    skillButton.style.borderBottom = 'none';
    educationSection.style.display='flex'
}
function showSkillSection(){
    const skillButton=document.querySelector(".Skills-button");
    const educationButton=document.querySelector(".Education-button");
    educationButton.style.color='white';
    educationButton.style.borderBottom = "none";
    skillButton.style.color='rebeccapurple';

    const skillSection=document.querySelector(".skills");
    const educationSection=document.querySelector(".Education");
    educationSection.style.display= 'none'
    skillSection.style.display='flex'
    skillButton.style.borderBottom = "2px solid rebeccapurple";

}
