$(document).ready(function(){

    const generateBtn = $('.generate');
    const characterBtn = $('.character-btn');

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

    characterBtn.on('click', (event) => {
        event.preventDefault();
        console.log();
        // $.get('/api/characterGenerator/:id', parseInt(this.dataset.id)).then(response => {
        //     console.log(response);
        // })
    })
});
