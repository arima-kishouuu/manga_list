let characters = [
    {
        name: 'ken',
        animations: [
            { src: 'ken.gif', icon: 'icons/ken_icon1.png' },
            { src: 'RUN.gif', icon: 'icons/ken_icon2.png' },
            { src: 'kill.gif', icon: 'icons/ken_icon3.png' },
            { src: 'jump.gif', icon: 'icons/ken_icon4.png' },
            { src: 'hit3.gif', icon: 'icons/ken_icon5.png' }
        ]
    },
    {
        name: 'new_character',
        animations: [
            { src: 'ken2.gif', icon: 'icons/new_character_icon1.png' },
            { src: 'char/new_character_RUN.gif', icon: 'icons/new_character_icon2.png' },
            { src: 'char/new_character_hit.gif', icon: 'icons/new_character_icon3.png' },
            { src: 'char/new_character_jump.gif', icon: 'icons/new_character_icon4.png' },
            { src: 'char/new_character_attack.gif', icon: 'icons/new_character_icon5.png' }
        ]
    }
    // Добавляйте другие персонажи аналогично
    ,
    {
        name: 'pa1n',
        animations: [
            { src: 'pain 1.gif', icon: 'icons/new_character_icon1.png' },
            { src: 'pain run.gif', icon: 'icons/new_character_icon2.png' },
            { src: 'hit 1.gif', icon: 'icons/new_character_icon3.png' },
            { src: '324523452354.gif', icon: 'icons/new_character_icon4.png' },
            { src: '1234.gif', icon: 'icons/new_character_icon5.png' }
        ]
    }
];

let currentCharacterIndex = 0;
let currentAnimationIndex = 0;

function changeAnimation(animationIndex) {
    currentAnimationIndex = animationIndex;
    document.getElementById('character-animation').src = characters[currentCharacterIndex].animations[animationIndex].src;
}

function showCharacter(index) {
    currentCharacterIndex = index;
    currentAnimationIndex = 0; // Сброс анимации при смене персонажа на первую
    document.getElementById('character-animation').src = characters[index].animations[0].src;
    updateButtons();
}

function prevCharacter() {
    currentCharacterIndex = (currentCharacterIndex > 0) ? currentCharacterIndex - 1 : characters.length - 1;
    showCharacter(currentCharacterIndex);
}

function nextCharacter() {
    currentCharacterIndex = (currentCharacterIndex < characters.length - 1) ? currentCharacterIndex + 1 : 0;
    showCharacter(currentCharacterIndex);
}

function updateButtons() {
    let buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = '';
    for (let i = 0; i < characters[currentCharacterIndex].animations.length; i++) {
        let button = document.createElement('button');
        button.className = 'animation-button';
        let icon = document.createElement('img');
        icon.src = characters[currentCharacterIndex].animations[i].icon;
        icon.alt = 'Animation Icon';
        button.appendChild(icon);
        button.onclick = function() { changeAnimation(i); };
        buttonContainer.appendChild(button);
    }
}
