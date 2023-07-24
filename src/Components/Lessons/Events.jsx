import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import browserJs from "../../img/browser-js.png";
import domFree from "../../img/dom-tree.png";
import htmlParser from "../../img/html-parser.gif";
import jsEngine from "../../img/js-engine.gif";
import liveDomTree from "../../img/live-dom-tree.png";
import domTraver from "../../img/dom-traversal.png";
import insertAdjacent from "../../img/insert-adjacent.png";
import defer from "../../img/defer.png";
import async from "../../img/defer.png";

import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import ReactAce from "react-ace/lib/ace";
const Events = () => {
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
              <a href="#event">Події</a>
            </li>
            <li>
              <a href="#event_object">Обʼєкт події</a>
            </li>
            <li>
              <a href="#eventKayboard">Події клавіатури</a>
            </li>
            <li>
              <a href="#eventFormEl">Події елементів форм</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="event">Події</h1>
        <p>
          Подія це сигнал від браузера про те, що щось сталося на веб-сторінці.
          Події використовуються для реакції на дії користувача та виконання
          коду, пов'язаного з певною подією. Існує багато видів подій: миші,
          клавіатури, елементів форм, завантаження зображень, буфера обміну,
          зміна стадії CSS анімації або переходу, зміна розмірів вікна та багато
          інших.
        </p>
        <p>
          Одна дія може викликати кілька подій. Наприклад, клік викликає
          спочатку <span className={s.Span}>mousedown</span>, а потім{" "}
          <span className={s.Span}>mouseup</span> і{" "}
          <span className={s.Span}>click</span>. У випадках, коли одна дія
          генерує кілька подій, їх порядок фіксований. Тобто, обробники
          викличуть у порядку{" "}
          <span className={s.Span}>mousedown → mouseup → click</span>.
        </p>
        <p>
          Щоб елемент реагував на дії користувача, йому необхідно додати слухача
          (обробник) події. Тобто функцію, яка буде викликана, як тільки подія
          сталася.
        </p>
        <h3>
          Метод <span className={s.Span}>addEventListener()</span>
        </h3>
        <p>Додає слухача події на елемент.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
element.addEventListener(event, handler, options);
`}
        </SyntaxHighlighter>
        <ul>
          <li>
            <span className={s.Span}>event</span> - ім'я події, рядок, наприклад{" "}
            <span className={s.Span}>"click"</span>.
          </li>
          <li>
            <span className={s.Span}>handler</span> - коллбек-функція, яка буде
            викликана при настанні події.
          </li>
          <li>
            <span className={s.Span}>options</span> - необов'язковий об'єкт
            параметрів із розширеними налаштуваннями.
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("Button was clicked");
});`}
        </SyntaxHighlighter>
        <p>
          Для коллбека можна (і бажано) використовувати окрему функцію та
          передавати на неї посилання. Іменована функція підвищує читання коду.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);
`}
        </SyntaxHighlighter>
        <p>
          На одному елементі може бути скільки завгодно оброблювачів подій,
          навіть подій одного типу. Коллбек-функції будуть викликатись у порядку
          реєстрації їх у коді.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/olexandryaremchuk/embed/QWZmKRz?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>
          Метод <span className={s.Span}>removeEventListener()</span>
        </h3>
        <p>
          Видаляє слухача події з елемента. Аргументи аналогічні методу
          <span className={s.Span}>addEventListener()</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
element.removeEventListener(event, handler, options);                `}
        </SyntaxHighlighter>
        <p>
          Для видалення потрібно передати посилання саме на ту коллбек-функцію,
          яка була призначена в{" "}
          <span className={s.Span}>addEventListener()</span>. У такому випадку
          для коллбеків використовують окрему функцію і передають її на ім'я
          (посилання).
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/vYxrWpw?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>
          Ключове слово <span className={s.Span}>this</span>
        </h3>
        <p>
          Якщо коллбеком буде функція яка використовує this, за замовчуванням
          контекст усередині неї буде посилатися на DOM-елемент, на якому висить
          слухач.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(\`My username is: \${this.username}\`);
  },
};

const btn = document.querySelector(".js-btn");

// ✅ Работает
mango.showUsername();

// ❌ this буде посилатись на button якщо використовувати showUsername як callback
btn.addEventListener("click", mango.showUsername); // не працює

// ✅ Не забувайте привʼязувати контекст методів обʼєкта
btn.addEventListener("click", mango.showUsername.bind(mango));                `}
        </SyntaxHighlighter>
        <h1 id="event_object">Обʼєкт події</h1>
        <p>
          Щоб обробити подію, недостатньо знати, що це клік або натискання
          клавіші, можуть знадобитися деталі. Наприклад, поточне значення
          текстового поля, елемент, на якому сталася подія, вбудовані методи та
          інше.
        </p>
        <p>
          Кожна подія є об'єктом, який містить інформацію про деталі події і
          автоматично передається першим аргументом в обробник події. Усі події
          походять від базового класу <span className={s.Span}>Event</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const handleClick = event => {
  console.log(event);
};

