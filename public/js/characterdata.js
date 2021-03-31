$(document).ready(function(){

    const generateBtn = $('.generate');
    const viewCharactersBtn = $('.view-char');
    const characterBtn = $('.char-card');

    viewCharactersBtn.on('click', async (event) => {
        event.preventDefault();
        const response = await $.get('/characterselect');
        (response) ? document.location.replace('/characterselect') : "";        
    });

    generateBtn.on('click', (event) => {
        event.preventDefault();

        let userData = {
            charName: $('.char_name').val(),
            charClass: $('.char_class').val(),
            charRace: $('.char_race').val()
        }

        if (!userData.charName || userData.charClass == "Class" || userData.charRace == "Race") {
            console.log("All fields must be entered");
        } else {
            $.post('/api/characterGenerator', userData).then(response => {
                console.log(response);
            })
        }        
    });

    characterBtn.on('click', async (event) => {
        const id = event.target.getAttribute('data-id');
        const character = await $.get(`/api/characterGenerator/${id}`);
        console.log(character);
    });
});
