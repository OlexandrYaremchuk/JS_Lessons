import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import callBack01 from "../../img/callBack01.jpeg";
import declarative from "../../img/declarative.jpeg";
const This = () => {
  const codeStyle = materialDark;
  return (
    <div className={s.lessonsBox}>
      <button className={s.home}>
        <Link to="/Start">
          <FcHome customStyle={{ with: "40vh" }} size="3em" />
        </Link>
      </button>
      <div className={s.breadNav}>
        <Scrollspy
          items={["branching", "section-2", "section-3"]}
          currentClassName="is-current"
        >
          <div className={s.breadNavList}>
            <li>
              <a href="#context">Контекст виконання функції</a>
            </li>
            <li>
              <a href="#rool">Правила визначення this</a>
            </li>
            <li>
              <a href="#fnMethod">Методи функцій</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="context">Контекст виконання функції</h1>
        <p>
          Можна з упевненістю сказати, що ключове слово{" "}
          <span className={s.Span}>this</span> це одна із найбільш заплутаних
          концепцій JavaScript на старті навчання. Новачки часто підставляють{" "}
          <span className={s.Span}>this</span> методом наукового тику доти, доки
          скрипт не спрацює.
        </p>
        <p>Контекст у JavaScript схожий на контекст у реченні:</p>
        <ul>
          <li>
            <span className={s.Span}>Петро</span> біжить швидко, бо{" "}
            <span className={s.Span}>Петро</span> намагається зловити поїзд.
          </li>
          <li>
            <span className={s.Span}>Петро</span> біжить швидко, бо{" "}
            <span className={s.Span}>він</span> намагається зловити поїзд.
          </li>
        </ul>
        <p>
          Друга пропозиція звучить лаконічніше. Предметом пропозиції є Петро і
          ми можемо сказати, що контекст пропозиції – це Петро, тому що він у
          центрі уваги в цей конкретний час у реченні. Навіть займенник «хто»
          належить до Петра.
        </p>
        <p>
          І так само об'єкт може бути поточним контекстом виконання функції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Петро біжить швидко тому, що Петро намагається зловити поїзд.
          const petro = {
            username: "Petro",
            showName() {
              console.log(petro.username);
            },
          };

          petro.showName();
                `}
        </SyntaxHighlighter>
        <p>
          Звернення до властивостей об'єкта всередині методів, використовуючи
          ім'я самого об'єкта, аналогічне використанню{" "}
          <span className={s.Span}>Петро</span> замість{" "}
          <span className={s.Span}>він</span>.
        </p>
        <p>
          Усередині функцій можна використовувати зарезервоване ключове слово
          <span className={s.Span}>this</span>. Під час виконання функції{" "}
          <span className={s.Span}>this</span> записується посилання на об'єкт,
          в контексті якого вона була викликана. Таким чином, у тілі функції ми
          можемо отримати доступ до властивостей та методів цього об'єкта.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Петро біжить швидко тому, що він (this) намагається зловити поїзд.
          const petro = {
            username: "Petro",
            showName() {
              console.log(this.username);
            },
          };

          petro.showName();
                `}
        </SyntaxHighlighter>
        <p>Розберемо приклад із колекцією книг:</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const bookShelf = {
            authors: ["Бернард Корнуел", "Роберт Шеклі"],
            getAuthors() {
              return this.authors;
            },
            addAuthor(authorName) {
              this.authors.push(authorName);
            },
          };

          console.log(bookShelf.getAuthors()); // ["Бернард Корнуел", "Роберт Шеклі"]
          bookShelf.addAuthor("Лі Таніт");
          console.log(bookShelf.getAuthors()); // ["Бернард Корнуел", "Роберт Шеклі", "Лі Таніт"]                `}
        </SyntaxHighlighter>
        <p>
          Методи <span className={s.Span}>getAuthors</span> і{" "}
          <span className={s.Span}>addAuthor</span> функції (методи об'єкта), що
          викликаються у тих об'єкта <span className={s.Span}>bookShelf</span>.
          Під час їх виконання <span className={s.Span}>this</span> записується
          посилання на об'єкт <span className={s.Span}>bookShelf</span> і ми
          можемо звернутися до його властивостей і методів.
        </p>
        <h1 id="rool">
          Правила визначення <span className={s.Span}>this</span>
        </h1>
        <p>
          Необхідно засвоїти лише одне правило визначення{" "}
          <span className={s.Span}>this</span> - значення контексту всередині
          функції (не стрілочної) визначаться{" "}
          <strong>не в момент її створення</strong> , а{" "}
          <strong>момент виклику</strong>. Тобто значення
          <span className={s.Span}>this</span> визначається тим, як викликається
          функція, а не де вона була оголошена.
        </p>
        <h3>
          <span className={s.Span}>this</span> у глобальній області видимості
        </h3>
        <p>
          У глобальній області видимості, якщо скрипт виконується над строгому
          режимі, <span className={s.Span}>this</span> посилається на об'єкт{" "}
          <span className={s.Span}>window</span>. У строгому режимі значення{" "}
          <span className={s.Span}>this</span>, у глобальній області видимості,
          буде <span className={s.Span}>undefined</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function foo() {
            console.log(this);
          }

          foo(); // window без "use strict" та undefined з "use strict"
                `}
        </SyntaxHighlighter>
        <h3>
          <span className={s.Span}>this</span> у методі обʼєкта{" "}
        </h3>
        <p>
          Якщо функція була викликана як метод об'єкта, контекст буде посилатися
          на об'єкт, частиною якого є метод.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const petro = {
            username: "Petro",
            showThis() {
              console.log(this);
            },
            showName() {
              console.log(this.username);
            },
          };

          petro.showThis(); // {username: "Petro", showThis: ƒ, showName: ƒ}
          petro.showName(); // 'Petro'
                `}
        </SyntaxHighlighter>
        <p>Розберемо складніший приклад для кращого розуміння.</p>
        <ul>
          <li>
            Спочатку створимо функцію у глобальній області видимості та
            викличемо її.
          </li>
          <li>
            Після чого привласнимо її у властивість об'єкта і викличемо як метод
            цього об'єкта.
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function showThis() {
            console.log("this in showThis: ", this);
          }

          // Викликаємо в глобальному контексті
          showThis(); // this in showThis: Window

          const user = {
            username: "Mango",
          };

          // Записуємо посилання на функцію в властивість обʼєкта
          // Зверніть увагу, що це не виклик - немає ()
          user.showContext = showThis;

          // Викликаємо функцію в контексті обʼєкта
          // this буде вказувати на поточний обʼєкт, в контексті
          // якого виконується виклик, а не на глобальний обʼєкт.
          user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}
                `}
        </SyntaxHighlighter>
        <h3>
          <span className={s.Span}>this</span> в callback-функціях
        </h3>
        <p>
          При передачі методів об'єкта як колбек-функцій контекст не
          зберігається. Колбек це посилання на метод, яке присвоюється як
          значення параметра, викликаного без об'єкта.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const customer = {
            firstName: "Jacob",
            lastName: "Mercer",
            getFullName() {
              return \`$\{this.firstName} $\{this.lastName}\`;
            },
          };

          function makeMessage(callback) {
            // callback() це виклик метода getFullName без обʼєкта
            console.log(\`Опрацьовуємо заявку від $\{callback()}.\`);
          }

          makeMessage(customer.getFullName); // Буде помилка під час викликові функції
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
            Вирішення цієї проблеми розглядається в секції про{" "}
            <strong>метод bind() та методи об'єкта</strong> .
          </p>
        </div>
        <h3>
          <span className={s.Span}>this</span> у стрілочних функціях
        </h3>
        <p>
          Стрілецькі функції не мають свого <span className={s.Span}>this</span>
          . На відміну від звичайних функцій, змінити значення{" "}
          <span className={s.Span}>this</span> всередині стрілки після
          оголошення не можна.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Контекст усередині стрілки визначається{" "}
            <strong>місцем її оголошення </strong>, а чи не виклику і
            посилається контекст батьківської функції.
          </p>
        </div>
        <p>
          Стрілецькі функції також ігнорують наявність суворого режиму. Якщо
          стрілка запам'ятала глобальний контекст, то{" "}
          <span className={s.Span}>this</span> в ній міститиме посилання на{" "}
          <span className={s.Span}>window</span> незалежно від того, виконується
          скрипт у строгому режимі чи ні.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const showThis = () => {
            console.log("this in showThis: ", this);
          };

          showThis(); // this in showThis: window

          const user = {
            username: "Mango",
          };
          user.showContext = showThis;

          user.showContext(); // this in showThis: window
                `}
        </SyntaxHighlighter>
        <p>
          Обмежуючи стрілочні функції постійним контекстом, JavaScript-движки
          можуть краще оптимізувати їх, на відміну від звичайних функцій,
          значення <span className={s.Span}>this</span> яких може бути змінено.
        </p>
        <p>
          Приклад не практичний, але чудово показує, як працює контекст для
          стрілок. Значення контексту береться з батьківської області видимості.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const hotel = {
            username: "Resort hotel",
            showThis() {
              const foo = () => {
                // Стрілки запамʼятовують контекст під час оголошення,
                // з батьківської області видимості
                console.log("this in foo: ", this);
              };

              foo();
              console.log("this in showThis: ", this);
            },
          };

          hotel.showThis();
          // this in foo: {username: 'Resort hotel', showThis: ƒ}
          // this in showThis: {username: 'Resort hotel',showThis: ƒ}
                `}
        </SyntaxHighlighter>
        <h1 id="fnMethod">Методи функцій</h1>
        <p>
          Бувають ситуації, коли функцію потрібно викликати в контексті якогось
          об'єкта, при цьому функція не є його методом. Для цього у функцій є
          методи
          <span className={s.Span}>call</span>,{" "}
          <span className={s.Span}>apply</span> і{" "}
          <span className={s.Span}>bind</span>.
        </p>
        <h3>
          Метод <span className={s.Span}>call()</span>
        </h3>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
          foo.call(obj, arg1, arg2, ...)
                `}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>call</span> викличе функцію{" "}
          <span className={s.Span}>foo</span> так, що в{" "}
          <span className={s.Span}>this</span> буде посилання на об'єкт{" "}
          <span className={s.Span}>obj</span>, а також передасть аргументи{" "}
          <span className={s.Span}>arg1</span>,{" "}
          <span className={s.Span}>arg2</span> і т.д.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function greetGuest(greeting) {
            console.log(\`$\{greeting}, $\{this.username}.\`);
          }

          const mango = {
            username: "Манго",
          };
          const poly = {
            username: "Полі",
          };

          greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
          greetGuest.call(poly, "З приїздом"); // З приїздом, Полі.
                `}
        </SyntaxHighlighter>
        <h3>
          Метод <span className={s.Span}>apply</span>
        </h3>
        <p>
          Метод <span className={s.Span}>apply</span> це аналог методу{" "}
          <span className={s.Span}>call</span> крім того, що синтаксис передачі
          аргументів вимагає не перерахування, а масив, навіть якщо аргумент
          всього один.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          foo.call(obj, arg1, arg2, ...)

          foo.apply(obj, [arg1, arg2, ...])
                `}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>apply</span> викличе функцію{" "}
          <span className={s.Span}>foo</span> так, що
          <span className={s.Span}>this</span> буде посилання на об'єкт{" "}
          <span className={s.Span}>obj</span>, а також передасть елементи масиву
          як окремі аргументи <span className={s.Span}>arg1</span>,{" "}
          <span className={s.Span}>arg2</span> і т.д.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function greetGuest(greeting) {
            console.log(\`$\{greeting}, $\{this.username}.\`);
          }

          const mango = {
            username: "Манго",
          };
          const poly = {
            username: "Полі",
          };

          greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
          greetGuest.apply(poly, ["З приїздом"]); // З приїздом, Полі.
                `}
        </SyntaxHighlighter>
        <h3>
          Метод <span className={s.Span}>bind()</span>
        </h3>
        <p>
          Методи <span className={s.Span}>call</span> і{" "}
          <span className={s.Span}>apply</span> викликають функцію «на місці»,
          тобто одразу. Але у разі колбек-функцій, коли необхідно не відразу
          викликати функцію, а передати посилання на неї, причому з прив'язаним
          контекстом, використовується метод{" "}
          <span className={s.Span}>bind</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          foo.bind(obj, arg1, arg2, ...)
                `}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>bind</span> створює і повертає копію
          функції <span className={s.Span}>foo</span> з прив'язаним контекстом{" "}
          <span className={s.Span}>obj</span> і аргументами{" "}
          <span className={s.Span}>arg1</span>,{" "}
          <span className={s.Span}>arg2</span> і т. д. Виходить копія функції,
          яку можна передати куди завгодно і викликати коли завгодно.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function greet(clientName) {
            return \`$\{clientName}, добро пожаловать в «$\{this.service}».\`;
          }

          const steam = {
            service: "Steam",
          };
          const steamGreeter = greet.bind(steam);
          steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

          const gmail = {
            service: "Gmail",
          };
          const gmailGreeter = greet.bind(gmail);
          gmailGreeter("Поли"); // "Полі, ласкаво просимо в «Gmail»."
                `}
        </SyntaxHighlighter>
        <h3>
          <span className={s.Span}>bind()</span> та методи обʼєкт{" "}
        </h3>
        <p>
          При передачі методів об'єкта як колбек-функцій контекст не
          зберігається. Колбек це посилання на метод, яке присвоюється як
          значення параметра, викликаного без об'єкта.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const customer = {
            firstName: "Jacob",
            lastName: "Mercer",
            getFullName() {
              return \`$\{this.firstName} $\{this.lastName}\`;
            },
          };

          function makeMessage(callback) {
            // callback() це виклик метода getFullName без обʼєкта
            console.log(\`Опрацьовуємо заявку від $\{callback()}.\`);
          }

          makeMessage(customer.getFullName); // Буде помилка під час викликові функції
                `}
        </SyntaxHighlighter>
        <p>
          У строгому режимі, значення <span className={s.Span}>this</span> в
          методі <span className={s.Span}>getFullName</span>, коли дзвінок як
          колбек-функції <span className={s.Span}>callback()</span>, буде{" "}
          <span className={s.Span}>undefined</span>. При зверненні до
          властивостей <span className={s.Span}>firstName</span> буде{" "}
          <span className={s.Span}>lastName</span> помилка, оскільки{" "}
          <span className={s.Span}>undefined</span> це об'єкт.
        </p>
        <p>
          Метод <span className={s.Span}>bind</span> використовується для
          прив'язки контексту під час передачі методів об'єкта як
          колбек-функцій. Передамо колбеком не оригінальний метод{" "}
          <span className={s.Span}>getFullName</span>, а його копію з
          прив'язаним контекстом до об'єкта{" "}
          <span className={s.Span}>customer</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // ❌ Було
          makeMessage(customer.getFullName); // Буде помилка під час викикові функції

          // ✅ Стало
          makeMessage(customer.getFullName.bind(customer)); // Опрацьовуємо заявку від Jacob Mercer.
                `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default This;
