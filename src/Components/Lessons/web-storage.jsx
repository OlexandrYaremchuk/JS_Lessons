import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import application from "../../img/application.png";

import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

const WebStorage = () => {
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
              <a href="#json">Формат JSON</a>
            </li>
            <li>
              <a href="#web-storage">Веб-сховище</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="json">Формат JSON</h1>
        <p>
          <strong>JSON (JavaScript Object Notation)</strong> – сучасний
          текстовий формат зберігання та передачі структурованих даних у
          текстовому вигляді. Звичний об'єктоподібний синтаксис JSON дуже
          зручний. Саме в цьому форматі дані приходитимуть і відправлятимуться
          на сервер, зберігатимуться у локальному сховищі тощо.
        </p>
        <p>
          Але JSON - це об'єкт, яке рядкове представлення. Нижче наведено
          приклад JSON файлу. Синтаксис схожий на об'єкт, за винятком того, що
          ключі завжди є рядки в подвійних лапках. Рядкові значення також
          обов'язково мають бути укладені в подвійні лапки. Значеннями
          властивостей може бути типи <span className={s.Span}>string</span>,{" "}
          <span className={s.Span}>number</span>,
          <span className={s.Span}>object</span>,{" "}
          <span className={s.Span}>array</span>,{" "}
          <span className={s.Span}>boolean</span> і{" "}
          <span className={s.Span}>null</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
user.json
____________________________________

{
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}                `}
        </SyntaxHighlighter>
        <p>
          Javascript і JSON відмінно працюють разом завдяки методам вбудованого
          класу JSON, які перетворюють JavaScript об'єкт на JSON і назад.
          Незалежно від того, що у вас є, можна отримати зворотне.
        </p>
        <h3>
          Метод <span className={s.Span}>JSON.stringify()</span>
        </h3>
        <p>
          Приймає значення та перетворює його на JSON. Значенням може бути
          число, буль, null, масив чи об'єкт. Рядки це вже валідний JSON тому
          їхнє перетворення не має сенсу.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"                `}
        </SyntaxHighlighter>
        <p>
          Результат виклику <span className={s.Span}>JSON.stringify(dog)</span>{" "}
          - це валідний JSON (рядок), який може бути збережений у файл або
          переданий по мережі.
        </p>
        <p>
          Не будь-який JavaScript об'єкт може бути перетворений один до одного
          на JSON. Наприклад, якщо об'єкт має методи, то при перетворенні вони
          будуть проігноровані.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
  bark() {
    console.log("Woof!");
  },
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"                `}
        </SyntaxHighlighter>
        <p>
          Також при спробі перетворити функцію на JSON, результатом буде
          <span className={s.Span}>undefined</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
JSON.stringify(() => console.log("Well, this is awkward")); // undefined                `}
        </SyntaxHighlighter>
        <h3>
          Метод <span className={s.Span}>JSON.parse()</span>
        </h3>
        <p>
          Щоб отримати з JSON валідне JavaScript значення, його потрібно
          розпарити ( <span className={s.Span}>parse</span>). Це операція, що
          обернена перетворення в рядок (
          <span className={s.Span}>stringify</span>). Тепер, коли{" "}
          <span className={s.Span}>dog</span> це валідний об'єкт, з ним можна
          працювати як завжди.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const json = '{"name":"Mango","age":3,"isHappy":true}';

