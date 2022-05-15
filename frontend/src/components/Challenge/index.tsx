import ChallengeCard from "components/ChallengeCard";
import Pagination from "components/Pagination";

const Challenge = () => {
  return (
    <div>
      <ChallengeCard
        course="Introduction to programming and computational thinking"
        instructor="Juliana Mascarenhas"
        hours={5}
      />
      <div>
        <div className="row pagination-container">
          <Pagination pageCount={3} range={3} />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
