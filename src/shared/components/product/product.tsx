import { IProduct } from "@/types/product.interface";
import { Dispatch, memo, SetStateAction, type FC } from "react";
import Title from "../title/title";
import ProductCart from "./cart/product-cart";
import ProductBtn from "./cart/product-btn";
import ProductLoading from "./cart/product-loading";
import ProductSeemoreBtn from "./seemore/product-seemore-btn";

interface ProductProps {
  limit?: number | undefined;
  setLimit?: Dispatch<SetStateAction<number>> | undefined;
  header?: boolean;
  title?: string;
  product: any | null;
  footer?: boolean;
  loading?: boolean;
  seemore?: boolean;
}

const Product: FC<ProductProps> = (props) => {
  const { header, title, product, footer, loading, seemore, limit, setLimit } =
    props;

  return (
    <section className="mt-12 pb-10 sm:pb-12 md:pb-14 lg:pb-16 sm:mt-14 md:mt-16 lg:mt-18">
      <div className="container">
        <>
          {header && (
            <Title title={title} className="mb-8 sm:mb-10 md:mb-12 lg:mb-14" />
          )}
        </>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {loading ? (
            <ProductLoading />
          ) : (
            <>
              {product?.allProducts?.map((product: IProduct) => (
                <ProductCart key={product.id} product={product} />
              ))}
            </>
          )}
        </div>
        <div className="flex justify-center mt-6 sm:mt-7 md:mt-8 lg:mt-9">
          {footer && <ProductBtn full={false} />}
          {seemore && (
            <ProductSeemoreBtn
              limit={limit}
              total={product?.total}
              setLimit={setLimit}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Product);
