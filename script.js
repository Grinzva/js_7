let ItTerms = {
    "Адепт" : "Продвинутый диджитал-специалист",
    "Айтишник" : "IT-специалист",
    "Гуру" : "Уважаемый, знающий человек",
    "Девопс, DevOps" : "Инженер, который собирает воедино все части проекта",
    "Джуниор, джун" : "Младший специалист. Новичок с минимальными знаниями и опытом работы",
    "Ламер" : "Начинающий специалист, который считает себя продвинутым экспертом, хотя это не так",
    "Лид, тимлид, Team Lead" : "Руководит командой и процессами, решает спорные вопросы",
    "Мидл" :  "Специалист. Следующий уровень после джуниора — более самостоятельный и опытный",
    "Пио, PO" : "Владелец продукта. Организует процессы в команде разработки, не отвлекается на маркетинг и продажи. Стыкует пожелания заказчика с возможностями разработки",
    "Пиэм, PM" : "Взаимодействует с заказчиком, выясняет его потребности и желания, доносит их до команды"
}


let newItTerms = { 
    "Мидл" : "Специалист. Следующий уровень после джуниора — более самостоятельный и опытный",
    "Апдейт" : "Обновление, улучшение программного обеспечения",
    "Баг-репорт" : "Отчет об ошибке, который пишет программист или тестер, когда ее обнаружит. «Ничего не работает» — плохой баг-репорт",
    "Бигбар" : "Графическое изображение, которое описывает чувства, черты характера, эмоции пользователя на веб-форумах"
}

let newTerms = Object.assign(ItTerms, newItTerms);

for (let propName in newTerms) {
    console.log(propName + '=' + newTerms[propName]);
}

let it_lang = Number(prompt("Введите изучаемый язык:\n1 - Python\n2 - JS\n3 - C#\n4 - Java\n5 - C++\n6 - SQL\n7 - Прочие"));

switch (it_lang) {
    
    case 1:
        alert( 'Python - это это высокоуровневый язык программирования общего назначения . Его философия дизайна делает акцент на читаемости кода с использованием значительных отступов.' );
        break;
    case 2:
        alert( 'JS - часто сокращенно JS , является языком программирования и базовой технологией Интернета , наряду с HTML и CSS . 99% веб-сайтов используют JavaScript на стороне клиента для поведения веб-страницы.' );
        break;
    case 3:
        alert( 'C# - это язык программирования высокого уровня общего назначения , поддерживающий несколько парадигм.' );
        break;
    case 4:
        alert( 'Java - это высокоуровневый , основанный на классах , объектно-ориентированный язык программирования.' );
        break;
    case 5:
        alert( 'C++ - это высокоуровневый язык программирования общего назначения.' );
        break;
    case 6:
        alert( 'SQL - это доменно-ориентированный язык, используемый для управления данными, особенно в реляционных системах управления базами данных.' );
        break;
    default:
        alert("Выбран нераспознанный язык программирования.");
        break;
}

let programmers = ["Билл Гейтс", "Марк Цукерберг", "Гвидо ван Россум", "Брайн Керниган", "Сэр Тим Бернерс-Ли"];

programmers.forEach(function(programmer) {
    console.log(programmer);
}); 

