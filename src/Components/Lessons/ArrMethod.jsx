import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import callBack01 from "../../img/callBack01.jpeg";
import declarative from "../../img/declarative.jpeg";
const ArrayMethod = () => {
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
              <a href="#cleanFn">Чисті функції</a>
            </li>
            <li>
              <a href="#arrMethod">Перебираючі методи масиву</a>
            </li>
            <li>
              <a href="#map">Метод map()</a>
            </li>
            <li>
              <a href="#flatMap">Метод flatmap()</a>
            </li>
            <li>
              <a href="#filter">Метод filter()</a>
            </li>
            <li>
              <a href="#find">Метод find()</a>
            </li>
            <li>
              <a href="#findIndex">Метод findIndex()</a>
            </li>
            <li>
              <a href="#every">Метод every() та some()</a>
            </li>
            <li>
              <a href="#reduce">Метод reduce()</a>
            </li>
            <li>
              <a href="#codeType">Метод sort()</a>
            </li>
            <li>
              <a href="#codeType">Ланцюжки методів</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="cleanFn">Чисті функції</h1>
        <p>
          <strong>Функція з побічними ефектами</strong> - це функція яка у
          процесі виконання може змінювати або використовувати глобальні змінні,
          змінювати значення аргументів типу посилання, виконувати операції
          введення-виведення тощо.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
            const dirtyMultiply = (array, value) => {
              for (let i = 0; i < array.length; i += 1) {
                array[i] = array[i] * value;
              }
            };

            const numbers = [1, 2, 3, 4, 5];
            dirtyMultiply(numbers, 2);
            // Відбулась мутація вихідних даних - масиву numbers
            console.log(numbers); // [2, 4, 6, 8, 10]    `}
        </SyntaxHighlighter>
        <p>
          Функція <span className={s.Span}>dirtyMultiply(array, value)</span>{" "}
          множить кожен елемент масиву <span className={s.Span}>array</span> на
          число <span className={s.Span}>value</span>. Вона змінює (мутує)
          вихідний масив за посиланням.
        </p>
        <p>
          <strong>Чиста функція (pure function)</strong> - це функція, результат
          якої залежить тільки від значень переданих аргументів. При однакових
          аргументах вона завжди повертає той самий результат і не має побічних
          ефектів, тобто не змінює значення аргументів.
        </p>
        <p>
          Напишемо реалізацію чистої функції множення елементів масиву, що
          повертає новий масив, не змінюючи вихідний.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const pureMultiply = (array, value) => {
            const newArray = [];

            array.forEach(element => {
              newArray.push(element * value);
            });

            return newArray;
          };

          const numbers = [1, 2, 3, 4, 5];
          const doubledNumbers = pureMultiply(numbers, 2);

          // Не відбулось мутації вихідних даних
          console.log(numbers); // [1, 2, 3, 4, 5]
          // Функція повернула новий масив з зміненими даними
          console.log(doubledNumbers); // [2, 4, 6, 8, 10]
                `}
        </SyntaxHighlighter>
        <h1 id="arrMethod">Перебираюч методи масиву</h1>
        <p>
          У JavaScript є методи масивів, що прийшли з функціональних мов.
          Більшість із них це чисті функції. Вони створюють новий масив,
          заповнюють його, застосовуючи значення кожного елемента зазначену
          коллбек-функцію, після чого повертають цей новий масив.
        </p>
        <p>
          Всі методи масивів, що перебирають, мають подібний синтаксис. Вихідний
          масив <span className={s.Span}>array</span>, виклик методу{" "}
          <span className={s.Span}>method</span> та callback-функція{" "}
          <span className={s.Span}>callbac</span> kяк аргумент методу.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          array.method(callback[currentValue, index, array])
                `}
        </SyntaxHighlighter>
        <p>
          У більшості методів аргументами callback-функції є значення елемента
          <span className={s.Span}>currentValue</span> (перший параметр),
          позиція елемента
          <span className={s.Span}>index</span>(другий параметр) і сам вихідний
          масив <span className={s.Span}>array</span>(третій параметр).
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          array.method((item, idx, arr) => {
            // логіка яка буде застосовуватись на кожній ітерації 
          });
                `}
        </SyntaxHighlighter>
        <p>
          Усі параметри, крім значення елемента{" "}
          <span className={s.Span}>item</span>, необов'язкові. Назви параметрів
          можуть бути будь-які, але є неофіційні угоди.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          array.method(item => {
            // логіка яка буде застосовуватись на кожній ітерації
          });
                `}
        </SyntaxHighlighter>
        <h1 id="map">Метод map()</h1>
        <p>
          Метод <span className={s.Span}>map(callback)</span> використовується
          для трансформації масиву. Він викликає коллбек-функцію для кожного
          елемента вихідного масиву, а результат її роботи записує новий масив,
          який і буде результатом виконання методу.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          масив.map((element, index, array) => {
            // Тіло колбек-функції
          });
                `}
        </SyntaxHighlighter>
        <ul>
          <li>Поелементно перебирає оригінальний масив.</li>
          <li>Чи не змінює оригінальний масив.</li>
          <li>Результат роботи коллбек-функції записується в новий масив.</li>
          <li>Повертає новий масив такої ж довжини.</li>
        </ul>
        <p>
          Його можна використовувати для того, щоб змінити кожен елемент масиву.
          Оригінальний масив використовується як зразок, на основі якого можна
          створити іншу колекцію.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const planets = ["Земля", "Марс", "Венера", "Юпітер"];

          const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
          console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

          const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
          console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

          // Оригінальний масив не змінився
          console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']
                `}
        </SyntaxHighlighter>
        <p>
          Використання анонімних стрілочних функцій з неявним поверненням сильно
          скорочує шум шуму оголошення коллбек-функції, роблячи код чистіше і
          простіше для сприйняття.
        </p>
        <h3>Масив обʼєктів</h3>
        <p>
          Ми вже знаємо, що повсякденне завдання це маніпуляція масивом
          об'єктів. Наприклад, отримати масив значень якості з усіх об'єктів. Є
          масив студентів, а потрібно отримати окремий масив їхніх імен.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const students = [
            { name: "Манго", score: 83 },
            { name: "Полі", score: 59 },
            { name: "Аякс", score: 37 },
            { name: "Ківі", score: 94 },
            { name: "Хʼюстон", score: 64 },
          ];

          const names = students.map(student => student.name);
          console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Хʼюстон']
                `}
        </SyntaxHighlighter>
        <p>
          Використовуючи метод <span className={s.Span}>map()</span> можна
          перебрати масив об'єктів, і колббек-функции повернути значення якості
          кожного їх.
        </p>
        <h1 id="flatMap">Метод flatMap()</h1>
        <p>
          Метод <span className={s.Span}>flatMap(callback)</span> аналогічний
          методу <span className={s.Span}>map()</span>, але застосовується у
          випадках коли результат це багатовимірний масив, який необхідно
          «розгладити».
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          массив.flatMap((element, index, array) => {
            // Тіло колбек-функції
          });
                `}
        </SyntaxHighlighter>
        <p>
          У масиві <span className={s.Span}>students</span> зберігається список
          студентів зі списком предметів, які відвідує студент у властивості{" "}
          <span className={s.Span}>courses</span>. Декілька студентів можуть
          відвідувати один і той же предмет. Необхідно скласти список усіх
          предметів, які відвідує ця група студентів, що поки що навіть
          повторюються.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const students = [
            { name: "Манго", courses: ["математика", "фізика"] },
            { name: "Полі", courses: ["інформатика", "математика"] },
            { name: "Ківі", courses: ["фізика", "біологія"] },
          ];

          students.map(student => student.courses);
          // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

          students.flatMap(student => student.courses);
          // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
                `}
        </SyntaxHighlighter>
        <p>
          Він викликає коллбек-функцію кожного елемента вихідного масиву, а
          результат її роботи записує у новий масив. Відмінність{" "}
          <span className={s.Span}>map()</span> у тому, що новий масив
          «розгладжується» на глибину рівну одиниці (одна вкладеність). Цей
          розгладжений масив і є результатом роботи{" "}
          <span className={s.Span}>flatMap()</span>.
        </p>
        <h1 id="filter">Метод filter()</h1>
        <p>
          Метод <span className={s.Span}>filter(callback)</span>{" "}
          використовується для єдиної операції – фільтрації масиву, тобто коли
          необхідно вибрати більше одного елемента з колекції за якимось
          критерієм.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          массив.filter((element, index, array) => {
            // Тіло колбек-функції
          });
                `}
        </SyntaxHighlighter>
        <ul>
          <li>Не змінює оригінальний масив.</li>
          <li>Поелементно перебирає оригінальний масив.</li>
          <li>Повертає новий масив.</li>
          <li>
            Додає в масив, що повертається, елементи, які задовольняють умові
            коллбек-функції.
          </li>
          <li>
            Якщо колббек повернув <span className={s.Span}>true</span> елемент
            додається в масив, що повертається.
          </li>
          <li>
            Якщо колббек повернув <span className={s.Span}>false</span> елемент
            не додається в масив, що повертається.
          </li>
          <li>
            Якщо жоден елемент не задовольнив умову, повертає порожній масив.
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const values = [51, -3, 27, 21, -68, 42, -37];

          const positiveValues = values.filter(value => value >= 0);
          console.log(positiveValues); // [51, 27, 21, 42]

          const negativeValues = values.filter(value => value < 0);
          console.log(negativeValues); // [-3, -68, -37]

          const bigValues = values.filter(value => value > 1000);
          console.log(bigValues); // []

          // Оригінальний масив не змінюється
          console.log(values); // [51, -3, 27, 21, -68, 42, -37]
                `}
        </SyntaxHighlighter>
        <p>
          Тобто метод <span className={s.Span}>filter</span> викликає
          колббек-функцію для кожного елемента вихідного масиву і якщо результат
          її виконання <span className={s.Span}>true</span> поточний елемент
          додає в новий масив.
        </p>
        <h3>Фільтрування унікальних елементів</h3>
        <p>
          Використовуючи метод, <span className={s.Span}>filter()</span> можна
          виконати фільтрацію масиву так, що в ньому залишаться тільки унікальні
          елементи. Цей прийом працює лише з масивом примітивних значень – не
          об'єктів.
        </p>
        <p>
          Повернемося до групи студентів та масиву всіх відвідуваних предметів,
          які ми отримали методом <span className={s.Span}>flatMap()</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const students = [
            { name: "Манго", courses: ["математика", "фізика"] },
            { name: "Поли", courses: ["інформатика", "математика"] },
            { name: "Киви", courses: ["фізика", "біологія"] },
          ];

          const allCourses = students.flatMap(student => student.courses);
          // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
                `}
        </SyntaxHighlighter>
        <p>
          У змінній <span className={s.Span}>allCourses</span> зберігається
          масив всіх відвідуваних предметів, які можуть повторюватися. Завдання
          полягає в тому, щоб зробити новий масив, у якому будуть лише унікальні
          предмети, тобто без повторень.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const uniqueCourses = allCourses.filter(
            (course, index, array) => array.indexOf(course) === index
          );
                `}
        </SyntaxHighlighter>
        <p>
          Використовуючи <span className={s.Span}>array.indexOf(course)</span>{" "}
          виконуємо пошук першого збігу поточного елемента{" "}
          <span className={s.Span}>course</span> та отримуємо його індекс у
          оригінальному масиві всіх курсів. У параметрі
          <span className={s.Span}>index</span> зберігається індекс поточного
          елемента <span className={s.Span}>course</span> при переборі масиву
          методом <span className={s.Span}>filter</span>.
        </p>
        <p>
          Якщо результат <span className={s.Span}>indexOf()</span> і значення{" "}
          <span className={s.Span}>index</span> рівні - це унікальний елемент,
          тому що це перший раз, коли таке значення зустрічається в масиві і на
          поточній ітерації фільтр обробляє саме його.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          # Масив всіх курсів
          ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
                `}
        </SyntaxHighlighter>
        <p>Для елемента 'математика'під індексом 0:</p>
        <ul>
          <li>span indexOf()поверне 0, тому що шукає перший збіг.</li>
          <li>
            Значення параметра <span className={s.Span}>index</span> буде 0.
          </li>
          <li>Вони рівні, отже, це унікальний елемент.</li>
        </ul>
        <p>
          Для елемента <span className={s.Span}>'математика'</span> під індексом
          3:
        </p>
        <ul>
          <li>
            <span className={s.Span}>indexOf()</span> поверне 0, тому що шукає
            перший збіг.
          </li>
          <li>
            Значення параметра <span className={s.Span}>index</span> буде 3.
          </li>
          <li>Вони не рівні, отже, це повторюваний - не унікальний елемент.</li>
        </ul>
        <h3>Масив обʼєктів</h3>
        <p>
          Працюючи з масивом об'єктів виконується фільтрація за значенням
          якогось властивості. В результаті виходить новий масив відфільтрованих
          об'єктів.
        </p>
        <p>
          Наприклад, є масив студентів із балами за тест. Необхідно
          відфільтрувати кращих (бал вище 80), найгірших (бал нижче 50) та
          середніх студентів (бал від 50 до 80).
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const LOW_SCORE = 50;
          const HIGH_SCORE = 80;
          const students = [
            { name: "Манго", score: 83 },
            { name: "Полі", score: 59 },
            { name: "Аякс", score: 37 },
            { name: "Ківі", score: 94 },
            { name: "Хʼюстон", score: 64 },
          ];

          const best = students.filter(student => student.score >= HIGH_SCORE);
          console.log(best); // Масив обʼєктів з іменами Манго и Ківі

          const worst = students.filter(student => student.score < LOW_SCORE);
          console.log(worst); // Масив з одним обʼєктом Аякс

          // В колбек-функції зручно  деструктурувати властивості обʼєкта
          const average = students.filter(
            ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
          );
          console.log(average); // Масив обʼєктів з іменами Полі та Хʼюстон
                `}
        </SyntaxHighlighter>
        <h1 id="find">Метод find()</h1>
        <p>
          Якщо метод <span className={s.Span}>filter(callback)</span>{" "}
          використовується для пошуку всіх елементів, що задовольняють умові, то
          метод
          <span className={s.Span}>find(callback)</span> дозволяє знайти і
          повернути перший відповідний елемент, після чого перебір масиву
          припиняється. Тобто він шукає до першого збігу.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          массив.find((element, index, array) => {
            // Тіло колбек-функції
          });
                `}
        </SyntaxHighlighter>
        <ul>
          <li>Не змінює оригінальний масив.</li>
          <li>Поелементно перебирає оригінальний масив.</li>
          <li>
            Повертає перший елемент, що задовольняє умові, тобто коли коллбек
            повертає <span className={s.Span}>true</span>.
          </li>
          <li>
            Якщо жоден елемент не підійшов, тобто всім елементів коллбек
            повернув <span className={s.Span}>false</span>, метод повертає{" "}
            <span className={s.Span}>undefined</span>.
          </li>
        </ul>
        <p>
          Метод <span className={s.Span}>find()</span> використовується для
          одного завдання - пошуку елемента за унікальним значенням якості.
          Наприклад, пошук користувача поштою, автомобіля за серійним номером,
          книги за назвою тощо.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const colorPickerOptions = [
            { label: "red", color: "#F44336" },
            { label: "green", color: "#4CAF50" },
            { label: "blue", color: "#2196F3" },
            { label: "pink", color: "#E91E63" },
            { label: "indigo", color: "#3F51B5" },
          ];

          colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
          colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
          colorPickerOptions.find(option => option.label === "white"); // undefined
                `}
        </SyntaxHighlighter>
        <h1 id="findIndex">Метод findIndex()</h1>
        <p>
          Метод <span className={s.Span}>findIndex(callback)</span> це сучасна
          заміна методу
          <span className={s.Span}>indexOf()</span>. Дозволяє виконувати пошук
          за складнішими умовами, ніж просто рівність. Використовується як у
          масиві примітивів, і у масиві об'єктів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          масив.findIndex((element, index, array) => {
            // Тіло колбек-функції
          });
                `}
        </SyntaxHighlighter>
        <ul>
          <li>Не змінює оригінальний масив.</li>
          <li>Поелементно перебирає оригінальний масив.</li>
          <li>
            Повертає індекс першого елемента, що задовольняє умові, тобто коли
            коллбек повертає <span className={s.Span}>true</span>.
          </li>
          <li>
            Якщо жоден елемент не підійшов, тобто всім елементів коллбек
            повернув <span className={s.Span}>false</span>, метод повертає{" "}
            <span className={s.Span}>-1</span>.
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const colorPickerOptions = [
            { label: "red", color: "#F44336" },
            { label: "green", color: "#4CAF50" },
            { label: "blue", color: "#2196F3" },
            { label: "pink", color: "#E91E63" },
            { label: "indigo", color: "#3F51B5" },
          ];

          colorPickerOptions.findIndex(option => option.label === "blue"); // 2
          colorPickerOptions.findIndex(option => option.label === "pink"); // 3
          colorPickerOptions.findIndex(option => option.label === "white"); // -1
                `}
        </SyntaxHighlighter>
        <h1 id="every">Методи every() та some()</h1>
        <h3>
          Метод <span className={s.Span}>every()</span>
        </h3>
        <p>
          Перевіряє чи проходять всі елементи масиву тест надається
          коллбек-функцією. Повертає <span className={s.Span}>true</span> або{" "}
          <span className={s.Span}>false</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          масив.every((element, index, array) => {
            // Тіло колбек-функції
          });
                `}
        </SyntaxHighlighter>
        <ul>
          <li>Не змінює оригінальний масив.</li>
          <li>Поелементно перебирає оригінальний масив.</li>
          <li>
            Повертає <span className={s.Span}>true</span>, якщо всі елементи
            масиву задовольняють умові.
          </li>
          <li>
            Повертає <span className={s.Span}>false</span> якщо хоча б один
            елемент масив не задовольняє умову.
          </li>
          <li>
            Перебір масиву припиняється, якщо коллбек повертає{" "}
            <span className={s.Span}>false</span>.
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Всі елементи більше або дорівнюють нулю? - так
          [1, 2, 3, 4, 5].every(value => value >= 0); // true

          // Всі елементи більше або дорівнюють нулю? - ні
          [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false
                `}
        </SyntaxHighlighter>
        <h3>
          Метод <span className={s.Span}>some()</span>
        </h3>
        <p>
          Перевіряє чи проходить хоча б один елемент масиву тест, що надається
          коллбек-функцією. Повертає <span className={s.Span}>true</span> або{" "}
          <span className={s.Span}>false</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          масив.some((element, index, array) => {
            // Тіло колбек-функції
          });
                `}
        </SyntaxHighlighter>
        <ul>
          <li>Не змінює оригінальний масив.</li>
          <li>Поелементно перебирає оригінальний масив.</li>
          <li>
            Повертає <span className={s.Span}>true</span> якщо хоча б один
            елемент масиву задовольняє умову.
          </li>
          <li>
            Повертає <span className={s.Span}>false</span> якщо жоден елемент
            масиву не задовольняє умові.
          </li>
          <li>
            Перебір масиву припиняється, якщо коллбек повертає{" "}
            <span className={s.Span}>true</span>.
          </li>
        </ul>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          // Якщо хоча б один елемент бцльше або рівний нулю? - так
          [1, 2, 3, 4, 5].some(value => value >= 0); // true

          // кщо хоча б один елемент бцльше або рівний нулю? - так
          [-7, -20, 3, -10, -14].some(value => value >= 0); // true

          // Є хочаб один елемент менший нуля?  - ні
          [1, 2, 3, 4, 5].some(value => value < 0); // false

          // Є хочаб один елемент менший нуля? - так
          [1, 2, 3, -10, 4, 5].some(value => value < 0); // true
                `}
        </SyntaxHighlighter>
        <h3>Масив обʼєктів</h3>
        <p>
          При роботі з масивом об'єктів перевіряється значення якоїсь їхньої
          властивості. Наприклад, є масив об'єктів фруктів, необхідно дізнатися
          чи всі фрукти є в наявності і чи є в наявності хоч якісь фрукти більше
          0 штук.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const fruits = [
            { name: "apples", amount: 100 },
            { name: "bananas", amount: 0 },
            { name: "grapes", amount: 50 },
          ];

          // every поверне true лише якщо всіх фруктів буде більше ніж 0 штук
          const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

          // some поверне true якщо хочаб одного фрукта буде більще ніж 0 штук
          const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true
                `}
        </SyntaxHighlighter>
        <h1 id="reduce">
          Метод <span className={s.Span}>reduce()</span>
        </h1>
        <p>
          Метод <span className={s.Span}>reduce(callback, initialValue)</span>{" "}
          використовується для послідовної обробки кожного елемента масиву зі
          збереженням проміжного результату як акумулятор. Трохи складніше за
          інших у засвоєнні, але результат вартий того.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          масив.reduce((previousValue, element, index, array) => {
            // Тіло колбек-функції
          }, initialValue);
                `}
        </SyntaxHighlighter>
        <ul>
          <li>Не змінює оригінальний масив.</li>
          <li>Поелементно перебирає оригінальний масив.</li>
          <li>Повертає будь-що.</li>
          <li>Робить будь-що.</li>
        </ul>
        <p>
          Найлегше уявити його роботу на прикладі підрахунку суми елементів
          масиву.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
            return previousValue + number;
          }, 0);

          console.log(total); // 32
                `}
        </SyntaxHighlighter>
        <p>
          Перший параметр колббек-функції (
          <span className={s.Span}>previousValue</span>) це акумулятор, тобто
          проміжний результат. Значення, яке поверне колббек-функція на поточну
          ітерацію, буде значенням цього параметра на наступному.
        </p>
        <p>
          Другим аргументом <span className={s.Span}>reduce()</span> можна
          передати необов'язкове початкове значення акумулятора - параметр{" "}
          <span className={s.Span}>initialValue</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          # Спочатку метод reduce() створює внутрішню змінну-акумулятор та
          # призначає їй значення параметра initialValue або першого елемента
          # масива, що перебирається якщо initialValue не вказаний.
          previousValue = 0

          # Далі колбек-функція викликається для кожного елемента масиву. Поточне значення
          # параметра previousValue це те, що повернула колбек-функція на минулій ітерації.
          Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
          Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
          Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
          Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
          Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

          # Після того, як весь масив перебрано, метод reduce() повертає значення акумулятора.
          Результат - 32
                `}
        </SyntaxHighlighter>
        <p>
          Тобто метод <span className={s.Span}>reduce()</span> використовується,
          коли необхідно взяти «багато» і привести до «одного». У повсякденних
          завданнях застосування зводиться до роботи з числами.
        </p>
        <h3>Масив обʼєктів</h3>
        <p>
          Працюючи з масивом об'єктів виконується редукування за значенням
          якогось властивості. Наприклад, є масив студентів із балами за тест.
          Потрібно отримати середній бал.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const students = [
            { name: "Манго", score: 83 },
            { name: "Полі", score: 59 },
            { name: "Аякс", score: 37 },
            { name: "Ківі", score: 94 },
            { name: "Хʼюстон", score: 64 },
          ];

          // Назва акумулятора може бути довільною, це просто параметр функції
          const totalScore = students.reduce((total, student) => {
            return total + student.score;
          }, 0);

          const averageScore = totalScore / students.length;
                `}
        </SyntaxHighlighter>
        <h3>
          Просунутий <span className={s.Span}>reduce</span>
        </h3>
        <p>
          Припустимо, у нас є наступне завдання: з масиву постів твіттера
          окремого користувача необхідно порахувати суму всіх лайків. Можна
          перебрати циклом <span className={s.Span}>for</span> або{" "}
          <span className={s.Span}>forEach</span>, кожне з цих рішень вимагатиме
          додаткового коду. А можна використовувати reduce.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const tweets = [
            { id: "000", likes: 5, tags: ["js", "nodejs"] },
            { id: "001", likes: 2, tags: ["html", "css"] },
            { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
            { id: "003", likes: 8, tags: ["css", "react"] },
            { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
          ];

          // Пройдемось по всім елементам колекціїта додамо значення властивості likes
          // до акумулятора, початкове значення якого вкажемо 0.
          const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

          console.log(likes); // 32

          // Мабуть підрахунок лайків не одиночна операція, тому напищемо функцію 
          // для підрахунку лайків з колекції
          const countLikes = tweets => {
            return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
          };

          console.log(countLikes(tweets)); // 32
                `}
        </SyntaxHighlighter>
        <p>
          Помітили властивість <span className={s.Span}>tags</span> кожного
          посту? Продовжуючи тему
          <span className={s.Span}>reduce</span>, ми зберемо до масиву всі теги,
          які зустрічаються в постах.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const tweets = [
            { id: "000", likes: 5, tags: ["js", "nodejs"] },
            { id: "001", likes: 2, tags: ["html", "css"] },
            { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
            { id: "003", likes: 8, tags: ["css", "react"] },
            { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
          ];

          // Пройдемось по всім елементам колекції та додамо значення властивості tags
          // до акумулятора, початкове занчення якого вкажемо пустим масивом [].
          // На кожній ітерації пушимо всі елементи tweet.tags та повертаємо його.
          const tags = tweets.reduce((allTags, tweet) => {
            allTags.push(...tweet.tags);

            return allTags;
          }, []);

          console.log(tags);

          // Мабуть збір тегів не одиночна операція, тому напишемо функцію
          // для отримання тегів з колекції
          const getTags = tweets =>
            tweets.reduce((allTags, tweet) => {
              allTags.push(...tweet.tags);

              return allTags;
            }, []);

          console.log(getTags(tweets));
                `}
        </SyntaxHighlighter>
        <p>
          Після того, як ми зібрали всі теги з постів, добре було б порахувати
          кількість унікальних тегів у масиві. І знову{" "}
          <span className={s.Span}>reduce</span> тут.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const tweets = [
            { id: "000", likes: 5, tags: ["js", "nodejs"] },
            { id: "001", likes: 2, tags: ["html", "css"] },
            { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
            { id: "003", likes: 8, tags: ["css", "react"] },
            { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
          ];

          const getTags = tweets =>
            tweets.reduce((allTags, tweet) => {
              allTags.push(...tweet.tags);

              return allTags;
            }, []);

          const tags = getTags(tweets);

          // Виносимо callback-функцію окремо, а в reducе передамо посилання на неї.
          // Це стандартна практика, якщо callback-функція доволі велика.

          // Якщо в обʼєкті-акумуляторі acc немає власної властивості з ключем tag,
          // то створюємо його та запиуємо йому значення 0.
          // В іншому випадку збільшуємо значення на 1.
            const getTagStats = (acc, tag) => {
            if (!acc.hasOwnProperty(tag)) {
              acc[tag] = 0;
            }

            acc[tag] += 1;

            return acc;
          };

          // Початкове значення акумулятора це пустий обʼєкт {}
          const countTags = tags => tags.reduce(getTagStats, {});

          const tagCount = countTags(tags);
          console.log(tagCount);
                `}
        </SyntaxHighlighter>
        <h1>
          Метод <span className={s.Span}>sort()</span>
        </h1>
        <p>
          Метод <span className={s.Span}>sort()</span> сортує елементи масиву,
          але на відміну від інших методів, що перебирають, він сортує вихідний
          масив.
        </p>
        <ul>
          <li>Сортує та змінює вихідний масив.</li>
          <li>
            Повертає змінений масив, тобто посилання відсортований вихідний.
          </li>
          <li>По дефолту сортує за зростанням.</li>
          <li>
            Сортування відбувається шляхом приведення значень до рядка та
            порівняння порядкових номерів у таблиці Unicode.
          </li>
        </ul>
        <p>Такий масив чисел буде відсортований за зростанням.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const scores = [61, 19, 74, 35, 92, 56];
          scores.sort();
          console.log(scores); // [19, 35, 56, 61, 74, 92]
                `}
        </SyntaxHighlighter>
        <p>
          Але, оскільки за умовчанням значення наводяться до рядка, стандартне
          сортування чисел працює незвично. Тому в наступній вправі ми
          розглянемо, як задавати свій порядок сортування.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const scores = [27, 2, 41, 4, 7, 3, 75];
          scores.sort();
          console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
                `}
        </SyntaxHighlighter>
        <p>Масив рядків сортується за абеткою.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
          students.sort();
          console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]
                `}
        </SyntaxHighlighter>
        <p>При цьому порядковий номер великих літер менший ніж у великих.</p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const letters = ["b", "B", "a", "A", "c", "C"];
          letters.sort();
          console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']
                `}
        </SyntaxHighlighter>
        <p>
          Через те, що сортується вихідний масив, порушується принцип чистоти
          функцій і не можна зручно зробити кілька похідних колекцій на основі
          вихідної. Наприклад, зробити колекцію відсортовану за зростанням, а
          іншу за спаданням. Тому перед сортуванням роблять повну копію
          вихідного масиву та сортують вже її.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const scores = [61, 19, 74, 35, 92, 56];
          const ascendingScores = [...scores].sort();

          console.log(scores); // [61, 19, 74, 35, 92, 56]
          console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
                `}
        </SyntaxHighlighter>
        <h3>Свій порядок сортування чисел</h3>
        <p>
          Для вказівки свого порядку сортування методу
          <span className={s.Span}>sort(compareFunction)</span> потрібно
          передати колббек-функцію з двома параметрами. Це функція порівняння
          (compare function), порядок сортування залежить від його результату.
          Метод <span className={s.Span}>sort()</span> викликатиме її для
          довільних двох елементів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          масив.sort((a, b) => {
            // Тіло коілбек-функції
          });
                `}
        </SyntaxHighlighter>
        <ul>
          <li>
            <span className={s.Span}>a</span> - Перший елемент для порівняння.
          </li>
          <li>
            <span className={s.Span}>b</span> - Другий елемент для порівняння.
          </li>
        </ul>
        <p>
          Якщо виклик <span className={s.Span}>compareFunction(a, b)</span>{" "}
          повертає будь-яке негативне значення, тобто{" "}
          <span className={s.Span}>a</span> менше{" "}
          <span className={s.Span}>b</span>, сортування поставить{" "}
          <span className={s.Span}>a</span> перед{" "}
          <span className={s.Span}>b</span>. Це сортування за зростанням.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const scores = [61, 19, 74, 35, 92, 56];
          const ascendingScores = [...scores].sort((a, b) => a - b);
          console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
                `}
        </SyntaxHighlighter>
        <p>
          Якщо виклик <span className={s.Span}>compareFunction(a, b)</span>{" "}
          повертає будь-яке позитивне значення більше за нуль, тобто{" "}
          <span className={s.Span}>b</span> більше{" "}
          <span className={s.Span}>a</span>, сортування поставить{" "}
          <span className={s.Span}>b</span> перед{" "}
          <span className={s.Span}>a</span>. Це сортування за спаданням.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const scores = [61, 19, 74, 35, 92, 56];
          const descendingScores = [...scores].sort((a, b) => b - a);
          console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
                `}
        </SyntaxHighlighter>
        <p>
          Якщо виклик <span className={s.Span}>compareFunction(a, b)</span>{" "}
          поверне <span className={s.Span}>0</span>, сортування залишить{" "}
          <span className={s.Span}>a</span> незмінними{" "}
          <span className={s.Span}>b</span> по відношенню один до одного, але
          відсортує їх по відношенню до всіх інших елементів. Але взагалі не
          важливо, що повертати, якщо їхній взаємний порядок не має значення.
        </p>
        <h3>Свій порядок сортування рядків</h3>
        <p>
          Для сортування рядків в алфавітному порядку, за зростанням або
          зменшенням, використовується метод рядків{" "}
          <span className={s.Span}>localeCompare()</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          firstString.localeCompare(secondString)
                `}
        </SyntaxHighlighter>
        <p>
          Він викликається на рядку, який потрібно порівняти ({" "}
          <span className={s.Span}>firstString</span> ) з тим, що передано йому
          як аргумент (<span className={s.Span}>secondString</span>).
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          "a".localeCompare("b"); // -1
          "b".localeCompare("a"); // 1
          "a".localeCompare("a"); // 0
          "b".localeCompare("b"); // 0
                `}
        </SyntaxHighlighter>
        <ul>
          <li>
            Повертає негативне значення якщо{" "}
            <span className={s.Span}>firstString</span> має бути перед{" "}
            <span className={s.Span}>secondString</span>.
          </li>
          <li>
            Повертає позитивне значення більше нуля якщо{" "}
            <span className={s.Span}>firstString</span> має бути після{" "}
            <span className={s.Span}>secondString</span>.
          </li>
          <li>Якщо рядки однакові, повертається нуль.</li>
        </ul>
        <p>
          Це зручно використовувати при сортуванні рядків, тому що метод
          <span className={s.Span}>sort()</span> очікує такі ж значення від
          колббек-функції.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

          const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
          console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

          const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
          console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']
                `}
        </SyntaxHighlighter>
        <h3>Сортування обʼєктів</h3>
        <p>
          При роботі з масивом об'єктів сортування виконується за числовим або
          рядковим значенням якоїсь властивості. Наприклад, є група студентів із
          балами за тест. Необхідно відсортувати масив об'єктів за зростанням та
          зменшенням кількості балів, і на ім'я студента.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const students = [
            { name: "Манго", score: 83 },
            { name: "Полі", score: 59 },
            { name: "Аякс", score: 37 },
            { name: "Ківі", score: 94 },
          ];

          const inAscendingScoreOrder = students.sort(
            (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
          );

          const inDescendingScoreOrder = students.sort(
            (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
          );

          const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
            firstStudent.name.localeCompare(secondStudent.name)
          );
                `}
        </SyntaxHighlighter>
        <h1>Ланцюжки методів</h1>
        <p>
          Є масив об'єктів з іменами, балами та предметами кожного студента.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const students = [
            { name: "Манго", score: 83, courses: ["математика", "фізика"] },
            { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
            { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
            { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
          ];
                `}
        </SyntaxHighlighter>
        <p>
          Необхідно одержати масив їх імен відсортований за зростанням балів за
          тест. Для цього ми відсортуємо копію масиву методом{" "}
          <span className={s.Span}>sort()</span>, після чого методом{" "}
          <span className={s.Span}>map()</span> складемо масив значень
          властивості <span className={s.Span}>name</span> сортованого масиву.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
          const names = sortedByAscendingScore.map(student => student.name);

          console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']
                `}
        </SyntaxHighlighter>
        <p>
          Проблема в тому, що у нас з'являються проміжні змінні після кожної
          операції, крім фінальної. Змінна{" "}
          <span className={s.Span}>sortedByAscendingScore</span> зайва та
          необхідна лише для зберігання проміжного результату.
        </p>
        <p>
          Позбутися таких «мертвих» змінних можна групуючи виклики методів у
          ланцюжка. Кожен наступний метод виконуватиметься у результаті роботи
          попереднього.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const names = [...students]
            .sort((a, b) => a.score - b.score)
            .map(student => student.name);

          console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']
                `}
        </SyntaxHighlighter>
        <ul>
          <ol>Робимо копію вихідного масиву перед сортуванням.</ol>
          <ol>
            На копії викликаємо метод <span className={s.Span}>sort()</span>.
          </ol>
          <ol>
            До результату роботи методу <span className={s.Span}>sort()</span>{" "}
            застосовуємо метод
            <span className={s.Span}>map()</span>.
          </ol>
          <ol>
            Змінної <span className={s.Span}>names</span> присвоюється результат
            роботи методу
            <span className={s.Span}>map()</span>.
          </ol>
        </ul>
        <p>
          Отримаємо сортований за алфавітом масив унікальних відвідуваних
          предметів.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
          const uniqueSortedCourses = students
            .flatMap(student => student.courses)
            .filter((course, index, array) => array.indexOf(course) === index)
            .sort((a, b) => a.localeCompare(b));

          console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']
                `}
        </SyntaxHighlighter>
        <ul>
          <ol>
            На вихідному масиві викликаємо{" "}
            <span className={s.Span}>flatMap()</span> та робимо розгладжений
            масив усіх курсів.
          </ol>
          <ol>
            До результату методу <span className={s.Span}>flatMap()</span>{" "}
            застосовуємо метод
            <span className={s.Span}>filter()</span> фільтрації унікальних
            елементів.
          </ol>
          <ol>
            У результаті методу <span className={s.Span}>filter()</span>{" "}
            викликаємо <span className={s.Span}>sort()</span>.
          </ol>
          <ol>
            Змінної <span className={s.Span}>uniqueSortedCourses</span>{" "}
            присвоюється результат роботи методу{" "}
            <span className={s.Span}>sort()</span>.
          </ol>
        </ul>
        <p>
          Ланцюжок методів може бути довільної довжини, але зазвичай трохи
          більше 2-3 операцій. По-перше, методи, що перебирають,
          використовуються для порівняно простих операцій над колекцією.
          По-друге, виклик кожного наступного методу, це додатковий перебір
          масиву, що за достатньої кількості, може зашкодити продуктивності.
        </p>
      </div>
    </div>
  );
};

export default ArrayMethod;
