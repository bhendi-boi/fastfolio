const Title = ({ name }) => {
  return (
    <h2
      id={name}
      className="my-4 text-4xl font-semibold tracking-wide text-sub-title font-title dark:text-dark-sub-title"
    >
      {name}
    </h2>
  );
};

export default Title;
