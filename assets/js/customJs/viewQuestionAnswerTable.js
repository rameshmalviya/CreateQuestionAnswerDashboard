$(function () {
    questionTableInit();
});

function questionTableInit() {
    var questionCreatedData = JSON.parse(localStorage.getItem('questionCreateData'));
    const userName = localStorage.getItem('userName');
    if (questionCreatedData) {
        document.getElementById('questionMappingInTable').innerHTML = questionCreatedData.map((question, index) =>
            `<tr>
                <td><strong>${question.myTitle}</strong></td>
                <td> ${question.myAnswer}</td>
                <td>${userName}</td>
            </tr>`
        ).join('');
    }
}