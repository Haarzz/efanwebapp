import PropTypes from "prop-types";

ProdPlan.propTypes = {
  model: PropTypes.any,
};

export default function ProdPlan({ model }) {
  return (
    <>
      <div className="col-4">
        <div className="card" id="prodbgleft">
          <div className="card-body fs-2 fw-bolder" id="leftpadd">
            PROD. PLAN
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="card" id="prodbgright">
          <div className="card-body fw-bolder text-end" id="fontprodleft">
            {model && <div>{model.plan}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
