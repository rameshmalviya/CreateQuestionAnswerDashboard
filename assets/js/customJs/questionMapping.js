$(function () {
    questionMappingInit();
});

function questionMappingInit() {
    mappingQuestionComponent();
}

function mappingQuestionComponent() {
    var questionCreatedData = JSON.parse(localStorage.getItem('questionData'));
    // const finalQuestionsData = questionCreatedData.flat();

    if (questionCreatedData) {
        document.getElementById('createdQuestionCard').innerHTML = questionCreatedData.map((question, index) =>
            `<div class="card rm-question-card mb-4" id="question_${index}">
            <span class="question-count">Question ${index + 1}</span>
            <div class="card-body rm-card-question-body">
                <h5 class="card-title" data-question="${question.myTitle}">${question.myTitle}</h5>
                <p class="card-text">
                ${question.myAnswer}
                </p>
            </div>
            </div>`
        ).join('');
    }
    searchInteraction();
}

function searchInteraction() {
    // $(document).on('input', '#questionSearchInputInteraction', function () {
    //     var searchValueQuestion = this.value;
    //     var reg = new RegExp(searchValueQuestion, "i");
    //     var selector = $('.rm-question-card');
    //     if (searchValueQuestion) {
    //         selector.hide().filter(function () {
    //             return $(this).find('.card-title').data('question').match(reg);
    //         }).show();
    //     } else {
    //         selector.show();
    //     }
    // });

    var $rows = $('#createdQuestionCard .rm-question-card');
    $('#questionSearchInputInteraction').keyup(function () {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
        }).hide();
    });
}