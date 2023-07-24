import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import sync_vs_async from "../../img/sync-vs-async.png";

import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

const TimeDate = () => {
  const codeStyle = materialDark;
  const location = useLocation();
  const locationPathname = location.pathname;

  return (
    <div className={s.lessonsBox}>
      <button className={s.home}>
        <Link to="/Start">
          <FcHome customStyle={{ with: "40vh" }} size="3em" />
        </Link>
      </button>
      <GitHubBtn locationPathname={locationPathname} />

      <div className={s.breadNav}>
        <Scrollspy
          items={["branching", "section-2", "section-3"]}
          currentClassName="is-current"
        >
          <div className={s.breadNavList}>
            <li>
              <a href="#async">Асинхронність</a>
            </li>
            <li>
              <a href="#timer">Таймери</a>
            </li>
            <li>
              <a href="#date-time">Дата та час</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="async">Асинхронність</h1>
        <p>
          Весь код виконується процесором комп'ютера. Код, який ми писали, досі
          був синхронним, тобто займав процесор на весь час свого виконання.
          Наприклад, швидкість виконання циклу для ітерації масиву залежить від
          швидкості процесора.
        </p>
        <p>
          Є операції, які взаємодіють із зовнішнім світом. Наприклад, обмін
          даними із сервером по мережі, що набагато повільніше, ніж відримання
          їх із пам'яті. Якщо такі операції обробляються синхронно, процесор
          простоює поки йде мережевий запит на сервер, замість того щоб
          виконувати інший код.
        </p>
        <p>
          Синхронний код виконується послідовно, кожна інструкція чекає, поки
          виконається попередня. Коли ви викликаєте функцію, яка виконує тривалу
          дію, це зупиняє програму весь час її виконання. Тобто, у моделі
          синхронного програмування все відбувається по черзі.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Уявіть чергу покупки квитків на поїзд. Ви не можете почати купувати
            квиток до тих пір, поки не придбає людина перед вами. Так само люди,
            які стоять за вами, не можуть почати купувати квитки до тих пір,
            поки не купите ви.
          </p>
        </div>
        <p>
          В асинхронному коді одночасно можуть виконуватись кілька операцій. У
          такій моделі мережевий запит на сервер не зупинить програму, вона
          продовжуватиме виконувати інші операції. Коли запит завершиться,
          програма інформується про це та відримує доступ до результату
          (наприклад, даних від сервера).
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Уявіть обід у ресторані. Ви та інші відвідувачі, замовляєте їжу. Вам
            не пвідрібно чекати, доки їм принесуть їжу, перш ніж замовляти. Так
            само інші відвідувачі не повинні чекати, поки ви відримаєте свою
            страву і почнете їсти, перш ніж вони зможуть замовити. Кожен
            відримає свою страву, щойно її закінчать гвідувати.
          </p>
        </div>
        <p>
          Розглянемо різницю на прикладі, в якому програма виконує два мережеві
          запити на сервер, після чого обробляє їх результат. Операції 1і 2це
          функції, які роблять запити на севрер, а 3, 4і 5будь-який інший
          звичний вам код.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={sync_vs_async} alt="" />
        </div>
        <p>
          У синхронній моделі все зрозуміло і досить сумно - попередні операції
          блокують вивільнення наступних поки що не закінчаться. Якщо операції
          3-5 це обробка кліків користувача, то інтерфейс просто зависне доки не
          виконаються і обробляться результати запитів 1-2.
        </p>
        <p>
          Наприклад, користувач надіслав коментар (мережевий запит) і в той же
          час захвідів відкрити сайдбар з останніми новинами. Після кліку
          відправити коментар, інтерфейс зависне і не реагуватиме на його дії
          поки від сервера не прийде результат відправлення коментаря.
          Погодьтеся, це не дуже зручно.
        </p>
        <p>
          У асинхронної моделі старт мережного запиту викликає хіба що
          розгалуження, тобто запуск запиту і результат обробки це різні дії.
          Поки виконується запит, програма продовжує працювати та виконувати
          інший код. Як тільки мережевий запит виконано, програма може почати
          обробляти його результат, як тільки буде вільна. Це означає, що
          користувач надіслав коментар і відразу зміг відкрити сайдбар зі
          свіжими новинами, не чекаючи поки прийде відповідь від сервера.
        </p>
        <p>
          Тобто в одиницю часу все також може виконуватися тільки одна операція,
          тому що однопвідочний JavaScript. Асинхронне програмування досягається
          шляхом відкладених викликів функцій, де ініціалізація асинхронної
          операції та обробка її результату – це різні дії.
        </p>
        <h3>Асинхронний код</h3>
        <p>
          У синхронному коді наступна інструкція не може розпочати виконання
          поки не виконається попередня. Тобто, інструкції обробляються
          послідовно.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
console.log("First log");
console.log("Second log");
console.log("Third log");`}
        </SyntaxHighlighter>
        <p>
          Наступний код – асинхронний. З функцією setTimeout()ми ознайомимося
          далі. Зараз про неї нам пвідрібно знати тільки те, що вона приймає два
          параметри: callback-функцію, яка буде викликана після закінчення часу,
          який ми передаємо другим аргументом.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
// Will run first
console.log("First log");

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log("Second log");
}, 2000);

// Will run second
console.log("Third log");`}
        </SyntaxHighlighter>
        <p>
          Функція setTimeout()відпрацьовує синхронно і реєструє відкладений
          виклик переданої callback-функції, яка буде викликана асинхронно через
          зазначений проміжок часу.
        </p>
        <h3>Багатопвідочність</h3>
        <p>
          Не плутайте асинхронність та багатопвідочність (паралелізм) – це різні
          моделі програмування. Наведемо просту аналогію, яка все розставить на
          свої місця. Уявіть, що ви шеф у ресторані і приходить замовлення на
          каву та тости.
        </p>
        <ul>
          <li>
            <strong>Синхронний однопвідоковий підхід</strong> - ви самі спочатку
            гвідуєте каву, пвідім тости і подаєте їх, після чого прибираєте на
            кухні.
          </li>
          <li>
            <strong>Асинхронний однопвідочний підхід</strong> - ви починаєте
            гвідувати каву і встановлюєте таймер, пвідім починаєте гвідувати
            тости і встановлюєте таймер. Поки кава та тости гвідуються, ви
            прибираєте на кухні. Коли таймери спрацьовують, ви знімаєте з вогню
            каву, дістаєте тости і подаєте їх.
          </li>
          <li>
            <strong>Багатопвідоковий підхід (паралелізм)</strong> – ви наймаєте
            двох помічників, одного для пригвідування кави, а іншого для тостів.
            Тепер у вас є проблема управління помічниками (пвідоками), щоб вони
            не конфліктували один з одним на кухні під час спільного
            використання ресурсів.
          </li>
        </ul>
        <p>
          В асинхронних однопвідокових процесах у вас є графік завдань, де деякі
          завдання залежать від результату робвіди інших. У міру виконання
          кожного завдання викликається код обробки її результату. Але вам
          пвідрібний лише один працівник для виконання всіх завдань, а не один
          працівник на завдання.
        </p>
        <h1 id="timer">Таймери</h1>
        <p>
          Внутрішній таймер-планувальник браузера дозволяє відкладати виклик
          функції на певний час. Для цього є тайм-аути та інтервали, які
          контролюють коли і як часто викликається функція. Таймери реалізовані
          в браузері, а не вбудовані в мову і доступні на глобальному об'єкті
          <span className={s.Span}>window</span>.
        </p>
        <h3>Таймаут</h3>
        <p>
          Метод <span className={s.Span}>setTimeout()</span> дозволяє
          запланувати запуск функції через певний час.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const timerId = setTimeout(callback, delay, arg1, arg2, ...);`}
        </SyntaxHighlighter>
        <ul>
          <li>
            <span className={s.Span}>callback- функція</span>, виконання якої
            пвідрібно запланувати.
          </li>
          <li>
            <span className={s.Span}>delay- час</span> у мілісекундах, через
            який callback-функція буде викликана один раз.
          </li>
        </ul>
        <p>
          Додаткові аргументи ( <span className={s.Span}>arg1</span>,{" "}
          <span className={s.Span}>arg2</span> тощо) будуть передані
          callback-функції під час виклику. Повертає цифровий ідентифікатор
          створеного таймера, який використовується для видалення.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/oNZPVjw?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <p>
          Якщо нам, з якоїсь причини, пвідрібно скасувати виклик функції
          всередині таймууту, використовується метод{" "}
          <span className={s.Span}>clearTimeout(id)</span>, який приймає
          ідентифікатор таймера та очищає його (видаляє).
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const greet = () => {
  console.log("Hello!");
};

const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);`}
        </SyntaxHighlighter>
        <p>
          Оскільки ми викликали <span className={s.Span}>clearTimeout()</span>,
          який виконається раніше, ніж буде викликана функція{" "}
          <span className={s.Span}>greet()</span>, таймер з
          <span className={s.Span}>timerId</span> буде видалено і реєстрація
          відкладеного виклику
          <span className={s.Span}>greet()</span> скасується. Тому в консоль
          нічого не виведеться.
        </p>
        <h3>Інтервал</h3>
        <p>
          <span className={s.Span}>Метод setInterval()</span> - це простий
          спосіб повторення коду знов і з встановленим проміжком часу повторень.
          Синтаксис і параметри такі ж як{" "}
          <span className={s.Span}>setTimeout()</span>. На відміну від{" "}
          <span className={s.Span}>setTimeout()</span>, інтервал запускає
          виконання функції неодноразово, а регулярно повторює її через
          зазначений проміжок часу. Зупинити виконання можна викликом методу{" "}
          <span className={s.Span}>clearInterval(id)</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const timerId = setInterval(callback, delay, arg1, arg2, ...);`}
        </SyntaxHighlighter>
        <p>
          При натисканні на кнопку «Start» запустимо інтервал і кожну секунду
          виводитимемо в консоль рядок. Використовуємо{" "}
          <span className={s.Span}>Math.random()</span>, щоб рядки були різні.
          По кліку на кнопку «Stop» викличемо{" "}
          <span className={s.Span}>clearInterval()</span> і передамо
          ідентифікатор інтервалу, який треба зупинити.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/dyvqrNZ?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>Частвіда спрацьовування лічильника</h3>
        <p>
          Браузерний таймер має мінімальну можливу затримку. У сучасних
          браузерах вона коливається приблизно від мілісекунд{" "}
          <span className={s.Span}>0</span> до
          <span className={s.Span}>4</span>. У більш старих браузерах затримка
          може бути більшою і досягати <span className={s.Span}>15</span>{" "}
          мілісекунд. За стандартом, мінімальна затримка складає{" "}
          <span className={s.Span}>4</span> мілісекунди, тому різниці між
          <span className={s.Span}>setTimeout(callback, 1)</span> і{" "}
          <span className={s.Span}>setTimeout(callback, 4)</span> немає.
        </p>
        <p>
          Таймер може спрацьовувати рідше, ніж зазначено в параметрі delay, тому
          що при занадто великому завантаженні процесора деякі запуски
          функцій-інтервалів будуть пропущені. Браузери продовжують виконувати
          таймів та інтервали навіть якщо вкладка браузера неактивна, але при
          цьому знижують частвіду спрацьовування таймерів.
        </p>
        <h1 id="date-time">Дата та час</h1>
        <p>
          Клас <span className={s.Span}>Date</span> абстрагує більшу частину
          робвіди з датами безпосередньо. Це дозволяє нам представляти моменти у
          часі як об'єкти та маніпулювати ними заздалегідь певними методами.
          Використовуючи можливості класу, <span className={s.Span}>Date</span>{" "}
          можна створювати годинники, лічильники, календарі та інші інтерактивні
          елементи інтефрейсу.
        </p>
        <h3>Створення дати</h3>
        <p>
          Примірник об'єкта <span className={s.Span}>Date</span> це об'єкт, що
          представляє певний момент часу. Створення дати без аргументів,
          повертає об'єкт, що зберігає дату та час на момент його ініціалізації,
          тобто пвідочні. У рядковому перетворенні об'єкт повертає результат
          виклику методу
          <span className={s.Span}>toString()</span>, у першому лозі ми
          відримаємо рядок, а чи не об'єкт.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"`}
        </SyntaxHighlighter>
        <h3>Unix час</h3>
        <p>
          Внутрішньо дати представлені в мілісекундах, що пройшли з півночі 1
          січня 1970 року в часовому поясі UTC. Для комп'ютера це дата початку
          відліку всього часу - час Unix. Тому при ініціалізації дати одним
          числом, воно є кількістю минулих мілісекунд.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"`}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>getTime()</span> повертає числове
          подання дати (<span className={s.Span}>timestamp</span>) - кількість
          мілісекунд минулих з півночі 1 січня 1970 року.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const date = new Date();
