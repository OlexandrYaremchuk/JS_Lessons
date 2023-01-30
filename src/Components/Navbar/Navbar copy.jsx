import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

// данные для примера, которые вообще-то должны браться из базы данных, например.
// содержат список категории и моделей
const data = [
    {
        id: 1,
        lesson: 'Модуль 1 - Заняття 1 - Змінні та типи',
        theme: [
            {
                id: 1,
                name: 'Знайомство з JavaScript'
            },
            {
                id: 2,
                name: 'Підключення скрипта',
            },
            {
                id: 3,
                name: 'Інструменти розробника',
            },
            {
                id: 4,
                name: 'Основи синтаксису',
            },
            {
                id: 5,
                name: 'Змінні та типи',
            },
            {
                id: 6,
                name: 'Взаємодія з користувачем',
            },
            {
                id: 7,
                name: 'Основні оператори',
            },
            {
                id: 8,
                name: 'Числа',
            },
            {
                id: 9,
                name: 'Рядки',
            },
            {
                id: 10,
                name: 'Логічні оператори',
            },
        ]
    },
    {
        id: 2,
        lesson: 'Модуль 1 - Заняття 2 - Розгалуження та цикли',
        theme: [
            {
                id: 1,
                name: 'Розгалуження'
            },
            {
                id: 2,
                name: 'Тернарний оператор',
            },
            {
                id: 3,
                name: 'Інструкція Switch',
            },
            {
                id: 4,
                name: 'Область видимості',
            },
            {
                id: 5,
                name: 'Цикли',
            },
        ]
    },

];


// компонент пользовательского выпадающего списка
const CustomSelect = ({ id, options, onChange }) => {
    return (
        <select className="custom-select" id={id} onChange={onChange}>
            {options.map((option, index) =>
                <option key={id + index} value={option.id}>{option.name}</option>
            )}
        </select>
    )
}


// главный компонент приложения
const Navbar = () => {

    const [categories, setCategories] = useState([]); // хранилище категорий
    const [models, setModels] = useState([]);         // хранилище моделей


    // при первой загрузке приложения выполнится код ниже
    useEffect(() => {

        // устанавливаем категории
        setCategories(data.legnth > 0 && data);

        // и модели из первой категории по умолчанию
        setModels(data.length > 0 && data[0].models && data[0].models.length > 0);

    }, []);


    // при выборе нового значения в категории
    const onCategoriesSelectChange = (e) => {

        // преобразуем выбранное значение опции списка в число - идентификатор категории
        const categoryId = parseInt(e.target.options[e.target.selectedIndex].value);

        // получаем из массива категорий объект категрии по соответствующему идентификатору
        const category = categories.find(item => item.id === categoryId);

        // выбираем все модели в категории, если таковые есть
        const models = category.models && category.models.length > 0
            ? category.models
            : [{ id: 0, name: 'Нет моделей', items: [] }];

        // меняем модели во втором списке
        setModels(models);
    }


    return (
        <div className="container mt-5">

            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="category">Категории</label>
                    <CustomSelect id="category" options={categories} onChange={onCategoriesSelectChange} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="model">Марки</label>
                    <CustomSelect id="model" options={models} />
                </div>
            </div>
        </div>
    );
};
export default Navbar