const dog = JSON.parse(json);
console.log(dog); // {name: "Mango", age: 3, isHappy: true}
console.log(dog.name); // "Mango"
`}
        </SyntaxHighlighter>
        <h3>Обробка помилок</h3>
        <p>
          Якщо методам класу <span className={s.Span}>JSON</span> передати
          невалідний JSON, вони «викинуть» помилку і весь скрипт впаде. Для
          того, щоб уникнути цього, використовується конструкція{" "}
          <span className={s.Span}>try...catch</span>, яка дозволяє «ловити» та
          обробляти помилки виконання скрипту.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}
`}
        </SyntaxHighlighter>
        <ol>
          <li>
            Спочатку виконується код усередині блоку{" "}
            <span className={s.Span}>try</span>.
          </li>
          <li>
            Якщо помилок немає, блок <span className={s.Span}>catch</span>{" "}
            ігнорується та керування передається далі.
          </li>
          <li>
            Якщо в блоці <span className={s.Span}>try</span> сталася помилка,
            його виконання зупиняється та інтерпретатор переходить у блок{" "}
            <span className={s.Span}>catch</span>.
          </li>
        </ol>
        <p>
          Змінна <span className={s.Span}>error</span> це об'єкт помилки з
          інформацією про те, що сталося. Цей об'єкт має кілька корисних
          властивостей:
        </p>
        <ul>
          <li>
            <span className={s.Span}>name</span> - Тип помилки. Для помилки
            парса це <span className={s.Span}>SyntaxError</span>.
          </li>
          <li>
            <span className={s.Span}>message</span> - Повідомлення про деталі
            помилки.
          </li>
          <li>
            <span className={s.Span}>stack</span> - Стек викликів функцій на
            момент помилки. Використовується для налагодження.
          </li>
        </ul>
        <p>
          Наприклад, парс рядка призведе до такого сценарію, тому що рядок із
          символами це не валідний JSON, тому що не може бути перетворений до
          валідного JavaScript значення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
// Script will crash during parse
const data = JSON.parse("Well, this is awkward");
console.log("❌ You won't see this log");          

`}
        </SyntaxHighlighter>
        <p>
          Використовуючи конструкцію,{" "}
          <span className={s.Span}>try...catch</span> ми можемо обробити цей
          виняток так, щоб скрипт продовжив працювати навіть у разі помилки.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parse error in try...catch");
`}
        </SyntaxHighlighter>
        <p>
          Те саме буде при спробі парса невалідного JSON, який, наприклад, може
          прийти від бекенда або прочитати з файлу. У прикладі властивості
          <span className={s.Span}>username</span> не вистачає подвійних лапок,
          що обрамляють.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
try {
  const data = JSON.parse('{username: "Mango"}');
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // "Unexpected token u in JSON at position 1"
}