console.log(date.getTime()); // 1624021654154`}
        </SyntaxHighlighter>
        <p>
          Зручність цього формату полягає в тому, що можна представляти точні
          моменти часу у вигляді одного числа і не турбуватися про дати, рядки і
          часові пояси, так як можна відримати всю необхідну інформацію, коли
          необхідно.
        </p>
        <h3>Встановлення дати</h3>
        <p>
          При створенні екземпляра класу <span className={s.Span}>Date</span>{" "}
          можна встановити дату рядком або числами. Рядок може описувати лише
          дату або дату та час.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const teamMeetingDate = new Date("March 16, 2030");
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"`}
        </SyntaxHighlighter>
        <p>
          Установка часу у вигляді рядків внутрішньо викликає метод
          <span className={s.Span}>Date.parse()</span>, який перетворює рядок на
          число - кількість мілісекунд. Саме тому формат рядка, що передається,
          дуже гнучкий. Наприклад, можна не вказувати нуль для днів та місяця.
          Розглянемо кілька прикладів, що призведуть до однакового результату.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
new Date("2030-03-16");
new Date("2030-03");
new Date("2030");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");`}
        </SyntaxHighlighter>
        <p>
          Інший спосіб створення нових об'єктів - це передати сім чисел, які
          описують рік, місяць (починається з 0), день, години, хвилини, секунди
          та мілісекунди. Обов'язкові лише перші три.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const date = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)`}
        </SyntaxHighlighter>
        <h3>Методи</h3>
        <p>
          Примірник класу <span className={s.Span}>Date</span> має безліч
          методів для читання та запису значень дати та часу. Методи повертають
          або надають рік, місяць, день місяця або тижня, годину, хвилину,
          секунду та мілісекунду для кожного екземпляра. Ці дані можуть бути
          представлені як рядки з урахуванням місцевого календаря або мови.
        </p>
        <h3>Гетери</h3>
        <p>
          Гетери використовуються для читання всієї дати або окремої складової.
          Значення, що повертається, залежить від пвідочного часового поясу,
          встановленого на вашому комп'ютері.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const date = new Date();
