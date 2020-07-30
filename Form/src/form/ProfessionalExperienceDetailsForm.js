import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate  from '../validation/validation';
import FormInput from '../components/FormInput';
import {
  captialize,
  age,
  salary,
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const ProfessionalExperienceDetailsForm = (props) => {
    const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>
                      <Field
                          name="Company"
                          type="text"
                          component={FormInput}
                          label="CompanyName "
                          inputPlaceHolder="CompanyName"
                      />
            <FormGroup row className="my-0">
              <Col xs="12" lg="6">
                <Field
                  name="dob"
                  type="date"
                  component={FormInput}
                  label="From"
                />
                 </Col>
                <Col xs="12" lg="6">
                   <Field
                     name="dob"
                     type="date"
                     component={FormInput}
                     label="To"
                       />
                       </Col>
              <Col xs="12" lg="6">
                <Field
                  name="Designation"
                  type="text"
                  component={FormInput}
                  label="Designation"
                  inputPlaceHolder="Enter Designation"
                  normalize={age}
                />
              </Col>
            </FormGroup>
            <br />
            
            
          </CardBody>
                  <div style={{ paddingBottom: 30 }}>
                      <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }}>
                          <i className="fa fa-chevron-left" />
                          &nbsp; Previous
            </Button>
                      <Button color="primary" className="btn-pill pull-right" type="submit" style={{ marginRight: '20px' }}>
                          Next &nbsp;
              <i className="fa fa-chevron-right" />
                      </Button>
                  </div>
        </Card>
      </Col>
    </form>
  );
};

ProfessionalExperienceDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
 
  previousPage: PropTypes.func,
 
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ProfessionalExperienceDetailsForm);
