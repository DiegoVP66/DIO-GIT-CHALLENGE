import "./styles.css";

type Props = {
  course: string;
  instructor: string;
  hours: number;
};

const ChallengeCard = ({ course, instructor, hours }: Props) => {
  return (
    <div className="challenge-table-container base-card">
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
            <td>{course}</td>
            <td>{instructor}</td>
            <td>{hours}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChallengeCard;
