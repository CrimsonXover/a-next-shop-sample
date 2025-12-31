import styles from './ProductItem.module.css';

const ProductItem = ({ image, name, price }) => {
    return (
        <div className={styles.productItem} >
            <img src={image} alt={name} className={styles.productImage} />
            <div className={styles.productInfo} >
                <h1 className={styles.productName}>{name}</h1>
                <p className={styles.productPrice}>{price}</p>
            </div>
        </div>
    );
};

export default ProductItem;