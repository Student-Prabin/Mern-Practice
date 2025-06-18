import MenuItems from "../components/MenuItems";

export default function Menu() {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 w-[80vw] m-auto">

      <div className="flex flex-col p-4 gap-7">
        <h1 className="text-4xl self-center">Our Menu</h1>
        <div className="flex flex-col justify-between h-[100%]">
          <MenuItems title='Bread Basket' desc='Assortment of fresh baked fruit breads and muffins 5.50' />
          <MenuItems title='Honey Almond Granola with Fruits' desc='Natural cereal of honey toasted oats, raisins, almonds and dates 7.00' />
          <MenuItems title='Belgian Waffle' desc='Vanilla flavored batter with malted flour 7.50' />
          <MenuItems title='Scrambled eggs' desc='Scrambled eggs, roasted red pepper and garlic, with green onions 7.50' />
          <MenuItems title='Blueberry Pancakes' desc='With syrup, butter and lots of berries 8.50

' />
        </div>

      </div>
      <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="" />
    </div>
  )
}