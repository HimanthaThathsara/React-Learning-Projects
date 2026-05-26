export default function PageEnd() {
  return (
    <div className="mt-[2.25rem] md:mt-[5.25rem] xl:mt-[6rem] ">
      <div className="relative mt-[-23px] pb-[2.25rem] bg-white md:pb-[3rem] xl:pb-[6rem]">
        {[...Array(24)].map((_, index) => (
          <div
            key={index}
            className="bg-black"
            style={{ marginTop: `${index}px`, height: `${23 - index}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
