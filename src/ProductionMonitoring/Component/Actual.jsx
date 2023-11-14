import PropTypes from "prop-types";

Actual.propTypes = {
  actual: PropTypes.any,
};


export default function Actual({ actual }) {
  return (
    <>
      <div className="col-4">
        <div className="card" id="prodbgleft">
          <div className="card-body fs-3 fw-bolder" id="leftpadd">
            ACTUAL
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="card" id="prodbgright">
          <div className="card-body fw-bolder text-end h-auto " id="fontprodleft">
          {
            actual != undefined ? (<div>{actual}</div>) : '-'
          }
          </div>
        </div>
      </div>
    </>
  );
}
