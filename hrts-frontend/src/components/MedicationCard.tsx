import "./MedicationCard.css"

const MedicationCard = ({ medication }) => {
  const { type, description, enddate, startdate } = medication;

  return (
    <div className="medication-card">
      <h2 className="medication-type">{type}</h2>
      <p className="medication-description">{description}</p>
      <div className="medication-dates">
        <p className="medication-start-date">Start Date: {startdate}</p>
        <p className="medication-end-date">End Date: {enddate}</p>
      </div>
    </div>
  );
};

export default MedicationCard;

