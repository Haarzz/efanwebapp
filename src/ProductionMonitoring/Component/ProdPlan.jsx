import PropTypes from "prop-types";

ProdPlan.propTypes = {
  plan: PropTypes.any,
};

export default function ProdPlan({ plan }) {
  return (
    <>
      <div className="col-4">
        <div className="card" id="prodbgleft">
          <div className="card-body fs-3 fw-bolder" id="leftpadd">
            PROD. PLAN
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="card" id="prodbgright">
          <div className="card-body fw-bolder text-end" id="fontprodleft">
            {
              plan !== undefined ? <div>{plan}</div> : '-'
            }
          </div>
        </div>
      </div>
    </>
  );
}