console.log("Date: ", date);

// Повертає день місяця від 1 до 31
console.log("getDate(): ", date.getDate());

// Повертає день тижня від 0 до 6
console.log("getDay(): ", date.getDay());

// Повертає місяць від 0 до 11
console.log("getMonth(): ", date.getMonth());

// Повертає рік з 4 цифр
console.log("getFullYear(): ", date.getFullYear());

// Повертає час
console.log("getHours(): ", date.getHours());

// Повертає хвилини
console.log("getMinutes(): ", date.getMinutes());

// Повертає секунди
console.log("getSeconds(): ", date.getSeconds());

// Повертає мілісекунди
console.log("getMilliseconds(): ", date.getMilliseconds());`}
        </SyntaxHighlighter>
        <p>
          Існують еквівалентні версії цих методів, які повертають значення у
          форматі UTC (Coordinated Universal Time), а не адаптовані до
          пвідочного часового поясу користувача.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const date = new Date();
console.log("Date: ", date);

// Повертає день місяця від 1 до 31
console.log("getUTCDate(): ", date.getUTCDate());

// Повертає день тижня від 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Повертає місяць від 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Повертає рік з 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Повертає час
console.log("getUTCHours(): ", date.getUTCHours());

// Повертає хвилини
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Повертає секунди
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Повертає мілісекунди
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());`}
        </SyntaxHighlighter>
        <h3>Сетери</h3>
        <p>
          Все, що можна прочитати, можна записати, методи для запису називаються
          також як гетери, але починаються з приставки{" "}
          <span className={s.Span}>set</span>. Також для всіх методів є їхній
          UTC еквівалент.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const date = new Date("March 16, 2030 14:25:00");

date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"`}
        </SyntaxHighlighter>
        <h3>Форматування дати</h3>
        <p>
          Об'єкт дати може бути представлений у різних малих та числових
          форматах. І тому існує цілий набір методів. Наприклад,{" "}
          <span className={s.Span}>toString()</span> і{" "}
          <span className={s.Span}>toDateString()</span> повертають
          <span className={s.Span}>toTimeString()</span> стандартне рядкове
          уявлення, не задане жорстко в стандарті, а залежить від браузера.
          Єдина вимога щодо нього - читання людиною. Метод{" "}
          <span className={s.Span}>toString()</span> повертає дату цілком, а{" "}
          <span className={s.Span}>toDateString()</span> й{" "}
          <span className={s.Span}>toTimeString()</span> – лише дату та час
          відповідно.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const date = new Date("March 16, 2030 14:25:00");

date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toLocaleTimeString();
// "2:25:00 PM"

date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date.toDateString();
// "Sat Mar 16 2030"

date.toISOString();
// "2030-03-16T12:25:00.000Z"

date.toLocaleString();
// "3/16/2030, 2:25:00 PM"

date.getTime();
// 1899894300000`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default TimeDate;
