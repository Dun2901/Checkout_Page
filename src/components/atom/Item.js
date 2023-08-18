import React from "react";
import myImage1 from "../../assets/photo1.png";
import myImage2 from "../../assets/photo2.png";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
function Item() {
  const styles = {
    container: "flex flex-col py-10 px-6",
    productCard: "",
    card: "relative flex items-center gap-5 mb-5",
    img: "rounded-xl",

    detailProduct: "p-2",
    nameProduct: "font-Montserrat text-inherit",
    price: "flex justify-between",
    realPrice: "line-through",
    finalPrice: "text-xl text-[#F2994A]",
    contentQuantityAmount: "flex py-4 items-center gap-3",

    amountProduct: "py-10 px-2",
    summary: "flex justify-between border-t border-black",
  };
  return (
    // card item box
    <div className={styles.container}>
      {/* product card */}
      <div className={styles.productCard}>
        {/* card */}
        <div className={styles.card}>
          {/* img */}
          <div>
            <img className={styles.img} src={myImage1} alt=""></img>
          </div>

          <div className={styles.detailProduct}>
            <h2 className={styles.nameProduct}>Vintage Backbag</h2>
            <div className={styles.price}>
              <div className={styles.finalPrice}>54.99$</div>
              <div className={styles.realPrice}>94.99$</div>
            </div>

            <div className={styles.contentQuantityAmount}>
              <HiMinus
                className="items-center"
                // Add your className and onClick handler here
              />
              <input
                className="border text-center w-1/3 rounded-lg"
                type="number" // Use "text" if you want the number to be non-editable
                readOnly // Add this attribute to make the input read-only
                value={3} // Set the value to "3" or the dynamic value you want to display
              />
              <HiPlus
                className="items-center"
                // Add your className and onClick handler here
              />
            </div>
          </div>
        </div>
      </div>
      {/* img 2 */}
      <div className={styles.productCard}>
        {/* card */}
        <div className={styles.card}>
          {/* img */}
          <div>
            <img className={styles.img} src={myImage2} alt=""></img>
          </div>

          <div className={styles.detailProduct}>
            <div className={styles.nameProduct}>Levi Shoes</div>
            <div className={styles.price}>
              <div className={styles.finalPrice}>74.99$</div>
              <div className={styles.realPrice}>124.99$</div>
            </div>

            <div className={styles.contentQuantityAmount}>
              <HiMinus
                className="items-center w-5 h-5 flex justify-center"
                // Add your className and onClick handler here
              />
              <input
                className="border text-center w-1/3 rounded-lg"
                type="number" // Use "text" if you want the number to be non-editable
                readOnly // Add this attribute to make the input read-only
                value={1} // Set the value to "3" or the dynamic value you want to display
              />
              <HiPlus
                className="items-center w-5 h-5 flex justify-center"
                // Add your className and onClick handler here
              />
            </div>
          </div>
        </div>
      </div>
      {/* amount */}
      <div className={styles.amountProduct}>
        {/* shipping */}
        <div className={styles.summary}>
          <span>Shipping</span>
          <span>
            $ <span>19</span>
          </span>
        </div>
        {/* total */}
        <div className={styles.summary}>
          <span>Total</span>
          <span>
            $ <span>148.98</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Item;
