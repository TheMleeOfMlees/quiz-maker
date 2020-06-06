/*
{
        question: ``,
        options:[

        ],
        answerIndex: 1,
        chosenAnswer: -1
    }
*/

export default[
    {
        question: `What is the purpose of HTML and CSS?`,
        options:[
            'HTML handles data, CSS handles routing',
            'HTML tells the browser what to display, CSS tell it what style to display it in',
            'HTML styles the page, CSS makes it interactive',
            "Nothing, they're stupid"
        ],
        answerIndex: 1,
        chosenAnswer: -1
    },
    {
        question: 'Which of these html tags contains correct syntax?',
        options:[
            '<div class=row></div>',
            '<div style="position:absolute;" </div>',
            '<div class="row" style="position:absolute;"/><div>',
            '<div class="row" id="my-div"></div>'
        ],
        answerIndex: 3,
        chosenAnswer: -1
    },
    {
        question: `What is the output of the following code:
        <code>
                var answer = 5;
                for(var i = 0; i < 10; i+=2){
                    [tab] answer += i;
                }
                console.log(answer);
        </code>`,
        options:[
            '17',
            '25',
            '21',
            '33'
        ],
        answerIndex: 1,
        chosenAnswer: -1
    },{
        question: `What is the difference between padding and margin?`,
        options:[
            'Padding gets added to total width/height and margin doesnt',
            'Padding is space inside an element, margin is space outside an element',
            'Padding can only use px, margin can use any unit of measure',
            'Padding affects block elements while margin affects in line elements'
        ],
        answerIndex: 1,
        chosenAnswer: -1
    },
    {
        question: `Which position should you give an element when you want to position it in relation to the viewport(screen)?`,
        options:[
            'initial',
            'relative',
            'absolute',
            'fixed'
        ],
        answerIndex: 3,
        chosenAnswer: -1
    },
    {
        question: `What is the purpose of console.log()?`,
        options:[
            'To test your function',
            'To confuse you',
            'To output a message to the page',
            'To output a message to the console'
            
        ],
        answerIndex: 3,
        chosenAnswer: -1
    },
    {
        question: `What is the best way to add css your elements`,
        options:[
            'Inline styles',
            'Internal style sheets',
            'External style sheets'
        ],
        answerIndex: 2,
        chosenAnswer: -1
    },
    {
        question: `Which of the following is not true about functions?`,
        options:[
            'They provide a way to reuse code for different inputs',
            'They allow you to modularize your code through abstractions',
            'They always take parameters as input and output a value through the return statement',
            'They make code easier to understand by breaking it down into different parts'
        ],
        answerIndex: 2,
        chosenAnswer: -1
    },
    {
        question: `What is the convention for variable naming in javascript?`,
        options:[
            'Pascal casing (i.e. MyVariable)',
            'Camel casing (i.e. myVariable)',
            'Kebab casing (i.e. my-variable)',
            'All Caps (i.e. MYVARIABLE)'
        ],
        answerIndex: 1,
        chosenAnswer: -1
    },
    {
        question: `What's the best reason to learn programming?`,
        options:[
            `It's really fun`,
            'You can make a lot of money',
            `It exercises your mind and promotes critical thinking`,
            'All of the above'
        ],
        answerIndex: 3,
        chosenAnswer: -1
    }
]