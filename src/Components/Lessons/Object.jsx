import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import object from "../../img/object.png";

const Object = () => {
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
              <a href="#obj">Об'єкти</a>
            </li>
            <li>
              <a href="#obj-cikle">Перебір об'єкта</a>
            </li>
            <li>
              <a href="#objArray">Масив об'єктів</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="obj">Об'єкти</h1>
        <p>
          Об'єкти дозволяють описати та згрупувати характеристики деякої
          сутності – користувача, книги, продукту в магазині, чого завгодно.
          Об'єкти ще називають словниками, тобто вони містять терміни
          (властивості) та їх визначення (значення).
        </p>
        <h3>Створення об'єкта</h3>
        <p>
          Для оголошення використовуються фігурні дужки{" "}
          <span className={s.Span}>{}</span> – літерал об'єкта.
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
                `}
        </SyntaxHighlighter>
        <p>
          Під час створення об'єкту можна додати властивості, кожне з яких
          описується парами <span className={s.Span}>ключ:значення</span>. Ключ
          ще називають ім'ям властивості, і це завжди рядок. Значенням
          властивості можуть бути будь-які типи: примітиви, масиви, об'єкти,
          були, функції тощо. Властивості поділяються комою.
        </p>
        <p>Правила іменування ключів прості:</p>
        <ul>
          <li>Якщо ключ укладено в лапки, це може бути довільний рядок.</li>
          <li>
            Якщо лапок немає, то вступають обмеження - ім'я без прогалин,
            починається на букву або символи <span className={s.Span}>_</span> і{" "}
            <span className={s.Span}>$</span>.
          </li>
        </ul>
        <h3>Вкладені властивості</h3>
        <p>
          Значенням властивості може бути інший об'єкт, щоб зберігати вкладені і
          груповані дані. Наприклад, статистика користувача соціальної мережі
          складається з кількості послідовників, переглядів та лайків, і
          зберігати ці дані найзручніше у вигляді об'єкта. Теж саме з
          місцезнаходженням, окремо країна та місто.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const user = {
              name: "Jacques Gluke",
              tag: "jgluke",
              location: {
                country: "Jamaica",
                city: "Ocho Rios",
              },
              stats: {
                followers: 5603,
                views: 4827,
                likes: 1308,
              },
            };
                `}
        </SyntaxHighlighter>
        <p>
          У майбутньому це можна буде використовувати для пошуку користувачів по
          країні, місту, мінімальній чи максимальній кількості послідовників і
          т.д.
        </p>
        <h3>Звернення до властивостей через крапку</h3>
        <p>
          Перший спосіб отримати доступ до властивості об'єкта це синтаксис
          <span className={s.Span}>об'єкт.ім'я_властивість</span>. Синтаксис
          «через крапку» використовується в більшості випадків і підходить тоді,
          коли ми знаємо ім'я (ключ) властивості до якого хочемо отримати
          доступ.
        </p>
        <ul>
          <li>
            На місце звернення буде повернуто значення якості з такою назвою.
          </li>
          <li>
            Якщо об'єкт не має властивості з таким ім'ям, на місце звернення
            повернеться <span className={s.Span}>undefined</span>.
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const book = {
              title: "The Last Kingdom",
              author: "Bernard Cornwell",
              genres: ["historical prose", "adventure"],
              isPublic: true,
              rating: 8.38,
            };

            const bookTitle = book.title;
            console.log(bookTitle); // 'The Last Kingdom'

            const bookGenres = book.genres;
            console.log(bookGenres); // ['historical prose', 'adventurs']

            const bookPrice = book.price;
            console.log(bookPrice); // undefined
                `}
        </SyntaxHighlighter>
        <h3>Звернення до вкалдених властивостей</h3>
        <p>
          Для доступу до вкладених властивостей використовується ланцюжок
          оборотний «через точку». Наприклад, якщо необхідно отримати значення
          країни користувача, записуємо{" "}
          <span className={s.Span}>user.location.country</span>, де
          <span className={s.Span}>user.location</span> це звернення (шлях) до
          об'єкта у властивості <span className={s.Span}>location</span>, а{" "}
          <span className={s.Span}>user.locaton.country</span> звернення до
          властивості <span className={s.Span}>country</span> у цьому об'єкті.
          Тобто "точка" вказує таку вкладеність.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const user = {
              name: "Jacques Gluke",
              tag: "jgluke",
              location: {
                country: "Jamaica",
                city: "Ocho Rios",
              },
              hobbies: ["swiming", "music", "sci-fi"],
            };

            const location = user.location;
            console.log(location); // Объект location

            const country = user.location.country;
            console.log(country); // 'Jamaica'
                `}
        </SyntaxHighlighter>
        <p>
          Якщо значення властивості це масив, то нашому прикладі
          <span className={s.Span}>user.hobbies</span> звернення до цього
          масиву. Далі можна отримати доступ до його елементів через квадратні
          дужки та індекс або використовувати властивості та методи.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const hobbies = user.hobbies;
            console.log(hobbies); // ['swiming', 'music', 'sci-fi']

            const firstHobby = user.hobbies[0];
            console.log(firstHobby); // 'swiming'

            const numberOfHobbies = user.hobbies.length;
            console.log(numberOfHobbies); // 3
                `}
        </SyntaxHighlighter>
        <h3>Звернення до властивостей через квадратні дужки</h3>
        <p>
          Другий спосіб отримати доступ до властивості об'єкта це синтаксис
          <span className={s.Span}>об'єкт["ім'я властивості"]</span>. Схоже на
          звернення до елемента масиву з відзнакою в тому, що в дужках
          вказується індекс індексу, а ім'я властивості як рядок.
        </p>
        <p>
          Синтаксис «квадратних дужок» використовується значно рідше, якщо ім'я
          властивості заздалегідь невідоме чи зберігається у змінній, наприклад
          як значення параметра функції.
        </p>
        <ul>
          <li>
            На місце звернення буде повернуто значення якості з такою назвою.
          </li>
          <li>
            Якщо об'єкт не має властивості з таким ім'ям, на місце звернення
            повернеться <span className={s.Span}>undefined</span>.
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const book = {
              title: "The Last Kingdom",
              author: "Bernard Cornwell",
              genres: ["historical prose", "adventure"],
              isPublic: true,
              rating: 8.38,
            };

            const bookTitle = book["title"];
            console.log(bookTitle); // 'The Last Kingdom'

            const bookGenres = book["genres"];
            console.log(bookGenres); // ['historical prose', 'adventurs']

            const propKey = "author";
            const bookAuthor = book[propKey];
            console.log(bookAuthor); // 'Bernard Cornwell'
                `}
        </SyntaxHighlighter>
        <h3>Зміна значення властивості</h3>
        <p>
          Після того, як об'єкт створено, значення його властивостей можна
          змінити. Для цього необхідно звернутися до них на ім'я, наприклад
          «через крапку», і надати нове значення.
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

            book.rating = 9;
            book.isPublic = false;
            book.genres.push("драма");

            console.log(book.rating); // 9
            console.log(book.isPublic); // false
            console.log(book.genres); // ['historical prose', 'adventures', 'драма']
                `}
        </SyntaxHighlighter>
        <h3>Додавання властивостей</h3>
        <p>
          Операція додавання нової властивості після створення об'єкта нічим не
          відрізняється від зміни значення існуючої властивості. Якщо при записі
          значення на ім'я, такої властивості в об'єкті немає, воно буде
          створено.
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

            book.pageCount = 836;
            book.originalLanguage = "en";
            book.translations = ["ua", "ru"];

            console.log(book.pageCount); // 836
            console.log(book.originalLanguage); // 'en'
            console.log(book.translations); // ['ua', 'ru']
                `}
        </SyntaxHighlighter>
        <h3>Короткі властивості</h3>
        <p>
          Іноді при створенні об'єкта значення властивості необхідно взяти зі
          змінної або параметра функції з таким самим ім'ям, як і сама
          властивість.
        </p>
        <p>
          Синтксис в наступному прикладі занадто громіздкий, тому що доводиться
          дублювати ім'я властивості та ім'я змінної, в якій зберігається
          необхідне значення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const name = "Гарі Потер";
            const age = 25;

            const user = {
              name: name,
              age: age,
            };

            console.log(user.name); // "Гарі Потер"
            console.log(user.age); // 25
                `}
        </SyntaxHighlighter>
        <p>
          Синтаксис коротких властивостей (shorthand properties) вирішує
          проблему, дозволяючи використовувати ім'я змінної як ім'я властивості,
          та її значення як значення властивості.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const name = "Гарі Потер";
            const age = 25;
            
            const user = {
              name,
              age,
            };

            console.log(user.name); // "Гарі Потер"
            console.log(user.age); // 25
                `}
        </SyntaxHighlighter>
        <p>
          Тобто при оголошенні об'єкта достатньо вказати лише ім'я якості, а
          значення буде взято зі змінної з аналогічним ім'ям.
        </p>
        <h3>Обчислювальні властивості</h3>
        <p>
          Бувають ситуації коли при оголошенні об'єкта необхідно додати
          властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно
          зберігається як значення змінної або як результат виконання функції.
        </p>
        <p>
          Раніше для цього необхідно спочатку створити об'єкт, а потім додавати
          властивості через квадратні дужки, що не зовсім зручно.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const propName = "name";
            const user = {
              age: 25,
            };

            user[propName] = "Генрі Сібола";
            console.log(user.name); // 'Генрі Сібола'
                `}
        </SyntaxHighlighter>
        <p>
          Синтаксис властивостей (computed properties) допомагає уникнути
          зайвого коду і в деяких випадках спростити його. Значенням
          обчислюваного властивості може бути будь-який валідний вираз.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const propName = "name";
            const user = {
              age: 25,
              // Ім'я цієї властивості буде взято із значення змінної  propName
              [propName]: "Генрі Сібола",
            };

            console.log(user.name); // 'Генрі Сібола'
                `}
        </SyntaxHighlighter>
        <h3>Методи об'єкту</h3>
        <p>
          Досі ми розглядали об'єкти лише як сховища взаємопов'язаних даних,
          наприклад, інформація про книгу тощо. Об'єкти-сховища зазвичай
          перебувають у масиві таких самих об'єктів, що представляє колекцію
          однотипних елементів.
        </p>
        <p>
          Об'єкти можуть зберігати як дані, а й функції до роботи з цими даними
          - методи. Якщо значення властивості - це функція, така властивість
          називається методом об'єкта.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            // ✅ Логічно сформовані сутності
            const bookShelf = {
              books: ["The Last Kingdom", "Dream Guardian"],
              // Це  метод об'єкта
              getBooks() {
                console.log("Цей метод буде повертати всі книги - властивість books");
              },
              // Це метод об'єкта
              addBook(bookName) {
                console.log("Цей метод буде добавляти нову книгу в властивість books");
              },
            };

            // Виклики методів 
            bookShelf.getBooks();
            bookShelf.addBook("Нова книга");
                `}
        </SyntaxHighlighter>
        <p>
          Такі об'єкти можна назвати "моделями". Вони пов'язують дані та методи
          для роботи з цими даними. Наприклад, можна було оголосити змінну
          <span className={s.Span}>books</span> і дві функції{" "}
          <span className={s.Span}>getBooks()</span> і
          <span className={s.Span}>addBook(bookName)</span>, але тоді це були б
          три незалежні сутності без явної синтаксичної, і зі слабким логічним
          зв'язком.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            // ❌ Слабопов'язані, незалежні сутності
            const books = [];
            function getBooks() {}
            function addBook() {}
                `}
        </SyntaxHighlighter>
        <h3>Доступ до властивостей об'єкта в методах</h3>
        <p>
          Методи використовуються для роботи з властивостями об'єкта, їх зміни.
          Для доступу до об'єкта в методі використовується не ім'я змінної,
          наприклад <span className={s.Span}>bookShelf</span>, а ключове слово{" "}
          <span className={s.Span}>this</span> – контекст. Значенням{" "}
          <span className={s.Span}>this</span> буде об'єкт перед «крапкою»,
          тобто об'єкт, який викликав цей метод, у нашому випадку це посилання
          на об'єкт <span className={s.Span}>bookShelf</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const bookShelf = {
              books: ["The Last Kingdom"],
              getBooks() {
                console.log(this);
              },
            };

            // Перед крапкою стоїть об'єкт bookShelf,
            // тому при викликові методу, this будет зберігати посилання на нього.
            bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
                `}
        </SyntaxHighlighter>
        <p>
          Для того щоб отримати доступ до властивостей об'єкта в методах, ми
          звертаємося до нього через <span className={s.Span}>this</span> і далі
          як завжди - "через точку" до властивостей.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const bookShelf = {
              books: ["The Last Kingdom"],
              getBooks() {
                return this.books;
              },
              addBook(bookName) {
                this.books.push(bookName);
              },
              removeBook(bookName) {
                const bookIndex = this.books.indexOf(bookName);
                this.books.splice(bookIndex, 1);
              },
            };

            console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
            bookShelf.addBook("The Mist");
            bookShelf.addBook("Dream Guardian");
            console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist',            'Dream Guardian']
            bookShelf.removeBook("The Mist");
            console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream             Guardian']
                `}
        </SyntaxHighlighter>
        <p>
          Буде логічно замислитись - чому б не використовувати при зверненні до
          властивостей ім'я об'єкта, адже ми явно не збираємося його міняти.
          Справа в тому, що ім'я об'єкта штука ненадійна, методи одного об'єкта
          можна копіювати в інший (з іншим ім'ям), а в майбутньому дізнаємося,
          що часто при створенні об'єкта ми заздалегідь не знаємо імені.
          Використання thisгарантує, що метод працює саме з об'єктом, який його
          викликав.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={object} alt="" />
        </div>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Ми детально розберемо ключове слово{" "}
            <span className={s.Span}>this</span> та всі його підводні камені у
            наступних заняттях, а зараз досить просто використовувати{" "}
            <span className={s.Span}>this</span> при зверненні до властивостей
            об'єкта у його методах.
          </p>
        </div>
        <h1 id="obj-cikle">Перебір об'єкту</h1>
        <p>
          На відміну від масиву або рядка, об'єкт це не сутність, що ітерується,
          тобто його не можна перебрати циклами{" "}
          <span className={s.Span}>for</span> або{" "}
          <span className={s.Span}>for...of</span>.
        </p>
        <h3>
          Цикл <span className={s.Span}>for...in</span>
        </h3>
        <p>
          Для перебору об'єктів використовується спеціальний цикл{" "}
          <span className={s.Span}>for...in</span>, який перебирає ключі об'єкта{" "}
          <span className={s.Span}>object</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            for (key in object) {
              // інструкції
            }
                `}
        </SyntaxHighlighter>
        <p>
          Змінна <span className={s.Span}>key</span> доступна лише у тілі циклу.
          На кожній ітерації до неї буде записано значення ключа (ім'я)
          властивості. Щоб отримати значення властивості з таким ключем (ім'ям),
          використовується синтаксис квадратних дужок.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const book = {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            genres: ["historical prose", "adventure"],
            rating: 8.38,
          };

          for (const key in book) {
            // Ключ
            console.log(key);
            // Значення властивості з таким ключом
            console.log(book[key]);
          }  
                `}
        </SyntaxHighlighter>
        <h3>
          Метод <span className={s.Span}>hasOwnProperty()</span>
        </h3>
        <p>
          Розберемо концепцію власних та невласних властивостей об'єкта і
          навчимося правильно використовувати цикл{" "}
          <span className={s.Span}>for...in</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const animal = {
              legs: 4,
            };
            const dog = Object.create(animal);
            dog.name = "Манго";

            console.log(dog); // {name: 'Манго'}
            console.log(dog.name); // 'Манго'
            console.log(dog.legs); // 4
                `}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>Object.create(animal)</span> створює та
          повертає новий об'єкт, пов'язуючи його з об'єктом{" "}
          <span className={s.Span}>animal</span>. Тому можна отримати значення
          якості <span className={s.Span}>legs</span> звернувшись до нього як
          <span className={s.Span}>dog.legs</span>, хоча його немає в об'єкті{" "}
          <span className={s.Span}>dog</span> - це невласна властивість з
          об'єкта <span className={s.Span}>animal</span>.
        </p>
        <p>
          Оператор <span className={s.Span}>in</span>, який використовується в
          циклі <span className={s.Span}>for...in</span>, не робить різницю між
          власними та невласними властивостями об'єкта. Ця особливість заважає,
          оскільки ми хочемо перебрати лише власні властивості. Для того, щоб
          дізнатися, чи є в об'єкті власна властивість чи ні, використовується
          метод
          <span className={s.Span}>hasOwnProperty(key)</span>, який повертає{" "}
          <span className={s.Span}>true</span> або
          <span className={s.Span}>false</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            // ❌ Повертає true для всіх властивостей
            console.log("name" in dog); // true
            console.log("legs" in dog); // true

            // ✅ Повертає true лише для власних властивостей
            console.log(dog.hasOwnProperty("name")); // true
            console.log(dog.hasOwnProperty("legs")); // false
                `}
        </SyntaxHighlighter>
        <p>
          Тому при переборі циклом <span className={s.Span}>for...in</span>{" "}
          необхідно на кожній ітерації додати перевірку на власність. Навіть
          якщо зараз ми впевнені в тому, що об'єкт не має невласних
          властивостей, це захистить від можливих помилок у майбутньому.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const book = {
              title: "The Last Kingdom",
              author: "Bernard Cornwell",
              genres: ["historical prose", "adventure"],
              rating: 8.38,
            };

            for (const key in book) {
              // Якщо це власна властивість - виконуємо тіло if
              if (book.hasOwnProperty(key)) {
                console.log(key);
                console.log(book[key]);
              }

              // Якщо це не власна властивість - нічого не пробимо
            }
                `}
        </SyntaxHighlighter>
        <h3>
          Метод <span className={s.Span}>Object.keys()</span>
        </h3>
        <p>
          Вбудований клас <span className={s.Span}>Object</span> має кілька
          корисних методів для роботи з об'єктами. Перший це{" "}
          <span className={s.Span}>Object.keys(obj)</span>, який приймає об'єкт
          і повертає масив ключів його властивостей. Якщо об'єкті немає
          властивостей, метод поверне порожній масив.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const book = {
              title: "The Last Kingdom",
              author: "Bernard Cornwell",
              genres: ["historical prose", "adventure"],
              rating: 8.38,
            };
            const keys = Object.keys(book);
            console.log(keys); // ['title', 'author', 'genres', 'rating']
                `}
        </SyntaxHighlighter>
        <p>
          Скомбінувавши результат <span className={s.Span}>Object.keys()</span>{" "}
          та цикл
          <span className={s.Span}>for...of</span> можна зручно перебрати власні
          властивості об'єкта, не вдаючись до використання архаїчного циклу{" "}
          <span className={s.Span}>for...in </span> з перевірками належності
          властивостей.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const book = {
              title: "The Last Kingdom",
              author: "Bernard Cornwell",
              genres: ["historical prose", "adventure"],
              rating: 8.38,
            };
            const keys = Object.keys(book);

            for (const key of keys) {
              // Ключ
              console.log(key);
              // Значение свойства
             console.log(book[key]);
            }
                `}
        </SyntaxHighlighter>
        <p>
          Ми перебираємо масив ключів об'єкта і кожної ітерації отримуємо
          значення якості з таким ключем.
        </p>
        <h3>
          Об'єкт <span className={s.Span}>Object.values()</span>
        </h3>
        <p>
          Якщо метод <span className={s.Span}>Object.keys(obj)</span> повертає
          масив ключів власних властивостей об'єкта, метод{" "}
          <span className={s.Span}>Object.values(obj)</span> повертає масив
          значень його власних властивостей. Якщо об'єкті немає властивостей,
          метод <span className={s.Span}>Object.values(obj)</span> поверне
          порожній масив.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const book = {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            rating: 8.38,
          };
          const keys = Object.keys(book);
          console.log(keys); // ['title', 'author', 'rating']

          const values = Object.values(book);
          console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
                `}
        </SyntaxHighlighter>
        <p>
          Масив значень властивостей також можна перебрати циклом{" "}
          <span className={s.Span}>for...of</span>, наприклад, для отримання
          загальної суми числових значень.
        </p>
        <p>
          Допустимо перед нами стоїть завдання порахувати загальну кількість
          продуктів в об'єкті формату{" "}
          <span className={s.Span}>ім'я-продукту: кількість</span>. Тоді підійде
          спосіб <span className={s.Span}>Object.values()</span> для того, щоб
          отримати масив усіх значень і потім зручно їх скласти.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const goods = {
            apples: 6,
            grapes: 3,
            bread: 4,
            cheese: 7,
          };

          const values = Object.values(goods); // [6, 3, 4, 7]

          let total = 0;

          for (const value of values) {
            total += value;
          }

          console.log(total); // 20  
                `}
        </SyntaxHighlighter>
        <h3>
          Метод <span className={s.Span}>Object.entries()</span>
        </h3>
        <p>
          Метод <span className={s.Span}>Object.entries(obj)</span> повертає
          масив записів, кожним елементом якого буде ще один масив із 2-х
          елементів: імені властивості та значення цієї властивості з об'єкта
          obj.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const book = {
              title: "The Last Kingdom",
              author: "Bernard Cornwell",
              rating: 8.38,
            };
            const keys = Object.keys(book);
            console.log(keys); // ['title', 'author', 'rating']

            const values = Object.values(book);
            console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

            const entries = Object.entries(book);
            console.log(entries);
            // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
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
            Насправді метод <span className={s.Span}>Object.entries(obj)</span>{" "}
            використовується рідко, лише з якихось дуже специфічних завдань. У
            99% випадків буде використано метод{" "}
            <span className={s.Span}>Object.keys()</span> або{" "}
            <span className={s.Span}>Object.values()</span>.
          </p>
        </div>
        <h1 id="objArray">Масив об'єктів</h1>
        <p>
          До стандартного набору повсякденних завдань розробника входить
          маніпуляція масивом однотипних об'єктів. Це означає, що всі об'єкти в
          масиві гарантовано матимуть однаковий набір властивостей, але з
          різними значеннями.
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
              {
                title: "На одинці з собою",
                author: "Марк Аврелій",
                rating: 7.75,
              },
            ];
                `}
        </SyntaxHighlighter>
        <p>
          Для перебору такого масиву використовується стандартний цикл{" "}
          <span className={s.Span}>for...of</span>. Значення властивостей
          кожного об'єкта можна отримати за допомогою синтаксису «через крапку,
          оскільки у кожному об'єкті набір властивостей та його імена будуть
          однакові, відрізняються лише значення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            for (const book of books) {
              // Об'єкт книги
              console.log(book);
              // Назва
              console.log(book.title);
              // Автор
              console.log(book.author);
              // Рейтинг
              console.log(book.rating);
            }
                `}
        </SyntaxHighlighter>
        <p>
          Наприклад, отримаємо список назв усіх книг у колекції{" "}
          <span className={s.Span}>books</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const bookNames = [];

            for (const book of books) {
              bookNames.push(book.title);
            }

            console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "На одинці з собою"]
                `}
        </SyntaxHighlighter>
        <p>
          Дізнаємось середній рейтинг всієї нашої колекції. Для цього складемо
          всі рейтинги, після чого розділимо це значення на кількість книг у
          колекції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            let totalRating = 0;

            for (const book of books) {
              totalRating += book.rating;
            }

            const averageRating = (totalRating / books.length).toFixed(1);
            console.log(averageRating); // 8.2
                `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Object;
