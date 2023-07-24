import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import browserJs from "../../img/browser-js.png";
import bundle from "../../img/bundle.png";
import dependencies from "../../img/dependencies.png";
import webpack from "../../img/webpack.png";
import npmStart from "../../img/npmStart.png";
import npmInit from "../../img/npmInit.png";
import nodeRun from "../../img/nodeRun.png";
import nodeLog from "../../img/nodeLog.png";

import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import ReactAce from "react-ace/lib/ace";

const NpmModule = () => {
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
              <a href="#node">Node.js</a>
            </li>
            <li>
              <a href="#npm">Пакетний менеджер npm</a>
            </li>
            <li>
              <a href="#module"> Модульність коду</a>
            </li>
            <li>
              <a href="#webpack"> Знайомство з Webpack</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="node">Node.js</h1>
        <p>
          <strong>Node.js</strong> - легке та ефективне середовище виконання
          JavaScript. Дозволяє писати високопродуктивні серверні програми та
          інструменти. Node.js побудований на JavaScript-движку V8 і написаний
          на C++.
        </p>
        <p>
          Спочатку Node.js створювався як серверне оточення для програм, але
          розробники почали використовувати його для створення інструментів, які
          допомагають автоматизувати виконання локальних завдань. У результаті
          нова екосистема інструментів, що виникла навколо Node.js, призвела до
          трансформації процесу фронтенд-розробки.
        </p>
        <h3>Інсталяція</h3>
        <p>
          Щоб встановити останню стабільну версію, перейдіть на{" "}
          <a href="https://nodejs.org/en">офіційну сторінку</a>, завантажте
          LTS-інсталятор і дотримуйтесь вказівок. Є установники для всіх
          популярних операційних систем – Windows, MacOS та Linux.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Користувачам Windows необхідно вибрати чекбокси для встановлення
            всіх додаткових інструментів крім <strong>Chocolatey</strong> . Це
            встановить Python та всілякі допоміжні утиліти та компілятори.
          </p>
        </div>
        <p>
          Після встановлення в терміналі буде доступна команда node. Щоб
          переконатися, що установка пройшла успішно, перевірте версію,
          запустивши в консолі команду nodeз прапором version.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
node --version                `}
        </SyntaxHighlighter>
        <h3>Java Script поза браузером</h3>
        <p>
          Node.js дозволяє виконувати JavaScript-код поза браузером. Відкрийте
          будь-який термінал і виконайте команду node, запуститься{" "}
          <strong>REPL</strong>
          (read-eval-print loop) – інтерактивне середовище виконання JS-коду.
          Виведемо щось у консоль.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={nodeLog} alt="" />
        </div>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Щоб вийти з REPL, натисніть комбінацію{" "}
            <span className={s.Span}>Ctrl</span> +{" "}
            <span className={s.Span}>C</span> на Windows та{" "}
            <span className={s.Span}>Control</span> +{" "}
            <span className={s.Span}>C</span> на MacOS.
          </p>
        </div>
        <p>
          Тепер створимо папку <span className={s.Span}>node-tut</span>, а в ній
          файл <span className={s.Span}>index.js</span> із кодом, який ми писали
          в REPL. Для запуску потрібно відкрити термінал і перейти в папку,{" "}
          <span className={s.Span}>node-tut</span> в якій лежить index.js.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
// index.js
const message = "NodeJS in amazing!";
console.log(message);                `}
        </SyntaxHighlighter>
        <p>
          Тепер у консолі запускаємо файл за допомогою команди{" "}
          <span className={s.Span}>node index.js</span> та отримуємо той самий
          результат - виведення рядка безпосередньо в терміналі.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={nodeRun} alt="" />
        </div>
        <p>
          У цьому полягає суть Node.js - можливість виконувати JavaScript поза
          браузером. Таким чином можна писати цілі програми, наприклад, бекенд
          або утиліти, що не залежать від браузера.
        </p>
        <h1 id="npm">Пакетний менеджер npm</h1>
        <p>
          Щоб використовувати все багатство інструментів (або пакетів) Node.js,
          нам потрібна можливість встановлювати і керувати ними. Для цього
          створено NPM (node ​​package manager) – пакетний менеджер Node.js. Він
          встановлює потрібні пакети та надає зручний інтерфейс для роботи з
          ними.
        </p>
        <p>NPM складається з трьох основних компонентів:</p>
        <ul>
          <li>
            <strong>Сайт</strong> <a href="https://www.npmjs.com/">npmjs.com</a>{" "}
            - використовується для пошуку та ознайомлення з документацією
            пакетів.
          </li>
          <li>
            <strong>Інтерфейс командного рядка (CLI)</strong> - запускається з
            терміналу та надає набір команд для роботи з реєстром та пакетами.
            Дозволяє створювати скрипти для запуску у терміналі.
          </li>
          <li>
            <strong>Реєстр пакетів (registry)</strong> – велика загальнодоступна
            база даних інструментів розробки (пакетів).
          </li>
        </ul>
        <p>
          <strong>Пакет (package)</strong> – невелика JavaScript бібліотека, що
          вирішує специфічне завдання. Пакети пишуть самі розробники та діляться
          із спільнотою. Такий підхід полегшує життя, тому що не потрібно
          винаходити колесо, всі колеса вже давно лежать на полицях реєстру і
          готові до використання.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Пакети абстрагують реалізацію функціоналу, надаючи розробнику
            зручний інтерфейс. Це робить код чистішим, читабельнішим і дозволяє
            легше його підтримувати.
          </p>
        </div>
        <h3>Команди NPM</h3>
        <p>
          Відразу перерахуємо основні команди і послідовно використовуватимемо і
          розглядатимемо в деталях.
        </p>
        <ul>
          <li>
            <span className={s.Span}>npm init</span> - ініціалізує{" "}
            <span className={s.Span}>npm</span> у проекті та створює файл{" "}
            <span className={s.Span}>package.json</span>
          </li>
          <li>
            <span className={s.Span}>npm install</span> - встановлює всі
            залежності, перераховані в{" "}
            <span className={s.Span}>package.json</span>
          </li>
          <li>
            <span className={s.Span}>npm list --depth=0</span> - виведе у
            терміналі список локально встановлених пакетів із номерами їх
            версій, без залежностей
          </li>
          <li>
            <span className={s.Span}>npm install [package-name]</span> -
            Встановить пакет локально в папку{" "}
            <span className={s.Span}>node_modules</span>
          </li>
          <li>
            <span className={s.Span}>npm uninstall [package-name]</span> -
            видалить пакет, встановлений локально та оновить{" "}
            <span className={s.Span}>package.json</span>
          </li>
          <li>
            <span className={s.Span}>npm start</span> і{" "}
            <span className={s.Span}>npm test-</span> запустить скрипт
            <span className={s.Span}>start</span> або{" "}
            <span className={s.Span}>test</span>, розташований у{" "}
            <span className={s.Span}>package.json</span>
          </li>
          <li>
            <span className={s.Span}>npm run [custom-script]</span> - запустить
            кастомний скрипт, розташований у{" "}
            <span className={s.Span}>package.json</span>
          </li>
          <li>
            <span className={s.Span}>npm outdated</span> - використовується для
            пошуку оновлень, виявить сумісні версії програмно та виведе список
            доступних оновлень
          </li>
          <li>
            <span className={s.Span}>npm update</span> - оновить усі пакети до
            максимально дозволеної версії
          </li>
        </ul>
        <p>
          <a href="https://docs.npmjs.com/">Документація NPM</a>
        </p>
        <h3>Ініціалізація проекту</h3>
        <p>
          Кожен проект починається зі створення файлу{" "}
          <span className={s.Span}>package.json</span> - він відстежує
          залежності, містить службову інформацію, дозволяє писати npm-скрипти і
          є інструкцією при створенні нового проекту на основі вже готових
          налаштувань. Створити файл{" "}
          <span className={s.Span}>package.json</span> можна npm-командою{" "}
          <span className={s.Span}>init</span>, тим самим ініціалізувавши проект
          у поточній папці.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npm init
