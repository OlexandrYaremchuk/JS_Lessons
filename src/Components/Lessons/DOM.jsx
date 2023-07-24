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
const DOM = () => {
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
              <a href="#dom">Об'єктна модель документа</a>
            </li>
            <li>
              <a href="#dom-nav">Навігація по DOM</a>
            </li>
            <li>
              <a href="#findEl">Пошук елементів</a>
            </li>
            <li>
              <a href="#atribut">Властивості та атрибути</a>
            </li>
            <li>
              <a href="#createDel">Створення та видалення елементів</a>
            </li>
            <li>
              <a href="#innerHtml">Властивість innerHTML</a>
            </li>
            <li>
              <a href="#script">Підключення скриптів</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="dom">Об'єктна модель документа</h1>
        <p>
          Коли ми працюємо з браузером, доступний функціонал складається з
          кількох модулів, тому що JavaScript сам по собі не має інструментів
          для роботи з браузером.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={browserJs} alt="" />
        </div>
        <p>
          <strong>Об'єктна модель документа (Document Object Model)</strong> –
          незалежний від мови інтерфейс до роботи з HTML-документом. Містить
          набір властивостей та методів, які дозволяють шукати, створювати та
          видаляти елементи, реагувати на дії користувача та багато іншого.
          Тобто поєднує сторінку з мовою програмування.
        </p>
        <p>
          DOM це відображення HTML-документа - деревоподібна структура, в якій
          кожен вузол це JavaScript-об'єкт з властивостями та методами, що
          представляє частину HTML-документа. Кожен елемент у документі, весь
          документ загалом, заголовок, посилання, абзац - це частини DOM цього
          документа, тому всі вони можуть бути змінені з JavaScript-коду.
        </p>
        <p>
          <strong>Об'єктна модель браузера (Browser Object Model)</strong> –
          незалежний від мови інтерфейс для роботи з владою браузера. Містить
          набір властивостей та методів, що дозволяють отримати доступ
          безпосередньо до поточної вкладки та ряду функцій браузера. Включає
          об'єкт роботи з історією навігації, місцем розташування та багато
          іншого.
        </p>
        <h3>HTML-документ та DOM</h3>
        <p>
          Відповідно до DOM-моделі, кожен тег утворює окремий{" "}
          <span className={s.Span}>елемент-вузол</span>, кожен фрагмент тексту -{" "}
          <span className={s.Span}>текстовий елемент</span>. HTML-документ це
          ієрархічне дерево, у якому кожен елемент (крім кореневого) є лише одне
          з батьків, тобто елемент, у якому він розташовується. Це дерево
          утворюється за рахунок вкладеної структури тегів та текстових
          елементів.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={domFree} alt="" />
        </div>
        <p>
          Щоб відобразити HTML-документ, браузер спочатку перетворює його на
          формат, який він розуміє - DOM. У движка браузера є спеціальний
          фрагмент коду <span className={s.Span}>HTML-парсер</span>, який
          використовується для перетворення HTML в DOM.
        </p>
        <p>
          У HTML вкладеність визначає відносини{" "}
          <span className={s.Span}>батько-дитина</span> між елементами. У DOM
          об'єкти пов'язані у деревоподібній структурі даних, фіксуючи ці
          відносини.
        </p>
        <p>
          Браузер будує DOM поступово, як тільки приходять перші фрагменти коду,
          він починає ширяти HTML, додаючи вузли в деревоподібну структуру.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={htmlParser} alt="" />
        </div>
        <p>
          Після того, як DOM-дерево побудовано, в ньому можна знайти елемент за
          допомогою JavaScript і виконувати з ним якісь дії, оскільки кожен
          елемент має інтерфейс з безліччю властивостей та методів.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={jsEngine} alt="" />
        </div>
        <h2>DOM - дерево</h2>
        <p>
          Візуалізуємо дерево HTML-документа використовуючи{" "}
          <a
            href="https://software.hixie.ch/utilities/js/live-dom-viewer/"
            target={"_blank"}
          >
            сервіс генератора DOM-дерева .
          </a>
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
<!DOCTYPE html>
<html>
  <head>
    <title>Document title</title>
  </head>
  <body>
    <h1>Page title</h1>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </body>
</html>
`}
        </SyntaxHighlighter>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={liveDomTree} alt="" />
        </div>
        <p>У цьому дереві виділено два типи вузлів.</p>
        <ul>
          <li>
            <strong> Вузли-елементи (element node)</strong> - утворюються
            тегами, природним чином одні елементи вкладені інші. Структура
            дерева утворена виключно за рахунок них.
          </li>
          <li>
            <strong>Текстові вузли (text node)</strong> – утворюються текстом
            усередині елементів. Текстовий вузол містить лише рядок тексту і
            може мати нащадків, тобто він завжди на нижньому рівні ієрархії.
            Пробіли та перенесення рядків - це теж текстові вузли.
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
            З цього правила є винятки: прогалини до{" "}
            <span className={s.Span}>head</span> ігноруються, а будь-який вміст{" "}
            <span className={s.Span}>body</span> не створює елемент, браузер
            переносить його в кінець <span className={s.Span}>body</span>.
          </p>
        </div>
        <h1 id="dom-nav">Навігація по DOM</h1>
        <p>
          DOM надає широкий спектр можливостей при роботі з елементом та його
          вмістом, але для цього спочатку потрібно отримати посилання. Доступ до
          DOM починається з об'єкта document, від нього можна дістатися
          будь-яких елементів.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            <span className={s.Span}>document</span> це частина глобального
            об'єкта <span className={s.Span}>window</span>, який доступний у
            скрипті, коли він виконується у браузері. Також як{" "}
            <span className={s.Span}>alert</span>,{" "}
            <span className={s.Span}>console.log</span>,
            <span className={s.Span}>prompt</span> і багато інших.
          </p>
        </div>
        <p>
          Елементи DOM-дерева мають ієрархічне відношення одне до одного. Для
          опису відносин використовуються терміни предок (ancestor), нащадок
          (descendant), батько (parent), дитина (child) та сусід (sibling).
        </p>
        <ul>
          <li>Найвищий елемент називається кореневим (root node).</li>
          <li>Кожен елемент, крім кореневого, має лише одного з батьків.</li>
          <li>У елемента може бути скільки завгодно дітей.</li>
          <li>Сусіди – це елементи із спільним батьком.</li>
          <li>
            Дочірні елементи (діти) – елементи, які лежать безпосередньо
            всередині поточного (перша вкладеність).
          </li>
          <li>
            Нащадки – всі елементи, які лежать усередині поточного, разом із
            їхніми дітьми, дітьми їхніх дітей тощо. Тобто все піддерево.
          </li>
        </ul>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={domTraver} alt="" />
        </div>
        <p>Для навігації по цій ієрархії елементи мають такі властивості.</p>
        <ul>
          <li>
            <span className={s.Span}>elem.parentNode</span> - Вибере батька{" "}
            <span className={s.Span}>elem</span>.
          </li>
          <li>
            <span className={s.Span}>elem.childNodes</span> - псевдомасив, що
            зберігає всі дочірні елементи, включаючи текстові.
          </li>
          <li>
            <span className={s.Span}>elem.children</span> - псевдомасив, що
            зберігає лише дочірні вузли-елементи, тобто відповідні тегам.
          </li>
          <li>
            <span className={s.Span}>elem.firstChild</span> - Вибере перший
            дочірній елемент усередині <span className={s.Span}>elem</span>,
            включаючи текстові вузли.
          </li>
          <li>
            <span className={s.Span}>elem.firstElementChild</span> - Вибере
            перший дочірній вузол-елемент всередині{" "}
            <span className={s.Span}>elem</span>.
          </li>
          <li>
            <span className={s.Span}>elem.lastChild</span> - Вибере останній
            дочірній елемент усередині <span className={s.Span}>elem</span>,
            включаючи текстові вузли
          </li>
          <li>
            <span className={s.Span}>elem.lastElementChild</span> - Вибере
            останній дочірній вузол-елемент всередині{" "}
            <span className={s.Span}>elem</span>.
          </li>
          <li>
            <span className={s.Span}>elem.previousSibling</span> - Вибере
            елемент "зліва" від
            <span className={s.Span}>elem</span>(його попереднього сусіда).
          </li>
          <li>
            <span className={s.Span}>elem.previousElementSibling</span> - Вибере
            вузол-елемент «зліва» від <span className={s.Span}>elem</span>(його
            попереднього сусіда).
          </li>
          <li>
            <span className={s.Span}>elem.nextSibling</span> - вибере елемент
            «праворуч» від
            <span className={s.Span}>elem</span>(його наступного сусіда)
          </li>
          <li>
            <span className={s.Span}>elem.nextElementSibling</span> - Вибере
            вузол-елемент «праворуч» від <span className={s.Span}>elem</span>
            (його наступного сусіда).
          </li>
        </ul>
        <p>
          Відкрий цей приклад в окремому вікні та подивися логи в консолі
          розробника.
        </p>
        <iframe
          height="300"
          width={"1200"}
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/olexandryaremchuk/embed/poxRmVz?default-tab=html%2Cresult"
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
            DOM-колекції, такі як <span className={s.Span}>childNodes</span> і{" "}
            <span className={s.Span}>children</span> псевдомасиви (NodeList), у
            них немає більшості методів масиву.
          </p>
        </div>
        <h1 id="findEl">Пошук елементів</h1>
        <p>
          Отже, ми вже знаємо що DOM-елемент – це об'єкт із властивостями та
          методами. Саме час навчитися швидко знаходити елемент за довільним
          CSS-селектором. Група методів{" "}
          <span className={s.Span}>elem.querySelector*</span> є сучасним
          стандартом для пошуку елементів. Вони дозволяють знайти елемент або
          групу елементів за CSS-селектором будь-якої складності.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
element.querySelector(selector);                `}
        </SyntaxHighlighter>
        <p>
          Використовується, якщо необхідно знайти тільки один, найчастіше
          унікальний елемент.
        </p>
        <ul>
          <li>
            Повертає перший знайдений елемент усередині{" "}
            <span className={s.Span}>element</span>, що відповідає CSS-селектору{" "}
            <span className={s.Span}>selector</span>.
          </li>
          <li>
            Якщо нічого не знайдено, поверне{" "}
            <span className={s.Span}>null</span>
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          element.querySelectorAll(selector);
        </SyntaxHighlighter>
        <p>
          Використовується, якщо необхідно знайти колекцію елементів, тобто
          отримати масив посилань на елементи з однаковим селектором. Наприклад,
          всі елементи списку класу <span className={s.Span}>menu-item</span>.
        </p>
        <ul>
          <li>
            Повертає псевдомасив всіх елементів усередині{" "}
            <span className={s.Span}>element</span>, що задовольняють
            CSS-селектору <span className={s.Span}>selector</span>.
          </li>
          <li>Якщо нічого не знайдено, поверне пустий масив.</li>
        </ul>
        <p>
          Відкрий цей приклад в окремому вікні та подивися логи в консолі
          розробника.
        </p>
        <iframe
          height="300"
          width={"1200"}
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/olexandryaremchuk/embed/XWxpLez?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h1 id="atribut">Властивості та отрибути</h1>
        <p>
          Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають
          властивостями елементів. Подивимося на кілька властивостей, що часто
          використовуються.
        </p>
        <ul>
          <li>
            <span className={s.Span}>value</span> - Містить поточний текстовий
            контент елементів форм.
          </li>
          <li>
            <span className={s.Span}>checked</span> - Зберігає стан чекбоксу або
            радіокнопки.
          </li>
          <li>
            <span className={s.Span}>name</span> - Зберігає значення, вказане в
            HTML-атрибуті name.
          </li>
          <li>
            <span className={s.Span}>src</span> - шлях до зображення тега{" "}
            <span className={s.Span}>img</span>.
          </li>
        </ul>
        <iframe
          height="500"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/rNqjEdY?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>
          Властивість <span className={s.Span}>textContent</span>
        </h3>
        <p>
          <span className={s.Span}>elem.textContent</span> повертає текстовий
          контент усередині елемента. Доступно для читання та запису. Незалежно
          від того, що буде передано в{" "}
          <span className={s.Span}>textContent</span>, дані завжди будуть
          записані як текст.
        </p>
        <iframe
          height="300"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/jOeyjvy?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>
          Властивість <span className={s.Span}>classList</span>
        </h3>
        <p>
          В якості <span className={s.Span}>classList</span> зберігається об'єкт
          з способами для роботи з класами елемента.
        </p>
        <ul>
          <li>
            <span className={s.Span}>elem.classList.contains(cls)</span> -
            Повертає <span className={s.Span}>true</span> або{" "}
            <span className={s.Span}>false</span> в залежності від того, чи є у
            елемента клас cls.
          </li>
          <li>
            <span className={s.Span}>elem.classList.add(cls)</span> - Додає клас{" "}
            <span className={s.Span}>cls</span> до списку класів елемента.
          </li>
          <li>
            <span className={s.Span}>elem.classList.remove(cls)</span> - Видаляє
            клас <span className={s.Span}>cls</span> зі списку класів елемента.
          </li>
          <li>
            <span className={s.Span}>elem.classList.toggle(cls)</span> - якщо
            класу <span className={s.Span}>cls</span> немає, то додає його, якщо
            є, навпаки, видаляє.
          </li>
          <li>
            <span className={s.Span}>
              elem.classList.replace(oldClass, newClass)
            </span>{" "}
            - Замінює існуючий клас <span className={s.Span}>oldClass</span> на
            зазначений <span className={s.Span}>newClass</span>.
          </li>
        </ul>
        <iframe
          height="300"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/wvYgLRG?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>
          Властивість <span className={s.Span}>style</span>
        </h3>
        <p>
          Використовується для читання та зміни інлайнових стилів. Повертає
          об'єкт <span className={s.Span}>CSSStyleDeclaration</span>, який
          містить список усіх властивостей, визначених лише у вбудованих стилях
          елемента, а не весь CSS. При записі властивості записуються в{" "}
          <span className={s.Span}>camelCase</span>, тобто{" "}
          <span className={s.Span}>background-color</span> перетворюється на
          <span className={s.Span}>element.style.backgroundColor </span> і т. д.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object
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
            Насправді стилізація елементів виконується додаванням CSS-класів.
            Властивість <span className={s.Span}>style</span> використовується
            для додавання динамічних стилів, наприклад під час анімації.
          </p>
        </div>
        <h3>Атрибути</h3>
        <p>
          DOM-елементам відповідають HTML-теги, які мають текстові атрибути.
          Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці
          методи працюють із значенням, що знаходиться в HTML.
        </p>
        <ul>
          <li>
            <span className={s.Span}>elem.hasAttribute(name)</span> - Перевіряє
            наявність аттрибута, повертає <span className={s.Span}>true</span>{" "}
            або <span className={s.Span}>false</span>.
          </li>
          <li>
            <span className={s.Span}>elem.getAttribute(name)</span> - Отримує
            значення атрибута і повертає його.
          </li>
          <li>
            <span className={s.Span}>elem.setAttribute(name, value)</span> -
            Встановлює атрибут.
          </li>
          <li>
            <span className={s.Span}>elem.removeAttribute(name)</span> - Видаляє
            атрибут.
          </li>
          <li>
            <span className={s.Span}>elem.attributes</span> - властивість, що
            повертає об'єкт усіх атрибутів елемента.
          </li>
        </ul>
        <iframe
          height="500"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/yLRgdWP?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>data - атрибути</h3>
        <p>
          Дозволяють додати тегу довільний атрибут і отримати його значення
          JavaScript. Цю можливість використовують для того, щоб спростити
          написання коду, наприклад, зв'язати дані та розмітку по унікальному
          ідентифікатору, вказати тип дії кнопки і т.п.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