while (true) {
    let profession = Number(prompt("Выберете пофессию:\n1 - Aдминистратор базы данных\n2 - ERP-программист\n3 - Тестировщик программного обеспечения (ПО)\n4 - Модератор форума\n5 - Верстальщик HTML (HTML-верстальщик)\n6 - Системный администратор\n7 - IT-евангелист\n8 - технический писатель\n9 - выход"))

  if  (profession == 1) {
    alert("Администратор базы данных (DBA, Database Administrator) — специалист, обслуживающий базы данных. Это довольно узкая специализация, которая появляется при реальной потребности компании в обеспечении высокой доступности данных.")
  }

  if  (profession == 2) {
  alert("ERP-программист обеспечивает функционирование системы автоматизации учета, управления и планирования на предприятии (ERP-системы). Профессия подойдет людям, увлеченным разработкой ПО и вообще ИТ. Кстати, недавно центр профориентации ПрофГид разработал точный тест на профориентацию, который сам расскажет, какие профессии вам подходят, даст заключение о вашем типе личности и интеллекте. Профессия подходит тем, кого интересует информатика (см. выбор профессии по интересу к школьным предметам).")
  }


    if (profession == 3) {
      alert("Тестировщик ПО (Software Tester, Software Testing Engineer) занимается проверкой работоспособности программного обеспечения. Профессия с явным техническим уклоном, она понравится абитуриентам, без труда сдавшим ЕГЭ по информатике и математике. Кстати, недавно центр профориентации ПрофГид разработал точный тест на профориентацию, который сам расскажет, какие профессии вам подходят, даст заключение о вашем типе личности и интеллекте. Профессия подходит тем, кого интересует информатика (см. выбор профессии по интересу к школьным предметам).")
  }


    if (profession == 4) {
      alert("Модератор форума (от лат. moderor – умеряю, сдерживаю) регулирует работу интернет-форума, отвечает на вопросы посетителей, выступает в роли цензора (следит за поведением участников беседы, пресекает попытки некорректных или нецензурных высказываний, рекламных сообщений). Профессия подходит общительным, доброжелательным и выдержанным людям. Кстати, недавно центр профориентации ПрофГид разработал точный тест на профориентацию, который сам расскажет, какие профессии вам подходят, даст заключение о вашем типе личности и интеллекте.")
  }


    if (profession == 5) {
      alert("HTML-верстальщик – это специалист, который создает структуру web-страниц, формирует каркас сайта, переводя задуманный дизайн в HTML, CSS и, возможно, немного JavaScript. Другими словами, он пишет понятный браузеру код, чтобы корректно передать всю графику, придуманную дизайнером.  Кстати, недавно центр профориентации ПрофГид разработал точный тест на профориентацию, который сам расскажет, какие профессии вам подходят, даст заключение о вашем типе личности и интеллекте. Профессия подходит тем, кого интересует информатика (см. выбор профессии по интересу к школьным предметам).")
  }  


    if (profession == 6) {
      alert("Системный администратор (сисадмин или просто админ – от английского system administrator, sysadmin, admin) управляет компьютерными сетями, серверами и другим оборудованием сферы ИТ. Он обеспечивает работу информационной инфраструктуры предприятия: настраивает ее, поддерживает и развивает.  Кстати, недавно центр профориентации ПрофГид разработал точный тест на профориентацию, который сам расскажет, какие профессии вам подходят, даст заключение о вашем типе личности и интеллекте. Профессия подходит тем, кого интересует информатика (см. выбор профессии по интересу к школьным предметам).")
  }


    if (profession == 7) {
      alert("IT-евангелист продвигает программные продукты или смежные технологии. Профессия подойдет коммуникабельным людям, увлеченным IT.  Кстати, недавно центр профориентации ПрофГид разработал точный тест на профориентацию, который сам расскажет, какие профессии вам подходят, даст заключение о вашем типе личности и интеллекте. Профессия подходит тем, кого интересует информатика (см. выбор профессии по интересу к школьным предметам).")
  }

    if (profession == 8) {
      alert("Технический писатель (technical writer), еще одно название профессии – технический коммуникатор (technical communicator), составляет руководства по эксплуатации, инструкции, мануалы, журнальные статьи и другие вспомогательные документы для передачи сложной технической информации в понятной пользователям форме. Профессия подходит и гуманитариям, и технарям. Кстати, недавно центр профориентации ПрофГид разработал точный тест на профориентацию, который сам расскажет, какие профессии вам подходят, даст заключение о вашем типе личности и интеллекте.")
  }


    if (profession == 9) {
      break
  }
}