`}
        </SyntaxHighlighter>
        <p>
          Вам буде запропоновано ввести назву проекту, версію, опис тощо. Можна
          просто натискати <span className={s.Span}>Enter</span> доти, доки не
          буде створено
          <span className={s.Span}>package.json</span> та розміщено в папці
          проекту. Щоб не натискати Enter, пропускаючи порожні поля,
          використовується команда
          <span className={s.Span}>init</span> із прапором{" "}
          <span className={s.Span}>--yes</span>. Прапор - додаткове налаштування
          команди.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npm init --yes
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
            У кожного прапора є псевдонім - його скорочений запис. Псевдонім
            прапора <span className={s.Span}>--yes</span> це{" "}
            <span className={s.Span}>-y</span>, тому команди{" "}
            <span className={s.Span}>npm init</span>
            <span className={s.Span}>--yes</span> і{" "}
            <span className={s.Span}>npm init -y</span> роблять одне й теж.
          </p>
        </div>
        <p>
          Буде створено <span className={s.Span}>package.json</span> зі
          значеннями за промовчанням. Щоб встановити ці значення, у терміналі
          послідовно виконайте такі команди, підставивши своє ім'я та пошту.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npm config set init.author.name "YOUR_NAME"
npm config set init.author.email "YOUR_EMAIL"                `}
        </SyntaxHighlighter>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={npmInit} alt="" />
        </div>
        <p>
          Можна редагувати файл <span className={s.Span}>package.json</span>{" "}
          вручну або виконати його <span className={s.Span}>npm init</span> ще
          раз. Якщо відкрити <span className={s.Span}>package.json</span>{" "}
          редактор, він буде виглядати приблизно так. Це лише метадані про
          проект.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
     package.json
