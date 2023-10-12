import PropTypes from "prop-types";

ModelName.propTypes = {
  model: PropTypes.any,
};


export default function ModelName({model}) {
  return (
    <>
      <div className="col-4">
        <div className="card" id="prodbgleft">
          <div className="card-body fs-3 fw-bolder h-auto my-2 ">MODEL NAME</div>
        </div>
      </div>
      <div className="col-8">
        <div className="card" id="prodbgright">
          <div className="card-body fs-1 fw-bolder text-end h-auto">{model && (
            <div>
              {model.modelname}
            </div> 
          )}</div>
        </div>
      </div>
    </>
  );
}