<button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button>
`}
        </SyntaxHighlighter>
        <p>
          Для отримання значення <span className={s.Span}>data-атрибута</span>{" "}
          використовується властивість <span className={s.Span}>dataset</span>,
          після якого йде ім'я атрибута. Тобто
          <span className={s.Span}>data-</span> відкидається, а інше ім'я
          записується як властивість об'єкта.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"
`}
        </SyntaxHighlighter>
        <iframe
          height="500"
          src="https://codepen.io/olexandryaremchuk/embed/poxRMzd?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h1 id="createDel">Створення та видалення елементів</h1>
        <p>
          DOM API дозволяє не тільки вибирати або змінювати існуючі, але й
          видаляти, а так само створювати нові елементи, після чого додавати їх
          до документа.
        </p>
        <h3>Створення</h3>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
document.createElement(tagName);
`}
        </SyntaxHighlighter>
        <p>
          Створює елемент з ім'ям <span className={s.Span}>tagName</span> та
          повертає посилання на нього як результат свого виконання.{" "}
          <span className={s.Span}>tagName</span> - Це рядок, що вказує тип
          створюваного елемента. Елемент створюється в пам'яті, DOM його ще
          немає.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />
`}
        </SyntaxHighlighter>
        <h3>Додавання</h3>
        <p>
          Щоб створений елемент відображався на сторінці, його необхідно додати
          до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо в
          якийсь елемент element, для цього є способи.
        </p>
        <ul>
          <li>
            <span className={s.Span}>element.append(el1, el2, ...)</span> -
            Додає один або кілька елементів після всіх дітей елемента{" "}
            <span className={s.Span}>element</span>.
          </li>
          <li>
            <span className={s.Span}>element.prepend(el1, el2, ...)</span> -
            Додає один або кілька елементів перед усіма дітьми елемента{" "}
            <span className={s.Span}>element</span>.
          </li>
          <li>
            <span className={s.Span}>element.after(el1, el2, ...)</span> - Додає
            один або кілька елементів після елемента{" "}
            <span className={s.Span}>element</span>.
          </li>
          <li>
            <span className={s.Span}>element.before(el1, el2, ...)</span> -
            Додає один або кілька елементів перед елементом{" "}
            <span className={s.Span}>element</span>.
          </li>
        </ul>
        <p>
          У всіх цих методах, <span className={s.Span}>el</span> це елементи або
          рядки, у будь-якому поєднанні та кількості. Рядки додаються як
          текстові вузли.
        </p>
        <iframe
          height="500"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/rNqyOzz?default-tab=html%2Cresult"
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
            Якщо елемент для вставки вже знаходиться в DOM, він вилучається зі
            свого старого місця і додається в нове. Звідси випливає правило -
            той самий елемент не може бути одночасно у двох місцях.
          </p>
        </div>
        <h3>Видалення</h3>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
