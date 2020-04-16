
export function scoreGold(gold) {
    if (gold <= 0) {
        return 'poor';
    } else if (gold <= 50) {
        return 'modest';
    } else if (gold > 50) {
        return 'rich';
    } 
}

export function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    } else if (hp < 30) {
        return 'weak';
    } else if (hp < 70) {
        return 'healthy';
    } else if (hp < 100) {
        return 'super';
    } else if (hp > 100) {
        return 'best';
    }
}

export const hpMessages = {
    dead: 'you died ;(',
    weak: 'you are quite weakend by your adventure, but live',
    healthy: 'you had a fun adventure full of twists and turns',
    super: 'you return in near perfect health',
    best: 'you return even healthier than you started, are ready for another quest'
};

export const deadGoldMessages = {
    poor: 'you left nothing for your family',
    modest: 'you leave enough for your family to pay for your funeral',
    rich: 'your leave enough for your family to resurrect a monument in your honor'
};

export const aliveGoldMessages = {
    poor: 'you spend your days breaking jars in search of rupies',
    modest: 'you buy a small hut to live in',
    rich: 'you bought hyrule castle'
};