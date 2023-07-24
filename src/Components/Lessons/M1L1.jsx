import React from "react";
import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import table1 from "../../img/table1.png";
import table2 from "../../img/table2.png";
import operatorTable1 from "../../img/not-strict-equality.png";
import operatorTable2 from "../../img/strict-equality.png";
import string from "../../img/string-idx.png";
import code1 from "../../img/code1.png";
import booleanOperators from "../../img/boolean-operators.png";
import Scrollspy from "react-scrollspy";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FcHome } from "react-icons/fc";

import { Link, useLocation } from "react-router-dom";
import GitHubBtn from "../GitHubBtn";

const M1L1 = () => {
  const codeStyle = materialDark;
  const location = useLocation();
  const locationPathname = location.pathname;

  return (
    <div className={s.lessonsBox}>
      <button className={s.home}>
        <Link to="/Start">
          <FcHome
            customStyle={{ with: "40vh", marginTop: "20vw" }}
            size="3em"
          />
        </Link>
      </button>
      <GitHubBtn locationPathname={locationPathname} />

      <div className={s.breadNav}>
        <Scrollspy
          items={[
            "section-1",
            "section-2",
            "section-3",
            "section-4",
            "section-5",
            "section-6",
            "section-7",
            "section-8",
            "section-9",
          ]}
          currentClassName="is-current"
        >
          <div className={s.breadNavList}>
            <li>
              <a href="#section-1">Підключення скрипту</a>
            </li>
            <li>
              <a href="#section-2">Інструменти розробника</a>
            </li>
            <li>
              <a href="#section-3">Основи синтаксису</a>
            </li>
            <li>
              <a href="#section-4">Змінні та типи</a>
            </li>

            <li>
              <a href="#section-5">Взаємодія з користувачем</a>
            </li>

            <li>
              <a href="#section-6">Основні оператори</a>
            </li>
            <li>
              <a href="#section-7">Числа</a>
            </li>
            <li>
              <a href="#section-8">Рядки</a>
            </li>
            <li>
              <a href="#section-9">Логічні оператори</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1>Знайомство з JavaScript</h1>
        <p>
          Коли ми говоримо про програмування, перше, що спадає на думку це набір
          інструкцій у файлі. Вихідний код (source code) - це текст комп'ютерної
          програми будь-якою мовою програмування, набір синтаксичних
          конструкцій, що легко читають, що описують набір інструкцій для
          комп'ютера.
        </p>

        <p>
          Сам собою вихідний код незрозумілий для машини. Є крок, що виконується
          після написання програми, який конвертує вихідний код у файлі набір
          інструкцій зрозумілих комп'ютеру. Цим займається спеціальна програма:
          компілятор чи інтерпретатор . Звідси можна дійти невтішного висновку -
          код пишеться задля машини, а розробника. Вихідний код повинен як
          правильно вирішувати завдання, а й бути зрозумілим.
        </p>

        <h3>Логічне мислення</h3>
        <p>
          У світі є багато мов програмування. Вони не такі складні, як людські,
          тому що складаються з досить маленького набору синтаксичних
          конструкцій, а принцип роботи і базові концепції схожі між різними
          мовами.
        </p>
        <p>
          Досвідчені розробники розглядають проблеми з погляду алгоритмів -
          набору кроків, які потрібно виконати задля досягнення певної мети. Ми
          постійно використовуємо алгоритми у повсякденному житті. Наприклад,
          процес приготування чаю – це набір необхідних кроків (алгоритм) задля
          досягнення результату. Коли ви звикнете вибудовувати рішення задачі у
          вигляді алгоритму, мова програмування буде лише інструментом.
        </p>

        <p>
          <span className={s.Span}>JavaScript</span> - реалізація специфікації
          EcmaScript, високорівнева мова програмування, яку підтримують всі
          сучасні веб-браузери. Спочатку призначений для взаємодії з елементами
          веб-сторінок та додавання інтерактивності.
        </p>

        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            JavaScript немає жодного відношення до мови Java. Це дві незалежні
            мови програмування.
          </p>
        </div>

        <p>
          При Front-end розробці JavaScript використовується у зв'язці з HTML та
          CSS для забезпечення функціональності веб-сторінки, такої як:
        </p>
        <ul>
          <li>нескладні обчислення</li>
          <li>перевірка та маніпуляція введеними користувачем даними</li>
          <li>зберігання інформації у браузері користувача</li>
          <li>динамічна зміна HTML-документа</li>
          <li>реакція на дії користувача</li>
          <li>створення інтерактивних елементів: галерей, графіків тощо.</li>
          <li>взаємодія з бекендом</li>
        </ul>

        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Якщо JavaScript-код пишеться для виконання в браузері (Front-end),
            розробник не має інструментів і доступу до файлової або операційної
            системи з міркувань безпеки.
          </p>
        </div>

        <p>На сьогоднішній день використовуючи JavaScript можна створювати:</p>

        <ul>
          <li>веб-додатки на фреймворках React, Vue, Angular та інших</li>
          <li>бекенд програми на Node.js</li>
          <li>мобільні програми на React Native або Ionic</li>
          <li>десктоп програми за допомогою Electron</li>
          <li>мікроконтролери з Johnny-FiveіEspruino</li>
        </ul>
        <p>
          Для реалізації всіх цих можливостей необхідно добре знати синтаксис
          мови, його особливості та механізми, тренуватися мислити алгоритмічно
          та вирішувати якнайбільше практичних завдань.
        </p>
        <h1 id="section-1">Підключення скрипту</h1>
        <p>
          Щоб додати скрипт на веб-сторінку в HTML-файлі, використовується тег{" "}
          <span className={s.Span}>script</span> , в атрибуті{" "}
          <span className={s.Span}>src</span> якого вказуємо посилання на
          зовнішній JavaScript-файл.
        </p>
        <p>Щоб підключити JavaScript із зовнішнього файлу:</p>
        <ul>
          <li>
            Створіть файл із розширенням <span className={s.Span}>.js</span> і
            помістіть його в підпапку <span className={s.Span}>js</span>.
          </li>
          <li>
            Потім вкажіть шлях до файлу скрипта в атрибуті{" "}
            <span className={s.Span}>src</span> тега{" "}
            <span className={s.Span}>script</span> .
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <meta charset="UTF-8" />
                      <title>JavaScript is fun!</title>
                  </head>

                  <body>
                      <!-- контент -->
                      <script src="js/script.js"></script>
                  </body>
              </html>
            `}
        </SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Розміщення JavaScript файлу в папці{" "}
            <span className={s.Span}>js</span> не потрібне, але це хороша
            практика.
          </p>
        </div>
        <p>
          Якщо скрипт підключено до <span className={s.Span}>{`<head>`}</span>,
          відображення сторінки зупиняється, доки скрипт не завантажиться та
          виконається повністю. Браузер завантажує та відображає HTML поступово.
          Якщо він бачить тег <span className={s.Span}>{`<script>`}</span> без
          додаткових атрибутів, то спочатку виконується скрипт і потім
          обробляється решта код HTML-файлу. Тому скрипт підключають перед
          тегом, що закриває <span className={s.Span}>{`<body>`}</span>, після
          всього вмісту, як у прикладі.
        </p>

        <h3>Підключення декількох скриптів</h3>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              <script src="js/script-1.js"></script>
              <script src="js/script-2.js"></script>
            `}
        </SyntaxHighlighter>
        <h1 id="section-2">Інструменти розробника</h1>
        <p>
          При написанні коду завжди будуть оповіщення та помилки, це нормально.
          Консоль браузера показує інформацію, пов'язану з веб-сторінкою, у тому
          числі повідомлення про помилки та попередження виконання JS-коду,
          запущеного в контексті сторінки.
        </p>
        <p>
          Наступні комбінації клавіш відкривають інструменти розробника на
          вкладці <span className={s.Span}>Console:</span>{" "}
        </p>
        <ul>
          <li>
            Windows та Linux - <span className={s.Span}>Ctrl</span> +{" "}
            <span className={s.Span}>Shift</span> +{" "}
            <span className={s.Span}>J</span> aбо{" "}
            <span className={s.Span}>F12</span>{" "}
          </li>
          <li>
            MacOS - <span className={s.Span}>Command</span> +{" "}
            <span className={s.Span}>Option</span> +
            <span className={s.Span}>J</span>{" "}
          </li>
        </ul>
        <h3>Додаткові матеріали</h3>

        <div className={s.link}>
          <a
            target="_blank"
            href="https://developer.chrome.com/docs/devtools/console/api/"
          >
            Довідник по API консолі
          </a>
          <a
            target="_blank"
            href="https://developer.chrome.com/docs/devtools/console/log/"
          >
            Виведення повідомлень у консоль
          </a>
        </div>

        <h1 id="section-3">Основи синтаксису</h1>
        <p>
          При написанні коду важливо не просто знати, який символ або
          конструкцію можна використовувати, але в першу чергу необхідно
          розуміти термінологію та складові вихідного коду. У цій секції нам не
          важливе розуміння як що працює, ми лише познайомимося з базовою
          термінологією та синтаксисом.
        </p>
        <h3>Інструкція</h3>
        <p>
          <strong>Інструкція (statement) </strong> - це пов'язаний набір слів та
          символів із синтаксису мови, які поєднуються щоб висловити одну ідею,
          одну інструкцію для машини.
        </p>

        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            a = b * 2;
            `}
        </SyntaxHighlighter>
        <p>
          Інструкції в JavaScript закінчуються крапкою з комою, яку можна
          порівняти з крапкою в кінці речення вашої рідної мови.
        </p>
        <ul>
          <li>
            {" "}
            <span className={s.Span}>a</span> і{" "}
            <span className={s.Span}>b</span> - змінні (як в рівнянні алгебри),
            це сховища даних, які використовує програма. Змінна складається з
            ідентифікатора (імені) та пов'язаного з ним значення.
          </li>
          <li>
            <span className={s.Span}>2</span> - Просто число. Це називається
            значенням літералу (literal value), тому що не зберігається у
            змінній.
          </li>
          <li>
            <span className={s.Span}>=</span>і <span className={s.Span}>*</span>{" "}
            - оператори, що роблять дії над значеннями та змінними.
          </li>
        </ul>
        <p>
          Уявімо, що змінна <span className={s.Span}>b</span> вже зберігає число{" "}
          <span className={s.Span}>10</span>. Тоді ця інструкція каже машині:
        </p>
        <ol>
          <li>
            Піди знайди змінну з ідентифікатором{" "}
            <span className={s.Span}>b</span> і запитай, яке в неї зараз
            значення.
          </li>
          <li>
            Підстав значення змінної <span className={s.Span}>b</span>(10) у
            затвердження на місце <span className={s.Span}>b</span>
          </li>
          <li>
            Виконай операцію множення <span className={s.Span}>10</span> на{" "}
            <span className={s.Span}>2</span>.
          </li>
          <li>
            Запиши результат обчислення вираження правої частини змінну{" "}
            <span className={s.Span}>a</span>.
          </li>
        </ol>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Завершення інструкції крапкою з комою не потрібно, проте{" "}
            <strong>рекомендується</strong> завжди її ставити. Це просте правило
            зробить код зрозумілішим і допоможе уникнути неочевидних помилок.
          </p>
        </div>

        <h3>Вираз</h3>
        <p>
          Інструкції складаються з частин, як у будь-якій мові речення
          складаються із фраз, і ці фрази називаються виразами
        </p>
        <p>
          <strong>Вираз (exssion) </strong>- посилання змінну чи значення, чи
          набір змінних і значень разом із операторами.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            [ [a] = [ [b] * [2] ] ]
            `}
        </SyntaxHighlighter>
        <p>
          Інструкція з прикладу містить 5 виразів, які виділені квадратними
          дужками для візуалізації ( це не синтаксис мови ):
        </p>
        <ul>
          <li>
            <span className={s.Span}>[2]</span>- Вираз значення літералу.
          </li>
          <li>
            <span className={s.Span}>[b]</span> і{" "}
            <span className={s.Span}>[a]</span>- вирази змінної, означають
            необхідність підставити значення змінної, але у тому разі, якщо
            змінна стоїть у правій частині висловлювання присвоювання.
          </li>
          <li>
            <span className={s.Span}>[b * 2]</span>- арифметичний вираз
            множення.
          </li>
          <li>
            <span className={s.Span}>[a = b * 2]</span>- Вираз привласнення. У
            нашому випадку вказує на необхідність обчислення правої частини
            виразу та привласнення результату змінної{" "}
            <span className={s.Span}>a</span> у лівій частині виразу.
          </li>
        </ul>
        <p>
          Також є вирази виклику, порівняння і т. д. Ми не будемо зараз
          розглядати їх усі, нам важливо розуміти, з яких частин складається
          вихідний код і як правильно читати його.
        </p>
        <h3>Інтерфейс</h3>
        <p>
          Коли ми підходимо до автомата з кавою або сідаємо за кермо автомобіля,
          існує певний набір елементів керування, з яким можна взаємодіяти. У
          програмуванні це називається інтерфейс.
        </p>
        <p>
          <strong>Інтерфейс</strong> - це набір властивостей та методів
          сутності, доступних для використання у вихідному коді.
        </p>
        <h3>Властивість</h3>
        <p>
          У нас з вами є властивості: зріст, вага, колір очей, тобто якісь
          описові характеристики. Так само і у даних є властивості, наприклад,
          рядок має властивість його довжини. Синтаксис звернення до властивості
          дуже простий – через крапку.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           сутність.ім'я_властивості
            `}
        </SyntaxHighlighter>
        <p>
          Для наочності звернемося до якості рядка{" "}
          <span className={s.Span}>length</span>, яке містить кількість символів
          рядка.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           "JavaScript is awesome".length;
            `}
        </SyntaxHighlighter>
        <h3>Метод</h3>
        <p>
          Це виклик дії, наприклад , <span className={s.Span}>присісти</span>{" "}
          або <span className={s.Span}>бігати</span>, тобто якась активна
          операція. Так само і у даних є свої заздалегідь визначені методи,
          наприклад, можна додати або видалити елементи з колекції, перевести
          рядок у різний регістр і т. д. Синтаксис виклику методу дуже схожий на
          звернення до властивості, але в кінці додається пара круглих дужок.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                    сутність.ім'я_метода()
                `}
        </SyntaxHighlighter>
        <p>
          Наприклад звернемося до методу рядка{" "}
          <span className={s.Span}>toUpperCase()</span> , який зробить усі
          літери великими.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                    "JavaScript is awesome".toUpperCase();
                `}
        </SyntaxHighlighter>
        <h3>Суворий режим написання коду</h3>
        <p>
          Нова можливість специфікації ECMAScript 5, яка дозволяє переводити
          скрипт в режим повної відповідності сучасному стандарту. Це запобігає
          певним помилкам, таким як використання небезпечних і застарілих
          конструкцій.
        </p>
        <p>
          Щоб перевести скрипт у строгий режим, достатньо вказати директиву на
          початку js-файлу. Завжди пишіть код у строгому режимі.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                   script.js
                   "use strict";
                   // Це коментар. Далі йде весь код JS-файлу
                `}
        </SyntaxHighlighter>

        <h1 id="section-4">Змінні та типи</h1>
        <p>
          Змінні використовуються для зберігання даних і складаються з
          ідентифікатора (імені) та області пам'яті, де зберігається їх
          значення. Змінну можна як коробку з назвою, у якій щось лежить
          (значення).
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                  <ключове_слово> <ім'я_змінної> = <значення>
                `}
        </SyntaxHighlighter>
        <h3>Імена зміних</h3>
        <p>
          <strong>Ідентифікатор</strong> – це ім'я змінної, функції або класу.
          Складається з одного або кількох символів у наступному форматі.
        </p>
        <ul>
          <li>
            Першим символом має бути буква <span className={s.Span}>a-z</span>{" "}
            або <span className={s.Span}>A-Z</span>
            символ підкреслення <span className={s.Span}>_</span> або знак
            долара <span className={s.Span}>$</span>.
          </li>
          <li>
            Інші символи можуть бути літерами <span className={s.Span}>-z</span>
            , <span className={s.Span}>-Z</span>
            цифрами <span className={s.Span}>0-9</span>, підкресленнями{" "}
            <span className={s.Span}>_</span> та знаками долара{" "}
            <span className={s.Span}>$</span> .
          </li>
          <li>
            Ідентифікатори чутливі до регістру. Це означає, що змінні{" "}
            <span className={s.Span}>user</span> та{" "}
            <span className={s.Span}>usEr</span>,{" "}
            <span className={s.Span}>User</span> різні
          </li>
        </ul>
        <p>Ім'я змінної має бути зрозумілим.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                 # ❌ Погано
                 chislo
                 korzina_tovariv
                 profil_koristuvacha
                 potochni_misyac
                 
                 # ✅ Добре
                 number
                 cart
                 userProfile
                 currentMonth
                `}
        </SyntaxHighlighter>
        <p>
          Використання camelCase-нотації для ідентифікаторів є стандартом. Перше
          слово пишеться малими літерами, а кожне наступне починається з
          великої. Наприклад, <span className={s.Span}>user</span>,{" "}
          <span className={s.Span}>getUserData</span> ,{" "}
          <span className={s.Span}>isActive</span>,{" "}
          <span className={s.Span}>activeGuestCount</span>.
        </p>
        <div className={s.link}>
          <a target="_blank" href="https://bookflow.ru/kak-nazyvat-peremennye/">
            Як називати змінні
          </a>
          <a
            target="_blank"
            href="https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a"
          >
            Угоди про імена змінні
          </a>
        </div>
        <h3>Ключові слова</h3>
        <p>
          Є список зарезервованих ключових слів, які мають особливе значення і
          використовуються для певних конструкцій. Не можна використовувати
          ключові слова як ідентифікатори.
        </p>
        <div>
          <img src={table1} alt="" />
          <img src={table2} alt="" />
        </div>
        <h3>Оголошення змінних</h3>
        <p>
          Оголошення змінної починається з ключового слова{" "}
          <span className={s.Span}>const</span>. Така змінна має бути відразу
          ініціалізована значенням, після чого його не можна перевизначити.
        </p>

        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                 // Змінні, об'явленні як const, обов'язково мають бути ініціалізовані
                 // значенням під час оголошення, інакше буде помилка.
                 const yearOfBirth = 2006;
                 console.log(yearOfBirth); // 2006
                 
                 // Якщо змінну оголошено як const, перезаписати її значення не можна.
                 // При спробі надати нове значення будеш помилка виконання скрипта.
                 yearOfBirth = 2020; // ❌ Неправильно, буде помилка
                `}
        </SyntaxHighlighter>
        <p>
          Для того, щоб оголосити змінну, якій у майбутньому можна буде надати
          нове значення, використовується ключове слово{" "}
          <span className={s.Span}>let</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                 // Переменным, объявленным через let, не обязательно сразу присваивать значение.
                 let age;
                 
                 // Якщо змінної, оголошеної як let, спочатку не надано значення,
                 // вона ініціалізується спеціальним значенням undefined (не визначено).
                 console.log(age); // undefined
                 
                 // console.log() це метод для виведення даних у консоль браузера,
                 // детальніше з ним познайомимося пізніше.
                 
                 // Якщо змінна оголошена як let, її значення можна перезаписати.
                 age = 14;
                 console.log(age); // 14
                `}
        </SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Оголошення змінної без ключового слова{" "}
            <span className={s.Span}>let</span> або{" "}
            <span className={s.Span}>const</span> призведе до помилки, якщо
            скрипт виконується у строгому режимі.
          </p>
        </div>
        <h3>
          Коли використовувати <span className={s.Span}>const</span>, а коли{" "}
          <span className={s.Span}>let</span>
        </h3>
        <p>
          Єдина відмінність <span className={s.Span}>const</span> і{" "}
          <span className={s.Span}>let</span> полягає в тому, що{" "}
          <span className={s.Span}>const</span> забороняє повторне надання
          змінної будь-якого значення. Оголошення{" "}
          <span className={s.Span}>const</span> робить код більш читаним,
          оскільки змінна завжди посилається на те саме значення. У разі{" "}
          <span className={s.Span}>let</span> такої впевненості немає.
        </p>
        <h3>Константи, які не змінюються</h3>
        <p>
          Імена <strong>КОНСТАНТ</strong> - змінних, значення яких ніколи не
          змінюється протягом роботи всього скрипта, зазвичай записуються у
          форматі <span className={s.Span}>UPPER_SNAKE_CASE</span> .
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                 // Константа, яка зберігає код кольору
                 const COLOR_TEAL = "#009688";
                 
                 // Константа, ка зберігає повідомлення про результат авторизації
                 const LOGIN_SUCCESS_MESSAGE = "Вітаю! Ви успішно авторизувались";
                `}
        </SyntaxHighlighter>
        <p>
          Абсолютна більшість змінних - константи в іншому сенсі, вони просто не
          змінюють значення після присвоєння. Але при різних запусках скрипта це
          значення може бути різним. Імена таких змінних записують за допомогою
          формату <span className={s.Span}>camelCase</span>.
        </p>

        <h3>Звернення до зміної</h3>
        <p>Важливо розрізняти невизначені та неоголошені змінні.</p>
        <p>
          <strong>Невизначена (undefined)</strong> - це змінна, яка була
          оголошена ключовим словом <span className={s.Span}>let</span>, але не
          ініціалізована значенням. За умовчанням їй надається початкове
          значення <span className={s.Span}>undefined</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                 let username;
                 console.log(username); // undefined
                `}
        </SyntaxHighlighter>
        <p>
          <strong>Неоголошена (undeclared чи not defined)</strong> - це змінна,
          яка була оголошена у доступній області видимості. Спроба звернутися до
          придбаної до її оголошення викликає помилку. Наприклад, щоб прочитати
          чи змінити її значення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                 // ❌ Неправильно, буде помилка
                 age = 15; // ReferenceError: Cannot access 'age' before initialization
                 console.log(age); // ReferenceError: age is not defined
                 
                 // Оголошення змінної age
                 let age = 20;
                 
                 // ✅ Правильно, звертаємось після оголошення
                 age = 25;
                 console.log(age); // 25
                `}
        </SyntaxHighlighter>
        <h3>Примітивні типи</h3>
        <p>
          У JavaScript змінна не асоціюється з будь-яким типом даних, тип має її
          значення. Тобто змінна може зберігати значення різних типів.
        </p>
        <p>
          <strong>Number</strong> - цілі числа та числа з плаваючою комою
          (крапкою).
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const age = 20;
            const points = 15.8;
                `}
        </SyntaxHighlighter>
        <p>
          <strong>String</strong> - рядки, послідовність із нуля або більше
          символів. Рядок починається і закінчується одиночною{" "}
          <span className={s.Span}>'</span>, або подвійними лапками{" "}
          <span className={s.Span}>"</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           const username = "Nik";
           const description = "JavaSript для початківців";
                `}
        </SyntaxHighlighter>

        <p>
          <strong>Boolean</strong> – логічний тип даних, прапори стану. Усього
          два значення: true і false. Наприклад, на запитання включено світло в
          кімнаті можна відповісти так (true) чи ні (false).
        </p>
        <ul>
          <li>
            <span className={s.Span}>true</span> - так, мабуть, істина, 1
          </li>
          <li>
            <span className={s.Span}>false</span>- ні, невірно, брехня, 0
          </li>
        </ul>
        <p>
          <strong>null</strong> - особливе значення, яке по суті означає ничто.
          Використовується в тих ситуаціях, коли необхідно вказати порожнечу.
          Наприклад, якщо користувач ще нічого не вибрав, то можна сказати що
          значення <span className={s.Span}>null</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          let selectedProduct = null;
                `}
        </SyntaxHighlighter>
        <p>
          <strong>undefined</strong> – ще одне спеціальне значення. За
          умовчанням, коли змінна оголошується, але з ініціалізується, її
          значення визначено, їй присвоюється{" "}
          <span className={s.Span}>undefined</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           let username;
           console.log(username); // undefined
                `}
        </SyntaxHighlighter>
        <h3>
          Оператор <span className={s.Span}>typeof</span>
        </h3>
        <p>
          Використовується для отримання типу змінної. Повертає місце свого
          виклику тип значення змінної зазначеного після нього - рядок у якому
          зазначений тип.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          let username;
          console.log(typeof username); // "undefined"
          
          let inputValue = null;
          console.log(typeof inputValue); // "object"
          
          const quantity = 17;
          console.log(typeof quantity); // "number"
          
          const message = "JavaScript is awesome!";
          console.log(typeof message); // "string"
          
          const isSidebarOpen = false;
          console.log(typeof isSidebarOpen); // "boolean"
                `}
        </SyntaxHighlighter>
        <h1 id="section-5">Взаємодія з користувачем</h1>
        <p>
          Розберемо базові операції введення/виводу, достатні для отримання та
          відображення даних від користувача, перш ніж навчимося працювати з
          HTML-документом.
        </p>
        <h3>Виведення даних (відтворення)</h3>
        <p>
          Для виведення даних є два методи:{" "}
          <span className={s.Span}>console.log()</span>і{" "}
          <span className={s.Span}>alert()</span>. У круглих дужках вказуємо
          ім'я змінної, значення якої потрібно вивести.
        </p>

        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                const message = "JavaScript is awesome!";
                console.log(message); // JavaScript is awesome!
                `}
        </SyntaxHighlighter>
        <p>
          Можна спочатку вказати якийсь описовий рядок, після чого поставити
          кому і вказати ім'я змінної.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
               const username = "Nik";
               console.log("Username is ", username); // Username is Nik
                `}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>alert()</span> виводить модальне вікно,
          текст якого відповідає значенню змінної (або літералу), яку передамо в
          дужках.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
               const message = "JavaScript is awesome!";
               alert(message);
                `}
        </SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            <span className={s.Span}>console</span> і{" "}
            <span className={s.Span}>alert</span> є частиною інтерфейсу{" "}
            <span className={s.Span}>window</span> – глобального об'єкта,
            доступного під час виконання скрипту на веб-сторінці. Запис{" "}
            <span className={s.Span}>window.alert()</span> надлишковий, пишемо
            просто <span className={s.Span}>alert()</span> або{" "}
            <span className={s.Span}>console.log()</span>. Детальніше про це
            говоритимемо далі в курсі.
          </p>
        </div>
        <a href="https://medium.com/free-code-camp/how-to-use-the-javascript-console-going-beyond-console-log-5128af9d573b">
          Як використовувати <strong>console.log()</strong>{" "}
        </a>
        <h3>Отримання даних</h3>
        <p>
          Для отримання даних від користувача{" "}
          <span className={s.Span}>prompt()</span> є{" "}
          <span className={s.Span}>confirm()</span>. Це також методи з
          інтерфейсу <span className={s.Span}>window</span>. Результатом свого
          виконання вони повертають те, що було введено користувачем, тому
          результат роботи можна записати в змінну для подальшого використання.
        </p>
        <p>
          <span className={s.Span}>confirm()</span> - Виводить модальне вікно з
          повідомленням, і дві кнопки, <span className={s.Span}>Ok</span> і{" "}
          <span className={s.Span}>Cancel</span>. При натисканні на{" "}
          <span className={s.Span}>Ok</span> , результатом буде{" "}
          <span className={s.Span}>true</span> при натисканні на{" "}
          <span className={s.Span}>Cancel</span> - повертається{" "}
          <span className={s.Span}>false</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
               // Просимо клієнта підтвердити бронювання в готелі
               // та зберігаємо в змінну результат роботи confirm
               const isComing = confirm("Please confirm hotel reservation");
               console.log(isComing);
                `}
        </SyntaxHighlighter>
        <p>
          <span className={s.Span}>prompt()</span> - Виводить модальне вікно з
          полем введення та кнопками <span className={s.Span}>Ok</span> і{" "}
          <span className={s.Span}>Cancel</span>. При натисканні{" "}
          <span className={s.Span}></span>, результатом буде те, що ввів
          користувач, <span className={s.Span}>Cancel</span> повертається{" "}
          <span className={s.Span}>null</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              // Запитуємо назву готеля, в якому хотів би зупинитися клієнт
              // та зберігаємо в змінну результат виклику prompt.
              const hotelName = prompt("Please enter desired hotel name");
              console.log(hotelName);
                `}
        </SyntaxHighlighter>
        <p>
          Важлива особливість <span className={s.Span}>prompt</span> у тому, що
          незалежно від того, що ввів користувач, завжди повернеться рядок.
          Тобто якщо користувач ввів 5, то повернеться не число 5, а рядок "5".
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              const value = prompt("Please enter a number!");
              console.log(typeof value); // "string"
              console.log(value); // "5"
                `}
        </SyntaxHighlighter>
        <h1 id="section-6">Основні оператори</h1>
        <h3>Математичні оператори</h3>
        <p>
          Призначення, функціонал та пріоритет (порядок) операцій нічим не
          відрізняються від шкільного курсу алгебри. Оператори повертають
          значення як наслідок висловлювання.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              const x = 10;
              const y = 5;
              
              // Додавання
              console.log(x + y); // 15
              
              // Віднімання
              console.log(x - y); // 5
              
              // Множення
              console.log(x * y); // 50
              
              // Ділення
              console.log(x / y); // 2
              
              // Залишок від ділення
              console.log(x % y); // 0
              
              // Додавання з заміною (також є для всіх інших операторів)
              let value = 5;
              
              // Аналогично запису value = value + 10;
              value += 10;
              console.log(value); // 15
                `}
        </SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Важливо запам'ятати терміни виразів.{" "}
            <span className={s.Span}> + - * / %</span> називаються{" "}
            <strong>оператори</strong> , а те, на чому вони застосовуються –{" "}
            <strong>операнди</strong> .
          </p>
        </div>
        <h3>Оператори порівняння</h3>
        <p>
          Використовуються для порівняння двох значень. Результатом свого
          виконання повертають буль- <span className={s.Span}>true</span> або{" "}
          <span className={s.Span}>false</span>, тобто «так» чи «ні».
        </p>
        <ul>
          <li>
            <span className={s.Span}>{`a > b`}</span> і{" "}
            <span className={s.Span}>{`a < b`}</span>- більше /менше
          </li>
          <li>
            <span className={s.Span}>{`a >= b`}</span> i{" "}
            <span className={s.Span}>{`a <= b`}</span>- більше/менше або рівно{" "}
          </li>
          <li>
            <span className={s.Span}>{`a == b`}</span> - рівність
          </li>
          <li>
            <span className={s.Span}>{`a != b`}</span> - нерівність
          </li>
          <li>
            <span className={s.Span}>{`a === b`}</span> - сувора рівність
          </li>
          <li>
            <span className={s.Span}>{`a !== b`}</span> - сувора нерівність
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
             const x = 5;
             const y = 10;
             const z = 5;
             
             console.log("x > y:", x > y); // false
             console.log("x < y:", x < y); // true
             console.log("x < z:", x < z); // false
             console.log("x <= z:", x <= z); // true
             console.log("x === y:", x === y); // false
             console.log("x === z:", x === z); // true
             console.log("x !== y:", x !== y); // true
             console.log("x !== z:", x !== z); // false
                `}
        </SyntaxHighlighter>
        <h3>Оператори рівності</h3>
        <p>
          «Нестрогі» оператори рівності
          <span className={s.Span}>==</span> і{" "}
          <span className={s.Span}>!=</span> виконують перетворення типів
          порівнюваних значень до числа, що може призвести до помилок, особливо
          у початківців.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
             // ❌ Погано, виконується приведення типів
             console.log(5 == "5"); // true
             console.log(5 != "5"); // false
             console.log(1 == true); // true
             console.log(1 != true); // false
                `}
        </SyntaxHighlighter>
        <p>
          На наступній ілюстрації показано таблицю порівняння значень,
          використовуючи оператори нестрогої рівності.
        </p>
        <img src={operatorTable1} alt="" />
        <p>
          Тому для перевірки рівності або нерівності двох значень
          використовуються тільки оператори <span className={s.Span}>===</span>{" "}
          (сувора рівність) та <span className={s.Span}>!==</span> (сувора
          нерівність), які не виконують наведення типів операндів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
             // ✅ Добре, приведення типів не виконується
             console.log(5 === "5"); // false
             console.log(5 === 5); // true
             console.log(5 !== "5"); // true
             console.log(5 !== 5); // false
             console.log(1 === true); // false
             console.log(1 !== true); // true
                `}
        </SyntaxHighlighter>
        <p>
          У такому разі все дорівнює лиш собі. Перед оцінкою нічого не
          перетворюється.
        </p>
        <img src={operatorTable2} alt="" />

        <h1 id="section-7">Числа</h1>
        <p>
          Всі числа JavaScript, як цілі так і дробові, мають тип{" "}
          <span className={s.Span}>Number</span> і записувати їх можна не тільки
          в десятковій системі числення.
        </p>
        <h3>Приведення до числа</h3>
        <p>
          Більшість арифметичних операцій та математичних функцій перетворять
          значення на число автоматично. Для того щоб зробити це явно,
          використовуйте функцію <span className={s.Span}>Number(val)</span>,
          передаючи їй у <span className={s.Span}>val</span> те, що треба
          привести до числа.
        </p>
        <p>
          Якщо значення не може призвести до числа, результатом буде спеціальне
          числове значення <span className={s.Span}>NaN (Not a Number)</span>.
          Аналогічним чином відбувається перетворення та інших математичних
          операторах і функціях.
        </p>

        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
             const valueA = "5";
             console.log(Number(valueA)); // 5
             console.log(typeof Number(valueA)); // "number"
             
             const valueB = "random string";
             console.log(Number(valueB)); // NaN
             console.log(typeof Number(valueB)); // "number"
                `}
        </SyntaxHighlighter>
        <h3>
          Методи та <span className={s.Span}>Number.parseInt()</span>{" "}
          <span className={s.Span}>Number.parseFloat()</span>
        </h3>
        <p>
          Перетворюють рядок символ за символом, доки це можливо. У разі
          виникнення помилки повертається число, яке вийшло.
        </p>
        <p>
          Метод <span className={s.Span}>Number.parseInt()</span> парсить з
          рядка ціле число.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           console.log(Number.parseInt("5px")); // 5
           console.log(Number.parseInt("12qwe74")); // 12
           console.log(Number.parseInt("12.46qwe79")); // 12
           console.log(Number.parseInt("qweqwe")); // NaN
                `}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>Number.parseFloat()</span> парсить з
          рядка ціле число.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           console.log(Number.parseFloat("5px")); // 5
           console.log(Number.parseFloat("12qwe74")); // 12
           console.log(Number.parseFloat("12.46qwe79")); // 12.46
           console.log(Number.parseFloat("qweqwe")); // NaN
                `}
        </SyntaxHighlighter>
        <h3>Перевірка на число</h3>
        <p>
          Для перевірки на число можна використовувати метод{" "}
          <span className={s.Span}>Number.isNaN(val)</span>. Він перевіряє, чи
          вказане значення <span className={s.Span}>NaN</span> чи ні. Метод
          відповідає питанням "Це Not A Number?" і повертає:
        </p>
        <ul>
          <li>
            <span className={s.Span}>true</span>- якщо значення{" "}
            <span className={s.Span}>val</span> це{" "}
            <span className={s.Span}>NaN</span>
          </li>
          <li>
            <span className={s.Span}>false</span>- якщо значення{" "}
            <span className={s.Span}>val</span> це не
            <span className={s.Span}>NaN</span>
          </li>
        </ul>
        <p>
          Для всіх значень <span className={s.Span}>val</span> крім{" "}
          <span className={s.Span}>NaN</span> при передачі в{" "}
          <span className={s.Span}>Number.isNaN(val)</span> поверне{" "}
          <span className={s.Span}>false</span>. Цей метод не робить спробу
          перетворити <span className={s.Span}>val</span> до числа, а просто
          виконує перевірку на <span className={s.Span}>NaN</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           const validNumber = Number("51"); // 51
           console.log(Number.isNaN(validNumber)); // false
           
           const invalidNumber = Number("qweqwe"); // NaN
           console.log(Number.isNaN(invalidNumber)); // true
                `}
        </SyntaxHighlighter>
        <h3>Додавання чисел з плаваючою крапкою</h3>
        <p>
          При додаванні не цілих чисел у JavaScript та інших мовах
          програмування, є особливість. Якщо коротко, то{" "}
          <span className={s.Span}>0.1 + 0.2</span> не одно{" "}
          <span className={s.Span}>0.3</span>, результат додавання більше ніж{" "}
          <span className={s.Span}>0.3</span>. Все від того, що машина рахує в
          двійковій системі.
        </p>
        <p>
          Число <span className={s.Span}>0.1</span> в двійковій системі числення
          - це нескінченний дріб, тому що одиниця на десять у двійковій системі
          не ділиться. Двійкове значення нескінченних дробів зберігається лише
          певного знака, тому виникає неточність. При додаванні{" "}
          <span className={s.Span}>0.1</span> і{" "}
          <span className={s.Span}>0.2</span>, дві неточності складаються,
          виходить незначна, але все ж таки помилка в обчисленнях.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          console.log(0.1 + 0.2 === 0.3); // false
          console.log(0.1 + 0.2); // 0.30000000000000004
                `}
        </SyntaxHighlighter>
        <p>
          Звичайно, це не означає, що точні обчислення таких чисел неможливі. Є
          кілька методів вирішення цієї проблеми.
        </p>
        <p>
          Можна зробити їх цілими, помноживши N, скласти, а потім результат
          розділити також на N.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          console.log(0.17 + 0.24); // 0.41000000000000003
          console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41
                `}
        </SyntaxHighlighter>
        <p>
          Ще один спосіб - скласти, а результат відсікти до певного знака після
          коми за допомогою методу <span className={s.Span}>toFixed()</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          console.log(0.17 + 0.24); // 0.41000000000000003
          console.log((0.17 + 0.24).toFixed(2)); // 0.41
                `}
        </SyntaxHighlighter>

        <h3>
          Клас <span className={s.Span}>Math</span>
        </h3>
        <p>
          Один із вбудованих класів, який надає набір методів для роботи з
          числами. Знання всіх методів напам'ять не потрібно лише деяких,
          найбільш корисних.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
        // Math.floor(num) - возвращает наибольшее целое число,
        // меньшее, либо равное указанному
        console.log(Math.floor(1.7)); // 1
        
        // Math.ceil(num) - возвращает наименьшее целое число,
        // большее, либо равное указанному числу.
        console.log(Math.ceil(1.2)); // 2
        
        // Math.round(num) - возвращает значение числа,
        // округлённое до ближайшего целого
        console.log(Math.round(1.2)); // 1
        console.log(Math.round(1.5)); // 2
        
        // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
        console.log(Math.max(20, 10, 50, 40)); // 50
        
        // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
        console.log(Math.min(20, 10, 50, 40)); // 10
        
        // Math.pow(base, exponent) - возведение в степень
        console.log(Math.pow(2, 4)); // 16
        
        // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
        console.log(Math.random()); // случайное число между 0 и 1
        console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10
                `}
        </SyntaxHighlighter>
        <h1 id="section-8">Рядки</h1>
        <p>
          <span className={s.Span}>Рядок</span> - це індексований набір із нуля
          або більше символів, укладених у одинарні або подвійні лапки.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
       const username = "Olga";
                `}
        </SyntaxHighlighter>
        <p>
          Важливо пам'ятати, що індексація елементів рядка починається з нуля.
          Наприклад у рядку <span className={s.Span}>"JavaScript"</span> літера{" "}
          <span className={s.Span}>"J"</span> стоїть на позиції з індексом{" "}
          <span className={s.Span}>0</span>, а{" "}
          <span className={s.Span}>"t"</span> йде під індексом{" "}
          <span className={s.Span}>9</span>.
        </p>
        <img className={s.stringImg} src={string} alt="" />
        <p>
          Вміст рядка не можна змінити, лише прочитати. Тобто не можна взяти
          якийсь символ і замінити його, як тільки рядок створено - він такий
          назавжди. Можна лише створити цілком новий рядок і присвоїти змінну
          замість старої.
        </p>
        <h3>Конкатенація рядків</h3>
        <p>
          Якщо застосувати оператор <span className={s.Span}>+</span> до рядка
          та іншого типу даних, результатом операції «складання» буде рядок. Ця
          операція називається конкатенація, або складання рядків.
        </p>
        <p>
          Під час конкатенації будь-який тип даних приводиться до рядка і
          зшивається з рядком, але є особливість - послідовність запису
          операндів.
        </p>
        <p>
          Послідовність операцій має значення, перетворення типів відбувається
          лише на момент операції складання з рядком, доти діють звичні правила
          математики.
        </p>

        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
       const message = "Mango " + "is" + " happy";
       console.log(message); // Mango is happy
                `}
        </SyntaxHighlighter>

        <p>Подивимося різний порядок операндов.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
      console.log(1 + "2"); // "12"
      console.log(1 + "2" + 4); // "124"
      console.log(1 + 2 + "4"); // "34"
                `}
        </SyntaxHighlighter>
        <p>
          В останньому прикладі відбулася математична операція додавання для
          перших двох чисел <span className={s.Span}>1</span> і{" "}
          <span className={s.Span}>2</span>, після чого число{" "}
          <span className={s.Span}>3</span> було перетворено на рядок{" "}
          <span className={s.Span}>"3"</span> і поєднано з рядком{" "}
          <span className={s.Span}>"4"</span>.
        </p>
        <h3>Шаблонні рядки</h3>
        <p>
          Шаблонні рядки це альтернатива конкатенації з зручнішим синтаксисом.
          Шаблонний рядок укладено у зворотні (косі) лапки замість подвійних або
          одинарних і може містити місцезаповнювачі, які позначаються знаком
          долара та фігурними дужками -{" "}
          <span className={s.Span}>${`выражение`}</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