_________________________


{
  "name": "node-tut",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Alexander Repeta <mycoolemail@mail.com>",
  "license": "ISC",
  "keywords": [],
  "description": ""
}
`}
        </SyntaxHighlighter>
        <h3>npm - скрипти</h3>
        <p>
          Скрипти дозволяють запускати на виконання встановлені пакети.
          Використовуючи npm-скрипти, можна створювати цілі системи складання
          проекту. Автоматизуємо запуск <span className={s.Span}>index.js</span>
          . Для цього у файлі
          <span className={s.Span}>package.json</span> в полі{" "}
          <span className={s.Span}>scripts</span> додамо скрипт запуску{" "}
          <span className={s.Span}>start</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
     package.json
_________________________

{
  "scripts": {
    "start": "node index.js"
  }
}
`}
        </SyntaxHighlighter>
        <p>
          Тепер ми можемо запустити його в терміналі командою{" "}
          <span className={s.Span}>npm start.</span>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={npmStart} alt="" />
        </div>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>УВАГА</h5>
          </div>
          <p>
            Якщо створити скрипт з будь-яким іншим ім'ям, крім{" "}
            <span className={s.Span}>start</span> або{" "}
            <span className={s.Span}>test</span>, він буде запускатися як{" "}
            <span className={s.Span}>npm run імʼя-скрипта</span> - не забудьте{" "}
            <span className={s.Span}>run</span>. Ознайомтеся з документацією -{" "}
            <a href="https://docs.npmjs.com/misc/scripts/">
              How npm handles the "scripts" field{" "}
            </a>
          </p>
        </div>
        <h3>Встановлення пакетів</h3>
        <p>
          Одна з можливостей, які надає <span className={s.Span}>npm-</span>{" "}
          встановлення пакетів, які витягуються з реєстру та розпаковуються до
          папки <span className={s.Span}>node_modules</span> в корені проекту.
          Після
          <span className={s.Span}>package.json</span> створення файлу можна
          додати залежність до проекту.
        </p>
        <p>
          Залежність називають <span className={s.Span}>npm-пакет</span>, який
          використовується при розробці. Це всілякі утиліти та бібліотеки.
          Встановимо бібліотеку
          <a href="https://www.npmjs.com/package/validator">validator.js</a> для
          валідації рядків, наприклад, введення користувача в поля форми.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npm install validator
                `}
        </SyntaxHighlighter>
        <p>
          NPM завантажив <span className={s.Span}>validator</span> і помістив
          його в<span className={s.Span}>node_modules</span> папку, в якій
          будуть знаходитися всі зовнішні залежності.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>УВАГА</h5>
          </div>
          <p>
            Не додавайте папку <span className={s.Span}>node_modules</span> до
            системи контролю версій, у всіх розробників вона буде своя. Якщо ви
            використовуєте Git, не забувайте додати папку{" "}
            <span className={s.Span}>node_modules</span> до файлу .gitignore.
          </p>
        </div>
        <p>
          Зверніть увагу на створений файл{" "}
          <span className={s.Span}>package-lock.json</span> – це журнал знімків
          дерева залежностей проекту. Він гарантує, що команда розробників
          використовує ті самі версії залежностей. NPM автоматично оновлює його
          при додаванні, видаленні та оновленні пакетів.
        </p>
        <p>
          З'явилася <span className={s.Span}>package.json</span> нова залежність
          у полі
          <span className={s.Span}>dependencies</span>. Це означає, що{" "}
          <span className={s.Span}>validator</span> версії{" "}
          <span className={s.Span}>11.1.0</span> було встановлено як залежність
          і готовий до роботи. Пакети постійно оновлюються, ваша версія може
          відрізнятись.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          package.json
________________________________         


{
  "dependencies": {
    "validator": "^11.1.0"
  }
}                `}
        </SyntaxHighlighter>
        <p>
          Щоб отримати інтерфейс пакету в{" "}
          <span className={s.Span}>Node.js-коді</span>, необхідно викликати
          функцію <span className={s.Span}>require("имя-модуля")</span>,
          аргументом передавши їй ім'я модуля без визначення шляху - це
          називається абсолютний імпорт. Шлях не потрібен, оскільки за
          замовчуванням пошук модуля відбуватиметься у папці{" "}
          <span className={s.Span}>node_modules</span>. Результатом свого
          виконання функція поверне інтерфейс модуля - об'єкт із методами або
          просто функцію залежить від пакета.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
        index.js
