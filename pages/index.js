import LandingPage from "../components/LandingPage/LandingPage";

const HomePage = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl bg-red-500">HomePage</h1>
        <LandingPage />
      </div>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
