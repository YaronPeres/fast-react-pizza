import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";
/* to fetch data we need
1) create a loader
2) provide the loader
3) provide the data to the page
** the data loader can be placed anywhere in our code base but the convention 
seeems to be to place the loader for the data of a certain page inside the file of that page*/

function Menu() {
  // third step: use custom hook useLoaderData function
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
// this function needs to fetch the data from the services/apiRestaurant file and then return it.
export async function loader() {
  // first step creating the loader.
  const menu = await getMenu();
  return menu;
}
export default Menu;