_______________________________________

const validator = require("validator");

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com")
);                `}
        </SyntaxHighlighter>
        <p>
          Виконавши в терміналі <span className={s.Span}>npm start</span>{" "}
          отримаємо.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
Is mango@mail.com a valid email?: true
Is Mangozedog.com a valid email?: false                `}
        </SyntaxHighlighter>
        <h3>Видалення пакетів</h3>
        <p>
          Припустимо, що встановлена ​​у попередньому прикладі версія
          <span className={s.Span}>validator</span> викликає проблеми із
          сумісністю. Ми можемо видалити цей пакет і поставити старішу версію.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npm uninstall validator                `}
        </SyntaxHighlighter>
        <h3>Встановлення певної версії пакета</h3>
        <p>
          Тепер встановимо потрібну версію{" "}
          <span className={s.Span}>validator</span>. У команді встановлення
          номер версії вказується після символу{" "}
          <span className={s.Span}>@</span>
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npm install validator@1.0.0                `}
        </SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Встановлення пакетів певної версії використовується в комерційних
            проектах для того, щоб гарантувати роботу кодової бази та можливість
            довгострокової підтримки. Ви можете встановлювати останні версії.
          </p>
        </div>
        <h3>Типи залежностей</h3>
        <p>
          Уявіть торт, для приготування шефу потрібні продукти, саме вони
          увійдуть до складу торта. Але для приготування знадобляться і
          інструменти на кшталт мисок, ложок, лопаток тощо. А ще на кухні є
          столи та печі, холодильники тощо – те, що використовується для
          приготування будь-якої страви, спільні інструменти, які є на кухні.
        </p>
        <p>
          Те саме і з залежностями проекту - деякі будуть використані в
          результуючому продукті, інші необхідні лише на стадії розробки, а є
          такі, що необхідно використовувати незалежно від проекту.
        </p>
        <p>
          Саме для цього у команд <span className={s.Span}>npm install</span> і{" "}
          <span className={s.Span}>npm uninstall</span> є три прапори.
        </p>
        <ul>
          <li>
            <span className={s.Span}>--save</span> - Вказує, що додається
            залежність, яка увійде до фінального продукту. Пакет буде
            встановлений локально, до папки
            <span className={s.Span}>node_modules</span> і буде додано запис у
            поле <span className={s.Span}>dependencies</span> в package.json.
          </li>
          <li>
            <span className={s.Span}>--save-dev</span> - Вказує, що додається
            залежність розробки. Пакет буде встановлено локально, в папку{" "}
            <span className={s.Span}>node_modules</span>, і буде додано запис у{" "}
            <span className={s.Span}>devDependencies</span> полі{" "}
            <span className={s.Span}>package.json</span>
          </li>
          <li>
            <span className={s.Span}>--global</span> - вказує, що додається
            глобальна залежність, тобто інструмент доступний для будь-якого
            проекту. Пакет буде встановлено глобально (до системи).
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
            <ul>
              <li>
                Якщо не вказувати прапор, за промовчанням буде використано
                <span className={s.Span}>--save</span>.
              </li>
              <li>
                При видаленні пакета необхідно вказувати правильний прапор,
                такий же, як і при установці.
              </li>
              <li>
                Не встановлюйте пакети глобально, якщо ви працюєте на проекті з
                іншими розробниками.
              </li>
            </ul>
          </p>
        </div>
        <h3>Керування версіями пакетів</h3>
        <p>
          Пакети мають пов'язаний із ними номер версії. Номери версій
          відповідають стандарту <a href="https://semver.org/">SemVer</a> .
        </p>
        <ul>
          <li>
            <span className={s.Span}>npm outdated</span> - Використовується для
            пошуку оновлень, виявить сумісні версії програмно.
          </li>
          <li>
            <span className={s.Span}>npm update</span> - оновить усі пакети до
            максимально дозволеної версії.
          </li>
          <li>
            <span className={s.Span}>npm update [имя-пакета]</span> - Оновить
            зазначений пакет.
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
            Якщо ви не довіряєте машинам або хочете певну версію пакета, можна
            відкрити <span className={s.Span}>package.json</span> і вручну
            поміняти версії пакетів, після чого виконати{" "}
            <span className={s.Span}>npm install</span>.
          </p>
        </div>
        <h3>Управління кешем</h3>
        <p>
          Після встановлення пакета <span className={s.Span}>npm</span> зберігає
          його копію в кеші, тому при наступній установці вам не потрібно знову
          завантажувати його з інтернету. Кеш зберігається в папці{" "}
          <span className={s.Span}>.npm</span> вашого домашнього каталогу.
        </p>
        <p>
          Ця папка з часом засмічується старими пакетами і іноді її корисно
          очищати, не надто часто (пару раз на рік), корисно кешування, оскільки
          скорочує час встановлення вже використаних пакетів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npm cache clean
                `}
        </SyntaxHighlighter>
        <h1 id="module">Модульність коду</h1>
        <p>
          Концепція модулів як методу організації коду існувала давно. Зі
          зростанням проекту та його кодової бази її намагаються розбити на
          файли, у кожному з яких описується окремий функціонал.
        </p>
        <p>
          Модульний код допомагає в організації, обслуговуванні, тестуванні та,
          найголовніше, управлінні залежностями. Найбільш важливі переваги
          модулів - це підтримуваність, простір імен та повторне використання.
        </p>
        <p>
          <span className={s.Span}>Підтримуваність</span> - добре розроблений
          модуль має максимально знизити залежність від інших частин коду. Це
          дозволить розширювати функціонал програми, не побоюючись порушити його
          роботу в цілому. Оновлення одного модуля набагато простіше, якщо
          модуль є самодостатнім.
        </p>
        <p>
          <span className={s.Span}>Простір імен</span> - змінні, які входять у
          область видимості функції, є глобальними. Тому зазвичай відбувається
          забруднення простору імен, де повністю незв'язаний код поділяє
          глобальні змінні. Модулі дозволяють уникнути забруднення простору
          імен, створюючи окрему область видимості для змінних.
        </p>
        Повторне використання - всі розробники копіювали готовий код до нових
        проектів, змінюючи його під специфіку проекту. Це, мабуть, величезна
        трата часу. Набагато краще, коли є модуль, який можна повторно
        використовувати знову і знову без необхідності знати щось про оточення,
        в якому він використовується.
        <p>
          <span className={s.Span}>Повторне використання</span> - всі розробники
          копіювали готовий код до нових проектів, змінюючи його під специфіку
          проекту. Це, мабуть, величезна трата часу. Набагато краще, коли є
          модуль, який можна повторно використовувати знову і знову без
          необхідності знати щось про оточення, в якому він використовується.
        </p>
        <h3>Складання модулів</h3>
        <p>
          <span className={s.Span}>Складання модулів</span> - це процес
          конкатенації групи модулів та його залежностей до однієї чи групу
          файлів.
        </p>
        <p>
          Зазвичай код поділяють на папки та файли, до того ж, необхідно
          підключити зовнішні бібліотеки. В результаті кожен з цих файлів
          повинен бути включений до основного HTML-файлу в тегу{" "}
          <span className={s.Span}>script</span>, який потім завантажується
          браузером.
        </p>
        <p>
          Наявність окремих тегів <span className={s.Span}>script</span> для
          кожного файлу означає, що браузер завантажуватиме кожен файл окремо,
          що негативно позначається на швидкості завантаження сторінки. Щоб
          уникнути цієї проблеми, файли об'єднуються в один або кілька файлів,
          щоб зменшити кількість запитів. Але залишається проблема керування
          залежностями між модулями.
        </p>
        <p>
          Якщо використовуються системи модулів, такі як{" "}
          <span className={s.Span}>CommonJS</span> або{" "}
          <span className={s.Span}>ESM</span>, необхідно використовувати
          інструмент для їх перетворення на правильно впорядкований, доступний
          браузеру код. Саме тут набувають чинності{" "}
          <span className={s.Span}>Webpack</span> та інші бандлери (від
          англійської bundle).
        </p>
        <h3>Модулі ECMAScript (ESM)</h3>
        <p>
          Донедавна у мові був вбудованої модульної системи. ESM мають
          компактний декларативний синтаксис та можливість асинхронного
          завантаження. ES-модуль - це фрагмент JS-коду, що багаторазово
          використовується, який експортує певні об'єкти, роблячи їх доступними
          для інших модулів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          greeter.js
____________________________________________


const helloMessage = "hello!";
const goodbyeMessage = "goodbye!";

export const hello = () => helloMessage;
export const goodbye = () => goodbyeMessage;
        `}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          index.js
