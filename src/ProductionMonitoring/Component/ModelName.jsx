import PropTypes from "prop-types";

ModelName.propTypes = {
  modelName: PropTypes.any,
};


export default function ModelName({modelName}) {
  return (
    <>
      <div className="col-4">
        <div className="card" id="prodbgleft">
          <div className="card-body fs-4 fw-bolder h-auto my-2 ">MODEL NAME</div>
        </div>
      </div>
      <div className="col-8">
        <div className="card" id="prodbgright">
          <div className="card-body fs-2 fw-bolder text-end h-auto">
            {
              modelName !== undefined ? 
                (<div>{modelName}</div>) :
                '-'
            }
          </div>
        </div>
      </div>
    </>
  );
}
