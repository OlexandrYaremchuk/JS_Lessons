import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

const SpreadRest = () => {
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
              <a href="#spread">Синтаксис spread та rest</a>
            </li>
            <li>
              <a href="#desObject">Деструктуризація об'єктів</a>
            </li>
            <li>
              <a href="#desArray">Деструктуризація масивів</a>
            </li>
            <li>
              <a href="#patern">Паттерн "Об'єкт параметрів"</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="spread">Синтаксис spread та rest</h1>
        <p>
          У сучасному стандарті з'явився новий синтаксис для роботи з
          сутностями, що ітеруються, такими як рядок, масив або об'єкт. Його
          функціонал та назва залежить від місця застосування.
        </p>
        <h3>
          <span className={s.Span}>spread</span> : передача аргументів{" "}
        </h3>
        <p>
          Операція <span className={s.Span}>...(spread)</span> дозволяє
          розпорошити колекцію елементів (масив, рядок чи об'єкт) на місце, де
          очікується набір окремих значень. Звичайно є деякі обмеження,
          наприклад, не можна розпорошити масив в об'єкт і навпаки.
        </p>
        <p>
          Можна навести аналогію зі скринькою яблук. Поставивши ящик на підлогу,
          не виймаючи з нього яблука, отримаємо аналог масиву значень. Якщо
          висипати яблука із ящика на підлогу, відбудеться розпилення – набір
          окремих значень.
        </p>
        <p>
          Відмінність всього одна - JavaScript розпилення не змінює оригінальну
          колекцію, тобто робиться копія кожного елемента. Після розпилення
          залишиться ящик повний яблук і копія кожного яблука на підлозі.
        </p>
        <p>
          Наприклад, метод <span className={s.Span}>Math.max(аргументи)</span>{" "}
          шукає і повертає найбільший аргументів (чисел), тобто очікує не масив
          значень, а довільна кількість аргументів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const temps = [14, -4, 25, 8, 11];

          // В консолі буде массив
          console.log(temps);
          // ❌ Так працювати не буде, тому що передаємо цілий масив
          console.log(Math.max(temps)); // NaN

          // В консолі буде набір окремих чисел
          console.log(...temps);
          // ✅ Розпорошуємо колекцію елементів, як окремі аргументи
          console.log(Math.max(...temps)); // 25
                `}
        </SyntaxHighlighter>
        <p>
          Тобто запис{" "}
          <span className={s.Span}>Math.max(...[14, -4, 25, 8, 11])</span>,
          після інтерпретації перетворюється на{" "}
          <span className={s.Span}>Math.max(14, -4, 25, 8, 11)</span> -
          синтаксис <span className={s.Span}>...</span> повертає розпакований
          масив, тобто розпорошує його елементи як окремі аргументи.
        </p>
        <h3>
          <span className={s.Span}>spread </span>: створення нового масиву
        </h3>
        <p>
          Операція <span className={s.Span}>...(spread)</span> дозволяє створити
          копію масиву або "склеїти" довільну кількість масивів в один новий.
          Раніше для цього використовували методи{" "}
          <span className={s.Span}>slice()</span>,{" "}
          <span className={s.Span}>concat()</span> але операція розпилення
          дозволяє зробити те ж саме в більш короткій формі.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const temps = [14, -4, 25, 8, 11];

          // Це точна, але незалежна копія масиву temps
          const copyOfTemps = [...temps];
          console.log(copyOfTemps); // [14, -4, 25, 8, 11]  
                `}
        </SyntaxHighlighter>
        <p>
          У прикладі вище ми маємо ящик яблук{" "}
          <span className={s.Span}>temps</span> і ми хочемо зробити його точну
          копію. Беремо порожню скриньку і пересипаємо в неї яблука з вихідної
          скриньки <span className={s.Span}>temps</span> - розпорошуємо її в
          іншу колекцію. При цьому скринька{" "}
          <span className={s.Span}>temps</span> не зміниться, в ній все ще
          будуть яблука, а в новій скриньці – їх точні копії.
        </p>
        <p>
          У наступному прикладі ми зсипаємо яблука з двох ящиків в одну нову.
          Оригінальні ящики (масиви) не зміняться, а в новому будуть копії всіх
          їх яблук (елементів). Порядок розпилення важливий – він впливає на
          порядок елементів у новій колекції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const first = { propA: 5, propB: 10 };
          const second = { propC: 15 };
          const third = { ...first, ...second };
          console.log(third); // { propA: 5, propB: 10, propC: 15 }  
                `}
        </SyntaxHighlighter>
        <p>
          Порядок розпилення має значення. Імена властивостей об'єкта унікальні,
          тому властивості об'єкта, що розпилюється, можуть перезаписати
          значення вже існуючої властивості, якщо їх імена збігаються.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const first = { propA: 5, propB: 10, propC: 50 };
          const second = { propC: 15, propD: 20 };

          const third = { ...first, ...second };
          console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

          const fourth = { ...second, ...first };
          console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }  
                `}
        </SyntaxHighlighter>
        <p>
          Якби яблука в ящику мали наклейки з мітками, то в одному ящику не може
          бути двох яблук з однаковими мітками. Тому при пересипанні другого
          ящика, всі яблука, мітки яких збігатимуться з тими, що вже є в новому,
          замінять ті, що вже є.
        </p>
        <p>
          Під час розпилення можна додавати властивості довільного місця.
          Головне пам'ятати про унікальність імені та про те, що його значення
          може бути перезаписано.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const first = { propA: 5, propB: 10, propC: 50 };
          const second = { propC: 15 };

          const third = { propB: 20, ...first, ...second };
          console.log(third); // { propA: 5, propB: 10, propC: 15 }

          const fourth = { ...first, ...second, propB: 20 };
          console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

          const fifth = { ...first, propB: 20, ...second };
          console.log(fifth); // { propA: 5, propB: 20, propC: 15 }  
                `}
        </SyntaxHighlighter>
        <h3>
          <span className={s.Span}>rest</span> : збір усіх аргументів функції
        </h3>
        <p>
          Операція <span className={s.Span}>...</span> (rest) дозволяє зібрати
          групу незалежних елементів у нову колекцію. Синтаксично це близнюк
          операції розпилення, але відрізнити їх просто - розпилення коли{" "}
          <span className={s.Span}>...</span> знаходиться у{" "}
          <strong>правій</strong> частині операції присвоєння, а збір це коли
          <span className={s.Span}>...</span> знаходиться в її{" "}
          <strong>лівій</strong> частині.
        </p>
        <p>
          Повернімося до аналогії з яблуками. Якщо на підлозі лежать яблука і ми
          маємо порожню скриньку, то операція{" "}
          <span className={s.Span}>rest</span> дозволить «зібрати» яблука в
          ящик. При цьому оригінальні яблука залишаться на підлозі, а у ящику
          буде копія кожного яблука.
        </p>
        <p>
          Одна з областей застосування операції{" "}
          <span className={s.Span}>rest</span> це створення функцій, які можуть
          приймати довільну кількість аргументів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Як оголосити параметри функції так,
          // щоб можна було передати будь-яку кількість аргументів?
          function multiply() {
            // ...
          }

          multiply(1, 2);
          multiply(1, 2, 3);
          multiply(1, 2, 3, 4);
                `}
        </SyntaxHighlighter>
        <p>
          Якщо прибрати весь «синтаксичний шум» і подивитися на аргументи та
          параметри функції, то аргументи знаходяться у правій частині операції
          присвоювання, а параметри у лівій, тому що значення аргументів
          надаються оголошеним параметрам. Отже, можна «збирати» всі аргументи
          функції в один параметр використовуючи операцію{" "}
          <span className={s.Span}>rest</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function multiply(...args) {
            console.log(args); // масив всіх аргументів
          }

          multiply(1, 2);
          multiply(1, 2, 3);
          multiply(1, 2, 3, 4);
                `}
        </SyntaxHighlighter>
        <p>
          Ім'я параметра може бути довільним. Найчастіше його називають{" "}
          <span className={s.Span}>args</span>,{" "}
          <span className={s.Span}>restArgs</span> або{" "}
          <span className={s.Span}>otherArgs</span>, скорочене від{" "}
          <span className={s.Span}>arguments</span>.
        </p>
        <h3>
          <span className={s.Span}>rest</span> : збір частини аргументів функції{" "}
        </h3>
        <p>
          Операція <span className={s.Span}>...</span> (rest) також дозволяє
          зібрати в масив лише частину аргументів, яка необхідна, оголосивши
          параметри до «збору».
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function multiply(firstNumber, secondNumber, ...otherArgs) {
            console.log(firstNumber); // Значеня першого аргумента
            console.log(secondNumber); // Значеня другого аргумента
            console.log(otherArgs); // Масив інших аргументів
          }

          multiply(1, 2);
          multiply(1, 2, 3);
          multiply(1, 2, 3, 4);
                `}
        </SyntaxHighlighter>
        <p>
          Всі агументи, для яких будуть оголошені параметри, передадуть їм свої
          значення, решта аргументів буде поміщена в масив. Операція{" "}
          <span className={s.Span}>rest</span> збирає всі аргументи, що
          залишилися, і тому повинна йти останньою в підписі функції, інакше
          буде помилка.
        </p>
        <h1 id="desObject">Деструктуризація об'єктів</h1>
        <p>
          При розробці програм дані приходять, як правило, у вигляді масивів та
          об'єктів, значення яких необхідно записати до локальних змінних. Для
          того, щоб робити це максимально просто, у сучасному стандарті є
          синтаксис деструктуруючого присвоєння.
        </p>
        <h3>Деструктуризація об'єктів</h3>
        <p>
          Складні дані завжди представлені об'єктом. Численні звернення до
          властивостей об'єкта візуально забруднюють код.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const book = {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            genres: ["historical prose", "adventure"],
            isPublic: true,
            rating: 8.38,
          };

          const accessType = book.isPublic ? "публичном" : "закрытом";
          const message = \`Книга $\{book.title} автора $\{book.author} з рейтингом $\{book.rating} знаходится в $\{accessType} доступі.\`;
                `}
        </SyntaxHighlighter>
        <p>
          Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта
          локальні змінні. Це робить код у місці їх використання менш «шумним».
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const book = {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            genres: ["historical prose", "adventure"],
            isPublic: true,
            rating: 8.38,
          };

          // Деструктуризуємо
          const { title, author, isPublic, rating, coverImage } = book;
          console.log(coverImage); // undefined

          const accessType = isPublic ? "публічному" : "закритому";
          const message = \`Книга $\{title} автора $\{author} з рейтингом $\{rating} знаходиться в $\{accessType} доступі.\`;
                `}
        </SyntaxHighlighter>
        <p>
          Деструктуризація завжди знаходиться у лівій частині операції
          присвоєння. Змінним усередині фігурних дужок надаються значення
          властивостей об'єкта. Якщо ім'я змінної та ім'я властивості
          збігаються, відбувається привласнення, інакше їй буде присвоєно
          <span className={s.Span}>undefined</span>. Порядок оголошення змінних
          у фігурних дужках не є важливим.
        </p>
        <h3>Значення по дефолту</h3>
        <p>
          Для того щоб уникнути присвоєння{" "}
          <span className={s.Span}>undefined</span> при деструктуризації
          неіснуючих властивостей об'єкта, можна задати змінним значення за
          замовчуванням, які будуть присвоєні лише у випадку, коли об'єкт не має
          властивості з таким ім'ям.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const book = {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
          };

          // Додаємо зображення обкладинки, якщо її немає в обєкті кники
          const {
            title,
            coverImage = "https://via.placeholder.com/640/480",
            author,
          } = book;

          console.log(title); // The Last Kingdom
          console.log(author); // Bernard Cornwell
          console.log(coverImage); // https://via.placeholder.com/640/480
                `}
        </SyntaxHighlighter>
        <h3>Зміна імені змінної</h3>
        <p>
          При деструктуризації можна змінити ім'я змінної, в яку розпаковується
          значення властивості. Спочатку пишемо ім'я властивості з якого хочемо
          отримати значення, після чого ставимо двокрапку і пишемо ім'я змінної,
          в яку необхідно помістити значення цієї властивості.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const firstBook = {
            title: "The Last Kingdom",
            coverImage:
              "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
          };

          const {
            title: firstTitle,
            coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
          } = firstBook;

          console.log(firstTitle); // The Last Kingdom
          console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

          const secondBook = {
            title: "Сон смішної людини",
          };

          const {
            title: secondTitle,
            coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
          } = secondBook;

          console.log(secondTitle); // Сон смішної людини
          console.log(secondCoverImage); // https://via.placeholder.com/640/480  
                `}
        </SyntaxHighlighter>
        <p>
          Такий запис читається як «Створити змінну{" "}
          <span className={s.Span}>firstTitle</span>, у якому помістити значення
          якості <span className={s.Span}>title</span> з об'єкта
          <span className={s.Span}>firstBook</span>» тощо.
        </p>
        <h3>Деструктуризація в циклах</h3>
        <p>
          При переборі масиву об'єктів циклом{" "}
          <span className={s.Span}>for...of</span> виходять численні звернення
          до властивостей об'єкта.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const books = [
            {
              title: "The Last Kingdom",
              author: "Bernard Cornwell",
              rating: 8.38,
            },
            {
              title: "На березі спокійних вод",
              author: "Роберт Шеклі",
              rating: 8.51,
            },
          ];

          for (const book of books) {
            console.log(book.title);
            console.log(book.author);
            console.log(book.rating);
          }
                `}
        </SyntaxHighlighter>
        <p>
          Щоб скоротити кількість повторень можна деструктуризувати властивості
          об'єкта в локальні змінні в тілі циклу.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          for (const book of books) {
            const { title, author, rating } = book;

            console.log(title);
            console.log(author);
            console.log(rating);
          }  
                `}
        </SyntaxHighlighter>
        <p>
          Якщо в об'єкті небагато властивостей, деструктуризацію можна виконати
          прямо на місці оголошення змінної <span className={s.Span}>book</span>
          .
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            for (const { title, author, rating } of books) {
              console.log(title);
              console.log(author);
              console.log(rating);
            }
                `}
        </SyntaxHighlighter>
        <h3>Глибока деструктуризація</h3>
        <p>
          Для деструктуризації властивостей вкладених об'єктів використовуються
          самі принципи, як у трьох попередніх вправах.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const user = {
            name: "Jacques Gluke",
            tag: "jgluke",
            stats: {
              followers: 5603,
              views: 4827,
              likes: 1308,
            },
          };

          const {
            name,
            tag,
            stats: { followers, views: userViews, likes: userLikes = 0 },
          } = user;

          console.log(name); // Jacques Gluke
          console.log(tag); // jgluke
          console.log(followers); // 5603
          console.log(userViews); // 4827
          console.log(userLikes); // 1308  
                `}
        </SyntaxHighlighter>
        <h1 id="desArray">Деструктуризація масивів</h1>
        <p>
          Деструктуризуєче присвоєння можна використовувати і для масивів, але з
          деякими особливостями.
        </p>
        <ul>
          <li>
            Замість фігурних дужок <span className={s.Span}>{"{}"}</span>{" "}
            використовуються квадратні <span className={s.Span}>{"[]"}</span>.
          </li>
          <li>
            Змінним, вказаним у квадратних дужках{" "}
            <span className={s.Span}>{"[]"}</span> будуть послідовно
            присвоюватися значення елементів масиву.
          </li>
        </ul>
        <p>
          Наприклад, є масив кольорів з якого потрібно окремі змінні отримати
          значення кожної складової кольору.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const rgb = [200, 255, 100];
          const [red, green, blue] = rgb;

          console.log(\`R:$\{red},G:$\{green},B:$\{blue}\`); // "R:200,G:255,B:100"  
                `}
        </SyntaxHighlighter>
        <p>
          Після ключового слова <span className={s.Span}>const</span> або{" "}
          <span className={s.Span}>let</span> ставимо, що відкриває і закриває
          квадратні дужки, як при оголошенні масиву. Усередині дужок, через
          кому, вказуємо імена змінних, які будуть поміщені значення масиву.
        </p>
        <p>
          В результаті такого запису будуть створені 3 змінні і в них будуть
          розміщені елементи в нумерованому порядку - від 0 до кінця масиву.
        </p>
        <p>
          При деструктуризації масивів значення змінної може бути присвоєно
          після її оголошення. Насправді це використовується рідко.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const rgb = [200, 255, 100];
          let red, green, blue;

          [red, green, blue] = rgb;

          console.log(\`R:$\{red},G:$\{green},B:$\{blue}\`); // "R:200,G:255,B:100"  
                `}
        </SyntaxHighlighter>
        <p>
          Якщо змінних більше елементів масиву, їм буде присвоєно undefined,
          тому можна вказувати значення за замовчуванням.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const rgb = [200, 100, 255];

          const [red, green, blue, alfa = 0.3] = rgb;

          console.log(\`R:$\{red},G:$\{green},B:$\{blue},Alfa:$\{alfa}\`); // "R:200,G:100,B:255,Alfa:0.3"  
                `}
        </SyntaxHighlighter>
        <p>
          Іноді з масиву необхідно деструктуризувати лише перші{" "}
          <span className={s.Span}>N</span> елементи, а інші зберегти в одну
          змінну у вигляді масиву. При деструкції масиву можна розпакувати і
          привласнити частину елементів масиву змінної, використовуючи операцію{" "}
          <span className={s.Span}>...</span>(rest).
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const rgb = [200, 255, 100];

          const [red, ...colors] = rgb;

          console.log(red); // "200"
          console.log(colors); // [255, 100]  
                `}
        </SyntaxHighlighter>
        <p>
          Елементи можна пропускати. Допустимо, з масиву{" "}
          <span className={s.Span}>rgb</span> необхідно взяти тільки останнє
          значення. Насправді ця можливість використовується рідко.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const rgb = [200, 100, 255];

          const [, , blue] = rgb;

          console.log(\`Blue: $\{blue}\`); // "Blue: 255"  
                `}
        </SyntaxHighlighter>
        <h1 id="patern">Паттерн "Об'єкт параметрів"</h1>
        <p>
          Якщо функція приймає більше двох-трьох аргументів, дуже просто
          заплутатися в якій послідовності, що передавати. В результаті виходить
          дуже неочевидний код у місці її виклику.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
              // Робимо щось з патернами
              console.log(title);
              console.log(numberOfPages);
              // і так далі
            }

            // ❌ Що таке 736? Що таке 10283? Що таке true?
            doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);
                `}
        </SyntaxHighlighter>
        <p>
          Паттерн "Об'єкт параметрів" допомагає вирішити цю проблему, замінюючи
          набір параметрів лише одним - об'єктом з іменованими властивостями.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            function doStuffWithBook(book) {
            // Робимо щось з властивостями обʼєкта
            console.log(book.title);
            console.log(book.numberOfPages);
            // і так далі
          }
                `}
        </SyntaxHighlighter>
        <p>
          Тоді під час її виклику передаємо один об'єкт із необхідними
          властивостями.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // ✅ Все зрозуміло 
          doStuffWithBook({
            title: "The Last Kingdom",
            numberOfPages: 736,
            downloads: 10283,
           rating: 8.38,
            isPublic: true,
          });  
                `}
        </SyntaxHighlighter>
        <p>
          Ще один плюс у тому, що можна деструктурувати об'єкт у параметрі{" "}
          <span className={s.Span}>book</span>. Це можна зробити у тілі функції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function doStuffWithBook(book) {
            const { title, numberOfPages, downloads, rating, isPublic } = book;
            console.log(title);
            console.log(numberOfPages);
            // і так далі
          }  
                `}
        </SyntaxHighlighter>
        <p>Або відразу в сигнатурі (підпису) функції, різниці немає.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          function doStuffWithBook({
            title,
            numberOfPages,
            downloads,
            rating,
            isPublic,
          }) {
            console.log(title);
            console.log(numberOfPages);
            // і так далі
          }  
                `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default SpreadRest;
