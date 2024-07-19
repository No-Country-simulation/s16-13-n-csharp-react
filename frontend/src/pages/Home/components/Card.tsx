import React from "react";

type Props = {
  position: number;
  title: string;
  description: string;
  link: string;
  image: string;
};

export const Card: React.FC<Props> = (props) => {
  return (
    <div
      className={`bg-background m-4 shadow-xl p-8 rounded-xl flex ${
        props.position % 2 !== 0 ? "flex-row-reverse" : "flex-row"
      } space-x-6`}
    >
      <picture className="basis-1/2">
        <img className="rounded-xl" src={props.image} alt={props.title} />
      </picture>
      <section className="grow">
        <h4 className="text-primary-dark text-bold text-2xl">{props.title}</h4>
        <p>{props.description}</p>
        <a href={`${props.link}`} className="text-secondary-dark">
          Leer mas <span>+</span>
        </a>
      </section>
    </div>
  );
}
