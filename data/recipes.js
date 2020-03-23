function initRecipes() {
    window.materialNames = [
        ["tree branch", "rama"], // 0
        ["stone", "piedra"], // 1
        ["normal wood", "tabla normal"], // 2
        ["iron nugget", "pepita de hierro"], // 3
        ["hardwood", "tabla rígida"], // 4
        ["softwood", "tabla flexible"], // 5
        ["wasp nest","avispero"], // 6
        ["weeds","maleza"], // 7
        ["manila clam","almeja japonesa"], // 8
    ]

    window.recipes = [
        {
            "name" : ["flimsy axe", "hacha frágil"], // 0
            "mats" : [
                {id : 0, quantity : 5, recipe : false}, // stick
                {id : 1, quantity : 1, recipe : false} // stone
            ]
        },
        {
            "name" : ["stone axe", "hacha de piedra"], // 1
            "mats" : [
                {id : 0, quantity : 1, recipe : true}, // fragile axe
                {id : 2, quantity : 3, recipe : false} // normal wood
            ]
        },
        {
            "name" : ["axe", "hacha"], // 2
            "mats" : [
                {id : 0, quantity : 1, recipe : true}, // fragile axe
                {id : 2, quantity : 3, recipe : false}, // normal wood
                {id : 3, quantity : 1, recipe : false} // iron nugget
            ]
        },
        {
            "name" : ["flimsy shovel", "pala frágil"], // 3
            "mats" : [
                {id : 4, quantity : 5, recipe : false} // rigid wood
            ]
        },
        {
            "name" : ["shovel", "pala"], // 4
            "mats" : [
                {id : 3, quantity : 1, recipe : true}, // fragile shovel
                {id : 3, quantity : 1, recipe : false} // iron nugget
            ]
        },
        {
            "name" : ["flimsy fishing pole", "caña frágil"], // 5
            "mats" : [
                {id : 0, quantity : 5, recipe : false} // stick
            ]
        },
        {
            "name" : ["fishing pole", "caña"], // 6
            "mats" : [
                {id : 5, quantity : 1, recipe : true}, // fragile fishing pole
                {id : 3, quantity : 1, recipe : false} // iron nugget
            ]
        },
        {
            "name" : ["flimsy net", "red frágil"], // 7
            "mats" : [
                {id : 0, quantity : 5, recipe : false} // stick
            ]
        },
        {
            "name" : ["net", "red frágil"], // 8
            "mats" : [
                {id : 7, quantity : 1, recipe : true}, // fragile fishing pole
                {id : 3, quantity : 1, recipe : false} // iron nugget
            ]
        },
        {
            "name" : ["flimsy watering can", "regadera frágil"], // 9
            "mats" : [
                {id : 5, quantity : 5, recipe : false} // stick
            ]
        },
        {
            "name" : ["watering can", "regadera"], // 10
            "mats" : [
                {id : 9, quantity : 1, recipe : true}, // fragile fishing pole
                {id : 3, quantity : 1, recipe : false} // iron nugget
            ]
        },
        {
            "name" : ["slingshot", "resortera"], // 3
            "mats" : [
                {id : 4, quantity : 5, recipe : false} // rigid wood
            ]
        },
        {
            "name" : ["vaulting pole", "garrocha"], // 3
            "mats" : [
                {id : 5, quantity : 5, recipe : false} // flexible wood
            ]
        },
        {
            "name" : ["ladder", "escalera de mano"], // 3
            "mats" : [
                {id : 2, quantity : 4, recipe : false}, // normal wood
                {id : 4, quantity : 4, recipe : false}, // rigid wood
                {id : 5, quantity : 4, recipe : false} // flexible wood
            ]
        },
        {
            "name" : ["medicine", "medicamento"], // 3
            "mats" : [
                {id : 6, quantity : 1, recipe : false}, // wasp nest
                {id : 7, quantity : 3, recipe : false} // weeds
            ]
        },
        {
            "name" : ["bait", "cebo"], // 3
            "mats" : [
                {id : 8, quantity : 1, recipe : false} // clam
            ]
        },
    ];
}