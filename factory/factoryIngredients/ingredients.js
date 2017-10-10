class ThinCrustDough {
    constructor() {
        this._description = 'Thin crust dough';
    }
}

class ThickCrustDough {
    constructor() {
        this._description = 'Thick crust dough';
    }
}

class MarinaraSauce {
    constructor() {
        this._description = 'Marinara sauce';
    }
}

class PlumTomatoSauce {
    constructor() {
        this._description = 'Plum tomato sauce';
    }
}

class ReggianoCheese {
    constructor() {
        this._description = 'Reggiano cheese';
    }
}

class MozzarellaCheese {
    constructor() {
        this._description = 'Mozzarella cheese';
    }
}

module.exports = {
    ThinCrustDough: ThinCrustDough,
    MarinaraSauce: MarinaraSauce,
    ReggianoCheese: ReggianoCheese,
    ThickCrustDough: ThickCrustDough,
    PlumTomatoSauce: PlumTomatoSauce,
    MozzarellaCheese: MozzarellaCheese
};