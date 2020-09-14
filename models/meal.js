class Meal {
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingrdients, steps, isGlutenFree, isVegan, isVagetarian, isLactoseFree) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingrdients = ingrdients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVagetarian = isVagetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;