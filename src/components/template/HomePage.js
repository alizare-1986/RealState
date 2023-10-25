import { categories, cities, services } from "@/constants/strings";
import CategoryCard from "@/module/CategoryCard";
import styles from "@/template/HomePage.module.css";
import { FaCity } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
function HomePage() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((ser) => (
              <li key={ser}>
                <FiCircle />
                <span>{ser}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((i) => (
          <CategoryCard key={i} title={categories[i]} name={i} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((cit) => (
            <li key={cit}>
              {" "}
              <FaCity />
              <span>{cit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