___________________________________________


import { hello, goodbye } from "./greeter";

console.log(hello()); // "hello!"
console.log(goodbye()); // "goodbye!"
       `}
        </SyntaxHighlighter>
        <p>
          Кожен JS-файл зберігає код в унікальному контексті модуля та імпортує
          необхідні йому залежності та експортує все, що має бути імпортовано
          іншими модулями. Операції експорту/імпорту реалізовані конструкціями
          <span className={s.Span}>import</span> та{" "}
          <span className={s.Span}>export</span>. Є дві очевидні переваги цього
          підходу - запобігання забруднення глобального простору імен та явна
          вказівка ​​залежностей.
        </p>
        <p>
          Нова система модулів відрізняється від CommonJS та інших, насамперед
          тим, що це стандарт. А значить, з часом, повністю підтримуватиметься
          браузерами нативно, без додаткових інструментів. Однак зараз браузерна
          підтримка не повна, тому ESM використовуються у поєднанні з
          інструментами збирання модулів, такими як{" "}
          <a href="https://webpack.js.org/">Webpack</a>
          {""}, <a href="https://parceljs.org/">Parcel</a> та іншими.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            ESM розроблено з урахуванням статичного аналізу. Це означає, що при
            імпорті модулів імпорт обробляється під час компіляції, тобто до
            запуску скрипта. Це дозволяє видаляти експорт, який не
            використовується іншими модулями, перш ніж запускати скрипт, що може
            призвести до значної економії ваги JS-файлу, зменшивши навантаження
            на браузер. Це називається <strong>tree shaking</strong> та
            виконується бандлерами автоматично при складанні JS коду.
          </p>
        </div>
        <h3>Іменований експорт</h3>
        <p>
          Модуль може експортувати кілька сутностей, які відрізняються своїми
          іменами та називаються <strong>іменованими експортами</strong> . Щоб
          імпортувати їх в інший модуль, необхідно знати імена сутностей, що
          експортуються, які ми хочемо імпортувати.
        </p>
        <p>
          Перший спосіб – це використовувати ключове слово{" "}
          <span className={s.Span}>export</span> перед усіма сутностями, які
          необхідно експортувати. Вони будуть додані як властивості
          експортованого об'єкта. При імпорті ми деструктуризуємо характеристики
          з об'єкта, що імпортується.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          мій-модуль.js
__________________________________________________________


const sqrt = Math.sqrt;
export const square = x => x * x;
export const diag = (x, y) => sqrt(square(x) + square(y));
     `}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          main.js
