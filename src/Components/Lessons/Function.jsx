import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import fnBasics from "../../img/fn-basics.png";
import scope from "../../img/scope.png";
import stack from "../../img/stack.png";
import callStack from "../../img/call-stack.png";

const Function = () => {
  const codeStyle = materialDark;

  return (
    <div className={s.lessonsBox}>
      <div className={s.breadNav}>
        <Scrollspy
          items={["branching", "section-2", "section-3"]}
          currentClassName="is-current"
        >
          <div className={s.breadNavList}>
            <li>
              <a href="#fn">Функції</a>
            </li>
            <li>
              <a href="#Field">Область видимості</a>
            </li>
            <li>
              <a href="#stek">Стек викликів</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="fn">Функції</h1>
        <p>
          <strong>Функція</strong> - це підпрограма, незалежна частина коду,
          призначена для багаторазового виконання конкретного завдання з різними
          початковими значеннями. Функції дозволяють структурувати великі
          програми, зменшують повторення та ізолюють код.
        </p>
        <p>
          Функцію можна уявити як чорну скриньку, вона отримує щось на вході
          (дані), і повертає щось на виході (результат виконання коду всередині
          неї).
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={fnBasics} alt="" />
        </div>
        <h3>Оголошення функції</h3>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                 // 1. Оголошення функції multiply
                  function multiply() {
                    // Тіло функції
                    console.log("Це лог при викликові функції multiply");
                  }

                // 2. Виклик функції  multiply
                multiply(); // 'Це логи при викликові функції multiply'
                multiply(); // 'Це логи при викликові функції multiply'
                multiply(); // 'Це логи при викликові функції multiply'
                `}
        </SyntaxHighlighter>
        <p>
          Оголошення функції <strong>( function declaration )</strong>{" "}
          починається з ключового слова{" "}
          <span className={s.Span}>SyntaxHighlighterfunction</span>, за яким йде
          її ім'я - дієслово, що відповідає на запитання{" "}
          <strong>«Що зробити?» </strong> та пара круглих дужок.
        </p>
        <p>
          Тіло функції вкладено у фігурні дужки{" "}
          <span className={s.Span}>SyntaxHighlighter{}</span> і містить
          інструкції, які необхідно виконати при її <strong>викликові</strong> .
          Потім, коли необхідно, функція <strong>викликається</strong> за
          допомогою імені та пари круглих дужок.
        </p>
        <h3>параметри та аргументи</h3>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
                // Оголошення параметрів  x, y, z
                function multiply(x, y, z) {
                  console.log(\`Результат множення рівний ${"x * y * z"}\`);
                }
                `}
        </SyntaxHighlighter>
        <p>
          Параметри це локальні змінні, доступні тільки в тілі функції. Вони
          поділяються комами. Параметрів може бути кілька або взагалі не бути,
          тоді записуються просто порожні круглі дужки.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Параметри будуть створюватися заново щоразу під час виклику функції,
            і окремі інкарнації ніяк не пов'язані.
          </p>
        </div>
        <p>
          При виклику функції у круглих дужках можна передати{" "}
          <strong>аргументи</strong> - значення для оголошених параметрів
          функції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            // 1. Оголошення параметрів x, y, z
            function multiply(x, y, z) {
              console.log(\`Результат множення рівний ${"x * y * z"}\`);
            }

            // 2. Передаємо аргументи 
            multiply(2, 3, 5); // Результат множення рівний 30
            multiply(4, 8, 12); // Результат множення рівний 384
            multiply(17, 6, 25); // Результат множення рівний 2550
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
            Порядок передачі аргументів має відповідати порядку оголошених
            параметрів: значення першого аргументу буде присвоєно першому
            параметру, другого аргументу другому параметру і т. д. Якщо
            параметрів буде більше ніж аргументів, параметрам без значень буде
            присвоєно <span className={s.Span}>SyntaxHighlighterundefined</span>
            .
          </p>
        </div>
        <h3>Повернення значення</h3>
        <p>
          Оператор <span className={s.Span}>SyntaxHighlighterreturn</span>{" "}
          використовується передачі значення з тіла функції у зовнішній код.
          Коли інтерпретатор зустрічає{" "}
          <span className={s.Span}>SyntaxHighlighterreturn</span>, він відразу
          виходить із функції (припиняє її виконання), і повертає зазначене
          значення у місце коду, де функція була викликана.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function multiply(x, y, z) {
                console.log("Код до return виконується як звичайно");

                // Повертаємо результат множення
                return x * y * z;

                console.log("Цей лог наколи не виконається, він стоїть після return");
              }

              // Результат работи функції можна зберегти в змінну
              let result = multiply(2, 3, 5);
              console.log(result); // 30

              result = multiply(4, 8, 12);
              console.log(result); // 384

              result = multiply(17, 6, 25);
              console.log(result); // 2550
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
            Оператор <span className={s.Span}>SyntaxHighlighterreturn</span> без
            явно вказаного значення повертає спеціальне значення{" "}
            <span className={s.Span}>SyntaxHighlighterundefined</span>. За
            відсутності <span className={s.Span}>SyntaxHighlighterreturn</span>{" "}
            в тілі функції вона все одно поверне{" "}
            <span className={s.Span}>SyntaxHighlighterundefined</span>.
          </p>
        </div>
        <h3>Порядок виконання коду</h3>
        <p>
          Коли інтерпретатор зустрічає виклик функції (або методу), він зупиняє
          виконання поточного коду та починає виконувати код із тіла функції.
          Після того, як весь код функції буде виконано, інтерпретатор виходить
          з тіла функції, повертаючись у те місце, звідки прийшов і продовжує
          виконувати код, наступний після виклику функції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function multiply(x, y, z) {
              console.log(\`Результат множення рівен  ${"x * y * z"}\`);
            }

            console.log("Лог до виклику функції ʼ multiply");
            multiply(2, 3, 5); // Результат множення рівен 30
            console.log("Лог після виклику функції multiply");

            // Послідовність логів в консолі
            // "Лог до виклику функції multiply"
            // "Результат множеня рівен 30"
            // "Лог після виклику функції multiply"
                `}
        </SyntaxHighlighter>
        <h3>Параметри за замовчуванням</h3>
        <p>
          Іноді необхідно оголосити функцію, у параметрів якої будуть значення,
          відмінні від{" "}
          <span className={s.Span}>SyntaxHighlighterundefined</span>, навіть
          якщо для них не передали аргументи. Це робиться дуже простим і
          очевидним чином, достатньо вказати значення за промовчанням прямо при
          оголошенні параметрів підпису функції. При такому записі, якщо
          параметр не передає значення аргументу, використовується значення за
          замовчуванням.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function count(countFrom = 0, countTo = 10, step = 1) {
              console.log(\`countFrom = ${"countFrom"}, countTo = ${"countTo"}, step = ${"step"}\`);

              for (let i = countFrom; i <= countTo; i += step) {
                console.log(i);
              }
            }

            count(1, 5); // countFrom = 1, countTo = 5, step = 1
            count(2); // countFrom = 2, countTo = 10, step = 1
            count(); // countFrom = 0, countTo = 10, step = 1
                `}
        </SyntaxHighlighter>
        <h3>
          Псевдомасив <span className={s.Span}>SyntaxHighlighterarguments</span>
        </h3>
        <p>
          Доступ до списку всіх <strong>аргументів</strong> можна отримати за
          допомогою спеціальної змінної{" "}
          <span className={s.Span}>SyntaxHighlighterarguments</span>, яка
          доступна тільки всередині функції і зберігає всі аргументи як
          псевдомасив.
        </p>
        <p>
          <strong>Псевдомасив</strong> - колекція, з властивістю{" "}
          <span className={s.Span}>SyntaxHighlighterlength</span> та можливістю
          звернутися до елемента за індексом, але відсутністю більшості методів
          для роботи з масивом.
        </p>
        <p>
          Розглянемо приклад використання{" "}
          <span className={s.Span}>SyntaxHighlighterarguments</span> функції,
          яка множить будь-яку кількість аргументів:
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function multiply() {
              let total = 1;

              for (const argument of arguments) {
                total *= argument;
              }

              return total;
            }

            console.log(multiply(1, 2, 3)); //  6
            console.log(multiply(1, 2, 3, 4)); //  24
            console.log(multiply(1, 2, 3, 4, 5)); //  120
                `}
        </SyntaxHighlighter>
        <h5>Перетворення псевдомасиву</h5>
        <p>
          Зазвичай псевдомасив необхідно перетворити на повноцінний масив, так
          як у псевдомасиву немає методів масиву, наприклад,{" "}
          <span className={s.Span}>SyntaxHighlighterslice()</span> або{" "}
          <span className={s.Span}>SyntaxHighlighterincludes()</span>. Насправді
          застосовують кілька основних способів.
        </p>
        <p>
          Використовуючи метод{" "}
          <span className={s.Span}>SyntaxHighlighterArray.from()</span>, який
          створить масив із псевдомасиву.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function fn() {
              // В змінній args буде повноційний масив
              const args = Array.from(arguments);
            }
                `}
        </SyntaxHighlighter>
        <p>
          Використовуючи операцію{" "}
          <span className={s.Span}>SyntaxHighlighter...(rest)</span>, вона
          дозволяє зібрати довільну кількість елементів, у разі аргументів, в
          масив і зберегти їх у змінну. Збираємо всі аргументи, використовуючи
          операцію <span className={s.Span}>SyntaxHighlighterrest</span> прямо в
          підписі функції.
        </p>

        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function fn(...args) {
              // В змінній args буде повноцінний масив
            }
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
            Операція <span className={s.Span}>SyntaxHighlighterrest</span>{" "}
            детальніше розглядається далі в курсі, тут показано одне з її
            можливих застосувань.
          </p>
        </div>
        <h3>Паттерн "Раннє повернення"</h3>
        <p>
          Оператор <span className={s.Span}>SyntaxHighlighterif...else</span> –
          це основний спосіб створення розгалужень. Тим не менш, складні
          вкладені розгалуження роблять код заплутаним для розуміння.
        </p>
        <p>
          Створимо функцію, яка обробляє зняття грошей з особового рахунку у
          банку. Вона отримує суму для зняття та поточний баланс рахунку, після
          чого, залежно від умови, виконує той чи інший блок коду.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function withdraw(amount, balance) {
              if (amount === 0) {
                console.log("Для проведення операції введіть суму більше нуля");
              } else if (amount > balance) {
                console.log("Недостатньо коштів на рахунку");
              } else {
                console.log("Операція списання коштів пройшла успішно");
              }
            }

            withdraw(0, 300); // "Для проведення операції введіть суму більше нуля"
            withdraw(500, 300); // "Недостатньо коштів на рахунку"
            withdraw(100, 300); // "Операція списання коштів пройшла успішно"
                `}
        </SyntaxHighlighter>
        <p>
          Навіть у такому простому прикладі є група вкладених умовних
          операторів, серед яких не одразу можна виділити зрозуміти логіку
          виконання коду.
        </p>
        <p>
          У функції може бути більше одного оператора{" "}
          <span className={s.Span}>SyntaxHighlighterreturn</span>. Головне
          пам'ятати, що виконання функції переривається, коли інтерпретатор
          зустрічає повернення, і весь код після нього буде проігнорований у
          поточному виклику функції.
        </p>
        <p>
          <strong>Паттерн "Рання повернення"</strong> - це спосіб
          використовувати можливість дострокового повернення з функції за
          допомогою оператора{" "}
          <span className={s.Span}>SyntaxHighlighterreturn</span>.
          Використовуючи цей прийом ми отримуємо чистіший, плоскіший і
          зрозуміліший код, який легше рефакторити.
        </p>
        <p>
          Виділимо всі перевірки умов в окремі оператори{" "}
          <span className={s.Span}>SyntaxHighlighterif</span>, після чого додамо
          код, що йде в тілі{" "}
          <span className={s.Span}>SyntaxHighlighterelse</span>. В ідеальному
          випадку, повинен вийти плоский список умовних операторів, що йдуть
          один за одним, а в кінці блок, який виконається тільки в тому випадку,
          якщо не виконається жоден{" "}
          <span className={s.Span}>SyntaxHighlighterif</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function withdraw(amount, balance) {
              // Якщо умова виконується, викликається console.log
              // і виходимо з функції. Код після тіла if не виконується.
              if (amount === 0) {
                console.log("Для проведення операції введіть суму більшу нуля");
                return;
              }

              // Якщо умова першого if не виконалась, його тіло пропускається
              // інтерпретатор доходить до другого if.
              // Якщо умова виконується, викликається console.log та виходить з функції.
              // Код після тіла  if  не виконується.
              if (amount > balance) {
                console.log("Недостатньо коштів на рахунку");
                return;
              }

              // Якщо жоден з попередніх  if не виконався,
              // інтерпретатор доходить до цього коду та виконує його.
              console.log("Операція списання коштів успішна");
            }

            withdraw(0, 300); // "Для проведення операції введіть суму більшу нуля"
            withdraw(500, 300); // "Недостатньо коштів на рахунку"
            withdraw(100, 300); // "Операція списання коштів успішна"
                `}
        </SyntaxHighlighter>
        <h3>Функціональний вираз</h3>
        <p>
          <strong>
            Функціональний вираз (function exSyntaxHighlighterssion)
          </strong>{" "}
          – звичайне оголошення змінної, значення якої буде функція.
          Альтернативний спосіб оголошення функції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            // Оголошення функції  (function declaration)
              function multiply(x, y, z) {
                console.log(\`Результат множення дорівнює ${"x * y * z"}\`);
              }

              // Функціональний вираз  (function exSyntaxHighlighterssion)
              const multiply = function (x, y, z) {
                console.log(\`Результат множення дорівнює ${"x * y * z"}\`);
              };
                `}
        </SyntaxHighlighter>
        <p>
          Різниця в тому, що функціональний вираз не можна викликати до місця
          його створення, тільки після того, що це буквально оголошення
          constзмінної.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            // ❌ Помилка! Не працює виклик до оголошення
            multiply(1, 2, 3);

            const multiply = function (x, y, z) {
              console.log(\`Результат множення дорівнює ${"x * y * z"}\`);
            };

            // ✅ Працює виклик після оголошення
            multiply(4, 5, 6);
                `}
        </SyntaxHighlighter>
        <p>A оголошення функції можна викликати до місця створення в коді.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            // ✅ Працює виклик до оголошення
              multiply(1, 2, 3);

              function multiply(x, y, z) {
                console.log(\`Результат множення дорівнює ${"x * y * z"}\`);
              }

              // ✅ Працює виклик після оголошення
              multiply(4, 5, 6);
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
            Не важливо який синтаксис використовувати, головне, щоб код у
            проекті був однорідним. Тобто потрібно намагатися не заважати
            оголошення функції з функціональними виразами.
          </p>
        </div>
        <h1 id="Field">Область видимості</h1>
        <p>
          <strong>Область видимости (scope)</strong> - механизм который
          определяет доступность переменных в исполняемом коде.
        </p>
        <p>
          <strong>Цепочка областей видимости (scope chain)</strong> - области
          видимости образуют иерархию, так что дочерние области имеют доступ к
          переменным из родительских областей, но не наоборот.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Переменная видна для исполняемого кода, если она есть в текущей
            области видимости или в цепочке областей видимости.
          </p>
        </div>
        <h3>Глобальна область видимості</h3>
        <p>
          Змінні, оголошені на верхньому рівні, тобто поза будь-якими
          конструкціями на кшталт{" "}
          <span className={s.Span}>SyntaxHighlighterif</span>,{" "}
          <span className={s.Span}>SyntaxHighlighterwhile</span>,{" "}
          <span className={s.Span}>SyntaxHighlighterfor</span> і функцій,
          знаходяться в <strong>глобальній області видимості</strong>і доступні
          скрізь після їх оголошення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const globalValue = 10;

            console.log(globalValue); // 10

            function foo() {
              console.log(globalValue); // 10
            }

            for (let i = 0; i < 5; i++) {
              console.log(globalValue); // 10

              if (i === 2) {
                console.log(globalValue); // 10
              }
            }
                `}
        </SyntaxHighlighter>
        <h3>Блокова область видимості</h3>
        <p>
          Змінні, оголошені всередині інструкцій{" "}
          <span className={s.Span}>SyntaxHighlighterif</span>,{" "}
          <span className={s.Span}>SyntaxHighlighterfor</span>, функцій та інших
          блоків коду, обрамлених фігурними дужками{" "}
          <span className={s.Span}>SyntaxHighlighter</span>, знаходяться в{" "}
          <strong>блочній області видимості</strong> і доступні тільки всередині
          цього блоку коду або вкладених у нього.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function foo() {
              const a = 20;
              console.log(a); // 20

              for (let i = 0; i < 5; i++) {
                console.log(a); // 20

                if (i === 2) {
                  console.log(a); // 20
                }
              }
            }

            // ❌ Помилка! Змінна a не доступна в глобальній області видимості
            console.log(a);

            for (let i = 0; i < 3; i++) {
              // ❌ Помилка! Змінна a не доступна в цій області видимості
              console.log(a);
            }
                `}
        </SyntaxHighlighter>
        <p>
          Це можна уявити як будинок із кімнатами. Будинок знаходиться у
          глобальній області видимості. Кожна функція та блок створюють нову
          кімнату, вкладену всередину будинку. Змінні, оголошені всередині цих
          кімнат, доступні лише тоді, коли ви перебуваєте усередині цієї
          кімнати. Поза кімнатою ці змінні недоступні.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
           for (let i = 0; i < 5; i++) {
             const a = 20;
             console.log(a); // 20

             if (i === 2) {
               const b = 30;
               console.log(a); // 20
               console.log(b); // 30
             }

             if (i === 3) {
               console.log(a); // 20

               // ❌ Помилка! Змінна b не доступна в цій області видимості
               console.log(b);
             }
           }
                `}
        </SyntaxHighlighter>
        <h3>Пошук по ланцюжку областей видимості</h3>
        <p>
          Інтерпретатор намагається спочатку знайти змінну у тій галузі
          видимості, в якій до неї звернулися. Якщо такої змінної в локальній
          області видимості немає, то він виходить назовні, на один рівень за
          спробу, поки не знайде значення або не дійде до верхньої області
          видимості (глобальної) і зрозуміє, що змінну з таким ідентифікатором
          неможливо знайти, оскільки її просто ні, тоді буде помилка про те, що
          змінну не оголошено.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "40vw" }} src={scope} alt="" />
        </div>
        <h1 id="stek">Стек викликів</h1>
        <p>
          При виклик функції, всередині її тіла можуть викликатися інші функції,
          а в них інші і т. д. JavaScript однопотоковий мову, тобто в одну
          одиницю часу може виконуватися тільки одна інструкція. Це означає, що
          вже викликані функції, які закінчили своє виконання, повинні чекати
          виконання функцій викликаних у собі, у тому, щоб продовжити своєї
          роботи.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function fnA() {
              console.log("Лог всередині функції fnA до виклику fnB");
              fnB();
              console.log("Лог в середині функції fnA після виклику fnB");
            }

            function fnB() {
              console.log("Лог всередині функції fnB");
            }

            console.log("Лог перед викликом fnA");
            fnA();
            console.log("Лог після виклику fnA");

            // "Лог перед викликом fnA"
            // "Лог всередині функції fnA до виклику fnB"
            // "Лог всередині функції fnB"
            // "Лог всередині функції fnA після виклику fnB"
            // "Лог після виклику fnA"
                `}
        </SyntaxHighlighter>
        <p>
          Необхідний механізм зберігання списку функцій, які були викликані, але
          ще не закінчили виконання і механізм управління порядком виконання цих
          функцій - і саме за це відповідає стек викликів (call stack).
        </p>
        <h3>Стек</h3>
        <p>
          <strong>Стек</strong> – структура даних, яка працює за принципом LIFO
          (Last-In-First-Out), тобто останнім прийшов – першим вийшов. Останнє,
          що додається на стек, буде видалено з нього першим, це означає, що
          можна додати або видалити елементи тільки з верхівки стека.
        </p>
        <p>
          Уявіть стек як масив, у якого є тільки методи{" "}
          <span className={s.Span}>SyntaxHighlighterpop</span> і{" "}
          <span className={s.Span}>SyntaxHighlighterpush</span>, тобто можна
          додати або видалити тільки елемент в кінці колекції.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={stack} alt="" />
        </div>
        <h3>Стек викликів</h3>
        <p>
          <strong>Стек дзвінків (call stack)</strong> – це механізм для
          відстеження поточного місцезнаходження інтерпретатора в коді, що
          викликає кілька функцій. Яка з функцій виконується на даний момент,
          які функції викликаються зсередини виконуваної функції, яка буде
          викликана наступною і т.д.
        </p>
        <ul>
          <li>
            Коли скрипт викликає функцію, інтерпретатор додає їх у стек викликів
            і починає виконання.
          </li>
          <li>
            Будь-які функції, викликані функцією, додаються в стек викликів і
            виконуються, як тільки відбувається їх виклик.
          </li>
          <li>
            Коли виконання функції завершено, інтерпретатор знімає її зі стека
            дзвінків і відновлює виконання коду з точки, де зупинився до цього.
            Тобто починає виконуватися функція, запис якої лежить на стеку.
          </li>
        </ul>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            <strong>
              <strong>Stack frame (кадр стека, запис стека)</strong>
            </strong>{" "}
            - структура, яка додається на стек при виклику функції. Зберігає
            службову інформацію, наприклад, ім'я функції та номер рядка, в якому
            відбувся дзвінок.
          </p>
        </div>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function bar() {
              console.log("bar");
            }

            function baz() {
              console.log("baz");
            }

            function foo() {
              console.log("foo");
              bar();
              baz();
            }

            foo();
                `}
        </SyntaxHighlighter>
        <p>
          При виконанні цього коду спочатку викликається{" "}
          <span className={s.Span}>SyntaxHighlighterfoo()</span>, потім
          усередині <span className={s.Span}>SyntaxHighlighterfoo()</span>{" "}
          викликається <span className={s.Span}>SyntaxHighlighterbar()</span>, а
          потім <span className={s.Span}>SyntaxHighlighterbaz()</span>. Виклики{" "}
          <span className={s.Span}>SyntaxHighlighterconsole.log()</span> також
          враховуються, адже це функція. На ілюстрації нижче покроково зображено
          стек викликів для прикладу.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "60vw" }} src={callStack} alt="" />
        </div>
        <h3>Переповнення стека викликів</h3>
        <p>
          Стек викликів не безмежний, йому приділяється кінцевий обсяг пам'яті.
          Іноді в консолі можна побачити помилку{" "}
          <span className={s.Span}>
            SyntaxHighlighter"Uncaught RangeError: Maximum call stack size
            exceeded"
          </span>{" "}
          – переповнення стеку (stack overflow).
        </p>
        <p>
          Це може статися при неправильному використанні рекурсії або
          зациклюванні викликів функцій, тобто якщо йдуть нескінченні виклики
          функцій і результат не повертається, стек збільшується. По досягненню
          межі кількості записів стека і виникне така помилка і скрипт «падає».
        </p>
      </div>
    </div>
  );
};

export default Function;