console.log("✅ This is fine, we handled parse error in try...catch");
`}
        </SyntaxHighlighter>
        <h3>Фази виконання коду</h3>
        <p>
          JavaScript код виконується не відразу, для початку движку потрібно
          прочитати код і дізнатися чи можна його взагалі виконати.
        </p>
        <p>
          <strong>
            Фаза інтерпретації чи оцінки (compile time, evaluation time)
          </strong>{" "}
          - підготовка перед виконанням коду, движок знаходить синтаксичні
          помилки, помилки типізації тощо. буд. Код ще виконується, лише
          оцінюється. Якщо ця фаза пройшла успішно, це як мінімум означає, що
          код не має синтаксичних помилок і його можна запустити на виконання.
        </p>
        <p>
          <strong>Фаза виконання (runtime)</strong> - скрипт починає
          виконуватися, виконуються інструкції викликів функцій та оцінки
          виразів, відбувається пошук необхідних ідентифікаторів у відповідних
          областях видимості тощо.
        </p>
        <p>
          Якщо ця фаза завершилася успішно, то скрипт написаний без явних
          помилок і закінчив свою роботу. На цій фазі можуть бути помилки,
          пов'язані з відсутніми властивостями та змінними, перетворенням типів
          тощо, тобто щось, що відбувається тільки під час виконання коду.
        </p>
        <p>
          Спробуйте виконати наступний код. Так як ми зробили друкарську помилку
          і замість <span className={s.Span}>const</span> намагаємося оголосити
          змінну
          <span className={s.Span}>value</span> ключовим словом{" "}
          <span className={s.Span}>cos</span>, на фазі компіляції буде виявлено
          синтаксичну помилку і фаза виконання навіть не запуститься. У консолі
          ми відразу побачимо повідомлення про помилку.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
console.log('This message will not appear in the console');

cos value = 5;
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
            <span className={s.Span}>try...catch</span> ловить лише помилки, що
            відбулися під час виконання коду (runtime errors). Це означає, що
            код має бути синтаксично правильним, інакше фаза виконання просто не
            запуститься. Помилки, які виникають під час фази оцінки, називають
            помилками парсингу.
          </p>
        </div>
        <h1 id="web-storage">Веб-сховище</h1>
        <p>
          Кожного разу, коли ви змінюєте колірну тему між світлою і темною,
          переглядаєте відео, додаєте товар до кошика, відкриваєте або
          закриваєте сайдбар, популярні веб-застосунки запам'ятовують стан
          інтерфейсу і при наступному відвідуванні його відновлюють.
        </p>
        <p>
          За промовчанням стан інтерфейсу зберігається в пам'яті вкладки
          браузера і втрачається під час закриття веб-програми. Щоб уникнути
          цього, необхідно зберегти дані про стан інтерфейсу між відвідуваннями
          сторінки. На допомогу приходить збереження інформації про стан
          веб-програми на комп'ютері користувача.
        </p>
        <h3>Web Storage API</h3>
        <p>
          Веб-сховище складається з локального сховища ({" "}
          <span className={s.Span}>localStorage</span>) та сховища сеансів ({" "}
          <span className={s.Span}>sessionStorage</span>). Надає спосіб
          зберігання даних інтуїтивно зрозумілим способом у вигляді пар
          ключ:значение. Технічно у веб-сховищі можна записати лише рядки, але
          це не проблема, якщо використовувати методи класу{" "}
          <span className={s.Span}>JSON</span> для перетворення складних типів.
          У веб-сховищі не записують методи об'єктів або функції, лише дані.
        </p>
        <p>
          Локальне сховище ( <span className={s.Span}>localStorage</span>) є
          унікальним для кожної веб-програми і буде однаковим між кількома
          вкладками, в яких воно (веб-додаток) запущено. Дані в локальному
          сховищі не видаляються навіть при закритті браузера або вимкнення
          комп'ютера. Щоб їх видалити, потрібно використовувати JavaScript.
        </p>
        <p>
          Сховище сеансів ( <span className={s.Span}>sessionStorage</span>)
          схоже на локальне, воно також унікальне для кожної веб-програми, але
          час життя збережених даних обмежено сесією вкладки браузера. Як тільки
          користувач закриває вкладку або браузер, дані очищаються. Насправді
          сховище сеансів використовується значно рідше.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            У веб-сховищі <strong>не зберігають</strong> паролі, номери
            банківських карток і іншу конфіденційну інформацію. Якщо шкідливий
            скрипт отримає доступ до веб-сторінки, без проблем прочитає ці дані.
          </p>
        </div>
        <h3>Локальне сховище</h3>
        <p>
          Дозволяє зберігати дані без закінчення терміну дії у форматі пар
          <span className={s.Span}>ключ:значення</span> на комп'ютері
          користувача та читати їх при повторному відвідуванні сторінки.
          Локальне та сховище сесії це частина браузера, тому вони доступні як
          властивості об'єкта <span className={s.Span}>window</span>, мають
          однаковий набір властивостей та методів і відрізняються лише
          поведінкою.
        </p>
        <ul>
          <li>
            <span className={s.Span}>setItem(key, value)</span> - робить новий
            або оновлює вже існуючий запис у сховищі.
          </li>
          <li>
            <span className={s.Span}>getItem(key)</span> - Повертає зі сховища
            значення з ключем
            <span className={s.Span}>key</span>.
          </li>
          <li>
            <span className={s.Span}>removeItem(key)</span> - видаляє зі сховища
            запис із ключем
            <span className={s.Span}>key</span>.
          </li>
          <li>
            <span className={s.Span}>clear()</span> - повністю очищає всі записи
            у сховищі.
          </li>
          <li>
            <span className={s.Span}>length</span> - Зберігає кількість записів
            у сховищі.
          </li>
        </ul>
        <h3>Збереження</h3>
        <p>
          Використовуючи метод setItem(key, value)можна додати новий запис у
          вигляді пари <span className={s.Span}>ключ:значення</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");
`}
        </SyntaxHighlighter>
        <p>
          Якщо необхідно зберегти щось, крім рядка, наприклад масив або об'єкт,
          необхідно перетворити їх у рядок методом{" "}
          <span className={s.Span}>JSON.stringify()</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
