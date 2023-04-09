import { Profile } from "components/Profile/Profile";
import user from "user.json";
import { StatisticTitle } from "components/StatisticTitle/StatisticTitle";
import { StatisticList } from "components/StatisticList/StatisticList";
import data from "data.json";


export const App = () => {
  return (
    <div className="main"
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 16,
      color: "#010101",
      backgroundColor: "#e2e2e2",
    }}
    >
      <section>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      </section>

      <section className="statistics">
        <StatisticTitle text="Upload stats" />
        <StatisticList
          items={data}
          label={data.label}
          percentage={data.percentage}
        />
      </section>
    </div>
  );
};
