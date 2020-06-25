

$('#checked').change(() => {
    themeToggle()
})

function themeToggle(){
    temp = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    document.documentElement.style.setProperty('--background-color', getComputedStyle(document.documentElement).getPropertyValue('--letters-color'));
    document.documentElement.style.setProperty('--letters-color', temp);
}