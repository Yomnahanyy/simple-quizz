const questions =[
    {
        question:"كم عدد سور القرآن الكريم",
        answers: [
            {text:" 114" ,correct: true },
            {text:" 105",correct: false },
            {text:" 90",correct: false },
            {text:"110",correct: false },
        ]
    },
    {
        question:"ما هي السورة التي تعد ام الكتاب",
        answers: [
            {text:" سورة الكوثر" ,correct: false },
            {text:" سورة الفاتحه",correct: true },
            {text:" سورة الناس",correct: false },
            {text:"سورة العصر",correct: false },
        ]
    },
    {
        question:"ما هي اول صلاة صليت في الاسلام بعد فرضها ",
        answers: [
            {text:"الظهر" ,correct: true },
            {text:" العصر",correct: false },
            {text:" المغرب",correct: false },
            {text:"الفجر",correct: false },
        ]
    },
    {
        question:"ما هما البردين",
        answers: [
            {text:" الفجر,المغرب" ,correct: false},
            {text:" الظهر,العشاء",correct: false },
            {text:" الفجر,العصر",correct: true },
            {text:" لا شئ مما سبق",correct: false },
        ]
    },
    {
        question:"كم عدد اسماء الله الحسني",
        answers: [
            {text:" 99" ,correct: true },
            {text:" 105",correct: false },
            {text:" 90",correct: false },
            {text:"110",correct: false },
        ]
    },
    {
        question:"كم سجدة في القرآن الكريم",
        answers: [
            {text:"  سجدة 15" ,correct: false },
            {text:" 12 سجدة ",correct: false},
            {text:" 14 سجدة",correct: false },
            {text:"11 سجدة",correct: true },
        ]
    },
    {
        question:"من هم اولو العزم من الرسل",
        answers: [
            {text:" نوح" ,correct: false },
            {text:" ابراهيم",correct: false },
            {text:" عيسي",correct: false },
            {text:"موسي",correct: false },
            {text:"محمد",correct: false },
            {text:"جميع ما سبق",correct: true},

        ]
    },
    {
        question:"ما عدد ابواب الجنه",
        answers: [
            {text:" 8" ,correct: true },
            {text:" 5",correct: false },
            {text:" 7",correct: false },
            {text:"10",correct: false },
        ]
    },
    {
        question:"مم خلقت الملائكه",
        answers: [
            {text:" من طين" ,correct: false },
            {text:" من نور",correct: true },
            {text:" من ماء",correct: false },
            {text:"لا شئ مما سبق",correct: false },
        ]
    },
    {
        question:"ما السورة التي تعدل ثلث القرآن",
        answers: [
            {text:" سورة الفاتحه" ,correct: false },
            {text:"سورة الفلق",correct: false },
            {text:" سورة الاخلاص",correct: true },
            {text:"لا شئ مما سبق",correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
            button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        StartQuiz();
    }
});

StartQuiz();




