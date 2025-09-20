import Image from "next/image";
import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <section className={classes.perksSection}>
          <h2>Community Perks</h2>
          <ul className={classes.perks} role="list">
            <li>
              <Image
                src={mealIcon}
                alt="A delicious meal"
                width={80}
                height={80}
              />
              <p>Share & discover recipes</p>
            </li>
            <li>
              <Image
                src={communityIcon}
                alt="A crowd of people, cooking"
                width={80}
                height={80}
              />
              <p>Find new friends & like-minded people</p>
            </li>
            <li>
              <Image
                src={eventsIcon}
                alt="A crowd of people at a cooking event"
                width={80}
                height={80}
              />
              <p>Participate in exclusive events</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
