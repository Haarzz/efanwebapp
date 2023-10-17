import Select from "react-select";
import PropTypes from "prop-types";

RunModel.propTypes = {
    allModel: PropTypes.any,
    chooseModel: PropTypes.func,
  };

export default function RunModel({allModel , chooseModel}) {
  return (
    <>
      <Select options={allModel} getOptionLabel={(model) => `${model.modelname} (${model.ID})`} onChange={chooseModel} isSearchable={false} />
    </>
  );
}
