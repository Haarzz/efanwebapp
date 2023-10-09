import PropTypes from "prop-types";
import Select from 'react-select';

RunModel.propTypes = {
  allModel: PropTypes.any,
  chooseModel: PropTypes.func,
};

export default function RunModel({ allModel , chooseModel }) {
  return (
    <>
        <div className="row">
          <div className="col-md-7 mt-1">
            <h4 className="text-start p-3">Running Model</h4>
          </div>
          <div className="col-md-4 p-1">
            <Select 
              options={allModel} 
              getOptionLabel={(model) => `${model.modelname} (${model.ID})`}
              onChange={chooseModel}
              isSearchable={false}
              />
            
          </div>
        </div>
      </div>
    </>
  );
}
