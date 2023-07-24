import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import callBack01 from "../../img/callBack01.jpeg";
import declarative from "../../img/declarative.jpeg";
const CallBack = () => {
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
              <a href="#callBack">Колбек-функції</a>
            </li>
            <li>
              <a href="#forEach">Метод forEach</a>
            </li>
            <li>
              <a href="#arroeFn">Стрілочні функції</a>
            </li>
            <li>
              <a href="#codeType">Різновиди коду</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="callBack">Колбек-функції</h1>
        <p>
          Функції не відрізняються від чисел, рядків або масивів - це просто
          спеціальний тип даних (об'єкт вищого порядку), значення, яке можна
          зберігати в змінній або передавати як аргумент на іншу функцію.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function greet(name) {
           return \`Ласкаво просимо  $\{name}.\`;
           }

           // Викликаємо функцію greet та виводимо результати в консоль
           console.log(greet("Манго")); // Ласкаво просимо Манго.

           // Виводимо функцію greet в консоль не викликаючи її
           console.log(greet); // ƒ greet() { return \`Ласкаво просимо $\{name}.\`; }
                `}
        </SyntaxHighlighter>
        <p>
          У першому лозі ми викликаємо функцію{" "}
          <span className={s.Span}>greet</span> за допомогою круглих дужок і в
          консоль виводиться результат виконання. У другому лозі передається{" "}
          <strong>посилання на функцію</strong> , а не результат виклику
          (відсутні круглі дужки), тому консоль виводиться її тіло. Це означає,
          що функцію можна присвоїти змінну або передати як аргумент іншої
          функції.
        </p>
        <p>
          <strong>Функція зворотного виклику (callback, колбек)</strong> - це
          функція, яка передається інший функції як аргумент і та, своєю чергою,
          викликає передану функцію.
        </p>
        <p>
          <strong> Функція вищого порядку (higher order function)</strong> -
          функція, яка приймає як параметри інші функції або повертає функцію як
          результат.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Колбек-функція
            function greet(name) {
            console.log(\`Ласкаво просимо  $\{name}.\`);
            }

            // Функция высшего порядка
            function registerGuest(name, callback) {
            console.log(\`Реєструємо гостя $\{name}.\`);
            callback(name);
            }

            registerGuest("Манго", greet);
                `}
        </SyntaxHighlighter>
        <p>
          Ми передали посилання на функцію <span className={s.Span}>greet</span>{" "}
          як аргумент, тому вона буде присвоєна в параметр{" "}
          <span className={s.Span}>callback</span> і викликана всередині функції{" "}
          <span className={s.Span}>registerGuest</span> через круглі дужки. Ім'я
          параметра колбека може бути довільним, головне пам'ятати, що значенням
          буде функція.
        </p>
        <h3>Інлайн колбеки</h3>
        <p>
          Якщо колбек-функція невелика і потрібна лише передачі аргументом, її
          можна оголосити при виклику функції у яку передаємо колбек. Така
          функція буде доступна лише як значення параметра та більше ніде у
          коді.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function registerGuest(name, callback) {
            console.log(\`Реєструємо гостя $\{name}.\`);
            callback(name);
            }

            // Передаємо інлайн функцію greet як колбек
            registerGuest("Манго", function greet(name) {
            console.log(\`Ласкаво просимо $\{name}.\`);
            });

            // Передаємо інлайн функцію notify як колбек
            registerGuest("Полі", function notify(name) {
            console.log(\`Шановний(а) $\{name}, ваш номер буде готовий через 30 хвилин.\`);
            });
                `}
        </SyntaxHighlighter>
        <h3>Кілька колбеків</h3>
        <p>
          Функція може приймати довільну кількість колбеків. Наприклад, уявимо,
          що ми пишемо логіку прийняття дзвінків для телефону. Програма повинна
          увімкнути автовідповідач, якщо абонент недоступний, або з'єднати
          дзвінок в іншому випадку. Доступність абонента імітуватимемо
          генератором випадкового числа, щоб між різними викликами функції можна
          було отримати різні результати.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function processCall(recipient) {
            //Імітуємо доступність абонента випадковим числом
            const isRecipientAvailable = Math.random() > 0.5;

            if (!isRecipientAvailable) {
                console.log(\`Абонент $\{recipient} недоступний, залиште повідомлення.\`);
                // Логіка активації автовідповідача
            } else {
                console.log(\`Зʼєднуємо з $\{recipient}, очікуйте...\`);
             // Логіка прийнятя дзвінка
            }
            }

            processCall("Манго");
                `}
        </SyntaxHighlighter>
        <p>
          {" "}
          Проблема такого підходу в тому, що функція{" "}
          <span className={s.Span}>processCall</span> робить занадто багато і
          прив'язує перевірку доступності абонента до двох наперед визначених
          дій. Що якщо в майбутньому замість автовідповідача потрібно залишати
          голограму? Ми могли б написати функцію так, щоб вона повертала якесь
          значення і потім за результатом виконання виконувати перевірки і
          виконувати потрібний код. Але перевірки не відносяться до зовнішнього
          коду і засмічуватимуть його. Виконаємо рефакторинг функції так, щоб
          вона приймала два колбеки
          <span className={s.Span}>onAvailable</span> і{" "}
          <span className={s.Span}>onNotAvailable</span>, і викликала їх за
          умовою.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function processCall(recipient, onAvailable, onNotAvailable) {
           //Імітуємо доступність абонента випадковим числом
           const isRecipientAvailable = Math.random() > 0.5;

           if (!isRecipientAvailable) {
               onNotAvailable(recipient);
               return;
           }

           onAvailable(recipient);
           }

           function takeCall(name) {
           console.log(\`Зʼєднуємо з $\{name}, очікуйте...\`);
           // Логіка прийнятя дзвінка
           }

           function activateAnsweringMachine(name) {
            console.log(\`Абонент $\{name} недоступний, залиште повідомлення.\`);
           // Логіка активації автовідповідача
           }

           function leaveHoloMessage(name) {
           console.log(\`Абонент $\{name} недоступний, записуємо голограму.\`);
           // Логіка запису голограми
           }

           processCall("Манго", takeCall, activateAnsweringMachine);
           processCall("Поли", takeCall, leaveHoloMessage);
                `}
        </SyntaxHighlighter>
        <p>
          Колбеки застосовуються для обробки дій користувача на сторінці, при
          обробці запитів на сервер, виконання заздалегідь невідомих функцій
          тощо. У цьому полягає їх суть - це функції призначені для відкладеного
          виконання.
        </p>
        <h3>Абстрагування повторення</h3>
        <p>
          Абстракція – приховування деталей реалізації. Дозволяє думати про
          завдання на вищому (абстрактному) рівні. Функції це добрий спосіб
          побудови абстракцій.
        </p>
        Наприклад, скрипт виконує якусь дію певну кількість разів. Для цього
        можна написати цикл <span className={s.Span}>for</span>.
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            for (let i = 0; i < 10; i += 1) {
                console.log(i);
            } 
                `}
        </SyntaxHighlighter>
        <p>
          Чи можемо ми абстрагувати "робити щось N раз" як функцію? - так,
          напишемо функцію, яка викликає{" "}
          <span className={s.Span}>console.log()</span> N разів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function repeatLog(n) {
            for (let i = 0; i < n; i += 1) {
             console.log(i);
            }
            }

          repeatLog(5);
                `}
        </SyntaxHighlighter>
        <p>
          Але що якщо ми хочемо зробити щось, крім логування чисел? Оскільки
          «робити щось» можна як функцію, а функції - це значення, ми можемо
          передати дію як аргумент.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
         function printValue(value) {
           console.log(value);
         }

         function prettyPrint(value) {
            console.log("Logging value: ", value);
         }

         function repeat(n, action) {
           for (let i = 0; i < n; i += 1) {
            action(i);
         }
         }

         // Передаємо printValue як callback-функцію
         repeat(3, printValue);
         // 0
         // 1
         // 2

         // Передаємо prettyPrint як callback-функцию
         repeat(3, prettyPrint);
         // Logging value: 0
         // Logging value: 1
         // Logging value: 2
                `}
        </SyntaxHighlighter>
        <h1 id="forEach">Метод forEach</h1>
        <p>
          Перебираючий метод масиву, який використовується як заміна циклів{" "}
          <span className={s.Span}>for</span> і{" "}
          <span className={s.Span}>for...of</span> при роботі з колекцією даних.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          масив.forEach(function callback(element, index, array) {
            // Тіло колбек-функції
          });
                `}
        </SyntaxHighlighter>
        <ul>
          <li>Поелементно перебирає масив.</li>
          <li>Викликає колббек-функцію для кожного елемента масиву.</li>
          <li>Нічого не вертає.</li>
        </ul>
        <p>
          Аргументи коллбек-функції це значення поточного елемента{" "}
          <span className={s.Span}>element</span>, його індекс{" "}
          <span className={s.Span}>index</span> і вихідний масив
          <span className={s.Span}>array</span>. Оголошувати можна тільки ті
          параметри, які потрібні, найчастіше це елемент, головне не забувати
          про їх порядок.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const numbers = [5, 10, 15, 20, 25];

           // Классический for
           for (let i = 0; i < numbers.length; i += 1) {
           console.log(\`Индекс $\{i}, значение $\{numbers[i]}\`);
           }

           // Перебирающий forEach
           numbers.forEach(function (number, index) {
           console.log(\`Индекс $\{index}, значение $\{number}\`);
           });
                `}
        </SyntaxHighlighter>
        <p>
          Єдиним випадком, коли варто використовувати цикли{" "}
          <span className={s.Span}>for</span> або
          <span className={s.Span}>for...of</span> для перебору масиву це
          завдання з перериванням виконання циклу. Перервати виконання методу{" "}
          <span className={s.Span}>forEach</span> не можна, він завжди перебирає
          масив остаточно.
        </p>
        <h1 id="arroeFn">Стрілочні функції</h1>
        <p>
          Стрілецькі функції мають скорочений, більш лаконічний синтаксис, що
          зменшує обсяг коду, особливо коли функція маленька або якщо вона
          використовується як колббек.
        </p>
        <p>
          Усі стрілки створюються як{" "}
          <span className={s.Span}>функціональне вираз</span>, і якщо функція не
          анонімна, вона повинна бути присвоєна змінної.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Звичайне оголошення функції
            function classicAdd(a, b, c) {
            return a + b + c;
            }

            // Теж саме, як стрілочна функція
            const arrowAdd = (a, b, c) => {
            return a + b + c;
            };
                `}
        </SyntaxHighlighter>
        <p>
          Ключове слово <span className={s.Span}>function</span> не
          використовується, натомість відразу йде оголошення параметрів, за
          якими слідує символ <span className={s.Span}>=></span> і тіло функції.
        </p>
        <p>
          Якщо параметрів кілька, то вони перераховуються через кому в круглих
          дужках, між знаками <span className={s.Span}>=</span> і стрілкою{" "}
          <span className={s.Span}>=></span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const add = (a, b, c) => {
            return a + b + c;
          };
                `}
        </SyntaxHighlighter>
        <p>Якщо параметр один, його оголошення може бути без круглих дужок.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const add = a => {
            return a + 5;
          };
                `}
        </SyntaxHighlighter>
        <p>
          Якщо параметрів немає, обов'язково повинні бути порожні круглі дужки.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const greet = () => {
            console.log("Привіт!");
          };  
                `}
        </SyntaxHighlighter>
        <h3>Неявне повернення</h3>
        <p>
          У стрілочній функції після символу <span className={s.Span}>=></span>{" "}
          йде її тіло. Тут може бути два варіанти: з фігурними дужками та без
          них.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           const add = (a, b, c) => {
             console.log(a, b, c);
             return a + b + c;
           }; 
                `}
        </SyntaxHighlighter>
        <p>
          Якщо фігурні дужки є і функція повинна повертати якесь значення,
          необхідно явно поставити <span className={s.Span}>return</span>. Це
          називається явне повернення (explicit return). Такий синтаксис
          використовується в тому випадку, якщо в тілі функції потрібно виконати
          ще якісь інструкції, крім повернення значення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const add = (a, b, c) => a + b + c;
                `}
        </SyntaxHighlighter>
        <p>
          Якщо фігурних дужок немає, то повертається результат виразу, що стоїть
          після <span className={s.Span}>=></span>. Це називається неявне
          повернення (implicit return). У прикладі повернеться результат
          вираження додавання параметрів <span className={s.Span}>a</span>,{" "}
          <span className={s.Span}>b</span> і <span className={s.Span}>c</span>.
        </p>
        <p>
          Синтаксис неявного повернення сильно скорочує «шум» оголошення функції
          з тілом і виразом, що повертається, але підходить тільки у випадку
          коли в тілі функції не потрібно виконувати ніяких додаткових
          інструкцій крім повернення значення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // До
          function classicAdd(a, b, c) {
          return a + b + c;
          }

          // Після
          const arrowAdd = (a, b, c) => a + b + c;
                `}
        </SyntaxHighlighter>
        <h3>
          Псевдомасив <span className={s.Span}>arguments</span>
        </h3>
        <p>
          У стрілочних функцій немає локальної змінної{" "}
          <span className={s.Span}>arguments</span>, що містить усі аргументи.
          Якщо потрібно зібрати всі аргументи в масив, використовується операція{" "}
          <span className={s.Span}>rest</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const add = (...args) => {
          console.log(args);
          };

          add(1, 2, 3); // [1, 2, 3]
                `}
        </SyntaxHighlighter>
        <h3>Стрілкові функції як колбеки</h3>
        <p>
          Анонімні стрілочні функції відмінно підходять як колббеки для методів
          масиву, що перебирають, через більш короткий синтаксис оголошення,
          особливо якщо не потрібно тіло функції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const numbers = [5, 10, 15, 20, 25];

           // Оголошення функції
           numbers.forEach(function (number, index) {
           console.log(\`Індекс $\{index}, значення $\{number}\`);
           });

           // Анонімна стрілочна функція
           numbers.forEach((number, index) => {
           console.log(\`Індекс $\{index}, значення $\{number}\`);
           });
                `}
        </SyntaxHighlighter>
        <p>
          Стрілочну коллбек-функцію також можна оголошувати окремо та передавати
          на неї посилання. Це варто робити, якщо одна функція використовується
          в кількох місцях програми або якщо вона громіздка.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const numbers = [5, 10, 15, 20, 25];

          const logMessage = (number, index) => {
              console.log(\`Індекс $\{index}, знечення $\{number}\`);
          };

          numbers.forEach(logMessage);
                `}
        </SyntaxHighlighter>
        <h1 id="codeType">Різновиди коду</h1>
        <p>
          Описує процес обчислення у вигляді заданої послідовності інструкцій,
          що змінюють стан програми. Опис того, як виконується щось.
        </p>
        <p>
          <strong>Імперативний стиль програмування</strong> – це такий, що дає
          машині набір детальних інструкцій для виконання завдання. Наприклад,
          цикл <span className={s.Span}>for</span>, який надає точні вказівки
          для ітерації за індексами масиву.
        </p>
        <p>
          Можна провести аналогію з рецептом приготування страви. Рецепт – це
          набір покрокових інструкцій для отримання бажаного результату.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={callBack01} alt="" />
        </div>
        <h3>Декларативне програмування</h3>
        <p>
          Описує те, що хочемо отримати в результаті, а не як це зробити.
          Порядок виконання та спосіб досягнення не важливий.
        </p>
        <p>
          Коли ми пишемо HTML-код, то декларативно, за допомогою тегів та
          атрибутів, описуємо те, що хочемо отримати в результаті. Браузер читає
          цей код і сам виконує всі необхідні операції зі створення
          HTML-елементів та розміщення їх на сторінці.
        </p>
        <p>
          Можна провести аналогію з меню ресторану. Це декларативний набір
          можливих для замовлення страв, деталі приготування та подачі яких
          приховані.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={declarative} alt="" />
        </div>
        <p>
          Декларативний опис завдання більш наочно та легше формулюється. Ми
          говоримо, що хочемо зробити, викликавши метод чи функцію. Її
          реалізація, швидше за все, використовує імперативний код, але він
          прихований усередині і не ускладнює розуміння основного коду.
        </p>
        <h3>Імперативний vs декларативний</h3>
        <p>
          Розглянемо різницю підходів з прикладу базової операції фільтрації
          колекції. Напишемо код перебору та фільтрації масиву чисел за якимось
          критерієм.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Імперативний підхід
            const numbers = [1, 2, 3, 4, 5];
            const filteredNumbers = [];

            for (let i = 0; i < numbers.length; i += 1) {
               if (numbers[i] > 3) {
                  filteredNumbers.push(numbers[i]);
               }
            }

            console.log(filteredNumbers); // [4, 5]
                `}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>filter()</span> приховує в собі логіку
          перебору колекції і викликає callback-функцію, яку ми передаємо йому
          для кожного елемента, повертаючи масив елементів, що підійшли під
          критерій.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Декларативний підхід
            const numbers = [1, 2, 3, 4, 5];
            const filteredNumbers = numbers.filter(value => value > 3);
            console.log(filteredNumbers); // [4, 5] 
                `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CallBack;