//Використовуючи змінні, необхідно скласти рядок з підставленими значеннями.
const guestName = "Манго";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"                `}
        </SyntaxHighlighter>
        <p>
          Складати рядки з значеннями, що підставляються, використовуючи
          конкатенацію дуже незручно. На допомогу приходять шаблонні рядки та
          інтерполяція.
        </p>
        <img src={code1} alt="" />
        <h3>Властивості та методи рядків</h3>
        <p>
          Кожний рядок має вбудовані властивості та методи, розглянемо деякі з
          них.
        </p>
        <h4>
          Властивість <span className={s.Span}>length</span>
        </h4>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                const message = "Welcome to Bahamas!";
                console.log(message.length); // 19
                console.log("There is nothing impossible to him who will try".length); // 47

         `}
        </SyntaxHighlighter>
        <h4>
          Методи <span className={s.Span}>toLowerCase()</span>{" "}
          <span className={s.Span}>toUpperCase()</span>
        </h4>
        <p>
          Повертають новий рядок у відповідному регістрі, не змінюючи
          оригінальний рядок.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                const message = "Welcome to Bahamas!";
                console.log(message.toLowerCase()); // "welcome to bahamas!"
                console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
                console.log(message); // "Welcome to Bahamas!"

         `}
        </SyntaxHighlighter>
        <p>
          Бувають ситуації коли всі символи в рядку необхідно перетворити на
          один регістр, верхній або нижній. Наприклад, при пошуку за ключовим
          словом, коли користувач вводить рядок{" "}
          <span className={s.Span}>'saMsUng'</span>, а порівняти його треба з
          рядком <span className={s.Span}>'samsung'</span> або{" "}
          <span className={s.Span}>'SAMSUNG'</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
               console.log("saMsUng" === "samsung"); // false
               console.log("saMsUng" === "SAMSUNG"); // false

            `}
        </SyntaxHighlighter>
        <p>
          Щоб не вимагати абсолютно точного введення, можна зробити
          «нормалізацію» введеного користувачем рядка, тобто перетворити всі
          його символи у верхній або нижній регістр. Методи рядка{" "}
          <span className={s.Span}>toLowerCase()</span> та{" "}
          <span className={s.Span}>toUpperCase()</span> повернуть новий рядок у
          відповідному регістрі, не змінюючи оригінальний.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
               const BRAND_NAME = "SAMSUNG";
               const userInput = "saMsUng";
               const normalizedToUpperCaseInput = userInput.toUpperCase();
               
               console.log(userInput); // 'saMsUng'
               console.log(userInput === BRAND_NAME); // false
               console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
               console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

            `}
        </SyntaxHighlighter>

        <h4>
          Метод <span className={s.Span}>indexOf()</span>
        </h4>
        <p>
          Повертає позицію (індекс) на якій знаходиться перший збіг підрядка або{" "}
          <span className={s.Span}>-1</span> якщо нічого не знайдено.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
               const message = "Welcome to Bahamas!";
               console.log(message.indexOf("to")); // 8
               console.log(message.indexOf("hello")); // -1

            `}
        </SyntaxHighlighter>
        <h4>
          Метод <span className={s.Span}>includes()</span>
        </h4>
        <p>
          Перевіряє чи входить підрядок у рядок, повертає буль -{" "}
          <span className={s.Span}>true</span> якщо входить і{" "}
          <span className={s.Span}>false</span> в іншому випадку. Регістр
          символів у рядку та підрядку має значення, тому що наприклад буква{" "}
          <span className={s.Span}>"a"</span> не дорівнює букві{" "}
          <span className={s.Span}>"А"</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
               const productName = "Ремонтний дроїд";

               console.log(productName.includes("н")); // true
               console.log(productName.includes("Н")); // false
               console.log(productName.includes("дроїд")); // true
               console.log(productName.includes("Дроїд")); // false
               console.log(productName.includes("Ремонтний")); // true
               console.log(productName.includes("ремонтний")); // false

            `}
        </SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>Усі методи рядків чутливі до регістру.</p>
        </div>
        <h5>
          Метод <span className={s.Span}>endsWith()</span>
        </h5>
        <p>
          Дозволяє визначити, чи рядок закінчується символами (підрядком)
          зазначеними в дужках, повертаючи <span className={s.Span}>true</span>{" "}
          або <span className={s.Span}>false</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
               const jsFileName = "script.js";
               console.log(jsFileName.endsWith(".js")); // true
               
               const cssFileName = "styles.css";
               console.log(cssFileName.endsWith(".js")); // false

            `}
        </SyntaxHighlighter>
        <h5>
          Методи <span className={s.Span}>replace()</span> та{" "}
          <span className={s.Span}>replaceAll()</span>
        </h5>
        <p>
          Повертають новий рядок, в якому перші (replace) або всі збіги
          (replaceAll) підрядки замінені на вказане значення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              const jsFileName = "script.js";
              const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
              console.log(minifiedJsFileName); // "script.min.js"
              
              const cssFileNames = "styles.css, about.css, portfolio.css";
              const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
              console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

            `}
        </SyntaxHighlighter>
        <h5>
          Метод <span className={s.Span}>slice()</span>
        </h5>
        <p>
          Метод рядків{" "}
          <span className={s.Span}>slice(startIndex, endIndex)</span>{" "}
          використовується для створення копії частини чи всього рядка. Він
          робить копію елементів рядка від{" "}
          <span className={s.Span}>startIndex</span> і до, але не включаючи{" "}
          <span className={s.Span}>endIndex</span> та повертає новий рядок, не
          змінюючи оригінал.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              const productName = "Repair droid";
              console.log(productName.slice(0, 4)); // "Repa"
              console.log(productName.slice(3, 9)); // "air dr"
              console.log(productName.slice(0, productName.length)); // "Repair droid"
              console.log(productName.slice(7, productName.length)); // "droid"

            `}
        </SyntaxHighlighter>
        <h1 id="section-9">Логічні оператори</h1>
        <p>
          Логічні оператори використовуються для перевірки умов з множинними
          виразами, наприклад, в операціях порівняння.
        </p>
        <h3>Приведення типів </h3>
        <p>
          У логічних операціях здійснюється приведення типів операндів до{" "}
          <span className={s.Span}>true</span> або{" "}
          <span className={s.Span}>false</span>. Приведення відбувається якщо
          код виявлено логічний оператор.
        </p>
        <p>
          <strong>Truthy</strong> і <strong>Falsy</strong> - терміни, які
          використовуються для тих значень, які, в логічній операції, наводяться
          до <span className={s.Span}>true</span> або{" "}
          <span className={s.Span}>false</span>, хоча спочатку не були булями.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Запам'ятайте 6 помилкових (falsy) значень, що приводяться до{" "}
            <span className={s.Span}>SyntaxHighlighterfalse</span> логічного
            перетворення: <span className={s.Span}>0</span>,{" "}
            <span className={s.Span}>NaN</span>,{" "}
            <span className={s.Span}>null</span>,{" "}
            <span className={s.Span}>undefined</span>,{" "}
            <span className={s.Span}>порожній рядок</span> і{" "}
            <span className={s.Span}>false</span>. Абсолютно все інше наводиться
            до true.
          </p>
        </div>
        <h3>Логічні оператори</h3>
        <p>
          Є три логічні оператори, які використовуються для перевірки виконання
          множинних виразів.
        </p>
        <img src={booleanOperators} alt="" />
        <h3>Логічне "І"</h3>
        <p>
          Оператор <span className={s.Span}>&&</span> приводить усі операнди до
          булю та повертає значення одного з них. Лівий операнд якщо його можна
          призвести до <span className={s.Span}>false</span>, і правий в інших
          випадках.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              вираз && вираз
            `}
        </SyntaxHighlighter>
        <p>
          У наступному прикладі обидві умови повернуть{" "}
          <span className={s.Span}>true</span>, тому результатом всього виразу
          буде <span className={s.Span}>true</span>- повернеться значення
          правого операнда.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              const age = 20;
              console.log(age > 10 && age < 30); // true && true -> true
            `}
        </SyntaxHighlighter>
        <p>
          Тобто логічне «І» замикається на брехні і повертає те, на чому
          запнулося або останній операнд.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
              console.log(1 && 5); // true && true -> 5
              console.log(5 && 1); // true && true -> 1
              console.log(0 && 2); // false && true -> 0
              console.log(2 && 0); // true && false -> 0
              console.log("" && "Mango"); // false && true -> ""
              console.log("Mango" && ""); // true && false -> ""
              console.log("Mango" && "Poly"); // true && true -> "Poly"
              console.log("Poly" && "Mango"); // true && true -> "Mango"
            `}
        </SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            При виконанні логічного «І», правий операнд може не обчислюватися,
            якщо лівий був приведений до <span className={s.Span}>false</span>.
          </p>
        </div>
        <h3>Логічне "АБО"</h3>
        <p>
          Оператор <span className={s.Span}>||</span> приводить усі операнди до
          булю та повертає значення одного з них. Лівий операнд якщо його можна
          призвести до <span className={s.Span}>true</span>, і правий в інших
          випадках.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>{`
                const age = 5;
                console.log(age < 10 || age > 30); // true || false -> true
            
            `}</SyntaxHighlighter>
        <p>
          Тут результатом теж буде <span className={s.Span}>true</span>,
          оскільки хоча б один з операндів, у цьому випадку правий, був
          приведений до <span className={s.Span}>true</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>{`
                const age = 20;
                console.log(age < 10 || age > 30); // false || false -> false
            
            `}</SyntaxHighlighter>
        <p>
          Тобто логічне «АБО» замикається на правді і повертає те, на чому
          запнулося або останній операнд.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>{`
                console.log(true || false); // true
                console.log(false || true); // true
                console.log(true || true); // true
                
                console.log(3 || false); // 3
                console.log(false || 3); // 3
                console.log(3 || true); // 3
                console.log(true || 3); // true
            
            `}</SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            При виконанні логічного «АБО», правий операнд може не обчислюватися,
            якщо лівий був приведений до <span className={s.Span}>true</span>.
          </p>
        </div>
        <h3>Логічне "НЕ"</h3>
        <p>
          Всі оператори, які ми розглядали до цього, були{" "}
          <strong>бінарними</strong> - що містять два операнди, лівий і правий.
          Логічне «НЕ» це <strong>унарний</strong> оператор, який виконує
          операцію над одним операндом праворуч.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>{`
               !вираз
            
            `}</SyntaxHighlighter>
        <p>
          Оператор <span className={s.Span}>!</span> приводить операнд до булю,
          якщо необхідно, а потім робить інверсію – замінює його на протилежний{" "}
          <span className={s.Span}>{`true -> false`}</span> або{" "}
          <span className={s.Span}>{`false -> true`}</span>.
        </p>

        <SyntaxHighlighter language="javascript" style={codeStyle}>{`
               console.log(!true); // false
               console.log(!false); // true
               console.log(!3); // !3 -> !true -> false
               console.log(!"Mango"); // !"Mango" -> !true -> false
               console.log(!0); // !0 -> !false -> true
               console.log(!""); // !"" -> !false -> true
               
               const isOnline = true;
               const isNotOnline = !isOnline; // !isOnline -> !true -> false
            
            `}</SyntaxHighlighter>
      </div>
    </div>
  );
};

export default M1L1;