elem.remove();          
                `}
        </SyntaxHighlighter>
        <p>
          Щоб видалити елемент використовується метод{" "}
          <span className={s.Span}>remove()</span>. Він викликається на самому
          елементі <span className={s.Span}>elem</span>, який необхідно видалити
        </p>
        <iframe
          height="500"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/ExdWVQQ?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>Оптимізація роботи з DOM</h3>
        <p>
          Сучасні браузери намагаються оптимізувати процес відтворення сторінки
          без втручання розробника. Проте зміна DOM-дерева це дорога операція,
          тому потрібно намагатися мінімізувати кількість звернень до DOM.
        </p>
        <p>
          <strong>Repaint</strong> - відбувається, коли зміни торкнулися стилі
          впливають зовнішній вигляд елемента, але з геометрію. Наприклад
          <span className={s.Span}>opacity</span>,{" "}
          <span className={s.Span}>background-color</span>,{" "}
          <span className={s.Span}>visibility</span> і{" "}
          <span className={s.Span}>outline</span>. Браузер малює елемент наново,
          з урахуванням нового стилю. Також перевіряється видимість інших
          елементів, один або більше можуть бути приховані під таким, що змінив
          зовнішній вигляд.
        </p>
        <p>
          <span className={s.Span}>Reflow</span> - відбувається коли зміни
          зачіпають вміст, структуру документа, положення елементів. Йде
          перерахунок позиціонування та розмірів, що веде до перемальовування
          частини чи всього документа. Зміна розміру одного батьківського
          контейнера вплине всіх його дітей і предків. Має значно більший вплив
          на продуктивність, ніж <span className={s.Span}>repaint</span>.
        </p>
        <p>
          Всі перераховані вище операції блокують браузер. Сторінка не може
          виконувати жодних інших операцій у той час, коли відбувається
          <span className={s.Span}>reflow</span> або{" "}
          <span className={s.Span}>repaint</span>. Причини можуть бути наступні:
        </p>
        <ul>
          <li>
            Маніпуляції з DOM (додавання, видалення, зміна, перестановка
            елементів)
          </li>
          <li>Зміна вмісту, зокрема. тексту у полях форм</li>
          <li>Розрахунок або зміна CSS-властивостей</li>
          <li>Додавання та видалення таблиць стилів</li>
          <li>
            Маніпуляції з атрибутом <span className={s.Span}>class</span>
          </li>
          <li>Маніпуляції з вікном браузера (зміни розмірів, прокручування)</li>
          <li>
            Активація псевдокласів (наприклад{" "}
            <span className={s.Span}>:hover</span>)
          </li>
        </ul>
        <h1 id="innerHtml">Властивість innerHTML</h1>
        <p>
          Ще один спосіб створити DOM-елементи та помістити їх у дерево – це
          використовувати рядки з тегами та дозволити браузеру зробити всю важку
          роботу. Такий підхід має свої плюси та мінуси.
        </p>
        <h3>Читання</h3>
        <p>
          Властивість <span className={s.Span}>innerHTML</span> зберігає вміст
          елемента, включаючи теги у вигляді рядка. Значення, що повертається,
          це завжди валідний HTML-код.
        </p>
        <iframe
          height="300"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/RwepWqX?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>Зміна</h3>
        <p>
          Властивість <span className={s.Span}>innerHTML</span> доступна як
          читання, так запису. Якщо записати в нього рядок з HTML-тегами, то
          браузер під час парсингу рядка перетворить їх на валідні елементи та
          додасть до DOM-дерева.
        </p>
        <iframe
          height="300"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/xxyqwMa?default-tab=html%2Cresult"
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
            Якщо властивість <span className={s.Span}>innerHTML</span> записати
            порожній рядок, то вміст елемента буде очищено. Це простий і швидкий
            спосіб видалення всього вмісту.
          </p>
        </div>
        <p>
          При такому підході, на відміну від{" "}
          <span className={s.Span}>document.createElement()</span> ми не
          отримуємо посилання на створений DOM-елемент. Це перший крок на шляху
          до шаблонизації - створення великої кількості однотипної розмітки з
          різними даними за наперед визначеним шаблоном. Наприклад, як у списку
          товарів інтернет магазину тощо.
        </p>
        <p>
          Однотипна (шаблонна) розмітка створюється із масиву даних. Прийом
          полягає в переборі цього масиву та складанні одного рядка з HTML
          тегами, який потім записуємо в{" "}
          <span className={s.Span}>innerHTML</span> елемент.
        </p>
        <iframe
          height="500"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/qBJrOwL?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>Додавання</h3>
        <p>
          Зміна <span className={s.Span}>elem.innerHTML</span> повністю видалить
          і перестворить всіх нащадків елемента{" "}
          <span className={s.Span}>elem</span>. Якщо елемент не порожній, то
          будуть додаткові витрати на серіалізацію вже існуючої розмітки, а це
          погано.
        </p>
        <iframe
          height="500"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/OJBpMLN?default-tab=html%2Cresult"
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
            Використовуйте властивість{" "}
            <span className={s.Span}>elem.innerHTML</span> для додавання лише у
            випадку коли елемент <span className={s.Span}>elem</span> порожній
            або якщо потрібно повністю замінити його вміст.
          </p>
        </div>
        <h3>
          Метод <span className={s.Span}>insertAdjacentHTML()</span>
        </h3>
        <p>
          Сучасний метод для додавання рядка з HTML-тегами до, після або
          всередину елемента. Вирішує проблему{" "}
          <span className={s.Span}>innerHTML</span> з повторною серіалізацією
          вмісту елемента при додаванні розмітки до існуючої.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
elem.insertAdjacentHTML(position, string);
`}
        </SyntaxHighlighter>
        <p>
          Аргумент <span className={s.Span}>position</span> – це рядок, позиція
          щодо елемента <span className={s.Span}>elem</span>. Приймає одне із
          чотирьох значень.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={insertAdjacent} alt="" />
        </div>
        <ul>
          <li>
            <span className={s.Span}>"beforebegin"</span> - Перед{" "}
            <span className={s.Span}>elem</span>
          </li>
          <li>
            <span className={s.Span}>"afterbegin"</span> - всередині{" "}
            <span className={s.Span}>elem</span>, перед усіма дітьми
          </li>
          <li>
            <span className={s.Span}>"beforeend"</span> - всередині{" "}
            <span className={s.Span}>elem</span>, після всіх дітей
          </li>
          <li>
            <span className={s.Span}>"afterend"</span> - після{" "}
            <span className={s.Span}>elem</span>
          </li>
        </ul>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/olexandryaremchuk/embed/RwepraP?default-tab=html%2Cresult"
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
            <span className={s.Span}>"beforebegin"</span> і{" "}
            <span className={s.Span}>"afterend"</span> працюють тільки в тому
            випадку, якщо <span className={s.Span}>elem</span> вже знаходиться у
            DOM-дереві.
          </p>
        </div>
        <h1 id="script">Підключення скриптів</h1>
        <p>
          Завантаження та виконання скрипту вказаного в тегу{" "}
          <span className={s.Span}>{"<script>"}</span> без будь-яких атрибутів,
          блокують обробку HTML-документа та побудову DOM. Це проблема.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
