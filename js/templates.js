function templates() {
    /**
     * _drawText - helper function
     * @param {*} cust - custom CSS class prefix to appear on text block classes
     * @param {*} text 
     */
    function _drawText(cust, text) {
        return '<div class="' + cust + '-text-wrapper"><span class="'+ cust + '-text">' + text + '</span></div>';
    };

    /**
     * _drawIcon - helper function
     * @param {*} cust - custom CSS class prefix to appear on icon block classes
     * @param {*} iconName - for data-glyph param
     */
    function _drawIcon(cust, iconName) {
        return '<div class="' + cust + '-icon-wrapper"><span class="' + cust + '-icon oi" data-glyph="' + iconName + '" aria-hidden="true"></span></div>';
    };

    /**
     * _drawImage - helper function
     * @param {*} cust - custom CSS class prefix to appear on image block classes
     * @param {*} imgSrc - do not include assets/images, do include file extension
     */
    function _drawImage(cust, imgSrc) {
        return '<div class="' + cust + '-image-wrapper"><img class="'+ cust + '-image" src="assets/images/' + imgSrc + '"/></div>';
    };

    function _drawButton(cust, attr, text) {
        return '<div class="' + cust + '-button-wrapper"><button class="' + cust + '-button" '+attr+'>' + text + '</button></div>'
    }

    return {
        "recipeCard" : function(recipeID, recipeQ, mode, lang) {
            var card = '<div class="card recipe-card">';
            
            var recipeName = window.recipes[recipeID].name[lang];
            var recipeMats = window.recipes[recipeID].mats;

            if (recipeQ > -1) {
                recipeName += '<span class="recipe-quantity">(' + recipeQ + ')</span>';
            }

            card += _drawText('recipe-name', recipeName);
    
            card += '<div class="recipe-materials-wrapper">';
            for (var i = 0; i < recipeMats.length; i++) {
                card += _drawText('recipe-material-name', window.materialNames[recipeMats[i].id][lang]);
                card += _drawText('recipe-material-quantity', '('+recipeMats[i].quantity+')');
            }
            card += '</div>';
            
            if (mode === "select") {
                card += _drawButton('recipecard-select', 'data-recipe="' + recipeID + '"', window.ui.select[lang]);
            } else if (mode === "remove") {
                card += _drawButton('recipecard-remove', 'data-recipe="' + recipeID + '"', window.ui.remove[lang]);
            }

            card += '</div>';
            
            return card;
        },
        "materialCard" : function (matID, quantity, lang) {
            var card = '<div class="card material-card">';

            var materialName = window.materialNames[matID][lang];

            card += _drawText('material-name', materialName);
            card += _drawText('material-quantity', '('+quantity+')');

            card += '</div>';

            return card;
        }
    }
}