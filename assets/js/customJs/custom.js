$(function () {
    initQuestion();
});

function initQuestion() {
    loginFomConfigration();
    createQuestionFormConfigration();
    userNameMapping();
}

function loginFomConfigration() {
    $("#submitLogin").click(function () {

        if ($("#userName").val() == "Priti Seth" && $("#password").val() == "123") {
            console.log('validatedUserName');
            localStorage.setItem('userName', 'Priti Seth');
            window.location.href = "homePage.html";
        } else {
            const template = `<div class="error-message">Please enter valid userName and password.</div>`;
            $('#validateMessage').html(template);
        }
    });
}


function createQuestionFormConfigration() {
    const form = document.querySelector('#formQuestion');
    let stories = []
    if (form) {
        form.addEventListener('submit', (e) => {
            debugger
            e.preventDefault();
            const questionTitle = $('#createQuestionTitle').val();
            const questionAnswer = $('#createQuestionAnswer').val();
            if (questionTitle !== "", questionAnswer !== "") {
                stories.push({
                    myTitle: questionTitle,
                    myAnswer: questionAnswer,
                });
                localStorage.setItem('questionCreateData', JSON.stringify(stories));
                $('#createQuestionTitle').val('');
                $('#createQuestionAnswer').val('');
                let countOfCreatedQuestion = stories.length;
                $('#countQuestionsCreated').html(countOfCreatedQuestion);
            }
        });
    }
}


function userNameMapping() {
    debugger
    const userName = localStorage.getItem('userName');
    $('#userNameSpan').text(userName);
    console.log(userName);
}