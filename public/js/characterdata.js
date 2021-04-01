// const { response } = require("express");

$(document).ready(function(){
    let resData = "";
    const generateBtn = $('.generate');
    const viewCharactersBtn = $('.view-char');
    const characterBtn = $('.item');

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
                //load the characterCreated.html 
                console.log(response);
                document.location.replace('/character/' + response.id);
            })
        }        
        
    });

    characterBtn.on('click', async (event) => {
        const id = event.target.getAttribute('data-id');
        const character = await $.get(`/character/${id}`);
        document.location.replace(`/character/${id}`);
    });
});


// response.equipment.forEach(element => console.log(element));
                // response.languages.forEach(element => console.log(element));
                // console.log(response.modifiers.strength_mod);
                // console.log(response.modifiers.dexterity_mod);
                // console.log(response.modifiers.constitution_mod);
                // console.log(response.modifiers.intelligence_mod);
                // console.log(response.modifiers.wisdom_mod);
                // response.proficiencies.forEach(element => console.log(element));
                // console.log(response.skills);