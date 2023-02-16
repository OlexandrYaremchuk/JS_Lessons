import React from "react";
import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import ifImg from "../../img/if.png";
import ifElse from "../../img/if-else.png";
import elseIf from "../../img/else-if.png";

import operatorTable1 from "../../img/not-strict-equality.png";
import operatorTable2 from "../../img/strict-equality.png";
import string from "../../img/string-idx.png";
import code1 from "../../img/code1.png";
import booleanOperators from "../../img/boolean-operators.png";
import Scrollspy from "react-scrollspy";
import switchImg from "../../img/switch.png";
import globalScope from "../../img/GlobalScope.png";
import WhileCicle from "../../img/WhileCicle.png";
import doWhile from "../../img/doWhile.png";

const M1L2 = () => {
  return (
    <div className={s.lessonsBox}>
      <div className={s.breadNav}>
        <Scrollspy
          items={["branching", "section-2", "section-3"]}
          currentClassName="is-current"
        >
          <div className={s.breadNavList}>
            <li>
              <a href="#branching">Розгалуження</a>
            </li>
            <li>
              <a href="#ternary operator">Тернарний оператор</a>
            </li>
            <li>
              <a href="#switch">Інструкція switch</a>
            </li>
            <li>
              <a href="#fieldOfView">Область видимості</a>
            </li>

            <li>
              <a href="#Cycles">Цикли</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="branching">Розгалуження</h1>
        <p>
          Розгалуження використовуються для виконання різного коду залежно від
          умови. Принцип роботи простий - результат умови наводиться до булю
          <span>true</span> або <span>false</span> після чого потік програми
          направляється в ту чи іншу гілку.
        </p>
        <h4>
          Інструкція{" "}
          <strong>
            <span>if</span>
          </strong>
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={ifImg} alt="" />
        </div>
        <pre>
          {`
                 if (умова) {
                // тіло if
                }
                `}
        </pre>
        <p>
          Вхідні дані, що наводяться до булю, називаються{" "}
          <strong>умовою</strong> . Умову поміщають за оператором{" "}
          <span>if</span> у круглих дужках. Якщо умова наводиться до{" "}
          <span>true</span>, то виконується код у фігурних дужках тіла{" "}
          <span>if</span>.
        </p>
        <pre>
          {`
                let cost = 0;
                const subscription = "pro";

                if (subscription === "pro") {
                cost = 100;
                }

                console.log(cost); // 100
                `}
        </pre>
        <p>
          Якщо умова наводиться до <span>false</span>, код у фігурних дужках
          буде пропущено.
        </p>
        <pre>
          {`
            let cost = 0;
            const subscription = "free";

            if (subscription === "pro") {
            cost = 100;
            }

            console.log(cost); // 0
                `}
        </pre>
        <h4>
          Інструкція{" "}
          <strong>
            <span>if...else</span>
          </strong>
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={ifElse} alt="" />
        </div>
        <pre>
          {`
            if (умова) {
            // тіло if
            } else {
            // тіло else
            }
                `}
        </pre>
        <p>
          Розширює синтаксис <span>if</span> тим, що якщо умова наводиться до
          <span>false</span>, виконається код у фігурних дужках після оператора
          <span>else</span>.
        </p>
        <pre>
          {`
            let cost;
            const subscription = "free";

            if (subscription === "pro") {
            cost = 100;
            } else {
            cost = 0;
            }

            console.log(cost); // 0
                `}
        </pre>
        <p>
          Якщо умова наводиться до <span>true</span>, тіло блоку
          <span>else</span> ігнорується.
        </p>
        <pre>
          {`
            let cost;
            const subscription = "pro";

            if (subscription === "pro") {
            cost = 100;
            } else {
            cost = 0;
            }

            console.log(cost); // 100
                `}
        </pre>
        <h3>
          Інструкція{" "}
          <strong>
            <span>else...if</span>
          </strong>
        </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={elseIf} alt="" />
        </div>
        <p>
          Конструкція <span>if...else</span> може перевірити та зреагувати на
          виконання або невиконання лише однієї умови.
        </p>
        <p>
          Блок <span>else...if</span> дозволяє додати <span>else</span> ще один
          оператор <span>if</span> з умовою. В кінці ланцюжка може бути
          класичний блок <span>else</span>, який виконається тільки у випадку,
          коли жодна з умов не приведеться до <span>true</span>.
        </p>
        <pre>
          {`
            let cost;
            const subscription = "premium";

            if (subscription === "free") {
            cost = 0;
            } else if (subscription === "pro") {
            cost = 100;
            } else if (subscription === "premium") {
            cost = 500;
            } else {
            console.log("Invalid subscription type");
            }

            console.log(cost); // 500
                `}
        </pre>
        <p>
          При першому ж <span>true</span> перевірки припиняться і виконається
          лише один сценарій, що відповідає цьому <span>true</span>. Тому такий
          запис слід читати як: шукаю перший збіг умови, ігнорую все інше.
        </p>
        <h1 id="ternary operator">Тернарний оператор</h1>
        <p>
          Тернарний оператор використовується як синтаксично коротка заміна
          інструкції <span>if...else</span>, коли однієї й тієї ж змінної
          необхідно надати різні значення за умовою.
        </p>
        <pre>
          {`
            <умова> ? <вираз, якщо умова істина> : <вираз, якщо умова хибна>
                `}
        </pre>
        <p>Працює за такою схемою:</p>
        <ul>
          <li>
            Обчислюється <span>умова</span>
          </li>
          <li>
            Якщо умова істинна, тобто наводиться до <span>true</span>,
            обчислюється вираз після <span>?</span>.
          </li>
          <li>
            Якщо умова хибна, тобто наводиться до <span>false</span>,
            обчислюється вираз після <span>:</span>.
          </li>
          <li>
            Значення обчисленого виразу повертається як наслідок роботи
            тернарного оператора.
          </li>
        </ul>
        <pre>
          {`
            let type;
            const age = 20;

            if (age >= 18) {
              type = "adult";
            } else {
              type = "child";
            }

            console.log(type); // "adult"
                `}
        </pre>
        <p>
          Виконаємо рефакторинг замінивши <span>if...else</span> тернарним
          оператором.
        </p>
        <pre>
          {`
            const age = 20;
            const type = age >= 18 ? "adult" : "child";
            console.log(type); // "adult"
                `}
        </pre>
        <p>Запишемо операцію пошуку більшої кількості.</p>
        <pre>
          {`
            const num1 = 5;
            const num2 = 10;
            let biggerNumber;

            if (num1 > num2) {
              biggerNumber = num1;
            } else {
              biggerNumber = num2;
            }

            console.log(biggerNumber); // 10
                `}
        </pre>
        <p>
          Код працює правильно, отримуємо більше двох, але це рішення здається
          занадто громіздким, враховуючи, наскільки проста проблема.
          Використовуємо тернарний оператор.
        </p>
        <pre>
          {`
            const num1 = 5;
            const num2 = 10;
            const biggerNumber = num1 > num2 ? num1 : num2;

            console.log(biggerNumber); // 10
                `}
        </pre>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Тернарний оператор повинен використовуватись у простих операціях
            присвоєння чи повернення. Його використання для опису складних
            розгалужень – погана практика (антипаттерн).
          </p>
        </div>
        <h1 id="switch">Інструкція switch</h1>
        <p>
          У деяких випадках незручність читання складних розгалужень
          <span>if...else</span> можна уникнути, використовуючи більш «плоский»
          синтаксис інструкції розгалуження <span>switch</span>.
        </p>
        <p>
          Область застосування <span>switch</span> обмежена завданнями з одним
          загальним питанням (що порівнювати) та безліччю варіантів відповідей
          (з чим порівнювати).
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={switchImg} alt="" />
        </div>
        <p>
          Його синтаксис складається з блоку <span>switch</span>(значення)- що
          потрібно порівняти та безлічі окремих випадків{" "}
          <span>case значення</span> - з чим потрібно порівняти. Для порівняння
          використовується оператор строгої рівності <span>===</span>. Тобто не
          можна порівняти на більше чи менше, лише на рівність.
        </p>
        <pre>
          {`
            switch (значення) {
              case значення:
                інструкції;
                break;

              case значення:
                інструкції;
                break;

              default:
                інструкції;
            }
                `}
        </pre>
        <p>
          Значення в блоці <span>switch (значення)</span> - рядок або число, яке
          порівнюється на строгу рівність з усіма значеннями в блоках{" "}
          <span>case</span>
          значениепо порядку зверху вниз.
        </p>
        <p>
          Оператор <span>break</span> в завершенні кожного блоку{" "}
          <span>case</span> необхідний щоб перервати подальші перевірки і
          відразу перейти до коду <span>switch</span> в тому випадку, коли
          перевірка на рівність повернула <span>true</span>.
        </p>
        <p>
          Якщо жодного збігу значень не відбулося, необхідно виконати за
          замовчуванням код, як у блоці <span>else</span> для інструкції
          <span>if...else</span>. Для цього після всіх блоків <span>case</span>{" "}
          додається блок <span>default</span>. Оператор <span>break</span> після
          блоку <span>default</span> не потрібен, так як це і так останнє, що
          буде виконано <span>switch</span>.
        </p>
        <pre>
          {`
            let cost;
            const subscription = "premium";

            switch (subscription) {
              case "free":
                cost = 0;
                break;

              case "pro":
                cost = 100;
                break;

              case "premium":
                cost = 500;
                break;

              default:
                console.log("Invalid subscription type");
            }

            console.log(cost); // 500
                `}
        </pre>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Якщо оператор <span>break</span> буде відсутній, після того, як
            виконається якась умова <span>case</span>, всі наступні за ним блоки
            коду будуть виконуватися один за одним, що може призвести до
            небажаних наслідків при неправильному застосуванні.
          </p>
        </div>
        <h1 id="fieldOfView">Область видимості</h1>
        <p>
          <strong>Область видимості змінних (variable scope)</strong>–
          доступність змінних у певному місці коду.
        </p>
        <p>
          Глобальна область видимості використовується за умовчанням. Усі і всі
          мають доступ до змінних оголошених у ній. Наприклад, змінна
          <span>value</span> оголошена у глобальній області видимості, тобто
          поза якимось блоком, і доступна будь-де після оголошення.
        </p>
        <pre>
          {`
            const value = 5;

            if (true) {
                console.log("Block scope: ", value); // 5
            }

            console.log("Global scope: ", value); // 5
                `}
        </pre>
        <p>
          Будь-яка конструкція використовує фігурні дужки <span>{}</span>(умови,
          цикли, функції тощо) створює нову локальну область видимості, і
          змінні, оголошені в цій області видимості, використовуючи{" "}
          <span>let</span> або <span>const</span>, не доступні поза цим блоком.
        </p>
        <pre>
          {`
            if (true) {
                const value = 5;
                console.log("Block scope: ", value); // 5
            }

            console.log("Global scope: ", value); // ReferenceError: value is not defined
                `}
        </pre>
        <p>
          Глибина вкладеності областей видимості не обмежена, і всі вони
          працюватиму за одним принципом - область видимості має доступ до всіх
          змінних оголошених вище ієрархії вкладеності, але не може отримати
          доступ до змінних оголошених у вкладених областях видимості.
        </p>
        <p>
          Створимо кілька областей видимості та дамо їм імена для наочності.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={globalScope} alt="" />
        </div>
        <ul>
          <li>
            Глобальна є за умовчанням, створимо в ній змінну <span>global</span>
          </li>
          <li>
            Далі використовуючи оператор <span>if</span> створимо блокову
            область видимості <span>block A</span>
          </li>
          <li>
            Усередині області видимості <span>block A</span> поставимо ще один
            оператор <span>if</span>, який створить вкладену область видимості{" "}
            <span>block B</span>
          </li>
          <li>
            На одному рівні з <span>block A</span>, створимо область видимості
            <span>block C</span> так само використовуючи оператор{" "}
            <span>if</span>
          </li>
        </ul>
        <pre>
          {`
            const global = "global";

            if (true) {
              const blockA = "block A";

              // Бачимо глобальну + локальну A
              console.log(global); // 'global'
              console.log(blockA); // block A

              // Змінні blockB та blockC не знайдені в доступних областях видимості.
              // Буде помилка заернення до змінної.
              console.log(blockB); // ReferenceError: blockB is not defined
              console.log(blockC); // ReferenceError: blockC is not defined

              if (true) {
                const blockB = "block B";

                // Бачимо глобальну + зовнішню А + локальну В
                console.log(global); // global
                console.log(blockA); // block A
                console.log(blockB); // block B

                // Змінна blockC не знайдена в доступних областях видимості.
                // Буде помилка звернення до змінної.
                console.log(blockC); // ReferenceError: blockC is not defined
              }
            }

            if (true) {
              const blockC = "block C";

              // Бачимо глобальну + локальну С
              console.log(global); // global
              console.log(blockC); // block C

              // Змінні blockA та blockB не знайдені в доступних областях видимості.
              // Буде помилка звернення до змінної.
              console.log(blockA); // ReferenceError: blockA is not defined
              console.log(blockB); // ReferenceError: blockB is not defined
            }

            // Бачимо лише глобальну
            console.log(global); // global

            // Змінні blockA, blockB та blockC не знайдені в доступних областях видимості.
            // Буде помилка звернення до змінної.
            console.log(blockA); // ReferenceError: blockA is not defined
            console.log(blockB); // ReferenceError: blockB is not defined
            console.log(blockC); // ReferenceError: blockC is not defined
                `}
        </pre>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Будьте уважні при використанні блокових областей видимості та
            змінних оголошених у них. Саме ця помилка, разом із неуважністю,
            часто стає головним болем новачка.
          </p>
        </div>
        <h1 id="Cycles">Цикли</h1>
        <p>
          Часте завдання програмування – виконання однотипної дії багато разів.
          Наприклад, вивести клієнтів зі списку один за одним або перебрати суми
          зарплат і для кожної виконати однаковий код. Саме для таких цілей –
          багаторазового повторення однієї ділянки коду, використовуються цикли.
        </p>
        <ul>
          <li>
            <strong>Цикл</strong> - конструкція, що управляє, у високорівневих
            мовах програмування, призначена для організації багаторазового
            виконання набору інструкцій.
          </li>
          <li>
            <strong>Тіло циклу</strong> – послідовність інструкцій, призначена
            для багаторазового виконання.
          </li>
          <li>
            <strong>Ітерація</strong> – одиничне виконання тіла циклу.
          </li>
          <li>
            <strong>Умова виходу</strong> - вираз, що визначає вкотре
            виконуватиметься ітерація, або цикл завершиться.
          </li>
          <li>
            <strong>Лічильник</strong> – змінна, що зберігає поточний номер
            ітерації. Цикл необов'язково містить лічильник, і не повинен бути
            один, умова виходу з циклу може залежати від кількох змінних у циклі
            змінних.
          </li>
        </ul>
        <h2>
          Цикл <span>while</span>
        </h2>
        <p>
          <strong>Цикл з передумовою</strong> - цикл, який виконується поки що
          істинно деяка умова, вказана перед його початком. Ця умова
          перевіряється до виконання тіла циклу, тому тіло може бути не виконане
          жодного разу, якщо умова з самого початку є хибною.
        </p>
        <pre>
          {`
           while (condition) {
              // код, тело цикла (statement)
            }
                `}
        </pre>
        <p>
          Конструкція <span>while</span> створює цикл, який виконує блок коду,
          доки умова перевірки оцінюється як <span>true</span>.
        </p>
        <ul>
          <li>
            <span>condition</span>, тобто умова, що обчислюється перед кожною
            ітерацією цику.
          </li>
          <li>
            Якщо <span>condition</span> оцінюється як <span>true</span>,
            оператор <span>while</span> виконує <span>statement</span>.
          </li>
          <li>
            Якщо <span>condition</span> оцінюється як <span>false</span>,
            виконання циклу переривається і скрипт продовжує виконувати
            інструкції після циклу <span>while</span>.
          </li>
        </ul>
        <p>
          Блок-схема ілюструє цикл <span>while</span>.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={WhileCicle} alt="" />
        </div>
        <p>Зробимо лічильник.</p>
        <pre>
          {`
            let counter = 0;

            while (counter < 10) {
              console.log("counter: ", counter);
              counter += 1;
            }
                `}
        </pre>
        <p>
          Будемо заповнювати місця в готелі до тих пір, поки поточна кількість
          клієнтів не буде максимально допустимою.
        </p>
        <pre>
          {`
            let clientCounter = 18;
            const maxClients = 25;

            while (clientCounter < maxClients) {
              console.log(clientCounter);
              clientCounter += 1;
            }
                `}
        </pre>
        <h2>
          Цикл <span>do...while</span>
        </h2>
        <p>
          <strong>Цикл з постумовою</strong> – цикл, у якому умова перевіряється
          після виконання тіла циклу. Звідси випливає, що тіло завжди
          виконується хоча б один раз.
        </p>
        <pre>
          {`
            do {
                // statement
            } while (condition);
                `}
        </pre>
        <p>
          Конструкція <span>do...while</span> створює цикл, який виконує блок
          коду, доки <span>condition</span> не поверне <span>false</span>.
        </p>
        <p>
          На відміну від циклу <span>while</span> цикл <span>do...while</span>{" "}
          завжди виконує <span>statement</span> як мінімум один раз, перш ніж
          він оцінить <span>condition</span>.
        </p>
        <p>
          Усередині циклу потрібно внести зміни до деякої змінної, щоб
          переконатися, що вираз дорівнює <span>false</span> після ітерацій. В
          іншому випадку буде нескінченний цикл.
        </p>
        <p>
          Блок-схема ілюструє цикл <span>do-while</span>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={doWhile} alt="" />
        </div>
        <pre>
          {`
            let password = "";

            do {
              password = prompt("Введите пароль длиннее 4-х символов", "");
            } while (password.length < 5);

            console.log("Ввели пароль: ", password);
                `}
        </pre>
        <h2>
          Цикл <span>for</span>
        </h2>
        <p>
          <strong>Цикл із лічильником</strong> - цикл, у якому деяка змінна
          змінює своє значення від заданого початкового до кінцевого значення з
          деяким кроком і для кожного значення цієї змінної тіло циклу
          виконується один раз.
        </p>
        <p>
          У більшості процедурних мов програмування реалізується конструкцією
          <span>for</span>, в якій вказується лічильник, необхідна кількість
          ітерацій та крок, з яким змінюється лічильник.
        </p>
        <pre>
          {`
            for (initialization; condition; post-expression) {
              // statements
            }
                `}
        </pre>
        <p>
          Алгоритм виконання циклу <span>for</span>:
        </p>
        <ul>
          <li>
            <strong>Ініціалізація (initialization)</strong> – виконується один
            раз перед початком циклу. Використовується для створення
            змінної-лічильника та вказівки її початкового значення.
          </li>
          <li>
            <strong>Умова (condition)</strong> – вираз, що оцінюється перед
            кожною ітерацією (повторенням) циклу. Тіло циклу виконується лише
            тоді, коли вираз наводиться до <span>true</span>. Цикл завершується,
            якщо значення буде <span>false</span>.
          </li>
          <li>
            <strong>Тіло (statements)</strong> – набір інструкцій для виконання
            на кожному повторенні. Виконується якщо вираз умови наводиться до
            <span>true</span>.
          </li>
          <li>
            <strong>Пост-вираз (post-expression)</strong> – виконується
            наприкінці кожного повторення циклу, перед перевіркою умови.
            Використовується для оновлення змінної-лічильника.
          </li>
        </ul>
        <p>
          Змінні-лічильники, за традицією, називаються буквами <span>i</span>,
          <span>j</span> і <span>k</span>.
        </p>
        <pre>
          {`
            for (let i = 0; i <= 20; i += 5) {
              console.log(i);
            }
                `}
        </pre>
        <p>
          У прикладі оголошується змінна-лічильник <span>i</span>,
          ініціалізується значенням <span>0</span> і цикл виконується доти, поки{" "}
          <span>i</span> <span> ≤ 20</span>, тобто умова наводиться до{" "}
          <span>true</span>. Після кожної ітерації лічильник збільшується на
          <span>5</span>.
        </p>
        <p>Порахуємо суму чисел до певного значення.</p>
        <pre>
          {`
            const target = 3;
            let sum = 0;

            for (let i = 0; i <= target; i += 1) {
              sum += i;
            }

            console.log(sum);
                `}
        </pre>
        <p>
          Згадаймо про операцію <span>a % b</span> і виведемо залишок від поділу
          використовуючи цикл.
        </p>
        <pre>
          {`
            const max = 10;
            for (let i = 0; i < max; i += 1) {
          }
                `}
        </pre>
        <h2>
          Оператор <span>break</span>
        </h2>
        <p>
          Перервати виконання циклу можна будь-якої миті. Для цього існує
          оператор <span>break</span>, який повністю припиняє виконання циклу і
          передає управління на рядок за його тілом.
        </p>
        <p>
          Знайдемо число <span>3</span>. Як тільки виконається умова{" "}
          <span>if</span> цикл припинить своє виконання (буде перерваний).
        </p>
        <pre>
          {`
            for (let i = 0; i <= 5; i += 1) {
              console.log(i);

              if (i === 3) {
                console.log("Нашли число 3, прерываем выполнение цикла");
                break;
              }
            }

            console.log("Лог после цикла");
                `}
        </pre>
        <h2>
          Оператор <span>continue</span>
        </h2>
        <p>
          Перериває не весь цикл, лише виконання поточної ітерації. Його
          використовують, якщо зрозуміло, що на поточній ітерації циклу робити
          більше нічого або взагалі нічого робити не потрібно і настав час
          переходити на наступну ітерацію.
        </p>
        <p>
          Використовуємо цикл для виведення лише непарних чисел. Для парних
          <span>i</span> спрацьовує <span>continue</span> виконання тіла
          припиняється і управління передається на наступну ітерацію.
        </p>
        <pre>
          {`
            const number = 10;

            for (let i = 0; i < number; i += 1) {
              if (i % 2 === 0) {
                continue;
              }

              console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
            }
                `}
        </pre>
      </div>
    </div>
  );
};

export default M1L2;
