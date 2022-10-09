$(function () {
    questionTableInit();
});

function questionTableInit() {
    var questionCreatedData = JSON.parse(localStorage.getItem('questionData'));

    const userName = localStorage.getItem('userName');
    if (questionCreatedData) {
        document.getElementById('questionMappingInTable').innerHTML = questionCreatedData.map((question, index) =>
            `<tr class="rm-table-tr-view-question">
                <td>${index + 1}</td>
                <td class="searchDataTD rm-wrap-text" data-question="${question.myTitle}">${question.myTitle}</td>
                <td class="searchDataTD rm-wrap-text" data-question="${question.myAnswer}">${question.myAnswer}</td>
                <td>${userName}</td>
            </tr>`
        ).join('');
    }
    searchInteraction();
}

function searchInteraction() {
    var $rows = $('#QuestionListTable tbody > tr');
    $('#questionSearchInputInteraction').keyup(function () {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
        }).hide();
    });
}