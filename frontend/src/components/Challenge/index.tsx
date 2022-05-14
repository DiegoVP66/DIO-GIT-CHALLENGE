import ChallengeCard from "components/ChallengeCard";
import Pagination from "components/Pagination";

const Challenge = () => {
  return (
    <div>
      <ChallengeCard />
      <div>
        <div className="row pagination-container">
          <Pagination pageCount={3} range={3} />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
