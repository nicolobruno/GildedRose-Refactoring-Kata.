class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes';
const SULFURAS = 'Sulfuras';

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  isAgredBrie(name) {
    return name == AGED_BRIE;
  }

  isBackstagePasses(name) {
    return name == BACKSTAGE_PASSES;
  }

  isSulfuras(name) {
    return name == SULFURAS;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (!this.isAgredBrie(this.items[i].name) && !this.isBackstagePasses(this.items[i].name)) {
        if (this.items[i].quality > 0 && !this.isSulfuras(this.items[i].name)) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.isBackstagePasses(this.items[i].name)) {
            if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
            if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
      if (!this.isSulfuras(this.items[i].name)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (!this.isAgredBrie(this.items[i].name)) {
          if (!this.isBackstagePasses(this.items[i].name) &&
            this.items[i].quality > 0 &&
            !this.isSulfuras(this.items[i].name)) {
              this.items[i].quality = this.items[i].quality - 1;
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
