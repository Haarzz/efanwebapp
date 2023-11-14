import PropTypes from 'prop-types';

Efficiency.propTypes = {
  transaction: PropTypes.any,
};

export default function Efficiency({ transaction }) {
    let efficiency = '';
    if (transaction !== undefined) {
        efficiency = `${((transaction.actual / transaction.plan) * 100).toFixed(2)}%`;
    } else {
      efficiency = '-';
    }
  return (
    <>
      <div className="card my-2" id="prodbgleft">
        <div className="card-body fs-3 fw-bolder text-center m-2">PROD./HEAD</div>
      </div>
      <div className="card my-2" id="prodbgright">
        <div className="card-text fs-3 fw-bolder text-start ps-4 h-auto">TARGET : 14.05</div>
      </div>
      <div className="card my-2" id="prodbgright">
        <div className="card-body  fw-bolder text-center h-auto " id="fonttext">
          3.85
        </div>
      </div>
      <div className="card my-2" id="prodbgleft">
        <div className="card-text fs-3 fw-bolder text-center ps-4 h-auto">EFFICIENCY</div>
      </div>
      <div className="card my-2" id="prodbgright">
        <div className="card-body fw-bolder text-center h-auto" id="fonttext">
          {efficiency}
        </div>
      </div>
    </>
  );
}
