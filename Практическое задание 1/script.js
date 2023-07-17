let k = 0;

function printComment() {
    let div = document.createElement ('div');
    div.className = 'comment-container';
    document.getElementById('display-container').appendChild(div);
    printAvatar();
    printName();
    printText();

    k++;
} 

function printAvatar() {
    let avatarSrc = document.querySelector('#avatar').value;
    let img = document.createElement ('img');
    img.className = 'avatar';
    img.alt = 'user`s avatar';
    img.src = `${avatarSrc}`;
    document.querySelectorAll('.comment-container')[k].appendChild(img);
    document.getElementById('avatar').value = '';
}

function printName() {
    let name = document.querySelector ('#name').value;
    name = name.toLowerCase();
    let nameArr = name.split(' ');
    let nameFinal = ' ';
    nameBigLetter ();
    function nameBigLetter () {
        for (let i = 0; i < nameArr.length; i++) {
            nameFinal += nameArr[i][0].toUpperCase() + nameArr[i].slice(1) + ' ';
        }
        document.getElementById('name').value = '';
    }

    let h3 = document.createElement ('h3');
    h3.innerText = `${nameFinal}`;
    document.querySelectorAll('.comment-container')[k].appendChild(h3);
}

function printText() {
    let comment = document.querySelector('#comment').value;
    let noSpamComment = comment.replace (/viagra/ig, '***');
    noSpamComment = noSpamComment.replace (/xxx/ig, '***');

    let p = document.createElement ('p');
    p.innerText = `${noSpamComment}`;
    console.log (p);
    document.querySelectorAll('.comment-container')[k].appendChild(p);
    document.getElementById('comment').value = '';

}