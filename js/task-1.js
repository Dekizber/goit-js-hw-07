const categoriesList = document.querySelector('#categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

const numberOfCategories = categoriesItems.length;

console.log('Number of categories:', numberOfCategories);

categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    console.log("Category:", categoryTitle)

    const numberOfElements = item.querySelectorAll('li').length;
    console.log("Elements:", numberOfElements)
});