button.addEventListener("click", handleClick);                `}
        </SyntaxHighlighter>
        <p>
          Параметр <span className={s.Span}>event</span> це і є об'єктом події,
          який автоматично передається першим аргументом при виклику коллбек
          функції. Ми можемо називати його як завгодно, але зазвичай його
          оголошують як e, <span className={s.Span}>evt</span> або{" "}
          <span className={s.Span}>event</span>.
        </p>
        <p>Деякі властивості об'єкта події:</p>
        <ul>
          <li>
            <span className={s.Span}>event.type</span> - Тип події.
          </li>
          <li>
            <span className={s.Span}>event.currentTarget</span> - Елемент, на
            якому виконується обробник події.
          </li>
        </ul>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/MWpXraG?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>Дії браузера за замовчуванням</h3>
        <p>
          Деякі події викликають дію браузера, що вбудована за замовчуванням як
          реакція на певний тип події. Наприклад, клік за посиланням ініціює
          перехід на нову адресу, вказану в href, а відправлення форми
          перезавантажує сторінку. Найчастіше ця поведінка небажана і її
          необхідно скасувати.
        </p>
        <p>
          Для скасування дії браузера за промовчанням на об'єкті події є
          стандартний метод <span className={s.Span}>preventDefault()</span>.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/wvJXprr?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h1 id="eventKayboard">Події клавіатури</h1>
        <p>
          Є дві основні події клавіатури:{" "}
          <span className={s.Span}>keydown</span> і{" "}
          <span className={s.Span}>keyup</span>. На відміну від інших, події
          клавіатури обробляються на документі, а не конкретному елементі.
          Об'єкти подій клавіатури походять від базового класу{" "}
          <span className={s.Span}>KeyboardEvent</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
});                `}
        </SyntaxHighlighter>
        <p>
          При натисканні клавіші спочатку відбувається{" "}
          <span className={s.Span}>keydown</span>, після чого{" "}
          <span className={s.Span}>keyup</span>, коли віджали клавішу. На
          практиці, в основному обробляють тільки подію{" "}
          <span className={s.Span}>keydown</span>, тому що вона відбувається
          швидше, ніж <span className={s.Span}>keyup</span> і користувач раніше
          бачить результат натискання. Події{" "}
          <span className={s.Span}>keydown</span> та{" "}
          <span className={s.Span}>keyup</span> спрацьовують при натисканні
          будь-якої клавіші, включаючи службові (<s>Ctrl</s>,{" "}
          <span className={s.Span}>Shift</span>,{" "}
          <span className={s.Span}>Alt</span>,{" "}
          <span className={s.Span}>Escape</span> та інші).
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Раніше була ще одна подія клавіатури keypress. Багато постів на
            форумах і блогах, як і раніше, можуть його використовувати, але
            будьте обережні - воно застаріло і підтримка в нових браузерах може
            припинитися будь-якої миті.
          </p>
        </div>
        <h3>
          Властивості та <span className={s.Span}>key</span>{" "}
          <span className={s.Span}>code</span>
        </h3>
        <p>
          Властивість <span className={s.Span}>key</span> повертає символ
          згенерований натисканням клавіші, враховуючи стан клавіш
          модифікаторів, наприклад <span className={s.Span}>Shift</span>, а
          також поточну мову. Властивість <span className={s.Span}>code</span>{" "}
          повертає код фізичної клавіші на клавіатурі та не змінюється між
          мовами.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});
                `}
        </SyntaxHighlighter>
        <p>
          Поставте фокус у вікно прикладу, клікнувши в нього мишкою, відстеження
          подій клавіатури стоїть на елементі{" "}
          <span className={s.Span}>document</span>. Друкуйте щось на клавіатурі
          та дивіться результат.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/ZEeRxaJ?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>Клавіші модифікатори</h3>
        <p>
          Для обробки комбінації клавіш, наприклад{" "}
          <span className={s.Span}>Ctrl</span> <span className={s.Span}>+</span>{" "}
          sабо будь-яку іншу, на об'єкті події є властивості
          <span className={s.Span}>ctrlKey</span>,{" "}
          <span className={s.Span}>altKey</span>,{" "}
          <span className={s.Span}>shiftkey</span> і
          <span className={s.Span}>metaKey</span>, що зберігають булеве
          значення, що сигналізує про те, була затиснута клавіша-модифікатор чи
          ні.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
document.addEventListener("keydown", event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("«Ctrl + s» or «Command + s» combo");
  }
});
`}
        </SyntaxHighlighter>
        <p>
          Деякі комбінації клавіш можуть конфліктувати з поведінкою браузера за
          промовчанням. Наприклад, <span className={s.Span}>Ctrl</span> +{" "}
          <span className={s.Span}>d</span> або
          <span className={s.Span}>Command</span> +{" "}
          <span className={s.Span}>d</span> робить закладку. Потрібно намагатися
          проектувати систему комбінацій сторінки так, щоб вона не перетиналася
          із вбудованою у браузер. Але, в крайньому випадку, поведінку за
          умовчанням можна скасувати викликавши метод
          <span className={s.Span}>event.preventDefault()</span>.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Нещодавно, замість властивостей <span className={s.Span}>key</span>{" "}
            і<span className={s.Span}>code</span> використовували властивість{" "}
            <span className={s.Span}>keyCode</span>. Багато постів на форумах і
            блогах, як і раніше, можуть використовувати його, але будьте
            обережні - воно застаріло, не використовуйте властивість
            <span className={s.Span}>keyCode</span>.
          </p>
        </div>
        <h1 id="eventFormEl">Події елементів форм</h1>
        <h3>
          Подія <span className={s.Span}>submit</span>
        </h3>
        <p>
          Відправлення форми відбувається при натисканні кнопки з атрибутом
          <span className={s.Span}>type="submit"</span> або натискання клавіші{" "}
          <span className={s.Span}>Enter</span>, перебуваючи в якомусь її
          текстовому полі. Події <span className={s.Span}>submit</span> можна
          застосувати для валідації (перевірки) форми перед відправкою, оскільки
          на об'єкті події є багато корисних властивостей, пов'язаних з
          елементами форми. Сабміт форми перезавантажує сторінку, тому не
          забувайте скасовувати дію за замовчкванням методом{" "}
          <span className={s.Span}>preventDefault()</span>.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/oNZydVL?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Властивість <span className={s.Span}>elements</span> DOM-елемента
            форми містить об'єкт з посиланнями на всі її елементи, у яких є
            атрибут <span className={s.Span}></span>. Тому в прикладі ми
            отримуємо значення полів, звертаючись до{" "}
            <span className={s.Span}>login.value</span> і{" "}
            <span className={s.Span}>password.value</span>.
          </p>
        </div>
        <h3>
          Подія <span className={s.Span}>change</span>
        </h3>
        <p>
          Відбувається після зміни елемента форми. Для текстових полів або
          <span className={s.Span}>textarea</span> подія відбудеться не при
          кожному введенні символу, а при втраті фокусу, що не завжди зручно.
          Наприклад, поки ви набираєте щось у текстовому полі – події немає, але
          як тільки фокус зник, відбудеться подія{" "}
          <span className={s.Span}>change</span>. Для інших елементів, наприклад{" "}
          <span className={s.Span}>select</span>, чекбоксів та радіо-кнопок,
          подія <span className={s.Span}>change</span>
          спрацьовує відразу при виборі значення.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/gOmKKvj?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Зверніть увагу на корисні властивості під час роботи з елементом
            <span className={s.Span}>select</span> у прикладі. Розберіться що
            зберігається у властивостях <span className={s.Span}>value</span> і{" "}
            <span className={s.Span}>selectedIndex</span>.{" "}
            <span className={s.Span}>options</span>
          </p>
        </div>
        <h3>
          Подія <span className={s.Span}>input</span>
        </h3>
        <p>
          Відбувається тільки на текстових полях і{" "}
          <span className={s.Span}>textarea</span>, і створюється щоразу під час
          зміни значення елемента, не чекаючи втрати фокуса. Насправді{" "}
          <span className={s.Span}>input</span> це найголовніша подія до роботи
          з текстовими полями форми.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/jOBKpNP?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>
          Події та <span className={s.Span}>focus</span>{" "}
          <span className={s.Span}>blur</span>
        </h3>
        <p>
          Елемент отримує фокус при натисканні миші або переході клавішею{" "}
          <span className={s.Span}>Tab</span>. Момент отримання фокусу та втрати
          дуже важливий, при отриманні фокусу ми можемо підвантажити дані для
          автозаповнення, почати відстежувати зміни тощо. При втраті фокусу –
          перевірити введені дані.
        </p>
        <p>
          При фокусуванні елемента відбувається подія{" "}
          <span className={s.Span}>focus</span>, а коли фокус зникає, наприклад
          користувач клацає в іншому місці екрана, відбувається подія{" "}
          <span className={s.Span}>blur</span>. Активувати або скасувати фокус
          можна програмно, викликавши в коді однойменні методи{" "}
          <span className={s.Span}>focus()</span> та{" "}
          <span className={s.Span}>blur()</span> елемент.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/JjWZBdM?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <p>
          Фокус може бути лише на одному елементі сторінки в одиницю часу і
          поточний елемент, на якому фокус доступний як{" "}
          <span className={s.Span}>document.activeElement</span>.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Багато елементів не можуть отримати фокусування. Наприклад, якщо
            натиснути на div, то фокусування на ньому не відбудеться, тому що це
            не інтерактивний елемент.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Events;
