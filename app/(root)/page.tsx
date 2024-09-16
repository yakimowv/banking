import HeaderBox from "@/components/common/HeaderBox";
import TotalBalanceBox from "@/components/common/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "John", lastName: "Doe" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName ?? "Guest"}
            subtext="Access and manage your account and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
