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
                <td class="rm-wrap-text">${question.myAnswer}</td>
                <td>${userName}</td>
            </tr>`
        ).join('');
    }
    searchInteraction();
}

function searchInteraction() {
    $(document).on('input', '#questionSearchInputInteraction', function () {
        var searchValueQuestion = this.value;
        var reg = new RegExp(searchValueQuestion, "i");
        var selector = $('.rm-table-tr-view-question');
        if (searchValueQuestion) {
            selector.hide().filter(function () {
                return $(this).find('.searchDataTD').data('question').match(reg);
            }).show();
        } else {
            selector.show();
        }
    });
}