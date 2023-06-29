const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("The sellIn should be decrease in one", function() {
    const gildedRose = new Shop([new Item("Test 1", 20, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(19);
  });

  it("Quality shouldn't be negative", function() {
    const gildedRose = new Shop([new Item("test1", 20, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("'Aged Brie' should increase quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 20, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it("The quality of normal items should decrease by 1", function() {
    const gildedRose = new Shop([new Item("Test", 20, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(49);
  });

  it("The quality never should be more 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 20, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("'Sulfuras' item never has to be sold or decreases in quality", function() {
    const gildedRose = new Shop([new Item('Sulfuras', 25, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(40) && expect(items[0].sellIn).toBe(25);
  });

  it("'Backstage passes' item sould increases by 1 quality and sellIn", function() {
    const gildedRose = new Shop([new Item('Backstage passes', 25, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(41) && expect(items[0].sellIn).toBe(26);
  });

  it("Quality should increase by 2 when sellIn is 10", function() {
    const gildedRose = new Shop([new Item('Backstage passes', 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });

  it("Quality should increase by 2 when sellIn is less 10", function() {
    const gildedRose = new Shop([new Item('Backstage passes', 8, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });
  
  it("Quality should increase by 3 when sellIn is 5", function() {
    const gildedRose = new Shop([new Item('Backstage passes', 5, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(43);
  });

  it("Quality should increase by 3 when sellIn is less 5", function() {
    const gildedRose = new Shop([new Item('Backstage passes', 3, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(43);
  });

  it("Quality drops to 0 afert concert", function() {
    const gildedRose = new Shop([new Item('Backstage passes', 0, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
