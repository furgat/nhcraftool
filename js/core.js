$(document).ready(function() {
    window.langID = {
        en : 0,
        es : 1
    }

    var lang = 0;
    var recipesSelected = [];
    var materialsNeeded = [];

    initRecipes();
    initUITerms();

    // get the templates for our pieces
    window.templates = templates();

    function checkMaterials(matID) {
        for (var i = 0; i < materialsNeeded.length; i++) {
            if (materialsNeeded[i].id === matID) {
                return i;
            }
        }
        return -1;
    }

    function addMaterial(matID, matQ) {
        var check = checkMaterials(matID);

        if (check > -1) {
            materialsNeeded[check].quantity += matQ;
        } else {
            materialsNeeded.push(
                {id: matID, quantity: matQ}
            );
        }
    }

    function drawMaterials() {
        // display materials
        var matsOutput = '';
        for (var i = 0; i < materialsNeeded.length; i++) {
            matsOutput += window.templates.materialCard(materialsNeeded[i].id, materialsNeeded[i].quantity, lang);
        }

        if (matsOutput !== '') {
            $('#mats-needed .mats-needed-inner').html(matsOutput);
        } else {
            $('#mats-needed .mats-needed-inner').html('<div class="card empty-card">' + window.ui.empty[lang] + '</div>');
        }
    }

    function calculateMaterials() {
        materialsNeeded = [];

        if (recipesSelected.length > 0) {
            for (var i = 0; i < recipesSelected.length; i++) {
                var tempMats = window.recipes[recipesSelected[i].id].mats;
                var numCrafts = recipesSelected[i].quantity;
                for (var x = 0; x < tempMats.length; x++) {
                    addMaterial(tempMats[x].id, (tempMats[x].quantity * numCrafts));
                }
            }
        }

        drawMaterials();
    }

    function checkSelectedRecipes(recipeID) {
        for (var i = 0; i < recipesSelected.length; i++) {
            if (recipesSelected[i].id === recipeID) {
                return i;
            }
        }
        return -1;
    }

    function drawCraftList() {
        // display recipes
        var selectedOutput = '';
        for (var i = 0; i < recipesSelected.length; i++) {
            selectedOutput += window.templates.recipeCard(recipesSelected[i].id, recipesSelected[i].quantity, "remove", lang);
        }

        if (selectedOutput !== '') {
            $('#craft-list .craft-list-inner').html(selectedOutput);
        } else {
            $('#craft-list .craft-list-inner').html('<div class="card empty-card">' + window.ui.empty[lang] + '</div>');
        }

        calculateMaterials();
    }

    function removeRecipe(recipeID) {
        console.log('calling');
        var index = checkSelectedRecipes(recipeID);
        var quantity = recipesSelected[index].quantity;

        if (quantity > 1) {
            recipesSelected[index].quantity--;
        } else {
            if (recipesSelected.length > 1) {
                recipesSelected.splice(recipeID, 1);
            } else {
                recipesSelected = [];
            }
        }

        drawCraftList();
    }

    function selectRecipe(recipeID) {
        var check = checkSelectedRecipes(recipeID);
        if (check > -1) {
            console.log('hello');
            recipesSelected[check].quantity++;
            console.log(recipesSelected[check].quantity);
        } else {
            recipesSelected.push(
                {id: recipeID, quantity: 1}
            );
        }

        drawCraftList();
    }

    function searchRecipes(text) {
        var searchOutput = '';
        if (text === '') { text = null; }
        for(var i = 0; i < window.recipes.length; i++) {
            // allows for partial matches
            if (~window.recipes[i].name[lang].indexOf(text) || text === null) {
                searchOutput += window.templates.recipeCard(i, -1, "select", lang);
            }
        }

        if (searchOutput !== '') {
            $('#search-recipes .search-recipes-inner').html(searchOutput);
        } else {
            $('#search-recipes .search-recipes-inner').html('<div class="card empty-card">' + window.ui.noResults[lang] + '</div>');
        }
    }

    $('#search-input')
    .attr('placeholder', window.ui.prompt[lang])
    .on('input', function() {
        var searchText = $('#search-input').val().toLowerCase();
        searchRecipes(searchText);
    });

    $('#search-recipes').on('click', '.recipecard-select-button', function(event) {
        var rid = $(this).data('recipe');
        selectRecipe(rid);
    });  

    $('#search-recipes .section-title').text(window.ui.recipes[lang]);
    $('#search-recipes .search-results-inner').html(window.ui.empty[lang]);

    $('#craft-list').on('click', '.recipecard-remove-button', function(event) {
        var rid = $(this).data('recipe');
        removeRecipe(rid);
    });

    $('#craft-list .section-title').text(window.ui.toDoList[lang]);
    $('#craft-list .craft-list-inner').html(window.ui.empty[lang]);

    $('#mats-needed .section-title').text(window.ui.matsList[lang]);
    $('#mats-needed .mats-needed-inner').html(window.ui.empty[lang]);

    // initialize items
    searchRecipes(null);
    drawCraftList();
});