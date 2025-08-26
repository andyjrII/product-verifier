const MatchModal = ({ productName }) => {
  return (
    <div className='alert alert-success mt-3'>
      <h5>✅ Match Found</h5>
      <p>
        <strong>Product:</strong> {productName}
      </p>
      <p>This product matches the database entry.</p>
    </div>
  );
};

export default MatchModal;
