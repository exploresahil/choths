import Image from "next/image";
import Link from "next/link";

import { getCategories } from "@/sanity/sanity-utils";
import CategoriesLinkArrow from "@/components/icons/CategoriesLinkArrow";
import CategoriesWatermarkCenter from "@/components/icons/CategoriesWatermarkCenter";
import CategoriesWatermarkOuter from "@/components/icons/CategoriesWatermarkOuter";
import "./categories.scss";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section className="categories-section">
      <div className="categories-watermark">
        <div className="watermark-outer">
          <CategoriesWatermarkOuter />
        </div>
        <div className="watermark-center">
          <CategoriesWatermarkCenter />
        </div>
      </div>
      {categories.map((categories) => (
        <div key={categories._id}>
          {categories.image && (
            <div className="categories-container">
              <div className="categories-img">
                <Image
                  src={categories.image.url}
                  alt={categories.image.alt}
                  width={1537}
                  height={779}
                />
              </div>

              <div className="categories-link">
                <Link href={categories.url}>{categories.name}</Link>
                <CategoriesLinkArrow />
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