`}
        </SyntaxHighlighter>
        <h3>Читання</h3>
        <p>
          Метод <span className={s.Span}>getItem(key)</span> дозволяє прочитати
          зі сховища запис із ключем <span className={s.Span}>key</span>. Якщо у
          сховищі немає запису з таким ключем, метод повертає{" "}
          <span className={s.Span}>null</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
localStorage.setItem("ui-theme", "dark");

const theme = localStorage.getItem("ui-theme");
console.log(theme); // "dark"
`}
        </SyntaxHighlighter>
        <p>
          Інакше необхідно розпарсувати значення методом{" "}
          <span className={s.Span}>JSON.parse()</span>, щоб отримати валідні
          дані.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // settings object
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
            Не забувайте використовувати конструкцію{" "}
            <span className={s.Span}>try...catch</span> з методом{" "}
            <span className={s.Span}>JSON.parse()</span>, щоб уникнути падіння
            скрипту якщо раптом прочитали не валідний JSON.
          </p>
        </div>
        <h3>Видалення</h3>
        <p>
          Метод <span className={s.Span}>removeItem(key)</span> видаляє зі
          сховища вже існуючий запис із ключем{" "}
          <span className={s.Span}>key</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null
`}
        </SyntaxHighlighter>
        <h3>Очищення сховища</h3>
        <p>
          Операція повного очищення сховища заняття небезпечне, оскільки може
          торкнутися записів, які зроблені іншими розробниками проекту. Проте,
          якщо ви хочете повністю очистити сховище, викличте метод{" "}
          <span className={s.Span}>clear()</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");
console.log(localStorage.getItem("ui-theme")); // "light"
console.log(localStorage.getItem("sidebar")); // "expanded"
console.log(localStorage.getItem("notification-level")); // "mute"

localStorage.clear();
console.log(localStorage.getItem("ui-theme")); // null
console.log(localStorage.getItem("sidebar")); // null
console.log(localStorage.getItem("notification-level")); // null
`}
        </SyntaxHighlighter>
        <h3>Зберігаємо повідомлення</h3>
        <p>
          Створимо форму для введення повідомлення і будемо зберігати його при
          <span className={s.Span}>localStorage</span> сабмиті. Змінюйте
          значення текстового поля та натисніть кнопку «Save». Текст у полі
          виводу зміниться на введений. Перезавантажте сторінку, і ви побачите
          той самий текст, хоча нічого ще не вводили. При завантаженні сторінки
          ми беремо <span className={s.Span}>localStorage</span> останнє
          збережене значення. Спочатку такого запису в сховищі немає, тому буде
          виведено порожній рядок.
        </p>
        <iframe
          height="500"
          width={"1200"}
          src="https://codepen.io/olexandryaremchuk/embed/eYQYYpb?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <p>
          Подивитися вміст веб-сховища можна в інструментах розробника на
          вкладці <span className={s.Span}>Application</span>. Там можна вручну
          видаляти і додавати записи. На практиці це використовується під час
          розробки та налагодження роботи програми.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={application} style={{ width: "80vw" }} alt="" />
        </div>
        <h3>Сервіс для localStorage </h3>
        <p>
          Для того щоб скоротити кількість коду, що повторюється при роботі з
          веб-сховищем, можна написати сервіс зі стандартними методами,
          наприклад <span className={s.Span}>save</span> і{" "}
          <span className={s.Span}>load</span>. Вони будуть абстрагувати код
          перевірки помилок парса і тому подібну рутину.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
storage.js
________________________________________________________________


const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export default {
  save,
  load,
};
`}
        </SyntaxHighlighter>
        <p>
          Тепер ми можемо безпечно додавати та читати записи з локального
          сховища. Спробуйте самостійно дописати метод{" "}
          <span className={s.Span}>remove(key)</span> видалення запису,
          аналогічно <span className={s.Span}>load(key)</span> і{" "}
          <span className={s.Span}>save(key, value)</span>.
        </p>
      </div>
    </div>
  );
};
export default WebStorage;
