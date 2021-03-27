$(document).ready(function(){

    const generateBtn = $('.generate');
    const apiURL = "https://www.dnd5eapi.co/api";

    generateBtn.on('click', (event) => {
        event.preventDefault();

        let userData = {
            charName: $('.char_name').val(),
            charClass: $('.char_class').val().toLowerCase(),
            charRace: $('.char_race').val().toLowerCase(),
        }

        $.post('/api/characterGenerator', userData).then(response => {
            console.log(response);
        })
    });
});
