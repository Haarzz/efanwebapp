import PropTypes from 'prop-types';

Different.propTypes = {
  transaction: PropTypes.any,
};


export default function Different({ transaction }) {
  let diff = '';
  if (transaction != undefined) {
    diff = `${transaction.result - transaction.plan}`;
  }
  return (
    <>
      <div className="col-4">
        <div className="card" id="prodbgleft">
          <div className="card-body fs-3 fw-bolder" id="leftpadd">
            DIFFERENT
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="card" id="prodbgright">
          <div className="card-body fw-bolder text-end h-auto" id="fontprodleft">
            {
              transaction != undefined ? <div>{diff}</div> : '-'
            }
          </div>
        </div>
      </div>
    </>
  );
}
