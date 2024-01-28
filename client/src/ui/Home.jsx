import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center px-4 sm:my-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-stone-500 md:text-3xl">
        Home
      </h1>
      <p className="text-yellow-700 ">Order here</p>
      <CreateUser />
    </div>
  );
}

export default Home;
