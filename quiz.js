const Questions = [
    {
        'que': 'Which of the following Markup language?',
        'a': 'Html',
        'b': 'css',
        'c': 'javascript',
        'd': 'java',
        'correct': 'a'
    },
    {
        'que': 'What year was a javascript lanched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'What dose stand for css?',
        'a': 'Hayper Text markup language',
        'b': 'cascading style sheet',
        'c': 'json object notation',
        'd': 'all of the above',
        'correct': 'b'
    }
]
let index = 0;
let total = Questions.length;
let right = 0;
let wrong = 0;

let quebox = document.getElementById('quebox');
let optioninputs = document.querySelectorAll('.options')
const loadquestion = () => {
    if (index === total) {
        return endquiz()
    }
    reset()
    const data = Questions[index];
    quebox.innerText = `${index + 1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;

}
const submitquiz = () => {
    const data = Questions[index];
    const ans = myanswer();
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadquestion()
    return;
}
const myanswer = () => {
    let answer;
    optioninputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer

}
const reset = () => {

    optioninputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endquiz = () => {
    document.getElementById('main').innerHTML = `
        <h3>thank you for playing  Quiz</h3> 
        <h2>${right}/${total} are correct</h2>
        `
}
loadquestion();