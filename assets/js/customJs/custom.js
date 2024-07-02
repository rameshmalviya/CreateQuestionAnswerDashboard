$(function () {
    initQuestion();
});

function initQuestion() {
    loginFomConfigration();
    createQuestionFormConfigration();
    userNameMapping();
    countCreatededQuestion();
    AdminAndViewersSwitchScreenInteraction();
}

function loginFomConfigration() {
    $("#submitLogin").click(function () {
        if ($("#userName").val() == "Admin" && $("#password").val() == "123") {
            console.log('validatedUserName');
            localStorage.setItem('userName', 'Admin');
            window.location.href = "homePage.html";
        } else if ($('#userName').val() === "Users" && $('#password').val() === "user123") {
            localStorage.setItem('userName', 'Users');
            window.location.href = "homePage.html";
        } else {
            const template = `<div class="error-message">Please enter valid userName and password.</div>`;
            $('#validateMessage').html(template);
        }
    });
}


function createQuestionFormConfigration() {
    const form = document.querySelector('#formQuestion');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            debugger
            const questionTitle = $('#createQuestionTitle').val();
            const questionAnswer = $('#createQuestionAnswer').val();
            if (questionTitle !== "", questionAnswer !== "") {

                var existingEntries = JSON.parse(localStorage.getItem("questionData"));
                if (existingEntries == null) {
                    existingEntries = [];
                };
                var entry = {
                    myTitle: questionTitle,
                    myAnswer: questionAnswer,
                };
                existingEntries.push(entry);
                localStorage.setItem("questionData", JSON.stringify(existingEntries));


                $('#createQuestionTitle').val('');
                $('#createQuestionAnswer').val('');

                if (existingEntries != null) {
                    let countOfCreatedQuestion = existingEntries.length;
                    $('#countQuestionsCreated').html(countOfCreatedQuestion);
                }
            }
        });
    }
}

function countCreatededQuestion() {
    const question = JSON.parse(localStorage.getItem("questionData"));
    if (question != null) {
        let countOfCreatedQuestion = question.length;
        $('#countQuestionsCreated').html(countOfCreatedQuestion);
        var result = (countOfCreatedQuestion / 100) * 100;
        $('#TotalParcentageQuestion').text(`${result}%`);
    }
}


function userNameMapping() {
    const userName = localStorage.getItem('userName');
    $('#userNameSpan').text(userName);
    console.log(userName);
}

function AdminAndViewersSwitchScreenInteraction() {
    const userName = localStorage.getItem('userName');
    // $('#CreateQuestionForAdmin').hide();
    // $('#viewQuestionForViewers').hide();

    if (userName === "Admin") {
        $('#CreateQuestionForAdmin').show();
        $('#createQuestionButton').show();
    } else if (userName === "Users") {
        $('#viewQuestionForViewers').show();
        $('#createQuestionButton').hide();
    }

}
