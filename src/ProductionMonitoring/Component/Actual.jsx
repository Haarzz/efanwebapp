import PropTypes from "prop-types";

Actual.propTypes = {
  model: PropTypes.any,
};


export default function Actual({model}) {
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
            model !== undefined ? (<div>{model.result}</div>) : '-'
          }
          </div>
        </div>
      </div>
    </>
  );
}