__________________________________________________________


import { square, diag } from "./path/to/my-module";

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
  `}
        </SyntaxHighlighter>
        <p>
          Наступний синтаксис імпортує всі експорти модуля як об'єкт із
          зазначеним ім'ям. Це називається <strong>namespace import</strong> .
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          main.js
__________________________________________________________

import * as myModule from "./path/to/my-module";

console.log(myModule.square(11)); // 121
console.log(myModule.diag(4, 3)); // 5

`}
        </SyntaxHighlighter>
        <h3>Експорт за замовчуванням</h3>
        <p>
          Часто модуль експортує лише одну сутність, такий експорт зручний для
          імпорту. <strong>Експорт за замовчуванням</strong> - найголовніше
          значення, що експортується, яке може бути чим завгодно: змінною,
          функцією, класом і т.д.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          my-func.js
______________________________________


export default function myFunc() {
  // ...
}                `}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          my-class.js
______________________________________


export default class MyClass {
  // ...
}
  `}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          main.js
______________________________________


import myFunc from "./path/to/my-func";
import MyClass from "./path/to/my-class";

myFunc();

const inst = new MyClass();
`}
        </SyntaxHighlighter>
        <p>
          Використовуйте іменований експорт, коли потрібно експортувати кілька
          сутностей, а експорт за замовчуванням - при експорті однієї сутності.
          Хоча можна використовувати експорт за замовчуванням і іменований
          експорт в одному файлі, гарною практикою буде вибрати тільки один
          стиль для кожного модуля.
        </p>
        <h1 id="webpack">Знайомство з Webpack</h1>
        <p>
          <a href="https://webpack.js.org/">
            <strong>Webpack</strong>
          </a>
          {""}- це збирач JS-модулів, менеджер модульних залежностей, який
          аналізує дерево залежностей та створює один або кілька результуючих
          файлів, що містять всю кодову базу проекту. Вибудовує порядок
          підключення модулів, збирає, мініфікує, запаковує та багато іншого.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={webpack} alt="" />
        </div>
        <p>
          Webpack став одним із найважливіших інструментів веб-розробника. В
          першу чергу - це менеджер модульних залежностей програми та збирач
          JS-файлів, але він може трансформувати всі ресурси (HTML і CSS, SASS
          тощо), оптимізувати зображення, компілювати шаблони, запускати
          локальний веб-сервер для розробки та багато іншого .
        </p>
        <h3>Принцип роботи</h3>
        <p>
          Припустимо, у нас є програма, яка може виконувати дві прості
          математичні завдання: підсумовувати та множити. Ми вирішили поділити
          ці функції на окремі файли (модулі) для спрощення підтримки кодової
          бази. Тоді <span className={s.Span}>index.html</span> скрипти будуть
          підключені в такій послідовності.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
index.html
__________________________________________

<script src="sum.js"></script>
<script src="multiply.js"></script>
<script src="index.js"></script>
                `}
        </SyntaxHighlighter>
        <p>
          Допустимо код з <span className={s.Span}>sum.js</span>{" "}
          використовується в <span className={s.Span}>multiply.js</span> і{" "}
          <span className={s.Span}>index.js</span>, а код
          <span className={s.Span}>multiply.js</span> використовується тільки в{" "}
          <span className={s.Span}>index.js</span>. Покажемо ієрархію
          залежностей на простій діаграмі.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={dependencies} alt="" />
        </div>
        <p>
          Якщо помилитися в послідовності підключення скриптів у index.html,
          тобто якщо <span className={s.Span}>index.js</span> підключений перед
          будь-якою з інших залежностей або якщо{" "}
          <span className={s.Span}>sum.js</span> доданий після{" "}
          <span className={s.Span}>multiply.js</span> - будуть помилки. Тепер
          уявімо, що ми масштабуємо це до реальної, повністю робочої програми -
          можуть бути сотні залежностей. Збереження системи підключення стане
          кошмаром.
        </p>
        <p>
          Webpack перетворює залежності в модулі та зшиє в один або кілька
          файлів. Кожен модуль матиме закритий простір імен і підключатиметься у
          потрібний час, у правильному порядку.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={bundle} alt="" />
        </div>
        <p>
          <span className={s.Span}>Gulp</span> все ще займає гідне місце в
          інструментарії розробника і для деяких проектів, функціонал{" "}
          <span className={s.Span}>Webpack</span> не потрібен, хоча він може
          добре працювати у зв'язку з ним. Незважаючи на те, що крива навчання
          може бути вищою при більш складних налаштуваннях,{" "}
          <span className={s.Span}>Webpack</span> незамінний якщо ви
          використовуєте сучасні бібліотеки та фреймворки для розробки, такі як{" "}
          <span className={s.Span}>React</span>,{" "}
          <span className={s.Span}>Vue</span>,{" "}
          <span className={s.Span}>Angular</span> і т.д.
        </p>
        <h3>Налаштування</h3>
        <p>
          За нижченаведеними посиланнями ви знайдете вичерпні посібники з
          покроковими поясненнями налаштування Webpack.
        </p>
        <ul>
          <li>
            <a href="https://www.taniarascia.com/how-to-use-webpack/">
              Як налаштувати webpack 5 з нуля
            </a>
          </li>
          <li>
            <a href="https://webpack.js.org/concepts/">Документація Webpack</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NpmModule;
