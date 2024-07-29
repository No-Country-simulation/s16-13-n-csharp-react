import React from "react";

interface TitleProps {
  title: string,
  style? : string
}

export const FormTitle: React.FC<TitleProps> = ({title = '', style}) => (
    <h4 className={`text-primary-darker font-Poppins w-full mb-6 text-center font-bold lg:text-2xl md:text-xl ${style}`}>
      {title}
    </h4>
  );
