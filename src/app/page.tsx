const Home = () => {
  return (
    <div className="w-full h-mainHeight overflow-y-auto grid grid-cols-1 lg:grid-cols-11 bg-purple-300">
      <section className="pt-10 lg:col-span-8 lg:border-r lg:pr-10 border-gray2">
        Left
      </section>

      <section className="pt-10 lg:pl-10 lg:col-span-3">Right Side</section>
    </div>
  );
};

export default Home;
