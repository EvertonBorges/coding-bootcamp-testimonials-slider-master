const patterns = [
    {
        name: 'Tanya Sinclair',
        profession: 'UX Engineer',
        description: '" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "'
    },
    {
        name: 'John Tarkpor',
        profession: 'Junior Front-end Developer',
        description: '" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "'
    }
];

let actualIndex = 0;

function switchPattern(increment = 0) {
    actualIndex += increment;
    if (actualIndex > patterns.length) actualIndex = patterns.length - 1;
    if (actualIndex < 0) actualIndex = 0;

    const pattern = patterns[actualIndex];
    const patternElement = document.getElementById('pattern');
    const firstName = pattern.name.split(' ')[0].toLowerCase();

    patternElement.innerHTML = `
        <div class="pattern-texts">
            <div class="pattern-text">
            <label class="pattern-description">
                ${pattern.description}
            </label>
            <label class="pattern-name">${pattern.name}</label>
            <label class="pattern-profession">${pattern.profession}</label>
            </div>
        </div>
        <div class="pattern-photo">
            <img src="./images/image-${firstName}.jpg" alt="${pattern.description}">
            <div class="navigation">
            <a class="nav-left" onclick="switchPattern(-1)"><img src="./images/icon-prev.svg" alt="prev"></a>
            <a class="nav-right" onclick="switchPattern(1)"><img src="./images/icon-next.svg" alt="next"></a>
            </div>
        </div>
    `;
}