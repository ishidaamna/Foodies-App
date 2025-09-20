"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { images } from "@/constants/images";
import classes from "./image-slideshow.module.css";

export default function ImageSlideshow() {
  const imageKeys = useMemo(() => Object.keys(images), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < imageKeys.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imageKeys]);

  return (
    <div className={classes.slideshow} aria-live="polite">
      {imageKeys.map((key, index) => (
        <Image
          key={key}
          src={images[key].src}
          alt={images[key].alt}
          className={index === currentIndex ? classes.active : classes.hidden}
          width={800}
          height={500}
          style={{ objectFit: "cover" }}
        />
      ))}
    </div>
  );
}
