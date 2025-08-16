import { Component } from "react";
import "./FoodItem.css";
import Foodtype from "../FoodType/Foodtype";
import { menu } from "../constants/data";
export default class FoodItem extends Component {
  render() {
    console.log(menu);
    return (
      <div className="foods-container">
        {menu?.map((item, index) => {
          const { title, img, price, category, desc } = item;
          return (
            <Foodtype
              key={index}
              title={title}
              img={img}
              category={category}
              desc={desc}
              price={price}
            />
          );
        })}
      </div>
    );
  }
}

// <div className="foods-container">
{
  /* <Foodtype
          imageLink="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
          title="TIMATIM SELAXA (ቲማቲም ሰላጣ)"
          Price="5.99"
          Description="Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice."
          Link="Learn More"
        />
        <Foodtype
          imageLink="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
          title="TIBS (ጥብስ)"
          Price="22.99"
          Description="Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians. It comes in a variety of forms, varying in type, size or shape of the cuts of meat used, and can range from hot to mild or contain..."
          Link="Learn More"
        />
        <Foodtype
          imageLink="https://cdn.tasteatlas.com//images/dishes/d64fe1f3c3754340bfbc7e20510110ef.jpg?w=905&h=510"
          title="GENFO (ገንፎ)"
          Price="20.99"
          Description="Genfo is a simple Ethiopian porridge that is commonly consumed for breakfast, made by adding dry-roasted barley flour to boiling water and stirring the concoction with a wooden utensil until it develops a smooth, yet extremely thick consistency."
          Link="Learn More"
        />
        <Foodtype
          imageLink="https://cdn.tasteatlas.com//images/dishes/5746f1c174664a01990eb04377c9228a.jpg?w=905&h=510"
          title="KINCHE (ቂንጬ)"
          Price="7.99"
          Description="Simple, nutritious, and inexpensive, kinche is an Ethiopian breakfast staple made with cracked wheat that is boiled in either water or milk. The best way to describe kinche would be as the Ethiopian equivalent of oatmeal."
          // Link="Learn More"
        />
        <Foodtype
          imageLink="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp"
          title="KITFO (ክትፎ)"
          Price="25.99"
          Description="Made from the leanest meat, kitfo is viewed as a big treat by ordinary Ethiopians, while its nutritional powers are also praised. Similar to French steak tartare, the meat is minced and warmed in a pan with a little butter, mitmita (a stronger version of berbere) and sometimes thyme."
          // Link="Learn More"
        />
        <Foodtype
          imageLink="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kik-alicha.jpg.webp"
          title="KIK ALICHA (ክክ አልጫ)"
          Price="12.99"
          Description="If you don’t have a high tolerance for spicy food, then you’re going to be thankful for kik alicha. It refers to an Ethiopian lentil stew made from split peas, niter kibbeh, and turmeric. Unlike many of the dishes in this Ethiopian food guide, it isn’t made with any berbere so it isn’t nearly as spicy as dishes like doro wat and siga wat."
          // Link="Learn More"
        />
        <Foodtype
          imageLink="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo-gored.jpg.webp"
          title="GORED GORED (ጎረድ ጎረድ)"
          Price="28.99"
          Description="If kitfo piqued your interest, then you may want to try gored gored as well. It’s a similar dish to kitfo except it’s made with cubes of raw beef – usually tenderloin or round steak – seasoned with niter kibbeh, mitmita, berbere, and awaze (chili mustard sauce). Like kitfo, it’s usually served with injera."
          Link="Learn More"
        />
        <Foodtype
          imageLink="https://cdn.tasteatlas.com//images/dishes/f99dcc3dfcc642348a40b19f51f32b74.jpg?w=905&h=510"
          title="FATIRA (ፈጢራ)"
          Price="12.99"
          Description="Fatira is a traditional Ethiopian street food item that is commonly consumed for breakfast, consisting of a large, crispy, wheat flour pancake. It is traditionally served with scrambled eggs, honey, or both. Fatira is often cut into smaller pieces, and it is especially popular during Eid-al-Fitr in Ethiopia."
          Link="Learn More"
        />
        <Foodtype
          imageLink="https://cdn.tasteatlas.com//images/dishes/685b5e5b70b441a7a4e7279a43a89333.jpg?w=905&h=510"
          title="KIXA FIR-FIR (ቂጣ ፍር ፍር)"
          Price="15.99"
          Description="Kixa fir-fir is a fit-fit variety prepared with a combination of torn pieces of kitcha flatbread, clarified butter, and berbere spices. The dish is traditionally served for breakfast, when it’s accompanied by plain yogurt. Unlike most Ethiopian dishes, kitcha fit-fit is typically consumed with a spoon instead of using the right hand. "
          Link="Learn More"
        /> */
}
//       </div>
//     );
//   }
// }
