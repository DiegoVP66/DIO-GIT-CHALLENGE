import "./styles.css";

const ChallengeCard = () => {
  return (
    <div className="container challenge-table-container base-card">
      <h4 className="mt-4">
        TQI Bootcamp <span>125hrs</span>
      </h4>
      <table className="challenge-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Instructor</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Introduction to programming and computational thinking</td>
            <td>Juliana Mascarenhas</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Introduction to Git and GitHub</td>
            <td>Otávio Reis</td>
            <td>5</td>
          </tr>
          <tr>
            <td>
              Working with Collections <span>(JAVA)</span>{" "}
            </td>
            <td>Camila Cavalcante</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChallengeCard;
