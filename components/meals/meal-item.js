import Link from "next/link";
import Image from "next/image";
import classes from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div
          className={classes.image}
          style={{ position: "relative", width: "100%", height: "200px" }}
        >
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link
            href={`/meals/${slug}`}
            aria-label={`View details for ${title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
