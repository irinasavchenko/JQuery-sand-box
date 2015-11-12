var dict = {
    "edu": {
    ru: "Образование",
    en: "Education",
    ua: "Освіта"
    },
    "exp": {
    ru: "Опыт",
    en: "Experience",
    ua: "Досвід"
    },
    "Choose the language:": {
    ru: "Выберите язык:",
    ua: "Оберить мову"
    },
    "exp_details": {
    en: "I have more than 7 years experience in front-end development",
    ru: "Имею более чем 7 лет опыта в разработки front-end приложений",
    ua: "Маю більш ніж 7 років досвіду розробки front-end програм"
    }
    };

$(document).ready(function() {
    $('body').translate({lang: "en", t: dict}); // initialize the plugin and translate the entire page body
    $('#language').change(function () { //choose language
    $('body').translate({lang: $(this).val(), t: dict});
    });
    });


