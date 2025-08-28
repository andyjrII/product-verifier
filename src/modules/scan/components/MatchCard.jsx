const MatchCard = ({ productName }) => (
  <div className='p-3 mt-3 bg-green-50 text-green-800 border border-green-200 rounded-lg'>
    <h5 className='font-semibold'>✅ Match Found</h5>
    <p>
      <strong>Product:</strong> {productName}
    </p>
    <p>This product matches the database entry.</p>
  </div>
);

export default MatchCard;