<script src="path-to-script.js"></script>
`}
        </SyntaxHighlighter>
        <p>
          Коли аналізатор зустрічає такий тег, обробка HTML-документа
          припиняється і починається завантаження файлу скрипта, зазначеного в
          атрибуті <span className={s.Span}>src</span>. Після завантаження
          скрипт виконується, і лише потім відновлюється обробка HTML. Це
          називається "блокуючий" скрипт.
        </p>
        <p>
          Атрибути <span className={s.Span}>defer</span> і{" "}
          <span className={s.Span}>async</span> були введені, щоб дати
          розробникам можливість краще контролювати, як завантажувати скрипти і
          коли саме їх виконувати.
        </p>
        <h3>
          Атрибут <span className={s.Span}>defer</span>
        </h3>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
<script defer src="path-to-script.js"></script>
`}
        </SyntaxHighlighter>
        <p>
          Атрибут <span className={s.Span}>defer</span> вказує браузеру
          завантажувати файл скрипта у фоновому режимі, паралельно обробці
          HTML-документа та побудові DOM. Скрипт буде виконано лише після того,
          як HTML-документ оброблений, а DOM побудований. Такі скрипти не
          блокують побудову DOM-дерева і гарантовано виконуються в порядку, в
          якому зазначені в HTML-документі.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={defer} alt="" />
        </div>
        <h3>
          Атрибут <span className={s.Span}>async</span>
        </h3>
        <p>
          Завантаження скрипта з атрибутом <span className={s.Span}>async</span>{" "}
          не блокує побудову DOM, але виконується відразу після завантаження. Це
          означає, що такі скрипти можуть заблокувати побудову DOM і виконуються
          в довільному порядку.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={async} alt="" />
        </div>
      </div>
    </div>
  );
};
export default DOM;
