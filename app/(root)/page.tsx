import HeaderBox from "@/components/common/HeaderBox";
import TotalBalanceBox from "@/components/common/TotalBalanceBox";
import RightSidebar from "@/components/sidebar/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Valeri",
    lastName: "Yakimov",
    email: "srazzy@abv.bg",
  };
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
        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          {
            currentBalance: 1234.35,
          },
          {
            currentBalance: 2002.35,
          },
        ]}
      />
    </section>
  );
};

export default Home;
